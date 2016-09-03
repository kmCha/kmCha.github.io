import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'
import WildVue from 'wildvue'

var VueResource = require('vue-resource')

Vue.use(VueRouter)
Vue.use(VueResource)
Vue.use(WildVue)

var router = new VueRouter()

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

router.map(routes)

router.start(App, 'body')
