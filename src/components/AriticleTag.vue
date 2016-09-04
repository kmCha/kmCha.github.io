<template>
  <a v-link="{ path: '/tags/' + name }" class="article-tag" :style="backgroundColor">
    {{name}}
  </a>
</template>

<script>
export default {
  data () {
    return {
      articleKey: ''
    }
  },
  computed: {
    backgroundColor () {
      return 'background-color: ' + this.$store.state.tags[this.name].color + ';'
    }
  },
  props: ['name']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.article-tag {
  position: relative;
  display: inline-block;
  height: 20px;
  padding: .2rem .5rem .2rem 1rem;
  margin: 0 0.2rem;
  color: #fff;
  clip-path: polygon(0 50%, 10px 0, 100% 0, 100% 100%, 10px 100%);
  line-height: 20px;
  &::after {
    content: '';
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: #fff;
    position: absolute;
    top: calc(50% - 3px);
    left: 4px;
  }
}
</style>
