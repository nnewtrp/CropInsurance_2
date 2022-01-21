<template>
  <v-layout row class="justify-center">
    <v-btn
      icon
      color="black"
      cols="12"
      md="1"
      class="my-16 mr-2 d-none d-md-block"
      @click="$router.push({ name: 'Profile' })"
    >
      <v-icon>fa-arrow-circle-left</v-icon>
    </v-btn>
    <v-col cols="12" sm="12" md="8" class="my-8">
      <EditProfileInfo />
    </v-col>
  </v-layout>
</template>

<script>
import EditProfileInfo from '~/components/Profile/EditProfileInfo.vue'

export default {
  components: {
    EditProfileInfo,
  },
}
</script>
