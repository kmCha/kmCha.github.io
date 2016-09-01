import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Hello from './components/Hello'

Vue.use(VueRouter)

var router = new VueRouter()

/* eslint-disable no-new */
// new Vue({
//   el: 'body',
//   components: { App }
// })

router.map({
  '/foo': {
    component: Hello
  },
  '/bar': {
    component: Hello
  }
})

router.start(App, 'body')
