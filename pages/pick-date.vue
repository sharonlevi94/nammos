<template>
  <SectionLayout md>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex class="pick-section" v-if="show === 'date_picker'" xs12>
            <span class="date-title">באיזה תאריך תרצו להגיע?</span>
            <v-date-picker
              v-model="form.date"
              class="mt-4"
              full-width
              :allowed-dates="allowDate"
              elevation="15"
            ></v-date-picker>
            <NammosButton
              title="הבא"
              class="mt-5"
              :disabled="!form.date"
              @click="pickDate"/>
          </v-flex>
          <v-flex class="pick-section" v-if="show === 'time_picker'" xs12>
            <span class="date-title">אנא בחרו שעת הגעה:</span>
            <v-time-picker
              v-model="form.time"
              class="mt-4"
              color="primary"
              format="24hr"
              full-width
              min="7:00"
              max="14:00"
              :allowed-hours="allowHours"
              :allowed-minutes="allowMinutes"
              @click:hour="updateAllowMinutes"
            ></v-time-picker>
            <NammosButton
              title="הבא"
              class="mt-5"
              :disabled="!form.time"
              @click="form.date ? show = 'final_message' : 'time_picker'"/>
            <NammosButton title="חזרה" class="mt-5" @click="show = 'date_picker'"/>
          </v-flex>
          <v-flex class="pick-section" v-if="show === 'final_message'" xs12>
            <span class="date-title">התאריך והשעה שבחרת:</span>
            <div class="d-flex">
              <span class="date-title">{{ form.date && form.date.split('-').reverse().join('-') }}</span>
              <span class="date-title">{{ form.time }}</span>
            </div>
            <NammosButton
              title="שמירה"
              class="mt-5"
              @click="saveTheDate"/>
            <NammosButton title="רוצה לשנות משהו" class="mt-5" @click="show = 'date_picker'"/>
          </v-flex>
        </v-layout>
      </v-container>
  </SectionLayout>
</template>

<script>
export default {
  name: "pick-date",
  data () {
    return {
      form: {
        date: null,
        time: null
      },
      show: 'date_picker',
      availableTimes: {},
      allowHours: [],
      allowMinutes: []
    }
  },
  methods: {
    pickDate () {
      this.show = this.form.date ? 'time_picker' : 'date_picker'
      return this.checkAvailableTimes()
    },
    updateAllowMinutes (hour) {
      this.allowMinutes = this.availableTimes[hour]
    },
    async checkAvailableTimes () {
      try {
        this.$store.commit('setLoader', {value: true})
        this.availableTimes = await this.$calendarApi.getAvailableTimes({date: this.form.date})
        this.allowHours = Object.keys(this.availableTimes).map(key => parseInt(key, 10))
        this.$store.commit('setLoader', {value: false})
      } catch (e) {
        this.$store.commit('setLoader', {value: false})
        await this.$store.dispatch('showSnackBar', {error: true, value: true, text: 'אירעה שגיאה, אנא נסו שנית'})
        console.error('checkAvailableTimes: ', e)
      }
    },
    async saveTheDate () {
      try {
        this.$store.commit('setLoader', {value: true})
        const res = await this.$calendarApi.saveDate({
          user_id: this.$auth?.user?._id,
          ...this.form
        })
        this.$store.commit('setLoader', {value: false})
        await this.$store.dispatch('showSnackBar', {success: true, value: true, text: 'השמירה בוצעה בהצלחה!'})
        return this.$router.push({name: 'home'})
      } catch (e) {
        this.$store.commit('setLoader', {value: false})
        await this.$store.dispatch('showSnackBar', {error: true, value: true, text: e?.message})
        console.error('saveTheDate: ', e)
      }
    },
    allowDate (date) {
      const todayDate = new Date()
      const today = parseInt(todayDate.getDate(), 10)
      const givenDay = parseInt(date.split('-')[2],10)
      return givenDay >= today
    }
  }
}
</script>

<style lang="scss" scoped>
.date-title {
  font-size: 42px;
  width: 100%;
}
.pick-section {
  animation: moveFromLeft 500ms ease;
}
</style>
