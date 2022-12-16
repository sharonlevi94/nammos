<template>
  <PageLayout md>
    <PageHeader
      title="ניהול דגמי סירות"
      button-title="הוספת דגם חדש"
      button-icon="plus"
      show-button
      @clickButton="createOrEditModal = !createOrEditModal"/>

    <v-autocomplete
      v-model="modelSelected"
      :items="models"
      item-text="name"
      item-value="sub_models"
      placeholder="בחר דגם להצגה">
      <template #no-data>
        <span class="pa-2">לא קיימים דגמים ברשימה, אבל תמיד אפשר להוסיף אחד חדש!</span>
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

    <NammosModal :value="createOrEditModal" title="יצירת דגם חדש" @close="createOrEditModal = !createOrEditModal">
      <span>שם הדגם</span>
      <v-text-field />
      <span>תתי דגם</span>
    </NammosModal>

    <EditButton v-if="modelSelected && modelSelected.length"/>
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
      modelSelected: [],
      headers: [
        { text: 'תת דגם', align: 'center' },
      ],
      createOrEditModal: false
    }
  }
}
</script>

<style scoped>

</style>
