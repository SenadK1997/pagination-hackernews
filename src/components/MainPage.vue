<template>
  <div>
    <router-link class="c-login" to="/login">Login</router-link>
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
.c-login {
  font-size: 50px;
}
</style>