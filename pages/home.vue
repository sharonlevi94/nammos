<template>
  <SectionLayout sm>
    <v-container fluid>
      <v-layout column>
        <v-flex
          v-for="(item, index) in items"
          :key="index"
          class="card"
          xs12
          mb-2>
          <i
            :class="['icon', item && item.icon, 'xl', 'ml-2']"
            :style="item && item.iconStyles.join('')"/>
          <span>{{ item && item.name }}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </SectionLayout>
</template>

<script>
import SectionLayout from "~/components/SectionLayout";
export default {
  name: 'IndexPage',
  components: {SectionLayout},
  data () {
    return {
      items: [
        { name: 'הורדת סירה', icon: 'boat', to: 'pick-date', iconStyles: [], admin: false },
        { name: 'העלאת סירה', icon: 'boat', to: 'queue', iconStyles: [], admin: false },
        { name: 'הפרופיל שלי', icon: 'user', to: 'profile', iconStyles: ['transform: scaleX(-1);'], admin: false },
        { name: 'תקנון ומדיניות', icon: 'rules', to: 'privacy-policy', iconStyles: [], admin: false },
        { name: 'איזור ניהול', icon: 'rules', to: 'admin', iconStyles: [], admin: true },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.card {
  background-color: white;
  border-radius: 10px;
  height: 42px;
  width: 100%;
  font-size: 16px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
  text-align: start;

  padding: 8px 20px;
}
</style>
