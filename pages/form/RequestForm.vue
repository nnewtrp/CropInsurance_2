<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="8">
      <v-container>
        <ValidateSB />
        <SubmitSB />
        <RForm />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import RForm from '~/components/form/RForm.vue'
import ValidateSB from '~/components/Snackbar/ValidateSB.vue'
import SubmitSB from '~/components/Snackbar/SubmitSB.vue'

export default {
  components: {
    RForm,
    ValidateSB,
    SubmitSB,
  },
}
</script>
