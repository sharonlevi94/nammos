<template>
  <div :class="[
    'section-layout',
    classes,
    lg? 'pa-7' : md? 'pa-5': sm? 'pa-3': '',
    { 'd-none d-print-block': print },
    $auth.loggedIn ? '' : 'full-layout']"
       :style="styles.join('')">
<!--    <div :class="['section-layout-header','section-padding']">-->
<!--      <slot name="header" />-->
<!--    </div>-->
    <div :class="['section-padding',$auth.loggedIn ? '' : 'full-layout' ]">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SectionLayout',
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
  min-height: calc(100vh - 60px - 30px);
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
  min-height: calc(100vh - 60px - 30px);
  &.full-layout {
    min-height: 100vh;
  }
}
</style>
