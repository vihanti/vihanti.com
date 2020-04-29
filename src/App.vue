<template>
  <div>
    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<style lang="scss">
@import '~cookieconsent/build/cookieconsent.min.css';
</style>

<script>
import $ from 'jquery'
import 'cookieconsent'

import AppFooter from '@/components/AppFooter.vue'
import WaypointAnimations from '@/mixins/WaypointAnimations.vue'

export default {
  name: 'App',
  components: {
    AppFooter
  },
  mixins: [
    WaypointAnimations
  ],
  metaInfo: {
    titleTemplate: '%s | Vihanti Digital Services'
  },
  mounted() {
    // Handle clicking navbar burger icon.
    $('.navbar-burger').click(() => {
      $('.navbar-burger').toggleClass('is-active')
      $('.navbar-menu').toggleClass('is-active')
    })

    // Initialize cookie consent.
    window.cookieconsent.initialise({
      cookie: {
        domain: '.vihanti.com',
        secure: true
      },
      palette: {
        popup: {
          background: '#000'
        },
        button: {
          background: '#9ee71e'
        }
      },
      theme: 'edgeless',
      content: {
        'href': 'www.vihanti.com/privacy'
      },
      dismissOnTimeout: 10000,
      dismissOnWindowClick: true,
      dismissOnScroll: 300
    })
  }
}
</script>

<style lang="scss">
@import "~@/styles/animations.scss";
@import "~@/styles/fonts.scss";

@import "~bulma";
@import "~buefy/src/scss/buefy";

.lower {
  @include desktop {
    margin-top: 2em;
  }
}

.columns.is-reverse-mobile {
  @include mobile {
    display: flex;
    flex-direction: column-reverse;

    .column {
      width: 100%;
    }
  }
}

.button {
  text-transform: uppercase;
}

.icon {
  vertical-align: bottom;
}

.title,
.subtitle {
  text-transform: uppercase;
}

.is-variant1 {
  background-color: $variant1-background-color;
  color: $white;
  position: relative;

  &::before {
    background-image: url('~@/assets/logo2.png');
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    bottom: 0;
    content: '';
    display: block;
    height: 400px;
    left: 0;
    margin: auto 200px;
    opacity: .05;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }

  .title {
    color: $white;
  }
}

.is-variant2 {
  background: linear-gradient($variant2-background-color, $variant2-background-color), url('~@/assets/landscape.jpg');
  background-position: center 60%;
  background-size: 100%;
  color: $white;

  .title,
  .subtitle {
    color: $white;
  }
}

.is-variant3 {
  background: linear-gradient($variant3-background-color, $variant3-background-color), url('~@/assets/mountains.jpg');
  background-position: center;
  background-size: 100%;
  color: $white;

  .title,
  .subtitle {
    color: $white;
  }
}

.is-variant5 {
  background-color: $variant5-background-color;
  color: $white;

  .title,
  .subtitle {
    color: $white;
  }
}

.is-variant6 {
  background-color: $variant6-background-color;
  position: relative;

  &::before {
    background-image: url('~@/assets/logo2.png');
    background-position: right center;
    background-repeat: no-repeat;
    background-size: contain;
    bottom: 0;
    content: '';
    display: block;
    height: 400px;
    left: 0;
    margin: auto 200px;
    opacity: .05;
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
  }
}
</style>
