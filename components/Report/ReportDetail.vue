<template>
  <v-card class="pa-3">
    <div v-for="item in reports" :key="item.id">
      <v-card-title v-if="item.id == $route.params.detail" class="headline">
        <v-icon color="black">fa-clipboard-list</v-icon>
        &ensp;<b>Report {{ item.id }}:</b>
      </v-card-title>
      <v-card-text v-if="item.id == $route.params.detail" class="subheading">
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Submit Date:</b> &ensp;{{ item.date }}
        </div>
        <div
          class="text--primary pb-4 font-weight-bold"
          style="font-size: 16px"
        >
          Status: &ensp;
          <v-chip :color="getSColor(item.status)">
            {{ item.status }}
          </v-chip>
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Detail:</b> &ensp;{{ item.detail }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Address:</b> &ensp;{{ item.detail }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Location:</b> &ensp;{{ item.detail }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Image:</b> &ensp;{{ item.detail }}
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      reports: [
        {
          id: 1,
          title: 'Flood',
          date: '12-01-2022',
          status: 'In Progress',
          detail: '',
        },
        {
          id: 2,
          title: 'Flood',
          date: '13-01-2022',
          status: 'In Progress',
          detail: '',
        },
        {
          id: 3,
          title: 'Flood',
          date: '14-01-2022',
          status: 'New Case',
          detail: '',
        },
        {
          id: 4,
          title: 'Flood',
          date: '14-01-2022',
          status: 'New Case',
          detail: '',
        },
      ],
    }
  },
  methods: {
    getSColor(status) {
      if (status === 'New Case') return 'info'
      else if (status === 'In Progress') return 'warning'
      else if (status === 'Complete') return 'success'
      else if (status === 'Cancel') return 'error'
    },
  },
}
</script>
