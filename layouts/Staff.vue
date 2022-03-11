<template>
  <v-app light>
    <v-app-bar app class="primary">
      <v-toolbar-title style="color: white; font-weight: bold" v-text="title" />
      <v-spacer />
      <StaffAvatarMenu />
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
import StaffAvatarMenu from '~/components/navbar/StaffAvatarMenu.vue'

export default {
  name: 'StaffLayout',
  components: {
    StaffAvatarMenu,
  },
  data() {
    return {
      title: 'Crop Insurance',
      needReloading: ['Staff-Profile-editProfile'],
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
