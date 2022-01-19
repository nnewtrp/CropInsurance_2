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
      detail: '',
      file: null,
      // Command
      valid: true,
      isDisabled: false,
      rules: {
        required: (value) => !!value || 'This field is required.',
      },
      // Map
      center: [14.069556, 100.607857],
      currentCenter: [14.069556, 100.607857],
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.isDisabled = true
        this.$vuetify.goTo(10, 1000)
      } else {
        this.$vuetify.goTo(400, 1000)
      }
    },
    send() {
      this.$router.push({
        name: 'index',
      })
    },
    // Map
    centerUpdate(center) {
      if (this.isDisabled === false) {
        this.currentCenter = center
      }
    },
  },
}
</script>
