<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="7" class="my-5">
      <AuthPicture />
    </v-col>
    <v-col cols="12" sm="12" md="5">
      <LoginForm />
      <div class="mt-3 mr-2" style="text-align: right; color: #808080">
        Don't have any account?
        <a href="/Auth/signup">Sign Up</a>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import AuthPicture from '~/components/Auth/AuthPicture.vue'
import LoginForm from '~/components/Auth/LoginForm.vue'

export default {
  components: {
    AuthPicture,
    LoginForm,
  },
  layout: 'Auth',
  head() {
    return {
      title: 'Log In',
    }
  },
}
</script>
