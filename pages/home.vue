<template>
  <PageLayout sm>
    <v-container fluid>
      <v-layout column>
        <v-flex
          v-if="item && item.admin ? $auth.user.admin : true"
          v-for="(item, index) in items"
          :key="index"
          class="card"
          xs12
          mb-2
          @click="$router.push({name: item && item.to})">
          <i
            :class="['icon', item && item.icon, 'xl', 'ml-2']"
            :style="item && item.iconStyles.join('')"/>
          <span>{{ item && item.name }}</span>
        </v-flex>
      </v-layout>
    </v-container>
  </PageLayout>
</template>

<script>
import PageLayout from "~/components/PageLayout";
export default {
  name: 'IndexPage',
  components: {PageLayout},
  data () {
    return {
      items: [
        { name: 'הורדת סירה', icon: 'boat', to: 'pick-date', iconStyles: [], admin: false },
        { name: 'העלאת סירה', icon: 'boat', to: 'queue', iconStyles: ['transform: scaleX(-1);'], admin: false },
        { name: 'הפרופיל שלי', icon: 'user', to: 'profile', iconStyles: [], admin: false },
        { name: 'תקנון ומדיניות', icon: 'rules', to: 'privacy-policy', iconStyles: [], admin: false },
        { name: 'איזור ניהול', icon: 'rules', to: 'admin', iconStyles: [], admin: true },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
