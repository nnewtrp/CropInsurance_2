<template>
  <v-app light>
    <v-app-bar app class="primary">
      <v-toolbar-title style="color: white; font-weight: bold" v-text="title" />
      <v-spacer />
      <v-btn
        color="white"
        class="mr-2 hidden-xs-only"
        depressed
        @click="$router.push({ name: 'Auth-signup' })"
      >
        Sign Up
      </v-btn>
      <v-btn
        color="white"
        class="mr-1 hidden-xs-only"
        depressed
        @click="$router.push({ name: 'Auth-login' })"
      >
        Log In
        <v-icon right>fas fa-sign-in-alt</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer class="primary">
      <span style="color: white">
        Crop Insurance System &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'AuthLayout',
  data() {
    return {
      title: 'Crop Insurance',
    }
  },
}
</script>

<style lang="scss" scoped>
.v-application {
  background-color: #f6e4cf !important;
}
</style>
