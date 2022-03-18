<template>
  <v-layout row class="justify-center">
    <v-btn
      icon
      color="black"
      cols="12"
      md="1"
      class="my-16 mr-2 d-none d-md-block"
      @click="$router.push({ name: 'Auth-login' })"
    >
      <v-icon>fa-arrow-circle-left</v-icon>
    </v-btn>
    <v-col cols="12" sm="12" md="8" class="my-8">
      <SignUpForm :listdata="listdata" />
    </v-col>
  </v-layout>
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
