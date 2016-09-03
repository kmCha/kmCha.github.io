<template>
  <div class="navigator">
    <!-- 使用指令 v-link 进行导航。 -->
    <a v-link="{ path: '/articles' }">文章</a>
    <a v-link="{ path: '/categories' }">分类</a>
    <a v-link="{ path: '/achieves' }">归档</a>
    <a v-link="{ path: '/tags' }">标签</a>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navigator {
  width: 100%;
  display: flex;
  justify-content: center;
  a {
    padding:5px 20px;
  }
}
</style>
