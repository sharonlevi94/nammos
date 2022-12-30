<template>
  <div class="edit-btn" @click="$emit('edit')">
    <i class="icon edit ml-3"/>
    <span>ערוך</span>
  </div>
</template>

<script>
export default {
  name: "editButton"
}
</script>

<style lang="scss" scoped>
.edit-btn {
  z-index: 200;
  position: fixed;
  top: 50%;
  left: 0;

  width: 100px;
  height: 40px;
  background-color: $pending;

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
</style>
