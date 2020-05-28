<template>
  <div>
    <router-view></router-view>

    <app-footer></app-footer>
  </div>
</template>

<script>
import AppFooter from '@/components/AppFooter.vue'
import WaypointAnimations from '@/mixins/WaypointAnimations.vue'
import { SnackbarProgrammatic as Snackbar } from 'buefy'

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
    if (!localStorage.cookieconsent) {
      Snackbar.open({
        message: 'This website uses cookies to optimize your experience.  See our <a href="/privacy">privacy policy</a> for more information.',
        duration: 10000,
        position: 'is-bottom-left',
        type: 'is-warning',
        onAction: () => {
          localStorage.cookieconsent = true
        }
      })
    }
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

  a:hover {
    color: $footer-link-color;
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
