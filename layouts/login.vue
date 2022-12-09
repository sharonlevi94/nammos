<template>
  <v-app id="nammos">
    <v-main>
      <Nuxt/>
      <Loader v-if="$store.state.loader"/>
    </v-main>
    <NammosSnackbar v-if="$store.getters.snackbarValue"/>
  </v-app>
</template>

<script>
export default {
  name: "login",
  auth: false
}
</script>

<style scoped>

</style>
