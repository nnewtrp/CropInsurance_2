<template>
  <v-layout row>
    <v-btn
      text
      cols="12"
      md="2"
      class="my-16 mr-2 text-h5 font-weight-bold d-none d-md-block"
      @click="$router.push({ name: 'Staff-Report' })"
    >
      <v-icon left>fa-arrow-circle-left</v-icon>
      Home
    </v-btn>
    <v-col cols="12" sm="12" md="10" class="my-8">
      <StaffProfile />
    </v-col>
  </v-layout>
</template>

<script>
import StaffProfile from '~/components/Staff/Profile/StaffProfile.vue'

export default {
  components: {
    StaffProfile,
  },
  layout: 'Staff',
  head() {
    return {
      title: 'Profile',
    }
  },
}
</script>
