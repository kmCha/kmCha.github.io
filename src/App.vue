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
    function setFontSize () {
      let windowWidth = window.innerWidth
      let size = windowWidth / defaultWidth * defaultSize
      document.documentElement.style.fontSize = size + 'px'
    }
  }
}
</script>

<style>
html {
  font-size: 16px;
}
body {
  display: flex;
  align-items: center;
  justify-content: center;
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
