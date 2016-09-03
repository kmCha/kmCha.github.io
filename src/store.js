import Vue from 'vue'
import Vuex from 'vuex'
import { getArticles } from './api'

Vue.use(Vuex)

var state = {
  articles: ''
}

var mutations = {
  setArticles: (state, articles) => {
    state.articles = articles
  }
}

var actions = {
  getArticles: ({commit}) => {
    return getArticles().then(res => {
      commit('setArticles', res.json())
    })
  }
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
