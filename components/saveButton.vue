<template>
  <div ref="save" :class="['d-flex', 'flex-column','side-menu']">
    <div class="save-btn cancel mb-2" @click="$emit('cancel')">
      <i class="icon back ml-3"/>
      <span>בטל</span>
    </div>
    <div class="save-btn" @click="$emit('save')">
      <i class="icon done ml-3"/>
      <span>שמור</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "saveButton",
  beforeDestroy() {
    // const el = document.getElementsByClassName('side-menu')
    // console.log(el, 'el')
    this.$refs.save.classList.add('save-animation')
    //el?.classList.add("save-animation");
  }
}
</script>

<style lang="scss" scoped>
.side-menu {
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 0;
}
.save-btn {
  width: 100px;
  height: 40px;
  background-color: $primary;

  &.cancel {
    background-color: $error;
  }

  color: white;
  font-weight: 600;

  border-bottom-right-radius: 50px;
  border-top-right-radius: 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 2px;
  padding-left: 10px;

  animation: moveFromLeft 500ms ease;
}
.save-animation{
  animation-name: myAnimation;
  animation-duration: 2000ms;
  animation-fill-mode: forwards;
}
</style>
