<template>
  <div class="article container" v-if="!$loadingRouteData">
    <div class="title"><h1>{{ article.title }}</h1></div>
    <div class="body">
      {{{ article.body }}}
    </div>
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
      console.log('return article')
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
  },
  attached () {
    this.$nextTick(() => {
      // 代码高亮
      let codeBlocks = document.querySelectorAll('pre code')
      codeBlocks.forEach(block => {
        window.hljs.highlightBlock(block)
      })
      // 图片居中
      let imgs = document.querySelectorAll('p img')
      imgs.forEach(img => {
        img.classList.add('center')
      })
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
h1 {
  color: #0dc7e3;
}
.article {
  /*display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;*/
  .title {
    text-align: center;
    margin-bottom: 5rem;
    h1 {
      color: #ef70bb;
    }
  }
  .body {
    img {
      max-width: 100%;
    }
    .center {
      display: block;
      margin: 0 auto;
    }
    p > code {
      background-color: #effdff;
      display: inline-block;
      border-radius: 0.2rem;
      padding: 0 0.3rem;
    }
    a {
      background-color: #0dc7e3;
      border-radius: 0.2rem;
      color: #fff;
      padding: 0 0.3rem;
      transition: all 0.1s linear;
      &:hover {
        background-color: transparent;
        color: #0dc7e3;
      }
    }
    strong {
      color: #0dc7e3;
    }
  }
}
</style>
