<template>
  <v-card class="pa-3">
    <div v-for="item in reports" :key="item.id">
      <v-card-title
        v-if="item.id == $route.params.detail"
        class="text--primary pb-4 font-weight-bold"
      >
        Report Status: &ensp;
        <v-chip :color="getSColor(item.status)">
          {{ item.status }}
        </v-chip>
      </v-card-title>
      <v-card-text v-if="item.id == $route.params.detail" class="subheading">
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Staff Receiver:</b> &ensp;{{ item.receiver }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Result:</b> &ensp;{{ item.result }}
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
          status: 'Complete',
          receiver: 'Chayanon Noisapung',
          result: '5000 THB',
        },
        {
          id: 2,
          status: 'In Progress',
          receiver: 'Chayanon Noisapung',
          result: '',
        },
        {
          id: 3,
          status: 'New Case',
          receiver: '',
          result: '',
        },
        {
          id: 4,
          status: 'New Case',
          receiver: '',
          result: '',
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
