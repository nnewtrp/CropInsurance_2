<template>
  <v-layout row>
    <v-col cols="12" sm="12" md="2" class="my-8">
      <ListMenu />
    </v-col>
    <v-col cols="12" sm="12" md="10" class="my-8">
      <HistoryList />
    </v-col>
  </v-layout>
</template>

<script>
import HistoryList from '~/components/Staff/Report/HistoryList.vue'
import ListMenu from '~/components/Staff/Report/ListMenu.vue'

export default {
  components: {
    HistoryList,
    ListMenu,
  },
  head() {
    return {
      title: 'All Report',
    }
  },
}
</script>
