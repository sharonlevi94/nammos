<template>
  <div :class="['section-layout',classes, $auth.loggedIn ? '' : 'full-layout']"
       :style="styles.join('')">
    <div :class="[
      'section-padding',
      $auth.loggedIn ? '' : 'full-layout',
      lg? 'pa-5' : md? 'pa-3': sm? 'pa-1': '',]">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageLayout',
  props: {
    title: { type: String, default: '' },
    sm: { type: Boolean, default: false },
    md: { type: Boolean, default: false },
    lg: { type: Boolean, default: false },
    routeBack: { type: Object, default: null },
    classes: { type: String, default: '' },
    bodyClasses: { type: String, default: '' },
    print: { type: Boolean, default: false },
    background: { type: String, default: '#E5E5E5' },
  },
  computed: {
    styles () {
      return [
        `background-color: ${this.background};`
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.section-layout{
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  min-width: 0;
  min-height: calc(100vh - 60px - 35px);
  // background-color: #E5E5E5;
  &.full-layout {
    min-height: 100vh;
  }
}
.section-layout-header{
  display: flex;
  justify-content: center;
}
.section-padding{
  width: 100%;
  min-height: calc(100vh - 60px - 35px);
  &.full-layout {
    min-height: 100vh;
  }
}
</style>
