<template>
  <v-snackbar
    v-model="CancelSB"
    top
    right
    color="error"
    class="mt-4"
    timeout="5000"
  >
    <span class="font-weight-bold text-h6">
      <v-icon left>fa-check-circle</v-icon>
      Your case has been cancel
    </span>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    CancelSB() {
      return this.$store.state.snackbar.CancelSB
    },
  },
}
</script>
