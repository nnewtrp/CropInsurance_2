<template>
  <v-card class="primary">
    <v-card-title class="headline">
      <h2 style="font-weight: bold; color: white" class="mx-4 mt-4">
        Latest Report
      </h2>
    </v-card-title>
    <v-simple-table class="mx-4 my-4">
      <template #default>
        <thead>
          <tr>
            <th class="text-left">ID</th>
            <th class="text-left">Title</th>
            <th class="text-left">Date</th>
            <th class="text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in SortReports.slice(0, 3)" :key="item.id">
            <td style="font-weight: bold">{{ item.id }}</td>
            <td style="font-weight: bold">{{ item.title }}</td>
            <td style="font-weight: bold">{{ item.date }}</td>
            <td style="font-weight: bold">
              <v-chip :color="getSColor(item.status)">
                {{ item.status }}
              </v-chip>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <v-card-actions>
      <v-spacer />
      <v-btn
        large
        outlined
        color="white"
        class="mx-5 mt-2 mb-4"
        to="/AllReport"
      >
        See All Reports
        <v-icon color="white" right>fa-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
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
        },
        {
          id: 2,
          title: 'Flood',
          date: '13-01-2022',
          status: 'In Progress',
        },
        {
          id: 3,
          title: 'Flood',
          date: '14-01-2022',
          status: 'New Case',
        },
        {
          id: 4,
          title: 'Flood',
          date: '14-01-2022',
          status: 'New Case',
        },
      ],
    }
  },
  computed: {
    SortReports() {
      const list = this.reports
      return list.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? -1 : 1))
    },
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
