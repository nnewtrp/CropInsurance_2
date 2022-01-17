<template>
  <v-card class="pa-3">
    <v-card-title class="headline">
      <v-icon color="black">fa-user</v-icon>
      &ensp;User Information
    </v-card-title>
    <v-card-text class="subheading">
      <div class="text--primary pb-4">
        <strong>Name:</strong> &ensp;{{ firstname }} {{ lastname }}
      </div>
      <div class="text--primary pb-4">
        <strong>Username:</strong> &ensp;@{{ username }}
      </div>
      <div class="text--primary pb-4">
        <strong>Gender:</strong> &ensp;{{ gender }}
      </div>
    </v-card-text>
    <v-card-title class="headline">
      <v-icon color="black">fa-map-marker-alt</v-icon>
      &ensp;Workplace
    </v-card-title>
    <v-card-text class="subheading">
      <div class="text--primary pb-4">
        <strong>Country:</strong> &ensp;{{ country }}
      </div>
      <div class="text--primary pb-4">
        <strong>Branch:</strong> &ensp;{{ branch }}
      </div>
      <div class="text--primary pb-4">
        <strong>Department:</strong> &ensp;{{ department }}
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
    <v-card-actions class="justify-center">
      <v-btn color="error" nuxt to="/profile/editprofile">
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
      uid: '1',
      firstname: 'Teerapat',
      lastname: 'Satitporn',
      username: 'newtrp',
      gender: 'Male',
      country: 'Thailand',
      branch: 'Silom',
      department: 'IT',
      email: 'example@gmail.com',
      phone: '0802534473',
    }
  },
}
</script>
