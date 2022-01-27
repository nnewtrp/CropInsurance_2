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
  data() {
    return {
      reports: [
        {
          id: 1,
          status: 'Complete',
          receiver: 'Chayanon Noisapung',
          result: '5000 THB',
        },
        {
          id: 2,
          status: 'In Progress',
          receiver: 'Chayanon Noisapung',
          result: '',
        },
        {
          id: 3,
          status: 'New Case',
          receiver: '',
          result: '',
        },
        {
          id: 4,
          status: 'New Case',
          receiver: '',
          result: '',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Report ' + this.$route.params.detail,
    }
  },
  methods: {
    back() {
      if (this.getStatus(this.$route.params.detail) === 'In Progress') {
        this.$router.push({ name: 'Staff-Report' })
      } else if (this.getStatus(this.$route.params.detail) === 'New Case') {
        this.$router.push({ name: 'Staff-Report-NewReport' })
      } else {
        this.$router.push({ name: 'Staff-Report-History' })
      }
    },
    getStatus(id) {
      let status = ''
      for (const i in this.reports) {
        if (this.reports[i].id === parseInt(id)) {
          status = this.reports[i].status
        }
      }
      return status
    },
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  z-index: 1;
}
</style>
