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
          v-model="nametitle"
          label="Name Title *"
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
        <v-icon color="black">fa-map-marker</v-icon>
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
  data() {
    return {
      // User Data
      uid: '1',
      nametitle: 'Mr.',
      firstname: 'Teerapat',
      lastname: 'Satitporn',
      province: '',
      district: '',
      subDistrict: '',
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
      // Address API
      listdata: [],
      districtList: [],
      subDistrictList: [],
    }
  },
  methods: {
    save() {
      if (this.$refs.form.validate()) {
        this.$router.push({ path: '/profile' })
      }
    },
  },
}
</script>
