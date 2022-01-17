<template>
  <div class="text-center">
    <v-menu offset-y rounded="lg">
      <template #activator="{ on, attrs }">
        <v-btn
          color="white primary--text font-weight-bold"
          dark
          v-bind="attrs"
          v-on="on"
        >
          New Case
          <v-icon right>fa-plus</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item v-for="item in forms" :key="item.title" :to="item.to">
          <v-list-item-title class="mx-auto font-weight-bold">
            {{ item.title }}
            <v-icon :color="item.color" right>fa-paper-plane</v-icon>
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      forms: [
        { title: 'Incident Case', to: '/form/IncidentForm', color: 'warning' },
        { title: 'Request Case', to: '/form/RequestForm', color: 'info' },
      ],
    }
  },
}
</script>
