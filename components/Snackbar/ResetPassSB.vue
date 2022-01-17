<template>
  <v-snackbar
    v-model="ResetPassSB"
    top
    right
    color="success"
    class="mt-4"
    timeout="5000"
  >
    <span class="font-weight-bold text-h6">
      <v-icon left>fa-user-lock</v-icon>
      Your password has been reset
    </span>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    ResetPassSB() {
      return this.$store.state.snackbar.ResetPassSB
    },
  },
}
</script>
