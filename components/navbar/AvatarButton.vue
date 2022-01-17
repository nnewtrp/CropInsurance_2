<template>
  <div class="text-center">
    <v-menu offset-y min-width="200px" rounded="lg">
      <template #activator="{ on, attrs }">
        <v-btn icon x-large class="ml-5" v-bind="attrs" v-on="on">
          <v-avatar color="accent">
            <span class="white--text text-h5">
              {{ firstname.substring(0, 1) }}{{ lastname.substring(0, 1) }}
            </span>
          </v-avatar>
        </v-btn>
      </template>
      <v-card>
        <v-list-item-content class="justify-center">
          <div class="mx-auto text-center">
            <h3>{{ firstname }} {{ lastname }}</h3>
            <p class="text-caption mt-1">{{ email }}</p>
            <div v-for="item in menus" :key="item.title">
              <v-divider class="my-3"></v-divider>
              <v-btn depressed rounded text :to="item.to">
                {{ item.title }}
                <v-icon right>{{ item.icon }}</v-icon>
              </v-btn>
            </div>
          </div>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        { title: 'Profile', to: '/profile', icon: 'fa-user' },
        { title: 'Change Password', to: '/password', icon: 'fa-lock' },
        { title: 'Logout', to: '', icon: 'fa-sign-out-alt' },
      ],
      // User
      firstname: 'Teerapat',
      lastname: 'Satitporn',
      email: 'example@gmail.com',
    }
  },
}
</script>
