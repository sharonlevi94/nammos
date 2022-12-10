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
        <v-flex xs12>
          <v-expansion-panels>
            <v-expansion-panel
              v-for="i in 10"
              :key="i"
              title="Item"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
            ></v-expansion-panel>
          </v-expansion-panels>
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
      users: [],
      filteredUsers: []
    }
  },
  async created () {
    try {
      this.$store.commit('setLoader', {value: true})
      this.users = await this.$usersApi.getUsers()
      this.filteredUsers = JSON.parse(JSON.stringify(this.users))
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
    queryUsers: _.debounce(() => {
      console.log('Debounce button clicked!')
    }, 500)
  }
}
</script>

<style scoped>

</style>
