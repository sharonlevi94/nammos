<template>
  <v-app id="nammos">
    <AppHeader v-if="$auth.loggedIn" @showDrawer="rightDrawer = !rightDrawer"/>
    <v-main>
      <Nuxt />
      <Loader v-if="$store.state.loader"/>
    </v-main>
    <Navigation  :drawer="rightDrawer" @close="rightDrawer = !rightDrawer"/>
    <NammosSnackbar v-if="$store.getters.snackbarValue"/>
    <AppFooter v-if="$auth.loggedIn"/>
  </v-app>
</template>

<script>

export default {
  name: 'DefaultLayout',
  middleware: ['route-navigated-from', 'refresh-token'],
  data () {
    return {
      rightDrawer: false,
    }
  },
  async created() {
    try {
      if (!this.$auth.loggedIn) {
        return this.$router.push({name: 'welcome'})
      }
    } catch (e) {
      console.error('layout default error: ', e)
    }
  },
  async mounted () {
    this.onResize()
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.onResize)
  },
  methods: {
    onResize () {
      this.$store.commit('setWindowWidth', { windowWidth: window.innerWidth })
      this.$store.commit('setWindowHeight', { windowHeight: window.innerHeight })
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
