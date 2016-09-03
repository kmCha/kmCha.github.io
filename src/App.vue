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
  store: store
}
</script>

<style>

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
