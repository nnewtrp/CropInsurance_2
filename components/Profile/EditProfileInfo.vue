<template>
  <v-card class="pa-3">
    <v-card-title class="text-h4 justify-center"> Edit Profile </v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-title class="headline">
        <v-icon color="black">fa-user</v-icon>
        &ensp;User Information
      </v-card-title>
      <v-card-text class="subheading">
        <v-radio-group
          v-model="titlename"
          label="Title Name *"
          row
          :rules="[rules.required]"
          required
        >
          <v-radio label="Mr." color="blue" value="Mr."></v-radio>
          <v-radio label="Ms." color="pink" value="Ms."></v-radio>
          <v-radio label="Mrs." color="pink" value="Mrs."></v-radio>
        </v-radio-group>
        <v-row wrap>
          <v-col cols="12" xs="12" sm="6" md="6">
            <v-text-field
              v-model="firstname"
              label="First Name *"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <v-text-field
              v-model="lastname"
              label="Last Name *"
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title class="headline">
        <v-icon color="black">fa-location-dot</v-icon>
        &ensp;Address
      </v-card-title>
      <v-card-text class="subheading">
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
        <v-textarea
          v-model="moreAddress"
          label="House number, Village, Soi, Road *"
          outlined
          :rules="[rules.required]"
          required
        ></v-textarea>
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
          <v-btn color="error" @click="isEdit = true">
            Edit Location
            <v-icon right>fa-pencil-alt</v-icon>
          </v-btn>
        </v-card-actions>
        <v-card-actions v-else>
          <v-spacer />
          <v-btn color="success" @click="isEdit = false">
            Save Location
            <v-icon right>fa-save</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card-text>
      <v-card-title class="headline">
        <v-icon color="black">fa-address-card</v-icon>
        &ensp;Contact
      </v-card-title>
      <v-card-text class="subheading">
        <v-text-field
          v-model="email"
          label="Email *"
          :rules="[rules.required, rules.emailRule]"
          prepend-icon="fa-envelope"
          placeholder="example@example.com"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Phone No *"
          :rules="[rules.required, rules.phoneRule, rules.phoneLength]"
          prepend-icon="fa-phone"
          placeholder="XXXXXXXXXX"
          required
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn :disabled="!valid" color="success" @click="save">
          Save
          <v-icon right>fa-save</v-icon>
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
      // User Data
      uid: '1',
      titlename: 'Mr.',
      firstname: 'Teerapat',
      lastname: 'Satitporn',
      province: 'จ. ปทุมธานี',
      district: 'อ. คลองหลวง',
      subDistrict: 'ต. คลองหนึ่ง',
      moreAddress: '99 Moo 18, Km. 41 on Paholyothin Highway',
      email: 'example@gmail.com',
      phone: '0802534473',
      // Command
      valid: true,
      rules: {
        required: (value) => !!value || 'This field is required.',
        emailRule: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
        phoneRule: (value) =>
          Number.isInteger(Number(value)) ||
          'Phone number must be an integer number',
        phoneLength: (value) =>
          (value && value.length <= 10) ||
          'Phone number must be less that 10 numbers',
        usernameLength: (value) =>
          (value && value.length <= 25) ||
          'Username must be less that 25 characters',
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
    subDistrict() {
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
    save() {
      if (this.$refs.form.validate()) {
        this.$router.push({ path: '/profile' })
      }
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
