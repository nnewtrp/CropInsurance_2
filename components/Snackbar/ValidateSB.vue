<template>
  <v-snackbar
    v-model="ValidateSB"
    top
    right
    color="warning"
    class="mt-4"
    timeout="5000"
  >
    <span class="font-weight-bold text-h6">
      <v-icon left>fa-exclamation-triangle</v-icon>
      Please fill in the following information completely
    </span>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    ValidateSB() {
      return this.$store.state.snackbar.ValidateSB
    },
  },
}
</script>
