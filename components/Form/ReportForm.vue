<template>
  <v-card class="pa-3">
    <v-card-title v-if="isDisabled == false" class="text-h4 justify-left">
      <div class="text-decoration-underline font-weight-bold">New Report</div>
    </v-card-title>
    <v-card-title v-if="isDisabled == true" class="text-h4 justify-left">
      <div class="text-decoration-underline font-weight-bold">
        Submit Report
      </div>
    </v-card-title>
    <v-form ref="form" v-model="valid" :disabled="isDisabled" lazy-validation>
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
          :loading="isCityLoading"
          :search-input.sync="CitySearch"
          outlined
          hide-no-data
          hide-selected
          item-text="CHANGWAT"
          item-value="API"
          label="City"
          return-object
        ></v-autocomplete>
        <h2 class="pb-2">Location</h2>
        <div id="map-wrap" style="height: 50vh">
          <client-only>
            <l-map :zoom="13" :center="center" @update:center="centerUpdate">
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
          <v-btn color="error" :disabled="isDisabled" @click="isEdit = true">
            Edit Location
            <v-icon right>fa-pencil-alt</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />
          <v-btn color="success" :disabled="isDisabled" @click="isEdit = false">
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
</template>

<script>
export default {
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
      CityData: [],
      isCityLoading: false,
      CitySearch: null,
    }
  },
  computed: {
    CityList() {
      return this.CityData.map((record) => {
        const CHANGWAT = record.CHANGWAT_E
        return Object.assign({}, record, { CHANGWAT })
      })
    },
  },

  watch: {
    CitySearch() {
      // Items have already been loaded
      if (this.CityList.length > 0) return
      // Items have already been requested
      if (this.isCityLoading) return
      this.isCityLoading = true
      // Lazily load input items
      fetch(
        'https://opend.data.go.th/get-ckan/datastore_search?resource_id=48039a2a-2f01-448c-b2a2-bb0d541dedcd',
        {
          method: 'GET',
          headers: {
            'api-key': process.env.DataGov_API_KEY,
          },
          redirect: 'follow',
        }
      )
        .then((res) => res.json())
        .then((res) => {
          const records = res.result.records
          this.CityData = records
        })
        .catch((err) => {
          window.console.log(err)
        })
        .finally(() => (this.isCityLoading = false))
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
