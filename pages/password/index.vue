<template>
  <v-row justify="center" align="center">
    <v-col cols="10" sm="8" md="6">
      <v-container>
        <ChangePassword />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import ChangePassword from '~/components/password/ChangePassword.vue'

export default {
  components: {
    ChangePassword,
  },
}
</script>
