<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="7" class="my-10">
      <ReportForm />
    </v-col>
  </v-row>
</template>

<script>
import ReportForm from '~/components/Form/ReportForm.vue'

export default {
  components: {
    ReportForm,
  },
}
</script>
