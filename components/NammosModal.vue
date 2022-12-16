<template>
  <v-dialog
    v-model="value"
    scrollable
    persistent
    max-width="400px"
  >
    <v-card class="pa-5 nammos-modal">
      <v-card-title class="d-flex flex-column align-start">
        <i class="icon close" @click="$emit('close')"/>
        <span class="full-width d-flex justify-center">{{ title }}</span>
      </v-card-title>
      <v-card-text>
        <slot/>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "NammosModal",
  props: {
    value: { type: Boolean, required: true },
    title: { type: String, required: false, default: null }
  }
}
</script>

<style lang="scss" scoped>
.nammos-modal {
  border: 2px solid $primary;
}
</style>
