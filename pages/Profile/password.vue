<template>
  <v-layout row class="justify-center">
    <v-btn
      text
      cols="12"
      md="4"
      class="my-16 mr-2 text-h5 font-weight-bold d-none d-md-block"
      @click="$router.push({ name: 'index' })"
    >
      <v-icon left>fa-arrow-circle-left</v-icon>
      Home
    </v-btn>
    <v-col cols="12" sm="12" md="8" class="my-8">
      <ChangePassword />
    </v-col>
  </v-layout>
</template>

<script>
import ChangePassword from '~/components/Profile/ChangePassword.vue'

export default {
  components: {
    ChangePassword,
  },
  head() {
    return {
      title: 'Change Password',
    }
  },
}
</script>
