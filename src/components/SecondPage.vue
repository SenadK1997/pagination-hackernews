<template>
  <div>
    <h1>Second page</h1>
    <button class="c-logout" @click="logout">Logout</button>
  </div>
</template>

<script>
export default {
  name: "SecondPage",


  methods: {
    logout() {
      this.$router.push('/')
      document.cookie = 'name= + this.$refs.name.value; expires=Sat, 20 Jan 1980 12:00:00 UTC'
      document.cookie = 'pwd= + this.$refs.pwd.value; expires=Sat, 20 Jan 1980 12:00:00 UTC'
    }
  }
}
</script>

<style scoped>
.c-logout {
  font-size: 40px;
}
</style>