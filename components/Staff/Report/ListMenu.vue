<template>
  <v-card class="pa-3 primary">
    <v-card-text class="subheading">
      <v-layout row wrap>
        <v-flex md12>
          <v-card
            v-for="item in menus"
            :key="item.title"
            class="justify-center mb-5"
            :to="item.to"
          >
            <v-card-title
              class="font-weight-bold justify-center"
              style="font-size: 18px"
            >
              {{ item.title }}&nbsp;
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          to: '/Staff/Report',
          title: 'In Progress',
        },
        {
          to: '/Staff/Report/NewReport',
          title: 'New Report',
        },
        {
          to: '/Staff/Report/History',
          title: 'History',
        },
      ],
    }
  },
}
</script>
