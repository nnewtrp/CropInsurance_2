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
          v-model="province"
          :items="provinceList"
          outlined
          hide-no-data
          hide-selected
          label="Province *"
          return-object
          :rules="[rules.required]"
          required
        ></v-autocomplete>
        <v-autocomplete
          v-model="district"
          :items="districtList"
          outlined
          hide-no-data
          hide-selected
          label="District *"
          return-object
          :rules="[rules.required]"
          required
        ></v-autocomplete>
        <v-autocomplete
          v-model="subDistrict"
          :items="subDistrictList"
          outlined
          hide-no-data
          hide-selected
          label="Sub-District *"
          return-object
          :rules="[rules.required]"
          required
        ></v-autocomplete>
        <h2 class="pb-2">Location</h2>
        <div id="map-wrap" style="height: 50vh">
          <client-only>
            <l-map :zoom="16" :center="center" @update:center="centerUpdate">
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
          <v-tooltip bottom open-delay="200">
            <template #activator="{ on: tooltip, attrs }">
              <v-btn
                slot="activator"
                color="info"
                v-bind="attrs"
                v-on="{ ...tooltip }"
                @click="setLocation"
              >
                Set Location
                <v-icon right>fa-location-dot</v-icon>
              </v-btn>
            </template>
            <span>Set to your sub-district location</span>
          </v-tooltip>
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
  props: {
    listdata: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      // Data
      name: 'Mr. Teerapat Satitporn',
      title: '',
      detail: '',
      file: null,
      province: 'จ. ปทุมธานี',
      district: 'อ. คลองหลวง',
      subDistrict: 'ต. คลองหนึ่ง',
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
    }
  },
  computed: {
    // Address
    provinceList() {
      const list = this.listdata.map((record) => {
        const CHANGWAT = record.CHANGWAT_T
        return CHANGWAT
      })
      return list.sort()
    },
    districtList() {
      if (this.province !== '') {
        let list = this.listdata.map((record) => {
          const AMPHOE = record.AMPHOE_T
          if (record.CHANGWAT_T === this.province) return AMPHOE
          else return ''
        })
        list = list.filter((element) => {
          return element !== ''
        })
        return list.sort()
      } else {
        return []
      }
    },
    subDistrictList() {
      if (this.district !== '') {
        let list = this.listdata.map((record) => {
          const TAMBON = record.TAMBON_T
          if (record.AMPHOE_T === this.district) return TAMBON
          else return ''
        })
        list = list.filter((element) => {
          return element !== ''
        })
        return list.sort()
      } else {
        return []
      }
    },
  },
  watch: {
    // Address
    province() {
      if (this.province !== '') {
        this.districtList = this.listdata.map((record) => {
          const AMPHOE = record.AMPHOE_T
          if (record.CHANGWAT_T === this.province) return AMPHOE
          else return ''
        })
      }
    },
    district() {
      if (this.district !== '') {
        this.subDistrictList = this.listdata.map((record) => {
          const TAMBON = record.TAMBON_T
          if (record.AMPHOE_T === this.district) return TAMBON
          else return ''
        })
      }
    },
    districtList() {
      if (!this.districtList.includes(this.district)) {
        this.district = ''
      }
    },
    subDistrictList() {
      if (!this.subDistrictList.includes(this.subDistrict)) {
        this.subDistrict = ''
      }
    },
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.isDisabled = true
        this.$vuetify.goTo(10, 1000)
        this.isEdit = false
      } else {
        this.$vuetify.goTo(250, 1000)
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
    setLocation() {
      if (this.subDistrict !== '') {
        for (let i = 0; i < this.listdata.length; i++) {
          if (this.listdata[i].TAMBON_T === this.subDistrict) {
            this.center = [this.listdata[i].LAT, this.listdata[i].LONG]
            this.currentCenter = [this.listdata[i].LAT, this.listdata[i].LONG]
            break
          }
        }
      }
    },
  },
}
</script>
