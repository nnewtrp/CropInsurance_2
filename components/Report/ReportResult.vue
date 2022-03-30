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
      <v-card-actions
        v-if="item.status == 'New Case' && item.id == $route.params.detail"
      >
        <v-spacer />
        <v-dialog v-model="item.cdialog" width="600">
          <template #activator="{ on: dialog, attrs }">
            <v-tooltip top open-delay="200">
              <template #activator="{ on: tooltip }">
                <v-btn
                  slot="activator"
                  color="error"
                  v-bind="attrs"
                  v-on="{ ...dialog, ...tooltip }"
                >
                  Cancel
                  <v-icon right>fa-ban</v-icon>
                </v-btn>
              </template>
              <span>Cancel This Report</span>
            </v-tooltip>
          </template>
          <v-card>
            <v-card-title class="headline justify-center">
              Do you want to cancel this report?
            </v-card-title>
            <v-card-actions class="justify-center">
              <v-btn color="info" @click="item.cdialog = false">
                No
                <v-icon right>fa-times</v-icon>
              </v-btn>
              <v-btn color="error" @click="cancel(item)">
                Yes
                <v-icon right>fa-check</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-card-actions>
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
          receiver: 'Mr. Chayanon Noisapung',
          result: '5000 THB',
          cdialog: false,
        },
        {
          id: 2,
          status: 'In Progress',
          receiver: 'Mr. Chayanon Noisapung',
          result: '',
          cdialog: false,
        },
        {
          id: 3,
          status: 'New Case',
          receiver: '',
          result: '',
          cdialog: false,
        },
        {
          id: 4,
          status: 'New Case',
          receiver: '',
          result: '',
          cdialog: false,
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
    cancel(item) {
      item.cdialog = false
    },
  },
}
</script>
