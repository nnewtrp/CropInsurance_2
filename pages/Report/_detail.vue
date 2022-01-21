<template>
  <v-layout row>
    <v-btn
      icon
      color="black"
      cols="12"
      md="1"
      class="my-16 mr-2 d-none d-md-block"
      @click="$router.push({ name: 'Report' })"
    >
      <v-icon>fa-arrow-circle-left</v-icon>
    </v-btn>
    <v-col cols="12" sm="12" md="11" class="my-8">
      <ReportDetail />
    </v-col>
  </v-layout>
</template>

<script>
import ReportDetail from '~/components/Report/ReportDetail.vue'

export default {
  components: {
    ReportDetail,
  },
  head() {
    return {
      title: 'Report ' + this.$route.params.detail,
    }
  },
}
</script>
