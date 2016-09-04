import Vue from 'vue'

export function getArticles () {
  return Vue.http.get('https://chamajiuxi.wilddogio.com/blog/posts.json', {
    params: {
      orderBy: '"date"',
      limitToLast: 100
    }
  })
}
export function getCategories () {
  return Vue.http.get('https://chamajiuxi.wilddogio.com/blog/categories.json')
}
export function getTags () {
  return Vue.http.get('https://chamajiuxi.wilddogio.com/blog/tags.json')
}
