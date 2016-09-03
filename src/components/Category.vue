<template>
  <div class="category" v-if="!$loadingRouteData">
    <div v-for="article in articles">
      <a v-link="{ path: '/articles/' + $key }">{{article.date.substr(0,10)}} - {{article.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categoryKey: ''
    }
  },
  computed: {
    articles () {
      let articleKeyArr = this.$store.state.categories[this.categoryKey]
      let articles = this.$store.state.articles
      let filteredArticles = {}
      articleKeyArr.forEach(key => {
        filteredArticles[key] = articles[key]
      })
      return filteredArticles
    }
  },
  methods: {
    inc () {
      this.$store.commit('inc')
    }
  },
  route: {
    data ({next, to}) {
      this.categoryKey = to.params.key
      next()
    //   if (!this.$store.state.categories) {
    //     return this.$store.dispatch('getCategories').catch(res => {
    //       console.log('提示网络问题')
    //     })
    //   } else {
    //     next()
    //   }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.category {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
