<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="12">
      <v-container>
        <CancelSB />
        <CaseList />
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
import CaseList from '~/components/case/CaseList.vue'
import CancelSB from '~/components/Snackbar/CancelSB.vue'

export default {
  components: {
    CaseList,
    CancelSB,
  },
}
</script>
