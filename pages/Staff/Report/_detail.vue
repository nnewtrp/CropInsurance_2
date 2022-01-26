<template>
  <v-layout row>
    <v-btn
      icon
      color="black"
      cols="12"
      md="1"
      class="my-16 mr-2 d-none d-md-block"
      @click="back()"
    >
      <v-icon>fa-arrow-circle-left</v-icon>
    </v-btn>
    <v-col cols="12" sm="12" md="7" class="my-8">
      <ReportDetail />
    </v-col>
    <v-col cols="12" sm="12" md="4" class="my-8">
      <StaffReportResult />
      <ReportComment />
    </v-col>
  </v-layout>
</template>

<script>
import ReportDetail from '~/components/Report/ReportDetail.vue'
import StaffReportResult from '~/components/Report/StaffReportResult.vue'
import ReportComment from '~/components/Report/ReportComment.vue'

export default {
  components: {
    ReportDetail,
    StaffReportResult,
    ReportComment,
  },
  head() {
    return {
      title: 'Report ' + this.$route.params.detail,
    }
  },
  methods: {
    back() {
      if (this.$route.query.status === 'In Progress') {
        this.$router.push({ name: 'Staff-Report' })
      } else if (this.$route.query.status === 'New Case') {
        this.$router.push({ name: 'Staff-Report-NewReport' })
      } else {
        this.$router.push({ name: 'Staff-Report-History' })
      }
    },
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  z-index: 1;
}
</style>
