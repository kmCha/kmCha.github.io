import Vue from 'vue'

export function getArticles () {
  return Vue.http.get('https://chamajiuxi.wilddogio.com/blog/posts.json')
}
export function getCategories () {
  return Vue.http.get('https://chamajiuxi.wilddogio.com/blog/categories.json')
}
