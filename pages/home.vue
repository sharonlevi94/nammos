<template>
  <PageLayout sm>
    <v-container fluid>
      <v-layout column class="main-manu">
        <v-flex
          v-if="item && item.admin ? $auth.user.admin : true"
          v-for="(item, index) in items"
          :key="index"
          class="card"
          xs12
          mb-2
          @click="!(item && item.soon) ? $router.push({name: item && item.to}) : null">
          <div class="d-flex justify-space-between" style="width: 100%">
            <div class="d-flex">
              <i
                :class="['icon', item && item.icon, 'xl', 'ml-2']"
                :style="item && item.iconStyles.join('')"/>
              <span>{{ item && item.name }}</span>
            </div>
            <div v-if="item && item.soon" class="soon">בקרוב!</div>
          </div>
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
        { name: 'הפרופיל שלי', icon: 'user', to: 'profile', iconStyles: [], admin: false, soon: true },
        { name: 'תקנון ומדיניות', icon: 'rules', to: 'privacy-policy', iconStyles: [], admin: false, soon: true },
        { name: 'איזור ניהול', icon: 'rules', to: 'admin', iconStyles: [], admin: true },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.soon {
  color: $primary;
}
</style>
