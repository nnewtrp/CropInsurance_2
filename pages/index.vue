<template>
  <v-row justify="center" align="center" class="py-16">
    <WelcomeCard sm="12" md="4" />
    <AllReportCard sm="12" md="8" />
  </v-row>
</template>

<script>
import WelcomeCard from '~/components/WelcomeCard.vue'
import AllReportCard from '~/components/AllReportCard.vue'

export default {
  components: {
    WelcomeCard,
    AllReportCard,
  },
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
