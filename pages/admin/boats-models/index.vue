<template>
  <PageLayout md>
    <PageHeader
      title="ניהול דגמי סירות"
      button-title="הוספת דגם חדש"
      button-icon="plus"
      show-button
      @clickButton="createOrEditModal = !createOrEditModal"/>

    <v-autocomplete
      v-model="modelNameChosen"
      :items="models"
      item-text="name"
      item-value="name"
      placeholder="בחר דגם להצגה">
      <template #no-data>
        <span class="pa-2">לא קיימים דגמים ברשימה, אבל תמיד אפשר להוסיף אחד חדש!</span>
      </template>
    </v-autocomplete>

    <v-data-table
      v-if="modelSelected"
      hide-default-footer
      disable-sort
      :items="subModelSelected"
      :headers="headers">
      <template #no-data>
        <span>בחר דגם על מנת להציג ערכים</span>
      </template>
    </v-data-table>

    <NammosModal
      :value="createOrEditModal"
      title="יצירת דגם חדש"
      @close="createOrEditModal = !createOrEditModal; onEdit = false">
      <span>שם הדגם</span>
      <v-text-field v-model="modalForm.name" placeholder="הכנס שם דגם"/>
      <div class="full-width d-flex justify-space-between">
        <span>תתי דגם</span>
        <i class="icon plus-dark xs" @click="modalForm.sub_models.push('')"/>
      </div>
      <div v-if="modalForm.sub_models && modalForm.sub_models.length">
        <v-text-field
          v-for="(subModel, index) of modalForm.sub_models"
          v-model="modalForm.sub_models[index]"
          :key="index"
          placeholder="הכנס תת דגם">
          <template #append-outer>
            <i
              v-if="modalForm.sub_models && modalForm.sub_models.length > 1"
              class="icon trash-dark mt-1 lg" @click="modalForm.sub_models.splice(index, 1)"/>
          </template>
        </v-text-field>

        <NammosButton title="שמירה" @click="saveModel"/>
      </div>
    </NammosModal>

    <EditButton v-if="modelSelected" @edit="editBoatModel"/>
  </PageLayout>
</template>

<script>

export default {
  name: "boats-models",
  data () {
    return {
      modalForm: {
        name: null,
        sub_models: ['']
      },
      models: [],
      modelNameChosen: null,
      headers: [
        { text: 'תת דגם', value: 'sub_model_name', align: 'center' },
      ],
      createOrEditModal: false,
      modelSelectedIndex: null,
      onEdit: false
    }
  },
  async created() {
    try {
      this.$store.commit('setLoader', {value: true})
      this.models = await this.$boatModelsApi.getBoatModels()
      this.$store.commit('setLoader', {value: false})
    } catch (e) {
      this.$store.commit('setLoader', {value: false})
      console.error('boat models created error: ', e)
    }
  },
  computed: {
    modelSelected () {
      return this.models.find(model => model?.name === this.modelNameChosen)
    },
    subModelSelected () {
      return this.modelSelected?.sub_models?.map(subModel => {
        return { sub_model_name: subModel }
      })
    }
  },
  methods: {
    async saveModel () {
      try {
        this.$store.commit('setLoader', {value: true})
        let res
        if (this.onEdit) {
          res = await this.$boatModelsApi.updateBoatModel(this.modalForm?._id, this.modalForm)
        } else {
          res = await this.$boatModelsApi.addBoatModel(this.modalForm)
        }
        if (res?.success) {
          this.createOrEditModal = !this.createOrEditModal
          this.models = await this.$boatModelsApi.getBoatModels()
          this.onEdit = false
          this.$store.commit('setLoader', {value: false})
          await this.$store.dispatch('showSnackBar', {success: true, value: true, text: 'השמירה בוצעה בהצלחה!'})
        }
      } catch (e) {
        await this.$store.dispatch('showSnackBar', {error: true, value: true, text: 'אופס! אירעה שגיאה בשמירה'})
        this.$store.commit('setLoader', {value: false})
        console.error('saveModel error: ', e)
      }
    },
    editBoatModel () {
      this.modalForm = JSON.parse(JSON.stringify(this.modelSelected))
      this.onEdit = true
      this.createOrEditModal = !this.createOrEditModal
    },
  }
}
</script>

<style scoped>

</style>
