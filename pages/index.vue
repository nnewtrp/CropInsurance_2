<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="12" md="7" class="my-10">
      <WelcomeCard />
    </v-col>
    <v-col cols="12" sm="12" md="5" class="my-10">
      <AllReportCard />
    </v-col>
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
