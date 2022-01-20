<template>
  <v-app light>
    <v-app-bar app class="primary">
      <v-toolbar-title style="color: white; font-weight: bold" v-text="title" />
      <v-spacer />
      <v-btn
        text
        color="white"
        class="mr-2 hidden-xs-only"
        to="/Form"
        depressed
        rounded
      >
        <v-icon left>fa-plus</v-icon>
        New Report
      </v-btn>
      <v-btn
        text
        color="white"
        class="mr-1 hidden-xs-only"
        to="/Report"
        depressed
        rounded
      >
        <v-icon left>fa-clipboard-list</v-icon>
        All Report
      </v-btn>
      <AvatarMenu />
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
import AvatarMenu from '~/components/navbar/AvatarMenu.vue'

export default {
  name: 'DefaultLayout',
  components: {
    AvatarMenu,
  },
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
