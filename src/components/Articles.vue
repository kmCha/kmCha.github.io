<template>
  <div class="articles container">
    <div class="page-title">
      <h1>全部文章</h1>
    </div>
    <div v-for="article in articles">
      <a class="title-wrapper" v-link="{ path: '/articles/' + $key }">
        <div class="title">
          <span>{{article.title}}</span>
        </div>
        <span class="date">{{article.date.substr(0, 10)}}</span>
      </a>
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
<style lang="scss" scoped>
.articles {
  position: relative;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // flex-direction: column;
  .page-title {
    text-align: center;
    h1 {
      color: #444;
    }
  }
  .title-wrapper {
    position: relative;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
    border: #0dc7e3 2px solid;
    border-radius: 50px;
    display: block;
    // padding-left: 1rem;
    line-height: 50px;
    margin-bottom: 10px;
    overflow: hidden;
    transition: .2s linear all;
    .title {
      width: 85%;
      text-overflow: ellipsis;
      overflow: hidden;
      text-align: center;
      will-change: transform;
      transition: .2s linear all;
      span {
        white-space: nowrap;
        color: #e30d8b;
      }
    }
    .date {
      position: absolute;
      right: 0;
      top: 0;
      z-index: -2;
      // padding: 0 1rem;
      width: 15%;
      text-align: center;
      color: #fff;
      background-color: #0dc7e3;
      transition: .2s linear all;
    }
    &:hover {
      background-color: #0dc7e3;
      .title {
        transform: translateX(7.5%);
        span {
          color: #fff;
        }
      }
      .date {
        right: -5%;
      }
    }
  }
}
</style>
