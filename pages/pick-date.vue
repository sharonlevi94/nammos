<template>
  <SectionLayout md>
      <v-container fluid>
        <v-layout row wrap>
          <v-flex v-if="show === 'date_picker'" xs12>
            <span class="date-title">באיזה תאריך תרצו להגיע?</span>
            <v-date-picker
              v-model="form.date"
              class="mt-4"
              full-width
              elevation="15"
            ></v-date-picker>
            <NammosButton
              title="הבא"
              class="mt-5"
              @click="form.date ? show = 'time_picker' : 'date_picker'"/>
          </v-flex>
          <v-flex v-if="show === 'time_picker'" xs12>
            <span class="date-title">אנא בחרו שעת הגעה:</span>
            <v-time-picker
              v-model="form.time"
              class="mt-4"
              format="24hr"
              full-width
            ></v-time-picker>
            <NammosButton title="הבא" class="mt-5" @click="form.date ? show = 'final_message' : 'time_picker'"/>
            <NammosButton title="חזרה" class="mt-5" @click="show = 'date_picker'"/>
          </v-flex>
          <v-flex v-if="show === 'final_message'" xs12>

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
      show: 'date_picker'
    }
  }
}
</script>

<style lang="scss" scoped>
.date-title {
  font-size: 42px;
}
</style>
