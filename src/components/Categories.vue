<template>
  <div class="categories" v-if="!$loadingRouteData">
    <div v-for="category in categories">
      <a v-link="{ path: '/categories/' + $key }">{{$key}}({{category.length || '1'}})</a>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: '分类!'
    }
  },
  computed: {
    categories () {
      return this.$store.state.categories
    }
  },
  methods: {
    inc () {
      this.$store.commit('inc')
    }
  },
  route: {
    // data ({next}) {
    //   return this.$store.dispatch('getCategories').catch(res => {
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
</style>
