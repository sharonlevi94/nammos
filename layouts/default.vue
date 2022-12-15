<template>
  <v-app id="nammos">
    <AppHeader v-if="$auth.loggedIn" @showDrawer="rightDrawer = !rightDrawer"/>
    <v-main>
      <Nuxt />
      <Loader v-if="$store.state.loader"/>
      <SaveButton/>
    </v-main>
    <Navigation  :drawer="rightDrawer" @close="rightDrawer = !rightDrawer"/>
    <NammosSnackbar v-if="$store.getters.snackbarValue"/>
    <AppFooter v-if="$auth.loggedIn"/>
  </v-app>
</template>

<script>
import Navigation from "~/components/Navigation";
import Header from "~/components/AppHeader";
import Footer from "~/components/AppFooter";
export default {
  name: 'DefaultLayout',
  middleware: ['route-navigated-from'],
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
      return this.$store.dispatch('auth-users/refreshToken')
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
