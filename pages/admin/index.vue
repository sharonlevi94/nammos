<template>
  <PageLayout md>
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
export default {
  name: "index",
  data () {
    return {
      items: [
        { name: 'ניהול משתמשים', icon: 'user', to: 'admin-users', iconStyles: [] },
        { name: 'ניהול דגמי סירות', icon: 'boat', to: 'admin-boats-models', iconStyles: [] },
      ]
    }
  }
}
</script>

<style scoped>

</style>
