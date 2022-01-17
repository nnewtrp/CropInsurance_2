<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="8">
      <v-container>
        <UpdateProfileSB />
        <v-layout row>
          <v-col cols="12" sm="4" md="4">
            <UserImage />
          </v-col>
          <v-col cols="12" sm="8" md="8">
            <UserInfo />
          </v-col>
        </v-layout>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import UserInfo from '~/components/profile/UserInfo.vue'
import UserImage from '~/components/profile/UserImage.vue'
import UpdateProfileSB from '~/components/Snackbar/UpdateProfileSB.vue'

export default {
  components: {
    UserInfo,
    UserImage,
    UpdateProfileSB,
  },
}
</script>
