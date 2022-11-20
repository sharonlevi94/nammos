<template>
  <v-app-bar color="#1877F2" height="80px" app class="app-bar rounded-b-xl" elevation="10">
    <div style="width: 33%;" class="d-flex justify-start">
      <i class="icon hamburger" @click.stop="$emit('showDrawer')"/>
    </div>
    <div style="width: 33%;" class="d-flex justify-center">
      <img width="60" height="60" src="../assets/images/nammos.png" @click="$router.push('/home')" alt="nammos-logo"/>
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
  width: 60px;
  height: 60px;
  background-image: url("../assets/images/nammos.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
.app-bar {
  //border-bottom-right-radius: 12px!important;
  //border-bottom-left-radius: 12px!important;
}
</style>
