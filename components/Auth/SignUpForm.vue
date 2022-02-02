<template>
  <v-card class="white">
    <v-card-title class="headline">
      <h2
        style="font-weight: bold; color: black"
        class="ml-2 mt-4 text-decoration-overline"
      >
        Sign
      </h2>
      <h2 style="font-weight: bold; color: black" class="mt-4">&nbsp;Up</h2>
    </v-card-title>
    <v-form ref="form">
      <v-card-text>
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
        @click="$router.push({ name: 'Auth-login' })"
      >
        Sign Up
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Data
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      cpassword: '',
      // Command
      rules: {
        required: (value) => !!value || 'This field is required.',
        emailRule: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
        minPass: (value) =>
          value.length >= 8 || 'Minimum of password is 8 characters',
      },
      Logo: false,
      cLogo: false,
    }
  },
  computed: {
    ConfirmationRule() {
      return () =>
        this.password === this.cpassword ||
        'Your password and confirm password must match'
    },
  },
}
</script>
