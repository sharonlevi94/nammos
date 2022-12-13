<template>
  <PageLayout md>
    <PageHeader
      title="ניהול דגמי סירות"
      button-title="הוספת דגם חדש"
      button-icon="plus"
      show-button/>

    <v-autocomplete
      v-model="modelSelected"
      :items="models"
      item-text="name"
      item-value="sub_models"
      placeholder="בחר דגם להצגה">
      <template #no-data>
        <span class="pa-2">לא קיימים דגמים להצגה</span>
      </template>
    </v-autocomplete>

    <v-data-table
      hide-default-footer
      disable-sort
      :items="modelSelected"
      :headers="headers">
      <template #no-data>
        <span>בחר דגם על מנת להציג ערכים</span>
      </template>
    </v-data-table>
  </PageLayout>
</template>

<script>
export default {
  name: "boats-models",
  data () {
    return {
      modalForm: {
        model: null,
        subModel: null
      },
      models: [],
      modelSelected: ['1', '2', '3'],
      headers: [
        { text: 'תת דגם', align: 'center' },
      ]
    }
  }
}
</script>

<style scoped>

</style>
