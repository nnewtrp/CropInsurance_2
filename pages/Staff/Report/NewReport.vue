<template>
  <v-layout row>
    <v-col cols="12" sm="12" md="2" class="my-8">
      <ListMenu />
    </v-col>
    <v-col cols="12" sm="12" md="10" class="my-8">
      <NewReportList />
    </v-col>
  </v-layout>
</template>

<script>
import NewReportList from '~/components/Staff/Report/NewReportList.vue'
import ListMenu from '~/components/Staff/Report/ListMenu.vue'

export default {
  components: {
    NewReportList,
    ListMenu,
  },
  head() {
    return {
      title: 'All Report',
    }
  },
}
</script>
