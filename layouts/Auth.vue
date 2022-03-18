<template>
  <v-app light>
    <v-app-bar app class="primary">
      <v-toolbar-title style="color: white; font-weight: bold" v-text="title" />
      <v-spacer />
      <v-btn
        color="white"
        class="mr-2 hidden-xs-only"
        depressed
        href="/Auth/signup"
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
    <v-row v-if="$route.name === 'Auth-login'" wrap>
      <v-col cols="12" md="7" lg="7" class="white pt-15 d-none d-md-block">
        <AuthPicture />
      </v-col>
      <v-col cols="12" sm="12" md="5" lg="5">
        <v-main>
          <v-container>
            <Nuxt />
          </v-container>
        </v-main>
      </v-col>
    </v-row>
    <v-main v-else>
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
import AuthPicture from '~/components/Auth/AuthPicture.vue'

export default {
  name: 'AuthLayout',
  components: {
    AuthPicture,
  },
  data() {
    return {
      title: 'Crop Insurance',
      needReloading: ['Auth-signup'],
    }
  },
  watch: {
    $route() {
      if (this.needReloading.includes(this.$route.name)) location.reload()
    },
  },
}
</script>

<style lang="scss" scoped>
.v-application {
  background-color: #f6e4cf !important;
}
</style>
