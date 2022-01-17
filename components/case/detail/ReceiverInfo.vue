<template>
  <v-card class="pa-3">
    <div v-for="item in receivers" :key="item.id">
      <div v-if="item.id == $route.params.detail">
        <v-card-title class="headline">
          <v-icon color="black">fa-user-check</v-icon>
          &ensp;Case Receiver's Information
        </v-card-title>
        <v-card-text class="subheading">
          <div class="text--primary pb-4">
            <strong>Name:</strong> &ensp;{{ item.name }}
          </div>
          <div class="text--primary pb-4">
            <strong>Email:</strong> &ensp;{{ item.email }}
          </div>
          <div class="text--primary pb-4">
            <strong>Phone No:</strong> &ensp;{{ item.phone }}
          </div>
          <div class="text--primary pb-4">
            <strong>Country:</strong> &ensp;{{ item.country }}
          </div>
          <div class="text--primary pb-4">
            <strong>Branch:</strong> &ensp;{{ item.branch }}
          </div>
        </v-card-text>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      receivers: [
        {
          id: '20',
          name: '',
          email: '',
          phone: '',
          country: '',
          branch: '',
        },
        {
          id: '18',
          name: 'Teerapat Satitporn',
          email: 'example2@gmail.com',
          phone: '0823648557',
          country: 'Thailand',
          branch: 'Silom',
        },
        {
          id: '15',
          name: 'Teerapat Satitporn',
          email: 'example2@gmail.com',
          phone: '0823648557',
          country: 'Thailand',
          branch: 'Silom',
        },
        {
          id: '14',
          name: '',
          email: '',
          phone: '',
          country: '',
          branch: '',
        },
        {
          id: '13',
          name: 'Teerapat Satitporn',
          email: 'example2@gmail.com',
          phone: '0823648557',
          country: 'Thailand',
          branch: 'Silom',
        },
      ],
    }
  },
}
</script>
