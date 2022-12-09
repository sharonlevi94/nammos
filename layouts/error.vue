<template>
  <SectionLayout md >
    <v-container style="height: 100vh" class="d-flex justify-start align-start">
      <v-layout row wrap>
        <v-flex class="d-flex justify-center" xs12>
          <div class="nammos-logo"/>
        </v-flex>
        <v-flex xs12>
          <span class="err-message d-flex justify-center">אופס! נתקלנו בבעיה...</span>
        </v-flex>
        <v-flex xs12>
          <NammosButton
            title="חזרה לדף הבית"
            class="mt-5"
            color="primary"
            @click="$router.push({name:'index'})"/>
        </v-flex>
      </v-layout>
    </v-container>
  </SectionLayout>
</template>

<script>
export default {
  name: 'EmptyLayout',
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
.nammos-logo {
  width: 100%;
  height: 40vh;
  background-image: url("../assets/images/nammos.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

}
.err-message {
  font-size: 42px;
  color: #000000;
  font-weight: 600;
  width: 100%;
}
</style>
