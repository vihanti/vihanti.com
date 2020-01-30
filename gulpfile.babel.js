'use strict'

import gulp from 'gulp'

import browserSync from 'browser-sync'
import del from 'del'
import fs from 'fs'
import merge from 'merge-stream'
import sourcemaps from 'gulp-sourcemaps'

import cleanCss from 'gulp-clean-css'
import sass from 'gulp-sass'
import scsslint from 'gulp-scss-lint'

import babel from 'rollup-plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import eslint from 'gulp-eslint'
import resolve from '@rollup/plugin-node-resolve'
import rollup from 'gulp-better-rollup'
import { terser } from 'rollup-plugin-terser'

import favicons from 'gulp-favicons'
import image from 'gulp-image'

import inject from 'gulp-inject'
import nunjucksRender from 'gulp-nunjucks-render'
import htmlValidator from 'gulp-w3c-html-validator'
import save from 'gulp-save'
import sitemap from 'gulp-sitemap'

const paths = {
  css: {
    src: 'app/scss/**/*.scss',
    dest: 'public/css'
  },
  images: {
    src: 'app/images/**/*.{jpg,png}',
    dest: 'public/images'
  },
  scripts: {
    src: 'app/scripts/app.js',
    dest: 'public/scripts'
  },
  pages: {
    src: 'app/pages/**/*.njk',
    dest: 'public'
  },
  templates: {
    src: 'app/templates'
  }
}

export const clean = () => del(['public'])

const server = browserSync.create()

export function css () {
  return gulp.src(paths.css.src)
    .pipe(scsslint())
    .pipe(scsslint.failReporter())
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: ['node_modules']
    }).on('error', sass.logError))
    .pipe(cleanCss())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.css.dest))
    .pipe(server.stream({ match: '**/*.css' }))
}

export function images () {
  return gulp.src(paths.images.src)
    .pipe(image())
    .pipe(gulp.dest(paths.images.dest))
}

export function scripts () {
  return gulp.src(paths.scripts.src)
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError())
    .pipe(sourcemaps.init())
    .pipe(rollup(
      {
        plugins: [
          babel(),
          resolve({ preferBuiltins: true, mainFields: ['browser'] }),
          commonjs(),
          terser()
        ]
      },
      { format: 'umd' }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.scripts.dest))
}

export function pages () {
  return gulp.src(paths.pages.src)
    .pipe(nunjucksRender({
      path: [paths.templates.src]
    }))
    .pipe(inject(gulp.src(['public/favicons/favicon.html']), {
      starttag: '<!-- inject:head:{{ext}} -->',
      transform: (filePath, file) => {
        return file.contents.toString('utf8') // return file contents as string
      }
    }))
    .pipe(htmlValidator())
    .pipe(htmlValidator.reporter())

    .pipe(save('before-sitemap'))
    .pipe(sitemap({ siteUrl: 'https://www.vihanti.com' }))
    .pipe(gulp.dest(paths.pages.dest))
    .pipe(save.restore('before-sitemap'))

    .pipe(gulp.dest(paths.pages.dest))
}

export function copy () {
  return merge(
    gulp.src('node_modules/@fortawesome/fontawesome-free/webfonts/*')
      .pipe(gulp.dest('public/fonts')),
    gulp.src('node_modules/slick-carousel/slick/ajax-loader.gif')
      .pipe(gulp.dest('public/images')),
    gulp.src('node_modules/particles.js/particles.js')
      .pipe(gulp.dest('public/scripts')),
    gulp.src('app/robots.txt')
      .pipe(gulp.dest('public')),
    gulp.src('app/assets/*')
      .pipe(gulp.dest('public/assets')),
    gulp.src('app/fonts/*')
      .pipe(gulp.dest('public/fonts'))
  )
}

export function favicon () {
  return gulp.src('app/images/logo2.png')
    .pipe(favicons({
      appName: 'Vihanti Digital Services',
      appShortName: 'Vihanti',
      appDescription: 'Creativity Unleashed',
      background: '#09245A',
      path: 'favicons/',
      url: 'https://www.vihanti.com/',
      display: 'standalone',
      orientation: 'portrait',
      scope: '/',
      start_url: '/',
      version: 1.0,
      logging: false,
      html: 'favicon.html',
      pipeHTML: true,
      replace: true,
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        windows: false,
        yandex: false
      }
    }))
    .pipe(gulp.dest('public/favicons'))
}

export function build (done) {
  return gulp.series(
    gulp.parallel(copy, favicon, css, images, scripts),
    pages
  )(done)
}

// Serve for development by default
function reload (done) {
  server.reload()
  done()
}

export function serve (done) {
  const html404 = fs.readFileSync('public/404.html')

  server.init({
    server: {
      baseDir: 'public'
    }
  },
  (err, bs) => {
    if (!err) {
      bs.addMiddleware('*', (req, res) => {
        res.write(html404)
        res.end()
      })
    }
  })

  gulp.watch(paths.css.src, css)
  gulp.watch(paths.images.src, gulp.series(images, reload))
  gulp.watch(paths.scripts.src, gulp.series(scripts, reload))
  gulp.watch(paths.pages.src, gulp.series(pages, reload))
  gulp.watch(paths.templates.src, gulp.series(pages, reload))

  done()
}

export default gulp.series(clean, build, serve)
