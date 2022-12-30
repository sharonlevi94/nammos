<template>
  <PageLayout md>
    <PageHeader
      title="תור להעלאת סירות"
      button-title="התווסף לתור"
      button-icon="plus"
      show-button
      @clickButton="addToQueue"/>

    <v-container fluid>
      <v-layout row>
        <v-flex v-for="(user, index) in queue" :key="index" class="card user-in-queue" xs12>
            {{ user && user.user_id.full_name }}
          <div v-if="(user && user.user_id && user.user_id._id) === ($auth.user && $auth.user._id)"
               class="exit"
               @click="removeFromQueue(user && user.user_id && user.user_id._id)">
            צא מהתור
          </div>
          <i v-else-if="$auth.user.admin" class="icon trash-dark xl"
             @click="removeFromQueue(user && user.user_id && user.user_id._id)"/>
        </v-flex>
      </v-layout>
    </v-container>
  </PageLayout>
</template>

<script>
export default {
  name: "queue",
  data () {
    return {
      queue: []
    }
  },
  async created () {
    try {
      this.$store.commit('setLoader', {value: true})
      this.queue = await this.$queueApi.getQueue()
      this.$store.commit('setLoader', {value: false})
    } catch (e) {
      this.$store.commit('setLoader', {value: false})
      await this.$store.dispatch('showSnackBar', {error: true, value: true, text: 'אופס! אירעה שגיאה בלתי צפויה'})
    }
  },
  methods: {
    async addToQueue () {
      try {
        this.$store.commit('setLoader', {value: true})
        const res = await this.$queueApi.addToQueue(this.$auth?.user?._id)
        if (res?.success) {
          this.queue = await this.$queueApi.getQueue()
          this.$store.commit('setLoader', {value: false})
          await this.$store.dispatch('showSnackBar', {success: true, value: true, text: 'התווספת לתור בהצלחה!'})
        }
      } catch (e) {
        this.$store.commit('setLoader', {value: false})
        await this.$store.dispatch('showSnackBar', {error: true, value: true, text: e?.message})
      }
    },
    async removeFromQueue (userId) {
      try {
        this.$store.commit('setLoader', {value: true})
        const res = await this.$queueApi.removeFromQueue(userId)
        if (res?.success) {
          this.queue = await this.$queueApi.getQueue()
          this.$store.commit('setLoader', {value: false})
          await this.$store.dispatch('showSnackBar', {success: true, value: true, text: 'המשתמש נמחק מהתור בהצלחה!'})
        }
      } catch (e) {
        this.$store.commit('setLoader', {value: false})
        await this.$store.dispatch('showSnackBar', {error: true, value: true, text: e?.message})
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.user-in-queue {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.exit {
  color: #fe2525;
  font-weight: 600;
}
</style>
