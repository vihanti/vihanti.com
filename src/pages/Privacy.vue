<template>
  <div>
    <app-header>
      <h1 class="title">Privacy Policy</h1>
    </app-header>

    <section class="section is-fullwidth">
      <div class="columns is-centered">
        <div class="column is-8">
          <div class="content">
            <p>
              <em>Last updated: January 29, 2020</em>
            </p>

            <p>
              The privacy of your data--and it is your data, not ours!-- is a
              big deal to us. We log all access to our website by IP address,
              so we can always verify that no unauthorized access has happened
              for as long as the logs are kept.
            </p>

            <h2>Identity &amp; Access</h2>

            <p>
              When you fill out our contact form, we ask for your name and
              email address. That's just a convenience, so that you can email
              us right from the website. We use <a
              href="https://www.netlify.com/">netlify.com</a> to do this. We'll
              never sell your personal info to third parties, and we won't use
              your name or company in marketing statements without your
              permission, either.
            </p>

            <p>
              When you write to Vihanti Digital Services with a question or to
              ask for help, we'll keep that correspondence, and the email
              address, for future reference. When you browse our marketing
              pages, we'll track that for statistical purposes (like conversion
              rates and to test new designs). We also store any information you
              volunteer, like surveys, for as long as it makes sense.
            </p>

            <p>The only times we'll ever share your info:</p>

            <ul>
              <li>
                To provide products or services you've requested, with your
                permission.
              </li>
              <li>
                To investigate, prevent, or take action regarding illegal
                activities, suspected fraud, situations involving potential
                threats to the physical safety of any person, violations of our
                <router-link to="/terms"> Terms of Service </router-link>, or
                as otherwise required by law.
              </li>
            </ul>

            <h2>Your Rights With Respect to Your Information</h2>

            <p>
              You may have heard about the General Data Protection Regulation
              (GDPR) in Europe. GDPR gives people under its protection certain
              rights with respect to their personal information collected by us
              on the Site. Accordingly, Vihanti Digital Services recognizes and
              will comply with GDPR and those rights, except as limited by
              applicable law. The rights under GDPR include:
            </p>

            <ul>
              <li>
                <strong>Right of Access.</strong> This includes your right to
                access the personal information we gather about you, and your
                right to obtain information about the sharing, storage,
                security and processing of that information.
              </li>
              <li>
                <strong>Right to Correction.</strong> This is your right to
                request correction of your personal information.
              </li>
              <li>
                <strong>Right to Erasure.</strong> This is your right to
                request, subject to certain limitations under applicable law,
                that your personal information be erased from our possession
                (also known as the "Right to be forgotten").  However, if
                applicable law requires us to comply with your request to
                delete your information, fulfillment of your request may
                prevent you from using our services.
              </li>
              <li>
                <strong>Right to Complain.</strong> You have the right to make
                a complaint regarding our handling of your personal information
                with the appropriate supervisory authority.
              </li>
              <li>
                <strong>Right to Restrict Processing.</strong> This is your
                right to request restriction of how and why your personal
                information is used or processed.
              </li>
              <li>
                <strong>Right to Object.</strong> This is your right, in
                certain situations, to object to how or why your personal
                information is processed.
              </li>
              <li>
                <strong>Right to Portability.</strong> This is your right to
                receive the personal information we have about you and the
                right to transmit it to another party.
              </li>
              <li>
                <strong> Right to not be subject to Automated Decision-Making.
                </strong> This is your right to object and prevent any decision
                that could have a legal, or similarly significant, effect on
                you from being made solely based on automated processes. This
                right is limited, however, if the decision is necessary for
                performance of any contract between you and us, is allowed by
                applicable European law, or is based on your explicit consent.
              </li>
            </ul>

            <p>
              If you have questions about exercising these rights or need
              assistance, please contact us at <a
              href="mailto:hello@vihanti.com">hello@vihanti.com</a>.
            </p>

            <h2>Processors We Use</h2>

            <p>
              As part of the services we provide, and only to the extent
              necessary, we may use certain third party processors to process
              some or all of your personal information. Here are the processors
              we use:
            </p>
            <ul>
              <li>
                <a href="https://porkbun.com/">Porkbun</a>. Domain name registrar.
              </li>
              <li>
                <a href="https://www.netlify.com/">netlify.com</a>. Web hosting and forms.
              </li>
            </ul>

            <h2>Law Enforcement</h2>

            <p>
              Vihanti Digital Services won't hand your data over to law
              enforcement unless a court order says we have to. We flat-out
              reject requests from local and federal law enforcement when they
              seek data without a court order. And unless we're legally
              prevented from it, we'll always inform you when such requests are
              made.
            </p>

            <h2>Security &amp; Encryption</h2>

            <p>
              All data is encrypted via <a
              href="https://en.wikipedia.org/wiki/Transport_Layer_Security">SSL/TLS</a>
              when transmitted from our servers to your browser.
            </p>

            <h2>Location of Site and Data</h2>

            <p>
              This Site is operated in the United States. If you are located in
              the European Union or elsewhere outside of the United States,
              please be aware that any information you provide to us will be
              transferred to the United States. By using our Site,
              participating in any of our services and/or providing us with
              your information, you consent to this transfer.
            </p>

            <h2>Changes &amp; Questions</h2>

            <p>
              Vihanti Digital Services may update this policy once in a blue
              moon.
            </p>

            <p>
              Questions about this privacy policy? Please contact us at <a
              href="mailto:hello@vihanti.com">hello@vihanti.com</a>, and we'll
              be happy to answer them!
            </p>

            <p class="is-size-7 is-italic">
              Adapted from the <a
              href="https://github.com/basecamp/policies">Basecamp open-source
              policies</a> / <a
              href="https://creativecommons.org/licenses/by/4.0/">CC BY
              4.0</a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'

export default {
  name: "Privacy",
  components: {
    AppHeader
  },
  metaInfo: {
    title: "Privacy Policy",
    meta: [
      { name: "description", content: "The privacy of your data--and it is your data, not ours!--is a big deal to us." }
    ]
  }
}
</script>