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
    <v-col cols="12" sm="12" md="7" class="my-8">
      <ReportDetail />
    </v-col>
    <v-col cols="12" sm="12" md="4" class="my-8">
      <ReportResult />
      <ReportComment />
    </v-col>
  </v-layout>
</template>

<script>
import ReportDetail from '~/components/Report/ReportDetail.vue'
import ReportResult from '~/components/Report/ReportResult.vue'
import ReportComment from '~/components/Report/ReportComment.vue'

export default {
  components: {
    ReportDetail,
    ReportResult,
    ReportComment,
  },
  head() {
    return {
      title: 'Report ' + this.$route.params.detail,
    }
  },
}
</script>
