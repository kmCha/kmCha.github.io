<template>
  <div class="article-list-item">
    <div class="article-list-title">
      <h2><a v-link="{ path: '/articles/' + key }">{{article.title}}</a></h2>
    </div>
    <div class="article-list-body">
      <div class="article-list-img">
        {{{imgHTML}}}
      </div>
      <div class="article-list-content">
        {{{contentHTML}}}
      </div>
      <div class="article-list-tags">
        <article-tag v-for="tag in article.tags" :name="tag"></article-tag>
      </div>
      <div class="article-list-date">
        发布于：<span>{{article.date.substr(0,10)}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleTag from './AriticleTag.vue'

export default {
  data () {
    return {
    }
  },
  computed: {
    imgHTML () {
      return this.article.body.match(/<img[\w\W]*?>/)
    },
    contentHTML () {
      return this.article.body.match(/<p>(?!<)[\w\W]*?<\/p>/)
    }
  },
  methods: {
  },
  props: ['article', 'key'],
  components: {
    ArticleTag
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.article-list-item {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 40px;
  .article-list-title {
    text-align: center;
    a {
      color: #0dc7e3;
    }
  }
  .article-list-body {
    position: relative;
    .article-list-img {
      float: left;
      margin: 0 20px;
      img {
        display: inline-block;
        width: 200px;
        height: 200px;
      }
    }
    .article-list-content {
      height: 110px;
      overflow: hidden;
    }
    .article-list-tags {
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .article-list-date {
      height: 20px;
      overflow: hidden;
      text-align: center;
      span {
        color: #0dc7e3;
      }
    }
  }
}
</style>
