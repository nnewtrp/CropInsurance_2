<template>
  <v-snackbar
    v-model="SendSB"
    top
    right
    color="success"
    class="mt-4"
    timeout="5000"
  >
    <span class="font-weight-bold text-h6">
      <v-icon left>fa-check-circle</v-icon>
      Your case has been sent
    </span>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    SendSB() {
      return this.$store.state.snackbar.SendSB
    },
  },
}
</script>
