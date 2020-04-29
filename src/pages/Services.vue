<template>
  <div>
    <app-header>
      <h1 class="title">Services</h1>
    </app-header>

    <section class="section is-fullwidth">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="columns">
            <div class="column animated" data-animated="fadeInLeft">
              <h2 class="title">Design</h2>
              <p>
                Unleashing creativity is serious business. We want your
                design to visually capture the heart of your business. That's
                why we enjoy sitting down with you over a cup of coffee or
                tea (virtually if need be) to understand the soul of your
                business before we start. Plus with 8-10 initial designs and
                unlimited revisions, we won't stop until you're happy.
              </p>
            </div>
            <div class="column is-paddingless">
              <div class="logos animated" data-animated="fadeIn">
                <div
                  class="columns is-flex-mobile is-vcentered has-text-centered is-marginless is-paddingless"
                >
                  <div class="column is-paddingless">
                    <a href="https://www.behance.net/gallery/82064429/Buddies-Restaurant">
                      <img src="@/assets/designs/buddies.jpg" alt="Buddies" />
                    </a>
                  </div>
                  <div class="column is-paddingless">
                    <a href="https://www.behance.net/gallery/82816061/Logo-Design-for">
                      <img src="@/assets/designs/upnjoe.jpg" alt="Up 'n Joe" />
                    </a>
                  </div>
                </div>
                <div
                  class="columns is-flex-mobile is-vcentered has-text-centered is-marginless is-paddingless"
                >
                  <div class="column is-paddingless">
                    <a href="https://www.behance.net/gallery/82062801/Art-Alliance">
                      <img src="@/assets/designs/stlouisartalliance.jpg" alt="St. Louis Art Alliance" />
                    </a>
                  </div>
                  <div class="column is-paddingless">
                    <a
                      href="https://www.behance.net/gallery/82207687/Tree-for-Life-Mobile-UI-Design"
                    >
                      <img src="@/assets/designs/tfl.png" alt="Tree for Life" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="columns is-reverse-mobile">
            <div class="column">
              <div class="logos animated" data-animated="fadeIn">
                <div class="columns is-flex-mobile is-vcentered has-text-centered">
                  <div class="column">
                    <a href="https://www.wordpress.org">
                      <img src="@/assets/tech/wordpress.png" alt="Wordpress" />
                    </a>
                  </div>
                  <div class="column">
                    <a href="https://www.shopify.com">
                      <img src="@/assets/tech/shopify.png" alt="Shopify" />
                    </a>
                  </div>
                </div>
                <div class="columns is-flex-mobile is-vcentered has-text-centered">
                  <div class="column">
                    <a href="https://www.discourse.org">
                      <img src="@/assets/tech/discourse.png" alt="Discourse" />
                    </a>
                  </div>
                  <div class="column">
                    <a href="https://www.nodebb.org">
                      <img src="@/assets/tech/nodebb.png" alt="NodeBB" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="column animated" data-animated="fadeInRight">
              <h2 class="title">Craft</h2>
              <p>
                We take pride in our craft. We believe that modern
                technology ought to be available for small and large
                businesses alike. Whether you need a website to promote your
                business or an e-commerce site to sell your products, we have
                the industry experience to make it happen at a price to match
                your budget.
              </p>
            </div>
          </div>
          <div class="columns">
            <div class="column animated" data-animated="fadeInLeft">
              <h2 class="title">Solve</h2>
              <p>
                We know the fast pace of technology can be overwhelming.
                We're here to help. Although it's true that we enjoy an
                occasional nerd session, our years of experience has given us
                a pragmatic approach. By listening carefully to what
                troubles your business most, we creatively evaluate the vast
                array of technology options to deliver real world value to
                your business at an affordable price.
              </p>
            </div>
            <div class="column">
              <div class="logos animated" data-animated="fadeIn">
                <div class="columns is-vcentered is-flex-mobile has-text-centered">
                  <div class="column">
                    <a href="https://www.python.org">
                      <img src="@/assets/tech/python.png" alt="Python" />
                    </a>
                  </div>
                  <div class="column">
                    <a href="https://www.nodejs.org">
                      <img src="@/assets/tech/nodejs.png" alt="Node.js" />
                    </a>
                  </div>
                </div>
                <div class="columns is-vcentered is-flex-mobile has-text-centered">
                  <div class="column">
                    <a href="https://www.scala-lang.org">
                      <img src="@/assets/tech/scala.png" alt="Scala" />
                    </a>
                  </div>
                  <div class="column">
                    <a href="https://www.digitalocean.com">
                      <img src="@/assets/tech/digitalocean.png" alt="DigitalOcean" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

    <section class="section is-fullwidth is-variant2">
      <div class="columns is-centered">
        <div class="column is-8 animated" data-animated="fadeInUp">
          <h2 class="title">Honesty matters</h2>
          <p>
            We're passionate about helping your business grow. Even if you're not
            sure about Vihanti Digital Services, let's talk. We'll be honest with
            you, even if that means pointing you towards another company that might
            be a better fit for your needs.
          </p>
        </div>
      </div>
    </section>

    <section class="section is-fullwidth is-variant5">
      <div class="columns is-centered">
        <div class="column content is-8 is-small animated" data-animated="fadeIn">
          * Names and logos of services and frameworks used by Vihanti
          Digital Services are trademarks or registered trademarks of their
          respective organizations, and their use here does not imply an
          endorsement from these organizations.
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "Services",
  components: {
    AppHeader
  },
  metaInfo: {
    title: "Services",
    meta: [
      { name: "description", content: "Whether you need a refreshed design for your brand, a custom crafted website, or solutions to your business's most challenging problems, we bring creativity and industry experience." }
    ]
  }
}
</script>

<style lang="scss" scoped>
.logos {
  padding: 0 50px;

  img {
    display: block;
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
</style>