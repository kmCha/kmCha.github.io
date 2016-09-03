<template>
  <div id="app">
    <navigator></navigator>
    <router-view></router-view>
  </div>
</template>

<script>
import Navigator from './components/Navigator'
import store from './store'

export default {
  components: {
    Navigator
  },
  replace: false,
  store: store,
  ready () {
    let defaultWidth = 1527
    let defaultSize = 16
    setFontSize()
    window.addEventListener('resize', e => {
      setFontSize()
    })
    // 根据窗口大小设置html字体大小，rem响应式
    function setFontSize () {
      let windowWidth = window.innerWidth
      let size = windowWidth / defaultWidth * defaultSize
      document.documentElement.style.fontSize = size + 'px'
    }
  }
}
</script>

<style lang="scss">
$primary-color: #0dc7e3;
$secondary-color: #e30d8b;
$font-color: #444;
html {
  font-size: 16px;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 50px;
}
.container {
  padding: 2rem 20rem;
  @media (max-width: 1140px) {
    max-width: calc(1140px - 40rem);
    padding: 2rem 0;
    margin: 0 auto;
  }
}
#app {
  color: #444;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  width: 100%;
}

a {
  color: #0dc7e3;
  text-decoration: none;
}
</style>
