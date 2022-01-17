<template>
  <v-card class="pa-3">
    <v-form ref="password" v-model="valid">
      <v-card-title class="text-h4 justify-center">
        Change Password
      </v-card-title>
      <br />
      <v-card-text class="subheading">
        <v-text-field
          v-model="oldpass"
          :append-icon="oldLogo ? 'fa-eye' : 'fa-eye-slash'"
          :rules="[rules.required, rules.min]"
          :type="oldLogo ? 'text' : 'password'"
          label="Old Password *"
          hint="At least 8 characters"
          counter
          prepend-icon="fa-unlock-alt"
          @click:append="oldLogo = !oldLogo"
        ></v-text-field>
        <v-text-field
          v-model="newpass"
          :append-icon="newLogo ? 'fa-eye' : 'fa-eye-slash'"
          :rules="[rules.required, rules.min]"
          :type="newLogo ? 'text' : 'password'"
          label="New Password *"
          hint="At least 8 characters"
          counter
          prepend-icon="fa-lock"
          @click:append="newLogo = !newLogo"
        ></v-text-field>
        <v-text-field
          v-model="confirmpass"
          :append-icon="confirmLogo ? 'fa-eye' : 'fa-eye-slash'"
          :rules="[rules.required, ConfirmationRule]"
          :type="confirmLogo ? 'text' : 'password'"
          label="Confirm Password *"
          hint="At least 8 characters"
          counter
          prepend-icon="fa-lock"
          @click:append="confirmLogo = !confirmLogo"
        ></v-text-field>
      </v-card-text>
      <v-card-actions class="justify-center">
        <v-btn color="success" :disabled="!valid" @click="reset"> Reset </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Data
      oldpass: '',
      newpass: '',
      confirmpass: '',
      // Command
      oldLogo: false,
      newLogo: false,
      confirmLogo: false,
      valid: true,
      rules: {
        required: (value) => !!value || 'This field is required.',
        min: (value) =>
          value.length >= 8 || 'Minimum of password is 8 characters',
      },
    }
  },
  computed: {
    ConfirmationRule() {
      return () =>
        this.newpass === this.confirmpass ||
        'Your new password and confirm password must match'
    },
    ResetPassSB: {
      get() {
        return this.$store.state.snackbar.ResetPassSB
      },
      set(val) {
        this.$store.dispatch('snackbar/setResetPassSB', val, { root: true })
      },
    },
  },
  methods: {
    reset() {
      if (this.$refs.password.validate()) {
        this.ResetPassSB = true
        this.$router.push({
          name: 'index',
        })
      }
    },
  },
}
</script>
