<template>
  <section class="c-section">
    <div class="c-navBar">
      <NavigationBar />
      <BodyPage />
    </div>
  </section>
</template>

<script>
import NavigationBar from './NavigationBar.vue';
import BodyPage from './BodyPage.vue';
export default {
    name: "detail",
    data() {
        return {

        };
    },
    components: { NavigationBar, BodyPage }
}
</script>

<style scoped>

.c-navBar {
  position: sticky;
}

</style>