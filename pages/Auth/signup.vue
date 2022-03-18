<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="8" class="py-10">
      <SignUpForm :listdata="listdata" />
    </v-col>
  </v-row>
</template>

<script>
import SignUpForm from '~/components/Auth/SignUpForm.vue'

export default {
  components: {
    SignUpForm,
  },
  layout: 'Auth',
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
      listdata: [],
    }
  },
  head() {
    return {
      title: 'Sign Up',
    }
  },
}
</script>

<style lang="scss">
.vue2leaflet-map {
  z-index: 1;
}
</style>
