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
        type="week"
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
    today: '2019-01-08',
    events: [
      {
        name: 'Sharon Levi',
        start: '2019-01-07 09:00',
      },
      {
        name: `Thomas Cohen`,
        start: '2019-01-10 10:00',
      },
      {
        name: 'Mash Potatoes',
        start: '2019-01-09 12:30',
      },
    ],
  }),
  mounted () {
    this.$refs.calendar.scrollToTime('08:00')
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped>

</style>
