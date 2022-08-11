<template>
  <div>
    {{ $store.state.count }}
    <button @click="onIncrement">
      INCREMENT
    </button>
  </div>
</template>

<script>
export default {
  name: "MainPage",

  methods: {
    onIncrement() {
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>

</style>