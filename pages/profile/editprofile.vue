<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="8">
      <v-container>
        <EditProfile />
        <br />
        <Workplace />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import EditProfile from '~/components/profile/EditProfile.vue'
import Workplace from '~/components/profile/Workplace.vue'

export default {
  components: {
    EditProfile,
    Workplace,
  },
}
</script>
