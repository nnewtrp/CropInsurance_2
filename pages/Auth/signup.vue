<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="7" class="my-5">
      <AuthPicture />
    </v-col>
    <v-col cols="12" sm="12" md="5">
      <SignUpForm />
    </v-col>
  </v-row>
</template>

<script>
import AuthPicture from '~/components/Auth/AuthPicture.vue'
import SignUpForm from '~/components/Auth/SignUpForm.vue'

export default {
  components: {
    AuthPicture,
    SignUpForm,
  },
  head() {
    return {
      title: 'Sign Up',
    }
  },
}
</script>
