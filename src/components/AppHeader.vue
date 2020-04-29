<template>
  <section class="header hero has-text-centered is-relative">
    <div class="hero-head">
      <app-navigation></app-navigation>
    </div>
    <div class="hero-body">
      <slot></slot>
    </div>
  </section>
</template>

<script>
import AppNavigation from './AppNavigation.vue'

export default {
  name: 'AppHeader',
  props: ['title'],
  components: {
    AppNavigation
  }
}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient($navbar-background-color, $navbar-background-color), url('~@/assets/office.jpg');
  background-position: center 60%;
  background-size: 100%;
  height: 100%;

  .hero-body {
    padding: 6rem 1.5rem;
  }

  .tag {
    background: transparent;
  }

  .title {
    color: $white;
    font-size: 4em;

    @include mobile {
      font-size: 10vw;
    }
  }

  .subtitle {
    color: $gold;
    font-size: 2em;
  }
}
</style>
