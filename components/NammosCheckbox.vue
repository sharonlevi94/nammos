<template>
  <div class="checkbox" @click="$emit('activate')">
    <i v-if="active" class="icon done"/>
  </div>
</template>

<script>
export default {
  name: "NammosCheckbox",
  props: {
    active: { type: Boolean, required: true }
  }
}
</script>

<style scoped>
.checkbox {
  width: 30px;
  height: 30px;
  border: 1px solid #ffffff;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
