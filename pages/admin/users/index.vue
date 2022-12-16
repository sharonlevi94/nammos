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

    <SaveButton v-if="$store.state.save" @save="saveChanges" @cancel="queryUsers"/>

    <v-container>
      <v-layout row>
        <v-flex v-for="(user, index) in users" :key="index" class="user" xs12 mb-2 px-5>
          <span>{{ user && user.full_name}}</span>
          <div class="d-flex">
            <div class="d-flex align-center active-switch">
              <span class="ml-4">משתמש פעיל</span>
              <v-switch
                v-model="user && user.active"
                @change="$store.commit('setSaveButton', {value: true})"
              ></v-switch>
            </div>
            <div class="d-flex align-center" >
              <span class="ml-4">מנהל</span>
              <v-switch
                v-model="user && user.admin"
                @change="$store.commit('setSaveButton', {value: true})"
              ></v-switch>
            </div>
          </div>
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
      this.$store.commit('setSaveButton', {value:false})
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
  beforeDestroy() {
    this.$store.commit('setSaveButton', {value:false})
  },
  methods: {
    queryUsers: _.debounce(async function () {
      try {
        this.$store.commit('setLoader', {value: true})
        if (!this.userSearchKey) {
          this.users = await this.$usersApi.getUsers()
        }
        this.users = await this.$usersApi.getUsers({
          filter: this.userSearchKey
        })
        this.$store.commit('setLoader', {value: false})
        this.$store.commit('setSaveButton', {value:false})
      } catch (e) {
        console.error('queryUsers error: ', e)
      }
    }, 500),
    async saveChanges () {
      try {
        this.$store.commit('setLoader', {value: true})
        const res = await this.$usersApi.updateManyUsers({users: this.users})
        if (res?.success) {
          await this.$store.dispatch('showSnackBar', {success: true, value: true, text: 'השמירה בוצעה בצהלחה!'})
        }
        this.$store.commit('setSaveButton', {value:false})
        this.$store.commit('setLoader', {value: false})
      } catch (e) {
        this.$store.commit('setLoader', {value: false})
        console.error('users saveChanges error: ', e)
        await this.$store.dispatch('showSnackBar', {error: true, value: true, text: 'אירעה שגיאה בעת השמירה'})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user {
  border: 1px solid $primary;
  border-radius: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.active-switch {
  border-left: 1px solid $primary;
  margin-left: 20px;
  padding-left: 20px;
}
</style>
