<template>
  <PageLayout md>
    <PageHeader title="ניהול משתמשים"/>

    <v-text-field
      v-model="userSearchKey"
      placeholder="חיפוש משתמש"
      solo
    >
      <template #append>
        <i class="icon search"/>
      </template>
    </v-text-field>

    <v-container>
      <v-layout row>
        <v-flex v-for="(user, index) in users" :key="index" class="user" xs12 mb-2 pa-5>
          <span>{{ user && user.full_name}}</span>
        </v-flex>
      </v-layout>
    </v-container>

  </PageLayout>
</template>

<script>
import _ from "lodash";

export default {
  name: "users",
  data () {
    return {
      userSearchKey: null,
      users: []
    }
  },
  async created () {
    try {
      this.$store.commit('setLoader', {value: true})
      this.users = await this.$usersApi.getUsers()
      this.$store.commit('setLoader', {value: false})
    } catch (e) {
      this.$store.commit('setLoader', {value: false})
      console.error('admin page created error: ', e)
      await this.$store.dispatch('showSnackBar', {error: true, value: true, text: 'אירעה שגיאה בטעינת הנתונים'})
    }
  },
  watch: {
    userSearchKey () {
      this.queryUsers()
    }
  },
  methods: {
    queryUsers: _.debounce(async () => {
      this.$store.commit('setLoader', {value: true})
      if (!this.userSearchKey) {
        this.users = await this.$usersApi.getUsers()
      }
      this.users = await this.$usersApi.getUsers({
        filter: this.userSearchKey
      })
      this.$store.commit('setLoader', {value: false})
    }, 500)
  }
}
</script>

<style scoped>

</style>
