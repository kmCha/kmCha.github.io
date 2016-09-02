<template>
  <div class="hello">
    <h1>{{ count }}</h1>
    <button type="button" name="button" @click="inc"></button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  },
  computed: {
    count () {
      return this.$store.getters.count
    }
  },
  methods: {
    inc () {
      this.$store.commit('inc')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
