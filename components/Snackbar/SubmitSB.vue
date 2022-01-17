<template>
  <v-snackbar
    v-model="SubmitSB"
    top
    right
    color="info"
    class="mt-4"
    timeout="5000"
  >
    <span class="font-weight-bold text-h6">
      <v-icon left>fa-info-circle</v-icon>
      Please verify your information before sending the case.
    </span>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    SubmitSB() {
      return this.$store.state.snackbar.SubmitSB
    },
  },
}
</script>
