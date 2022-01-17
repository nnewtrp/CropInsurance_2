<template>
  <v-snackbar
    v-model="UpdateProfileSB"
    top
    right
    color="success"
    class="mt-4"
    timeout="5000"
  >
    <span class="font-weight-bold text-h6">
      <v-icon left>fa-user-check</v-icon>
      Your profile has been updated
    </span>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    UpdateProfileSB() {
      return this.$store.state.snackbar.UpdateProfileSB
    },
  },
}
</script>
