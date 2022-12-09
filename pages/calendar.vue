<template>
  <SectionLayout>
    <v-sheet height="100vh">
      <v-select
        v-model="type"
        :items="types"
        item-text="label"
        item-value="value"
        dense
        outlined
        hide-details
        class="ma-2"
        label="תצוגה לפי"
      ></v-select>
      <v-spacer></v-spacer>
      <v-calendar
        ref="calendar"
        v-model="today"
        :now="today"
        :type="type"
        :events="events"
        color="primary"
      ></v-calendar>
    </v-sheet>
  </SectionLayout>
</template>

<script>
export default {
  name: "calendar",
  data: () => ({
    type: 'month',
    types: [
      {label: 'חודשי',value:'month'},
      {label: 'שבועי',value:'week'},
      {label: 'יומי',value:'day'}
    ],
    today: null,
    events: [],
  }),
  async created() {
    try {
      this.today = new Date().toISOString().split('T')[0]
      this.events = await this.$calendarApi.getEvents()
    } catch (e) {
      console.log('calendar created error: ', e)
    }
  },
  mounted () {
    this.$refs.calendar.scrollToTime('08:00')
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
