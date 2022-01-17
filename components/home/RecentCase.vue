<template>
  <v-card class="pa-3">
    <v-card-title class="text-h4"> Recent Case </v-card-title>
    <v-card-text>
      <v-simple-table>
        <template #default>
          <thead>
            <tr>
              <th class="text-center text-h6">Case ID</th>
              <th class="text-center text-h6">Type</th>
              <th class="text-center text-h6">Submit Date</th>
              <th class="text-center text-h6">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in SortCases.slice(0, 3)" :key="item.id">
              <td class="text-center font-weight-bold">
                {{ item.id }}
              </td>
              <td class="text-center font-weight-bold">
                {{ item.type }}
              </td>
              <td class="text-center font-weight-bold">
                {{ item.date }}
              </td>
              <td class="text-center font-weight-bold">
                <v-chip :color="getSColor(item.status)">
                  {{ getSName(item.status) }}
                </v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-btn color="primary" nuxt to="/case">
        See All
        <v-icon right>fa-angle-double-right</v-icon>
      </v-btn>
    </v-card-actions>
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
          status: '1',
        },
        {
          id: '18',
          type: 'Request',
          date: '20-06-2021',
          status: '2',
        },
        {
          id: '15',
          type: 'Incident',
          date: '15-06-2021',
          status: '3',
        },
        {
          id: '14',
          type: 'Request',
          date: '14-06-2021',
          priority: 'Low',
          status: '1',
        },
        {
          id: '13',
          type: 'Incident',
          date: '12-06-2021',
          priority: 'Medium',
          status: '4',
        },
      ],
    }
  },
  computed: {
    SortCases() {
      const list = this.cases
      return list.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? -1 : 1))
    },
  },
  methods: {
    getSColor(status) {
      if (status === '1') return 'info'
      else if (status === '2') return 'warning'
      else if (status === '3') return 'success'
      else if (status === '4') return 'error'
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
