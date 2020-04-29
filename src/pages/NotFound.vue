<template>
  <app-header>
    <div class="container">
      <h2 class="subtitle is-spaced">Oh snap.</h2>
      <h1 class="title">
        Something is
        <span class="animated is-inline-block" data-animated="swing">broken</span>
      </h1>
    </div>
  </app-header>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import $ from 'jquery'

export default {
  name: "NotFound",
  components: {
    AppHeader
  },
  metaInfo: {
    title: "Page Not Found",
    meta: [
      { name: "description", content: "Oh snap! Sorry, page not found." }
    ]
  },
  mounted () {
    $('html').addClass('is-fullheight')
  },
  destroyed() {
    $('html').removeClass('is-fullheight')
  }
}
</script>

<style lang="scss">
html.is-fullheight {
  height: 100%;
  margin: 0;
  overflow: auto;

  body {
    height: 100%;
    margin: 0;
    overflow: auto;

    & > div {
      height: 100%;
    }
  }

  .footer {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
  }
}
</style>
