<template>
  <div>
    <app-header>
      <template v-slot:top>
        <div id="particles">
        </div>
      </template>

      <div class="container">
        <h2 class="subtitle">&mdash; Creativity &mdash;</h2>
        <h1
          class="title animated"
          data-animated="expanding-letters-fade-out"
          data-animated-reverse="expanding-letters-fade-in"
          data-offset="20"
        >Unleashed</h1>
        <div class="tag is-rounded">passionate about unleashing creativity for your business</div>
      </div>
    </app-header>

    <section class="section is-fullwidth is-variant1">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="columns">
            <div class="column has-text-centered">
              <h2 class="title">What we offer</h2>
              <p>
                We are a global software consultancy focused on unleashing
                creativity for your business.  We specialize in cloud-based
                platforms, including frontend and backend software development
                with a strong devops emphasis leveraging the latest advances in
                everything-as-code to deliver reliable solutions for our
                customers.
              </p>
            </div>
          </div>

          <div class="columns services">
            <div class="column">
              <div class="box content animated" data-animated="fadeInLeft">
                <img src="@/assets/services/design.png" alt />
                <h3 class="subtitle">
                  <strong>Design</strong>
                </h3>
                <p>
                  We want to help you succeed in the marketplace with a fresh
                  design that makes your message shine. We offer custom logos,
                  modern websites, and professional business cards to declare
                  your heart to the world.
                </p>
                <p>
                  <router-link to="/services">
                    <b-icon icon="arrow-right" /> Learn More
                  </router-link>
                </p>
              </div>
            </div>
            <div class="column lower">
              <div class="box content animated" data-animated="fadeInUp">
                <img src="@/assets/services/craft.png" alt />
                <h3 class="subtitle">
                  <strong>Craft</strong>
                </h3>
                <p>
                  With decades of experience in software development, we love
                  making our craft work for you. From business websites to full
                  e-commerce solutions, let us make your dreams reality.
                </p>
                <p>
                  <router-link to="/services">
                    <b-icon icon="arrow-right" /> Learn More
                  </router-link>
                </p>
              </div>
            </div>
            <div class="column">
              <div class="box content animated" data-animated="fadeInRight">
                <img src="@/assets/services/solve.png" alt />
                <h3 class="subtitle">
                  <strong>Solve</strong>
                </h3>
                <p>
                  We stay ahead of the technology wave so that you don't have
                  to. We pride ourselves in creatively using the latest
                  technology to deliver a better experience for your customers
                  and greater profit for your business.
                </p>
                <p>
                  <router-link to="/services">
                    <b-icon icon="arrow-right" /> Learn More
                  </router-link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="questions section is-fullwidth is-variant2">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content has-text-centered">
            <h2 class="title">How we can help you</h2>
            <p>
              <span class="tag is-rounded is-medium">Ask yourself these questions</span>
            </p>
          </div>

          <div class="columns is-centered">
            <div class="column box is-8">
              <b-carousel icon-pack="fas">
                <b-carousel-item v-for="(question, i) in questions" :key="i">
                  <section class="hero">
                    <div class="hero-body has-text-centered">{{ question }}</div>
                  </section>
                </b-carousel-item>
              </b-carousel>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="tech section is-fullwidth is-variant3">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content has-text-centered">
            <h2 class="title">How we do it</h2>
            <p>Here's a sampling of some of our favorite technologies:</p>
          </div>

          <div class="columns logos">
            <div class="column has-text-centered animated" data-animated="fadeIn">
              <a href="https://wordpress.org/">
                <div class="box">
                  <img src="@/assets/tech/wordpress.png" alt="Wordpress" />
                </div>
              </a>
            </div>
            <div class="column has-text-centered animated" data-animated="fadeIn">
              <a href="https://www.shopify.com/">
                <div class="box">
                  <img src="@/assets/tech/shopify.png" alt="Shopify" />
                </div>
              </a>
            </div>
            <div class="column has-text-centered animated" data-animated="fadeIn">
              <a href="https://nodejs.org/">
                <div class="box">
                  <img src="@/assets/tech/nodejs.png" alt="Node.js" />
                </div>
              </a>
            </div>
            <div class="column has-text-centered animated" data-animated="fadeIn">
              <a href="https://www.python.org/">
                <div class="box">
                  <img src="@/assets/tech/python.png" alt="Python" />
                </div>
              </a>
            </div>
            <div class="column has-text-centered animated" data-animated="fadeIn">
              <a href="https://www.scala-lang.org/">
                <div class="box">
                  <img src="@/assets/tech/scala.png" alt="Scala" />
                </div>
              </a>
            </div>
          </div>

          <p class="has-text-centered">
            <router-link
              to="/services.html"
              class="button is-rounded is-small is-info"
            >Click here to learn more</router-link>
          </p>
        </div>
      </div>
    </section>

    <section class="contact section is-fullwidth is-variant4">
      <div class="columns is-centered">
        <div class="column is-8 hero">
          <div class="hero-body">
            <div class="columns is-vcentered">
              <div class="column is-size-4">Let us help unleash creativity for your business!</div>
              <div class="column has-text-right">
                <router-link
                  to="/contact"
                  class="button is-rounded is-dark is-small"
                >Click here to get started</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="career section is-fullwidth is-variant5">
      <div class="columns is-centered">
        <div class="column content is-6 is-size-6 has-text-centered">
          <p>
            Are you interested in joining our team of designers, programmers,
            and engineers dedicated to unleashing creativity for our clients?
          </p>

          <p>
            <router-link
              to="/careers"
              class="button is-rounded is-small is-info"
            >Click here to learn more</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
import 'particles.js'

export default {
  name: "Home",
  components: {
    AppHeader
  },
  data() {
    return {
      questions: [
        "Do we need a fresh design for our business message?",
        "Do we lack the skills and resources to solve this problem?",
        "Are we pressed for time?",
        "Do we have someone we can trust?",
        "Are we facing a challenge to our business potential that could be solved with technology?"
      ]
    }
  },
  mounted() {
    window.particlesJS.load('particles', '/particles.json')
  },
  metaInfo: {
    title: "Vihanti Digital Services",
    titleTemplate: null,
    meta: [
      { name: "description", content: "We are passionate about unleashing creativity for your business.  When you need a fresh approach, our global team of experienced tech professionals are here for you." }
    ]
  }
}
</script>

<style scoped lang="scss">
#particles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.questions .tag {
  background-color: transparent;
  border: 1px solid $gold;
  color: $gold;
}

.tech {
  @include mobile {
    .logos {
      display: flex;

      .box {
        padding: 3px;
      }

      .column {
        padding: 3px;
      }
    }
  }

  .box {
    height: 100%;
    align-items: center;
    display: inline-flex;
  }
}

.contact {
  .hero {
    background: linear-gradient(
        $navbar-background-color,
        $navbar-background-color
      ),
      url("~@/assets/office.jpg");
    background-position: center 90%;
    background-size: 100%;
    color: $white;
  }

  .button {
    background-color: transparent;
    border: 1px solid $white;
    color: $white;
  }
}

.career {
  button {
    margin-top: 2em;
  }
}
</style>