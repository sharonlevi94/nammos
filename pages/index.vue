<template>
  <PageLayout md :background="'#18adf2'">
    <v-container style="height: 100vh" class="d-flex justify-start align-center">
      <v-layout row wrap>
        <v-flex class="d-flex justify-center align-center" xs12>
          <div class="nammos-logo"/>
          <NammosButton title="לדף כניסה" color="white" @click="$router.push({name: 'welcome'})"/>
        </v-flex>
      </v-layout>
    </v-container>
  </PageLayout>
</template>

<script>
export default {
  name: "index",
  layout: 'login',
  auth: false,
  async created () {
    if (this.$auth.loggedIn) {
      return this.$router.push({name: 'home'})
    }
    return this.$router.push({name:'welcome'})
  }
}
</script>

<style lang="scss" scoped>
.nammos-logo {
  width: 100%;
  height: 100vh;
  background-image: url("../assets/images/nammos.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

}
</style>
