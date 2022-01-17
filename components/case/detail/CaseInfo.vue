<template>
  <v-card class="pa-3">
    <div v-for="item in cases" :key="item.id">
      <v-card-title v-if="item.id == $route.params.detail" class="headline">
        <v-icon color="black">fa-clipboard-list</v-icon>
        &ensp;Case ID: {{ item.id }}
      </v-card-title>
      <v-card-text v-if="item.id == $route.params.detail" class="subheading">
        <div class="text--primary pb-4 text-h6">
          Type: &ensp;{{ item.type }}
        </div>
        <div class="text--primary pb-4 text-h6">
          Submit Date: &ensp;{{ item.date }}
        </div>
        <div class="text--primary pb-4 text-h6">
          Priority: &ensp;
          <v-chip :color="getPColor(item.priority)">
            {{ getPName(item.priority) }}
          </v-chip>
        </div>
        <div class="text--primary pb-4 text-h6">
          Status: &ensp;
          <v-chip :color="getSColor(item.status)">
            {{ getSName(item.status) }}
          </v-chip>
        </div>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      cases: [
        {
          id: '20',
          type: 'Incident',
          date: '21-06-2021',
          priority: '1',
          status: '1',
          cdialog: false,
        },
        {
          id: '18',
          type: 'Request',
          date: '20-06-2021',
          priority: '2',
          status: '2',
          cdialog: false,
        },
        {
          id: '15',
          type: 'Incident',
          date: '15-06-2021',
          priority: '3',
          status: '3',
          cdialog: false,
        },
        {
          id: '14',
          type: 'Request',
          date: '14-06-2021',
          priority: '3',
          status: '1',
          cdialog: false,
        },
        {
          id: '13',
          type: 'Incident',
          date: '12-06-2021',
          priority: '2',
          status: '4',
          cdialog: false,
        },
      ],
    }
  },
  methods: {
    getPColor(priority) {
      if (priority === '1') return 'error'
      else if (priority === '2') return 'warning'
      else if (priority === '3') return 'info'
    },
    getSColor(status) {
      if (status === '1') return 'info'
      else if (status === '2') return 'warning'
      else if (status === '3') return 'success'
      else if (status === '4') return 'error'
    },
    getPName(priority) {
      if (priority === '1') return 'High'
      else if (priority === '2') return 'Medium'
      else if (priority === '3') return 'Low'
    },
    getSName(status) {
      if (status === '1') return 'New Case'
      else if (status === '2') return 'In Progress'
      else if (status === '3') return 'Complete'
      else if (status === '4') return 'Cancel'
    },
  },
}
</script>
