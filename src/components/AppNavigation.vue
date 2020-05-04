<template>
  <b-navbar :transparent="true">
    <template slot="brand">
      <b-navbar-item tag="router-link" to="/">
        <img class="logo" src="@/assets/logo.png" alt="Vihanti Digital Services" />
      </b-navbar-item>
    </template>

    <template slot="end">
      <div class="navbar-item tabs">
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
    </template>
  </b-navbar>
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
.navbar .logo {
  margin: .5em;
  max-height: 5em;
}

.navbar-item {
  font-family: 'Bank Gothic', BlinkMacSystemFont, -apple-system, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;

  font-size: smaller;
  text-transform: uppercase;
}
</style>