<template>
  <v-app id="nammos">
    <v-main>
      <Nuxt/>
    </v-main>
    <NammosSnackbar v-if="$store.state.snackbarValue"/>
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
