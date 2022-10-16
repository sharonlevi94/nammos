<template>
  <v-app-bar color="#1877F2" height="60px" app>
    <div style="width: 33%;" class="d-flex justify-start">
      <i class="icon hamburger" @click.stop="$emit('showDrawer')"/>
    </div>
    <div style="width: 33%;" class="d-flex justify-center">
      <div class="nammos-logo" @click="$router.push('/')"/>
    </div>
    <div style="width: 33%"/>
  </v-app-bar>
</template>

<script>
export default {
  name: "AppHeader",
  data () {
    return {
      rightDrawer: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
.nammos-logo {
  width: 50px;
  height: 50px;
  background-image: url("../assets/images/nammos.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
