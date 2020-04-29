<template>
  <nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <img class="logo" src="@/assets/logo.png" alt="Vihanti Digital Services" />
      </router-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarTop"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarTop" class="navbar-menu">
      <div class="navbar-end tabs">
        <ul>
          <router-link
            v-for="link in links"
            :key="link.to"
            :to="link.to"
            v-slot="{ href, route, navigate, isActive }"
          >
            <li :class="[isActive && 'is-active']">
              <a class="navbar-item" :href="href" @click="navigate">
                <b-icon :icon="link.icon" />
                {{ link.title }}
              </a>
            </li>
          </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      links: [
        { to: '/services', title: 'Services', icon: 'head-cog-outline' },
        { to: '/about', title: 'About', icon: 'account-group' },
        { to: '/contact', title: 'Contact', icon: 'email' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  .logo {
    margin: .5em;
    max-height: 5em;
  }

  .navbar-menu {
    font-family: 'Bank Gothic', BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    margin-right: 2em;

    .navbar-item {
      background: transparent;
      font-size: smaller;
      text-transform: uppercase;
    }
  }
}
</style>