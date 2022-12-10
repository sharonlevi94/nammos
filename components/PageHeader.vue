<template>
  <div class="page-header">
    <span class="font-weight-bold">{{ title }}</span>
    <NammosButton
      v-if="showButton"
      :title="buttonTitle"
      width="50%"
      height="30px"
      font-size="14px"
      :icon="buttonIcon"/>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    title: { type: String, required: true, default: null },
    showButton: { type: Boolean, required: true },
    buttonTitle: { type: String, required: false, default: null },
    buttonIcon: { type: String, required: false, default: null },
  }
}
</script>

<style lang="scss" scoped>
.page-header {
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 20px;
}
</style>
