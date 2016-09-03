<template>
  <div class="navigator">
    <div class="link-wrapper">
      <a v-link="{ path: '/articles' }">文章</a>
      <a v-link="{ path: '/categories' }">分类</a>
      <a v-link="{ path: '/achieves' }">归档</a>
      <a v-link="{ path: '/tags' }">标签</a>
    </div>
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
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0dc7e3;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.2);
  .link-wrapper {
    overflow: hidden;
    a {
      display: inline-block;
      padding: 0.5rem 1.2rem;
      height: 30px;
      line-height: 30px;
      transition: 0.2s ease all;
      color: #fff;
      &:hover {
        background-color: #e30d8b;
        padding: 0.5rem 2.2rem;
        // transform: scale(1.5);
      }
    }
  }
}
</style>
