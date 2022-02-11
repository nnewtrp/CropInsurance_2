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
      <v-card class="pa-3">
        <v-card-title v-if="isDisabled == false" class="text-h4 justify-left">
          <div class="text-decoration-underline font-weight-bold">
            New Report
          </div>
        </v-card-title>
        <v-card-title v-if="isDisabled == true" class="text-h4 justify-left">
          <div class="text-decoration-underline font-weight-bold">
            Submit Report
          </div>
        </v-card-title>
        <v-form
          ref="form"
          v-model="valid"
          :disabled="isDisabled"
          lazy-validation
        >
          <v-card-text class="subheading">
            <v-text-field
              v-model="name"
              label="Full Name *"
              outlined
              :rules="[rules.required]"
              readonly
              required
            ></v-text-field>
            <v-text-field
              v-model="title"
              label="Title *"
              outlined
              :rules="[rules.required]"
              required
            ></v-text-field>
            <v-textarea
              v-model="detail"
              label="Report Detail *"
              outlined
              :rules="[rules.required]"
              required
            ></v-textarea>
            <v-file-input
              v-model="file"
              chips
              multiple
              outlined
              label="Import Image/File (Optional)"
              prepend-icon="fa-paperclip"
            ></v-file-input>
            <h2 class="pb-4">Address</h2>
            <v-autocomplete
              v-model="city"
              :items="CityList"
              outlined
              hide-no-data
              hide-selected
              label="City"
              return-object
            ></v-autocomplete>
            <h2 class="pb-2">Location</h2>
            <div id="map-wrap" style="height: 50vh">
              <client-only>
                <l-map
                  :zoom="13"
                  :center="center"
                  @update:center="centerUpdate"
                >
                  <l-tile-layer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  ></l-tile-layer>
                  <l-marker :lat-lng="currentCenter">
                    <l-popup> Marker at {{ currentCenter }}</l-popup>
                  </l-marker>
                </l-map>
              </client-only>
            </div>
            <v-card-actions v-if="isEdit == false">
              <v-spacer />
              <v-btn
                color="error"
                :disabled="isDisabled"
                @click="isEdit = true"
              >
                Edit Location
                <v-icon right>fa-pencil-alt</v-icon>
              </v-btn>
            </v-card-actions>
            <v-card-actions v-else>
              <v-spacer />
              <v-btn
                color="success"
                :disabled="isDisabled"
                @click="isEdit = false"
              >
                Save Location
                <v-icon right>fa-save</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card-text>
          <v-card-actions v-if="isDisabled == false" class="justify-center">
            <v-btn :disabled="!valid" color="success" @click="submit">
              Submit
            </v-btn>
          </v-card-actions>
          <v-card-actions v-else class="justify-center">
            <v-btn color="error" @click="isDisabled = false">
              Edit
              <v-icon right>fa-pencil-alt</v-icon>
            </v-btn>
            <v-btn color="primary" @click="send">
              Send
              <v-icon right>fa-paper-plane</v-icon>
            </v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-col>
  </v-layout>
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
      // Data
      name: 'Teerapat Satitporn',
      title: '',
      detail: '',
      file: null,
      city: '',
      // Command
      valid: true,
      isDisabled: false,
      rules: {
        required: (value) => !!value || 'This field is required.',
      },
      // Map
      isEdit: false,
      center: [14.069556, 100.607857],
      currentCenter: [14.069556, 100.607857],
      // Address API
      listdata: [],
      // CityList: [],
    }
  },
  head() {
    return {
      title: 'New Report',
    }
  },
  computed: {
    CityList() {
      return this.listdata.map((record) => {
        const CHANGWAT = record.CHANGWAT_E
        return CHANGWAT
      })
    },
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.isDisabled = true
        this.$vuetify.goTo(10, 1000)
        this.isEdit = false
      } else {
        this.$vuetify.goTo(100, 1000)
      }
      window.console.log(this.city)
    },
    send() {
      this.$router.push({
        name: 'index',
      })
    },
    // Map
    centerUpdate(center) {
      if (this.isEdit === true) {
        this.currentCenter = center
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
