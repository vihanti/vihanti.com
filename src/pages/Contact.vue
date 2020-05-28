<template>
  <div>
    <app-header>
      <h1 class="title">Contact</h1>
    </app-header>

    <section class="section is-fullwidth">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content">
            <p>
              We'd love to talk about how we can help unleash creativity
              for your business!
            </p>

            <p class="has-text-centered">
              <!-- Calendly link widget begin -->
              <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet">
              <script src="https://assets.calendly.com/assets/external/widget.js" defer type="application/javascript"></script>
              <button
                class="button is-rounded is-info"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/vihanti/discovery'});return false;"
              >Schedule Free Discovery Call</button>
              <!-- Calendly link widget end -->
            </p>

            <p class="has-text-centered">
              <a href="mailto:hello@vihanti.com">hello@vihanti.com</a> |
              <a href="tel:+17209885523">+1 720-988-5523</a>
            </p>
          </div>

          <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />

            <b-field label="Name">
              <b-input name="name" icon="account" required></b-input>
            </b-field>
            <b-field label="Email">
              <b-input name="email" icon="email" type="email" required></b-input>
            </b-field>
            <b-field label="Message">
              <b-input name="message" type="textarea" required></b-input>
            </b-field>

            <div class="control">
              <button class="button is-link" type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "Contact",
  components: {
    AppHeader
  },
  metaInfo: {
    title: "Contact",
    meta: [
      {
        name: "description",
        content:
          "We'd love to talk about how we can help unleash creativity for your business!  Schedule a free discovery call today!"
      }
    ]
  }
};
</script>

<style lang="scss">
body {
  overflow: visible !important;
}
</style>
