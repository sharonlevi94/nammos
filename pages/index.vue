<template>
  <SectionLayout md>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs6 pb-4 pl-2>
          <div class="card">
            <div class="icon boat super-xl"/>
            <span>הורדת סירה</span>
          </div>
        </v-flex>
      <v-flex xs6 pr-2>
          <div class="card">
            <div class="icon boat super-xl" style="transform: scaleX(-1);"/>
            <span>העלאת סירה</span>
          </div>
        </v-flex>
      <v-flex xs6 pl-2>
          <div class="card">
            <div class="icon user super-xl"/>
            <span>הפרופיל שלי</span>
          </div>
        </v-flex>
      <v-flex xs6 pr-2>
          <div class="card">
            <div class="icon rules super-xl"/>
            <span>תקנון ומדיניות </span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </SectionLayout>
</template>

<script>
import SectionLayout from "~/components/SectionLayout";
export default {
  name: 'IndexPage',
  components: {SectionLayout}
}
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  border-radius: 10px;
  height: 200px;
  width: 100%;
  font-size: 42px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 20px;
}
</style>
