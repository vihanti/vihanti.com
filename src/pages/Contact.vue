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
              <button
                class="button is-rounded is-info"
                onclick="Calendly.initPopupWidget({url: 'https://calendly.com/vihanti/discovery'});return false;"
              >Schedule Free Discovery Call</button>
            </p>

            <p>Or, if you prefer, here are some other ways to contact us.</p>

            <p class="has-text-centered">
              <a href="mailto:hello@vihanti.com">hello@vihanti.com</a> |
              <a href="tel:+17209885523">+1 720-988-5523</a>
            </p>
          </div>

          <form name="contact" method="POST" data-netlify="true" @submit="submit">
            <input type="hidden" name="form-name" value="contact" />

            <b-field label="Name">
              <b-input name="name" icon="account" required></b-input>
            </b-field>
            <b-field label="Email">
              <b-input name="_replyto" icon="email" type="email" required></b-input>
            </b-field>
            <b-field label="Email">
              <b-input name="message" type="textarea" required></b-input>
            </b-field>

            <div class="control">
              <button class="button is-link" type="submit">Send</button>
            </div>
          </form>

          <section class="section">
            <b-notification
              :active.sync="submitSuccess"
              type="is-success"
              aria-close-label="Close notification"
              role="alert"
              auto-close
            >
              Thank you for your message! We'll be in touch soon to discuss how
              we can unleash creativity for you!
            </b-notification>

            <b-notification
              :active.sync="submitFailed"
              type="is-warning"
              aria-close-label="Close notification"
              role="alert"
            >
              Oops! Sorry, something went wrong. Please
              <a href="mailto:hello@vihanti.com">email</a> or
              <a href="tel:+17209885523">call</a> us, so we can discuss how Vihanti
              Digital Services can unleash creativity for you!
            </b-notification>
          </section>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import AppHeader from "@/components/AppHeader.vue";

export default {
  name: "Contact",
  components: {
    AppHeader
  },
  data() {
    return {
      submitSuccess: false,
      submitFailed: false
    };
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
  },
  methods: {
    submit(e) {
      e.preventDefault();

      let form = $(this);
      $.post(form.attr("action"), form.serialize())
        .done(() => {
          this.submitSuccess = true;
          this.submitFailed = false;
        })
        .fail(() => {
          this.submitSuccess = false;
          this.submitFailed = true;
        })
    }
  }
};
</script>