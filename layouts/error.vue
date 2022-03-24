<template>
  <v-app dark>
    <h1 v-if="needReloading.includes($route.name)">
      {{ waiting }}
    </h1>
    <h1 v-else-if="error.statusCode === 404">
      {{ pageNotFound }}
    </h1>
    <h1 v-else>
      {{ otherError }}
    </h1>
    <NuxtLink to="/"> Home page </NuxtLink>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred',
      waiting: 'Waiting for page reloading...',
      needReloading: [],
    }
  },
  head() {
    let title = ''
    if (this.needReloading.includes(this.$route.name)) title = this.waiting
    else if (this.error.statusCode === 404) title = this.pageNotFound
    else title = this.otherError
    return {
      title,
    }
  },
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
