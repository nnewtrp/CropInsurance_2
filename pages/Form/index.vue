<template>
  <v-layout row>
    <v-btn
      text
      cols="12"
      md="2"
      class="my-16 mr-2 text-h5 font-weight-bold d-none d-md-block"
      @click="$router.push({ name: 'index' })"
    >
      <v-icon left>fa-arrow-circle-left</v-icon>
      Home
    </v-btn>
    <v-col cols="12" sm="12" md="10" class="my-8">
      <ReportForm />
    </v-col>
  </v-layout>
</template>

<script>
import ReportForm from '~/components/Form/ReportForm.vue'

export default {
  components: {
    ReportForm,
  },
  head() {
    return {
      title: 'New Report',
    }
  },
}
</script>
