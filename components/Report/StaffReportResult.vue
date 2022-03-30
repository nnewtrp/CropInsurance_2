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
    <v-card-actions v-if="getStatus($route.params.detail) == 'New Case'">
      <v-spacer />
      <v-dialog v-model="sdialog" width="600">
        <template #activator="{ on: dialog, attrs }">
          <v-tooltip top open-delay="200">
            <template #activator="{ on: tooltip }">
              <v-btn
                slot="activator"
                color="warning"
                v-bind="attrs"
                v-on="{ ...dialog, ...tooltip }"
              >
                Select
                <v-icon right>far fa-check-circle</v-icon>
              </v-btn>
            </template>
            <span>Select This Report</span>
          </v-tooltip>
        </template>
        <v-card>
          <v-card-title class="headline justify-center">
            Do you want to select this report?
          </v-card-title>
          <v-card-actions class="justify-center">
            <v-btn color="error" @click="sdialog = false">
              No
              <v-icon right>fa-times</v-icon>
            </v-btn>
            <v-btn color="success" @click="select">
              Yes
              <v-icon right>fa-check</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-card-actions>
    <v-card-actions v-if="getStatus($route.params.detail) == 'In Progress'">
      <v-spacer />
      <v-dialog v-model="rdialog" persistent width="600">
        <template #activator="{ on: dialog, attrs }">
          <v-tooltip top open-delay="200">
            <template #activator="{ on: tooltip }">
              <v-btn
                slot="activator"
                color="success"
                v-bind="attrs"
                v-on="{ ...dialog, ...tooltip }"
              >
                Finish
                <v-icon right>far fa-check-circle</v-icon>
              </v-btn>
            </template>
            <span>Finish This Report</span>
          </v-tooltip>
        </template>
        <v-card>
          <v-form ref="form">
            <v-card-title class="headline justify-center">
              Add Report Result
            </v-card-title>
            <v-card-text>
              <v-textarea
                v-model="result"
                :rules="[rules.required]"
                label="Result *"
                outlined
                prepend-icon="fa-sticky-note"
                rows="4"
                required
              ></v-textarea>
              <v-file-input
                v-model="file"
                chips
                multiple
                label="Add File (Optional)"
                outlined
                prepend-icon="fa-paperclip"
              ></v-file-input>
            </v-card-text>
            <v-card-actions>
              <v-btn color="error" text @click="cancel"> Cancel </v-btn>
              <v-spacer />
              <v-btn color="success" @click="submit">
                Submit
                <v-icon right>fa-check</v-icon>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-dialog>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Report Result
      result: '',
      file: null,
      // Command
      rdialog: false,
      sdialog: false,
      rules: {
        required: (value) => !!value || 'This field is required.',
      },
      // Data
      reports: [
        {
          id: 1,
          status: 'Complete',
          receiver: 'Mr. Chayanon Noisapung',
          result: '5000 THB',
        },
        {
          id: 2,
          status: 'In Progress',
          receiver: 'Mr. Chayanon Noisapung',
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
    select() {
      this.sdialog = false
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.rdialog = false
        this.$refs.form.reset()
      }
    },
    cancel() {
      this.rdialog = false
      this.$refs.form.resetValidation()
    },
    getStatus(id) {
      let status = ''
      for (const i in this.reports) {
        if (this.reports[i].id === parseInt(id)) {
          status = this.reports[i].status
        }
      }
      return status
    },
  },
}
</script>
