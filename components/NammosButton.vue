<template>
  <v-btn
    depressed
    :disabled="disabled"
    :color="color"
    :width="width"
    :height="height"
    :style="styles.join('')"
    @click="$emit('click')"
  >
    <i v-if="icon" :class="['icon', icon, 'xs', 'ml-1']"/>
    {{ title }}
  </v-btn>
</template>

<script>
export default {
  name: "NammosButton",
  props: {
    title: { type: String, required: true },
    width: { type: String, required: false, default: '100%' },
    color: { type: String, required: false, default: 'primary'},
    disabled: { type: Boolean, required: false, default: false },
    fontSize: { type: String, required: false, default: '21px' },
    height: { type: String, required: false, default: '42px' },
    icon: { type: String, required: false, default: null}
  },
  computed: {
    styles () {
      return [
        `font-size: ${this.fontSize};`,
        'font-weight: 500;'
      ]
    }
  }
}
</script>

<style scoped>

</style>
