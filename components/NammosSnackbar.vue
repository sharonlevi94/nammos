<template>
  <div class="snackbar text-center">
    <v-snackbar
      v-model="$store.state.snackbarValue"
      shaped
      :color="$store.state.snackbarSuccess ? 'success' : 'error'">
      {{ $store.state.snackbarText }}
    </v-snackbar>
  </div>
</template>

<script>
export default {
  name: "NammosSnackbar"
}
</script>

<style lang="scss" scoped>
.snackbar {
  font-family: Arial;
  z-index: 999;
}
</style>
