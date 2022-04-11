<template>
  <v-row justify="center" align="center" class="py-16">
    <WelcomeCard sm="4" md="4" />
    <AllReportCard sm="8" md="8" />
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
