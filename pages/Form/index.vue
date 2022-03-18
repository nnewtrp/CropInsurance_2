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
      <ReportForm :listdata="listdata" />
    </v-col>
  </v-layout>
</template>

<script>
import ReportForm from '~/components/Form/ReportForm.vue'

export default {
  components: {
    ReportForm,
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(
      'https://opend.data.go.th/get-ckan/datastore_search?resource_id=48039a2a-2f01-448c-b2a2-bb0d541dedcd&limit=7768',
      {
        headers: {
          'api-key': process.env.DataGov_API_KEY,
        },
      }
    )
    return { listdata: data.result.records }
  },
  data() {
    return {
      // Address API
      listdata: [],
    }
  },
  head() {
    return {
      title: 'New Report',
    }
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  z-index: 1;
}
</style>
