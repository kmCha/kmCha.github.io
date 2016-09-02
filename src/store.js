import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var state = {
  count: 1
}

var mutations = {
  inc: state => state.count++
}

var actions = {

}

var getters = {
  count: state => state.count
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
