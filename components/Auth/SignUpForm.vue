<template>
  <v-card v-if="step === 1" class="white">
    <v-card-title class="headline">
      <h2
        style="font-weight: bold; color: black"
        class="ml-2 mt-4 text-decoration-overline"
      >
        Sign
      </h2>
      <h2 style="font-weight: bold; color: black" class="mt-4">
        &nbsp;Up: Step 1
      </h2>
    </v-card-title>
    <v-form ref="form1" v-model="Valid1" lazy-validation>
      <v-card-text>
        <h2 class="ml-1">User Information</h2>
        <v-radio-group
          v-model="titlename"
          class="ml-1 mb-2"
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
              outlined
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="12" sm="6" md="6">
            <v-text-field
              v-model="lastname"
              label="Last Name *"
              outlined
              :rules="[rules.required]"
              required
            ></v-text-field>
          </v-col>
        </v-row>
        <v-text-field
          v-model="email"
          label="Email *"
          outlined
          :rules="[rules.required, rules.emailRule]"
          placeholder="example@example.com"
          required
        ></v-text-field>
        <v-text-field
          v-model="phone"
          label="Phone No. *"
          outlined
          :rules="[rules.required, rules.phoneRule, rules.phoneLength]"
          placeholder="XXXXXXXXXX"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="Logo ? 'fa-eye' : 'fa-eye-slash'"
          :type="Logo ? 'text' : 'password'"
          label="Password *"
          outlined
          :rules="[rules.required, rules.minPass]"
          hint="At least 8 characters"
          counter
          required
          @click:append="Logo = !Logo"
        ></v-text-field>
        <v-text-field
          v-model="cpassword"
          :append-icon="cLogo ? 'fa-eye' : 'fa-eye-slash'"
          :type="cLogo ? 'text' : 'password'"
          label="Confirm Password *"
          outlined
          :rules="[rules.required, ConfirmationRule]"
          required
          @click:append="cLogo = !cLogo"
        ></v-text-field>
      </v-card-text>
    </v-form>
    <v-card-actions class="justify-center">
      <v-btn
        color="success"
        class="mx-5 mb-4"
        :disabled="!Valid1"
        @click="next"
      >
        Next
      </v-btn>
    </v-card-actions>
  </v-card>
  <v-card v-else-if="step === 2" class="white">
    <v-card-title class="headline">
      <h2
        style="font-weight: bold; color: black"
        class="ml-2 mt-4 text-decoration-overline"
      >
        Sign
      </h2>
      <h2 style="font-weight: bold; color: black" class="mt-4">
        &nbsp;Up: Step 2
      </h2>
    </v-card-title>
    <v-form ref="form2" v-model="Valid2" lazy-validation>
      <v-card-text>
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
        <v-textarea
          v-model="moreAddress"
          label="House number, Village, Soi, Road, etc. *"
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
    </v-form>
    <v-card-actions class="justify-center">
      <v-btn
        color="success"
        class="mx-5 mb-4"
        :disabled="!Valid2"
        @click="signup"
      >
        Sign Up
      </v-btn>
    </v-card-actions>
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
      titlename: '',
      firstname: '',
      lastname: '',
      email: '',
      phone: '',
      password: '',
      cpassword: '',
      province: '',
      district: '',
      subDistrict: '',
      moreAddress: '',
      // Command
      rules: {
        required: (value) => !!value || 'This field is required.',
        emailRule: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
        minPass: (value) =>
          value.length >= 8 || 'Minimum of password is 8 characters',
        phoneRule: (value) =>
          Number.isInteger(Number(value)) ||
          'Phone number must be an integer number',
        phoneLength: (value) =>
          (value && value.length <= 10) ||
          'Phone number must be less that 10 numbers',
      },
      Logo: false,
      cLogo: false,
      step: 1,
      Valid1: true,
      Valid2: true,
      // Map
      isEdit: false,
      center: [13.756248, 100.491819],
      currentCenter: [13.756248, 100.491819],
    }
  },
  computed: {
    ConfirmationRule() {
      return () =>
        this.password === this.cpassword ||
        'Your password and confirm password must match'
    },
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
    next() {
      if (this.$refs.form1.validate()) {
        this.step++
        this.$vuetify.goTo(0, 1000)
      } else {
        this.$vuetify.goTo(100, 1000)
      }
    },
    signup() {
      if (this.$refs.form2.validate()) {
        this.$router.push({ path: '/Auth/login' })
      } else {
        this.$vuetify.goTo(100, 1000)
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
