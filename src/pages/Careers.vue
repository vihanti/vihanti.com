<template>
  <div>
    <app-header>
      <h1 class="title">Careers</h1>
    </app-header>

    <section class="section is-fullwidth">
      <div class="columns is-centered">
        <div class="column is-8 animated" data-animated="fadeIn">
          <p>
            As a business, Vihanti Digital Services is about more than making
            money (although we like that too!). We care about our customers.
            We want to help them succeed through unleashed creative potential.
            More than that, we care about each other and our communities.
            That's why Vihanti Digital Services holds a triple bottom line:
          </p>
        </div>
      </div>

      <div class="columns triple-bottom-line is-centered has-text-centered">
        <div class="column is-2 animated" data-animated="fadeIn">
          <img src="@/assets/careers/3bl/people.png" alt />
          <h3 class="subtitle">
            <strong>People</strong>
          </h3>
        </div>
        <div class="column is-2 animated" data-animated="fadeIn">
          <img src="@/assets/careers/3bl/planet.png" alt />
          <h3 class="subtitle">
            <strong>Planet</strong>
          </h3>
        </div>
        <div class="column is-2 animated" data-animated="fadeIn">
          <img src="@/assets/careers/3bl/profit.png" alt />
          <h3 class="subtitle">
            <strong>Profit</strong>
          </h3>
        </div>
      </div>

      <div class="columns is-centered">
        <div class="column is-8 animated" data-animated="fadeIn">
          <p>
            We are committed to investing in each other through
            on-the-job training opportunities. We are devoted to our
            families which includes maintaining a healthy work/life balance.
            We are passionate about giving back to our community and our
            planet through volunteer events. Vihanti Digital Services even
            donates a percentage of all profits to the causes that our
            employees care about most. Above all, we treat each other and
            our customers with respect and integrity.
          </p>
        </div>
      </div>
    </section>

    <section class="section is-fullwidth is-variant2">
      <div class="columns is-centered">
        <div class="column is-8 has-text-centered">
          <h2 class="title">Our Values</h2>

          <div class="columns">
            <div class="column">
              <div class="animated" data-animated="fadeInLeft">
                <img src="@/assets/careers/values/creativity.png" alt />
                <h3 class="subtitle">
                  <strong>Creativity</strong>
                </h3>
                <p>
                  We challenge each other to think outside the box. We
                  enjoy learning new things and pushing the limits of
                  innovation.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="animated" data-animated="fadeInUp">
                <img src="@/assets/careers/values/integrity.png" alt />
                <h3 class="subtitle">
                  <strong>Integrity</strong>
                </h3>
                <p>
                  We do the right thing even when it costs us. This
                  includes being honest with each other and with our
                  customers.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="animated" data-animated="fadeInRight">
                <img src="@/assets/careers/values/teamwork.png" alt />
                <h3 class="subtitle">
                  <strong>Teamwork</strong>
                </h3>
                <p>
                  We work better together. We appreciate the strengths of
                  our team mates and help each other to be more than we could
                  imagine.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="perks section is-fullwidth is-variant6">
      <div class="columns is-centered">
        <div class="column is-8 has-text-centered">
          <h2 class="title">Our Perks</h2>

          <div class="columns">
            <div class="column">
              <div class="box animated" data-animated="fadeInLeft">
                <img src="@/assets/careers/perks/training.png" alt />
                <h3 class="subtitle">
                  <strong>Training</strong>
                </h3>
                <p>
                  We provide on-the-job training, so that you can advance
                  in your career with help from those with decades of
                  industry experience.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="box animated" data-animated="fadeInUp">
                <img src="@/assets/careers/perks/relationships.png" alt />
                <h3 class="subtitle">
                  <strong>Relationships</strong>
                </h3>
                <p>
                  We take time to get to know each other, because we believe
                  that work doesn't need to feel like work.
                </p>
              </div>
            </div>
            <div class="column">
              <div class="box animated" data-animated="fadeInRight">
                <img src="@/assets/careers/perks/flexible.png" alt />
                <h3 class="subtitle">
                  <strong>Flexible Time Off</strong>
                </h3>
                <p>
                  Our time off policy ensures that you have space for
                  recharging with family and friends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section is-fullwidth is-variant5">
      <div class="columns is-centered">
        <div class="column is-8 has-text-centered">
          Are you intrigued?
          <router-link to="/contact">Contact us!</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "Careers",
  components: {
    AppHeader
  },
  metaInfo: {
    title: "Careers",
    meta: [
      { name: "description", content: "As a business, Vihanti Digital Services is about more than making money.  We care about our customers and our communities." }
    ]
  }
}
</script>

<style lang="scss" scoped>
.box {
  height: 100%;
}

.triple-bottom-line {
  .column {
    margin-bottom: 0;
  }
}

.is-variant2 {
  .subtitle strong {
    color: $gold;
  }
}
</style>