<template>
  <div class="articles">
    <div v-for="article in articles">
      <a v-link="{ path: '/articles/' + $key }">{{article.title}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello World!'
    }
  },
  computed: {
    articles () {
      return this.$store.state.articles
    }
  },
  methods: {
    inc () {
      this.$store.commit('inc')
    }
  },
  route: {
    // data ({next}) {
    //   return this.$store.dispatch('getArticles').catch(res => {
    //     console.log('提示网络问题')
    //   })
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.articles {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
</style>
