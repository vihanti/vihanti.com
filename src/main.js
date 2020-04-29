import Buefy from 'buefy'
import Vue from 'vue'
import VueMeta from 'vue-meta'
import VueRouter from 'vue-router'

Vue.use(Buefy)
Vue.use(VueMeta)
Vue.use(VueRouter)

import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

import App from '@/App.vue'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Careers from '@/pages/Careers.vue'
import Contact from '@/pages/Contact.vue'
import Privacy from '@/pages/Privacy.vue'
import Services from '@/pages/Services.vue'
import Terms from '@/pages/Terms.vue'
import NotFound from '@/pages/NotFound.vue'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/careers', component: Careers },
    { path: '/contact', component: Contact },
    { path: '/privacy', component: Privacy },
    { path: '/services', component: Services },
    { path: '/terms', component: Terms },
    { path: '*', component: NotFound }
  ],
  linkExactActiveClass: 'is-active',
  scrollBehavior () {
    return { x: 0, y: 0 }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
