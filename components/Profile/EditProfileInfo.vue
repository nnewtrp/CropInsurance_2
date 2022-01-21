<template>
  <v-card class="pa-3">
    <v-card-title class="text-h4 justify-center"> Edit Profile </v-card-title>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-card-title class="headline">
        <v-icon color="black">fa-user</v-icon>
        &ensp;User Information
      </v-card-title>
      <v-card-text class="subheading">
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
        <v-text-field
          v-model="username"
          label="Userame *"
          :rules="[rules.required, rules.usernameLength]"
          :counter="25"
          prefix="@"
          required
        ></v-text-field>
        <v-radio-group
          v-model="gender"
          label="Gender *"
          row
          :rules="[rules.required]"
          required
        >
          <v-radio label="Male" color="blue" value="Male"></v-radio>
          <v-radio label="Female" color="pink" value="Female"></v-radio>
        </v-radio-group>
        <v-file-input
          v-model="image"
          chips
          accept="image/*"
          label="Picture"
          prepend-icon="fa-portrait"
        ></v-file-input>
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
      firstname: 'Teerapat',
      lastname: 'Satitporn',
      username: 'newtrp',
      gender: 'Male',
      image: null,
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
