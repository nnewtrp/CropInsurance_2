<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="10" class="pt-10">
      <SignUpForm />
    </v-col>
  </v-row>
</template>

<script>
import SignUpForm from '~/components/Auth/SignUpForm.vue'

export default {
  components: {
    SignUpForm,
  },
  layout: 'Auth',
  head() {
    return {
      title: 'Sign Up',
    }
  },
}
</script>
