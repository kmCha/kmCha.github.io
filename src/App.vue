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
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  width: 100%;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
</style>
