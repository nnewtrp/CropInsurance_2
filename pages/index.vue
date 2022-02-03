<template>
  <v-row justify="center" align="center" class="py-16">
    <WelcomeCard md="4" />
    <AllReportCard md="8" />
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
