<template>
  <v-container>
    <v-text-field v-model="query" label="Search"> </v-text-field>
    <v-autocomplete
      v-model="city"
      :items="CityList"
      outlined
      hide-no-data
      hide-selected
      item-text="CHANGWAT"
      item-value="API"
      label="City"
      return-object
    ></v-autocomplete>
    <v-btn @click="Search">Search</v-btn>
  </v-container>
</template>

<script>
export default {
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
      city: '',
      query: '',
      listdata: [],
    }
  },
  computed: {
    CityList() {
      return this.listdata.map((record) => {
        const CHANGWAT = record.CHANGWAT_E
        return Object.assign({}, record, { CHANGWAT })
      })
    },
  },
  methods: {
    Search() {
      window.console.log(this.query)
      window.console.log(this.listdata)
    },
  },
}
</script>
