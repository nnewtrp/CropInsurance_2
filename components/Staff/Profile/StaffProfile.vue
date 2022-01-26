<template>
  <v-card class="pa-3">
    <v-card-title class="text-h4 justify-left">
      <div class="text-decoration-underline font-weight-bold">Profile</div>
    </v-card-title>
    <v-layout row>
      <v-col cols="12" sm="4" md="4" class="px-6">
        <v-card class="pa-3">
          <v-responsive>
            <v-img :src="require('~/assets/Profile/DefaultUserPicture.png')" />
          </v-responsive>
        </v-card>
      </v-col>
      <v-col cols="12" sm="8" md="8" class="px-6">
        <v-card-title class="headline">
          <v-icon color="black">fa-user</v-icon>
          &ensp;User Information
        </v-card-title>
        <v-card-text class="subheading">
          <div class="text--primary pb-4">
            <strong>Name:</strong> &ensp;{{ firstname }} {{ lastname }}
          </div>
          <div class="text--primary pb-4">
            <strong>Address:</strong> &ensp;{{ address }}
          </div>
        </v-card-text>
        <v-card-title class="headline">
          <v-icon color="black">fa-address-card</v-icon>
          &ensp;Contact
        </v-card-title>
        <v-card-text class="subheading">
          <div class="text--primary pb-4">
            <v-icon>fa-envelope</v-icon>
            &nbsp;<strong>Email:</strong> &ensp;{{ email }}
          </div>
          <div class="text--primary pb-4">
            <v-icon>fa-phone</v-icon>
            &nbsp;<strong>Phone No:</strong> &ensp;{{ phone }}
          </div>
        </v-card-text>
      </v-col>
    </v-layout>
    <v-card-actions class="justify-center">
      <v-btn
        color="error"
        @click="$router.push({ name: 'Staff-Profile-editProfile' })"
      >
        Edit Profile
        <v-icon right>fa-user-edit</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      uid: '2',
      firstname: 'Chayanon',
      lastname: 'Noisapung',
      address: 'Khlong Luang District, Pathumtani',
      email: 'example@gmail.com',
      phone: '0802534473',
    }
  },
}
</script>
