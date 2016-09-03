<template>
  <div class="article" v-if="!$loadingRouteData">
    <h1>{{ article.title }}</h1>
    {{{ article.body }}}
  </div>
</template>

<script>
export default {
  data () {
    return {
      articleKey: ''
    }
  },
  computed: {
    article () {
      return this.$store.state.articles[this.articleKey]
    }
  },
  methods: {
    inc () {
      this.$store.commit('inc')
    }
  },
  route: {
    data ({next, to}) {
      this.articleKey = to.params.key
      next()
    //   if (!this.$store.state.articles) {
    //     return this.$store.dispatch('getArticles').catch(res => {
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
.article {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
