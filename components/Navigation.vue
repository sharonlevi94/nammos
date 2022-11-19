<template>
  <v-navigation-drawer
    v-model="drawer"
    right
    fixed
  >
    <i class="icon close xs mr-8 mt-7" @click="$emit('close')"/>
    <div class="pa-10 font xl">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="d-flex mb-5"
        @click.stop="$router.push(item && item.to)">
        <v-icon class="ml-5">
          {{ item && item.icon }}
        </v-icon>
        {{ item && item.title }}
      </div>
      <div class="d-flex mt-3">
        <v-icon class="ml-5">mdi-logout</v-icon>
        <span class="font xl" @click="logout">יציאה</span>
      </div>
    </div>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Navigation",
  props:{
    drawer: { type: Boolean, required: true }
  },
  data () {
    return {
      items: [
        { title: 'דף הבית', icon: 'mdi-home-city', to: '/' },
        { title: 'פרופיל', icon: 'mdi-account', to: '/profile' },
        { title: 'לוח שנה', icon: 'mdi-calendar', to: '/calendar' },
        { title: 'צוות העובדים', icon: 'mdi-account-group-outline', to: '/employees' },
        { title: 'השאר הודעה', icon: 'mdi-chat', to: '/message' },
        { title: 'הגדרות', icon: 'mdi-cog-outline', to: '/settings' },
      ],
    }
  },
  methods: {
    async logout () {
     await this.$auth.logout()
     await this.$router.push({name:'welcome'})
      await this.$nuxt.refresh()
    }
  }
}
</script>

<style scoped>

</style>
