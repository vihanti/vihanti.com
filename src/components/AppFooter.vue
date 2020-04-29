<template>
  <footer class="footer has-text-centered">
    <hr class="logo" />
    <div class="content">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link> |
      <router-link to="/careers">Careers</router-link> |
      <router-link to="/contact">Contact</router-link>
    </div>
    <div class="content is-small">
      <span class="has-text-white">&copy; Vihanti Digital Services Pvt. Ltd.</span><br />
      <router-link to="/terms">Terms</router-link> | <router-link to="/privacy">Privacy</router-link>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: $footer-color;
  color: $footer-link-color;
  padding-bottom: 20px;
  padding-top: 10px;

  .logo {
    background-color: $footer-color;
    border: 0;
    height: 40px;
    margin-top: 10px;
    outline: 0;
    position: relative;
    text-align: center;

    &::before {
      background: linear-gradient(to right, transparent, $footer-border-color, transparent);
      content: '';
      height: 1px;
      left: 0;
      position: absolute;
      top: 50%;
      width: 100%;
    }

    &::after {
      background: $footer-color url('~@/assets/logo2.png');
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      content: '';
      display: inline-block;
      height: 40px;
      position: relative;
      width: 70px;
    }
  }

  a {
    color: $footer-link-color;
    font-size: smaller;
    margin: 0 1em;
    text-transform: uppercase;

    &:hover {
      color: $white;
    }

    &.is-active {
      color: $white;
    }
  }
}
</style>

<script>
export default {
  name: 'AppFooter'
}
</script>