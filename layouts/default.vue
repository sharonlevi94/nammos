<template>
  <v-app id="nammos">
    <AppHeader v-if="$auth.loggedIn" @showDrawer="rightDrawer = !rightDrawer"/>
    <v-main>
      <Nuxt />
    </v-main>
    <Navigation  :drawer="rightDrawer" @close="rightDrawer = !rightDrawer"/>
    <AppFooter v-if="$auth.loggedIn"/>
    <NammosSnackbar v-if="$store.state.snackbarValue"/>
  </v-app>
</template>

<script>
import Navigation from "~/components/Navigation";
import Header from "~/components/AppHeader";
import Footer from "~/components/AppFooter";
export default {
  name: 'DefaultLayout',
  data () {
    return {
      rightDrawer: false,
    }
  },
  async created() {
    try {
      if (!this.$auth.loggedIn) {
        await this.$router.push({name: 'welcome'})
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
