<template>
  <div>
    <h1>{{ $route.name }}</h1>
    <router-link :to="{name: 'home'}">Main</router-link>
    <router-link :to="{name: 'login'}">Login</router-link>
    <router-view />
  </div>
</template>

<script setup>

</script>


<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
