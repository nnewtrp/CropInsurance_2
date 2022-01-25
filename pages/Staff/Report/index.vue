<template>
  <v-layout row>
    <v-col cols="12" sm="12" md="2" class="my-8">
      <ListMenu />
    </v-col>
    <v-col cols="12" sm="12" md="10" class="my-8">
      <InProgressList />
    </v-col>
  </v-layout>
</template>

<script>
import InProgressList from '~/components/Staff/Report/InProgressList.vue'
import ListMenu from '~/components/Staff/Report/ListMenu.vue'

export default {
  components: {
    InProgressList,
    ListMenu,
  },
  head() {
    return {
      title: 'All Report',
    }
  },
}
</script>
