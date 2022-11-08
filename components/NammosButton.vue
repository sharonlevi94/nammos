<template>
  <v-btn
    depressed
    :color="color"
    :width="width"
    height="60px"
    style="font-size: 30px; font-weight: 500;"
    @click="$emit('click')"
  >
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: "NammosButton",
  props: {
    title: { type: String, required: true },
    width: { type: String, required: false, default: '100%' },
    color: { type: String, required: false, default: 'primary'}
  }
}
</script>

<style scoped>

</style>
