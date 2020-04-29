<template>
  <div>
    <app-header>
      <h1 class="title">About</h1>
    </app-header>

    <section class="section is-fullwidth">
      <div class="columns is-centered">
        <div class="column is-8 animated" data-animated="fadeIn">
          <p>
            Deriving its name from an old Sanskrit word, Vihanti Digital
            Services is passionate about unleashing creative potential for your
            business. Founded in 2010, we are a global team committed to
            offering our customers great service with passion and integrity.
            We value relationship both as a team and with our customers,
            because we believe it is the necessary foundation for trust. For
            this reason, we prefer video conference over email, so that we can
            "sit down" to get to know you as we work together to creatively
            expand your business.
          </p>
        </div>
      </div>
    </section>

    <section class="people section is-fullwidth">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="columns">
            <div class="column">
              <div class="card animated is-flex" data-animated="fadeIn">
                <div class="card-image">
                  <img src="@/assets/people/jonathan.jpg" alt />
                </div>
                <div class="card-content is-flex">
                  <div>
                    <strong>Jonathan Van Eenwyk</strong>
                  </div>
                  <div>
                    <i>
                      <small>Director of Business Development</small>
                    </i>
                  </div>
                  <div class="has-text-right is-bottom">
                    <span class="icon">
                      <a href="mailto:jonathan@vihanti.com">
                        <b-icon icon="email" size="is-small" />
                      </a>
                    </span>
                    <span class="icon">
                      <a href="https://twitter.com/iamjdve">
                        <b-icon icon="twitter" size="is-small" />
                      </a>
                    </span>
                    <span class="icon">
                      <a href="https://www.linkedin.com/in/jdve/">
                        <b-icon icon="linkedin" size="is-small" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card animated is-flex" data-animated="fadeIn">
                <div class="card-image">
                  <img src="@/assets/people/solomon.jpg" alt />
                </div>
                <div class="card-content is-flex">
                  <div>
                    <strong>Dr. Solomon Das, PhD</strong>
                  </div>
                  <div>
                    <i>
                      <small>Co-Founder</small>
                    </i>
                  </div>
                  <div class="has-text-right is-bottom">
                    <span class="icon">
                      <a href="mailto:solomon@vihanti.com">
                        <b-icon icon="email" size="is-small" />
                      </a>
                    </span>
                    <span class="icon">
                      <a href="https://twitter.com/SolomonDas77">
                        <b-icon icon="twitter" size="is-small" />
                      </a>
                    </span>
                    <span class="icon">
                      <a href="https://www.linkedin.com/in/drsolomondas/">
                        <b-icon icon="linkedin" size="is-small" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="column">
              <div class="card animated is-flex" data-animated="fadeIn">
                <div class="card-image">
                  <img src="@/assets/people/ron.jpg" alt />
                </div>
                <div class="card-content is-flex">
                  <div>
                    <strong>Ron VanPeursem</strong>
                  </div>
                  <div>
                    <i>
                      <small>Co-Founder</small>
                    </i>
                  </div>
                  <div class="has-text-right is-bottom">
                    <span class="icon">
                      <a href="mailto:ron@vihanti.com">
                        <b-icon icon="email" size="is-small" />
                      </a>
                    </span>
                    <span class="icon">
                      <a href="https://twitter.com/RonVanPeursem">
                        <b-icon icon="twitter" size="is-small" />
                      </a>
                    </span>
                    <span class="icon">
                      <a href="https://www.linkedin.com/in/ronvanpeursem/">
                        <b-icon icon="linkedin" size="is-small" />
                      </a>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "About",
  components: {
    AppHeader
  },
  metaInfo: {
    title: "About",
    meta: [
      { name: "description", content: "Deriving its name from an old Sanskrit word, Vihanti Digital Services is passionate about unleashing creative potential for your business." }
    ]
  }
}
</script>

<style lang="scss" scoped>
.people .column {
  margin: 0 auto;

  .card {
    flex-direction: column;
    height: 100%;
    margin: 0 auto;
    max-width: 300px;
    width: 100%;
  }

  .card-content {
    flex-direction: column;
    height: 100%;
  }

  .is-bottom {
    margin-top: auto;
  }
}
</style>