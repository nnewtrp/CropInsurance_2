<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
      class="white hidden-sm-and-up"
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon class="sidetext">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content class="sidetext">
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar :clipped-left="clipped" fixed app class="primary">
      <v-app-bar-nav-icon
        class="bartext hidden-sm-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title class="bartext" v-text="title" />
      <v-spacer />
      <v-btn text color="white" class="hidden-xs-only" to="/" depressed rounded>
        <v-icon left>fa-home</v-icon>
        Home
      </v-btn>
      <v-btn
        text
        color="white"
        class="mr-3 hidden-xs-only"
        to="/case"
        depressed
        rounded
      >
        <v-icon left>fa-clipboard-list</v-icon>
        Your Case
      </v-btn>
      <CaseMenuButton />
      <AvatarButton />
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app class="primary">
      <span class="bartext" @click="drawer = false">
        PCG &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
import CaseMenuButton from '~/components/navbar/CaseMenuButton.vue'
import AvatarButton from '~/components/navbar/AvatarButton.vue'

export default {
  components: {
    CaseMenuButton,
    AvatarButton,
  },
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'fa-home',
          title: 'Home',
          to: '/',
        },
        {
          icon: 'fa-clipboard-list',
          title: 'Your Case',
          to: '/case',
        },
        {
          icon: 'fa-user',
          title: 'Profile',
          to: '/profile',
        },
        {
          icon: 'fa-sign-out-alt',
          title: 'Log Out',
          to: '',
        },
      ],
      title: 'IT Help Desk System',
      // User
      firstname: 'Teerapat',
      lastname: 'Satitporn',
    }
  },
}
</script>

<style lang="scss" scoped>
.v-application {
  background-color: #eeeeee !important;
}
.sidetext {
  color: #18315a !important;
  font-weight: bold;
}
.bartext {
  color: white !important;
}
</style>
