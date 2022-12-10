<template>
  <v-footer
    color="#1877F2"
    height="35px"
    app
    class="d-flex justify-space-around rounded-t-pill">
    <i class="icon person" @click="$router.push({name:'profile'})"/>
    <i class="icon home" @click="$router.push({name:'home'})"/>
    <i
      class="icon back"
      style="transform: scaleX(-1);"
      @click="$router.push({name: $store.state.routeNavigatedFrom})"/>
  </v-footer>
</template>

<script>
export default {
  name: "AppFooter"
}
</script>

<style scoped>

</style>
