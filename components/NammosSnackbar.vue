<template>
  <div :class="['snackbar', 'text-center', $store.state.snackbarError ? 'error' : '']">
    <span>{{ $store.state.snackbarText }}</span>
  </div>
</template>

<script>
export default {
  name: "NammosSnackbar"
}
</script>

<style lang="scss" scoped>
.snackbar {
  position: absolute;
  right: 15%;
  bottom: 50px;
  z-index: 999;
  background-color: #38a34a;
  opacity: 80%;
  border-radius: 50px;

  color: white;
  font-size: 16px;
  // letter-spacing: 3px;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 42px;
  width: 70vw;

  animation: moveFromBottom 500ms ease;
  &.error {
    background-color: #fe2525 !important;
  }
}
</style>
