<template>
  <v-card class="pa-3">
    <div v-for="item in details" :key="item.id">
      <div v-if="item.id == $route.params.detail">
        <v-card-title class="headline">
          <v-icon color="black">fa-user</v-icon>
          &ensp;Case Informer
        </v-card-title>
        <v-card-text class="subheading">
          <div class="text--primary pb-4">
            <strong>Name:</strong> &ensp;{{ item.name }}
          </div>
        </v-card-text>
        <v-card-title class="headline">
          <v-icon color="black">fa-map-marker-alt</v-icon>
          &ensp;Current Workplace
        </v-card-title>
        <v-card-text class="subheading">
          <div class="text--primary pb-4">
            <strong>Country:</strong> &ensp;{{ item.country }}
          </div>
          <div class="text--primary pb-4">
            <strong>Branch:</strong> &ensp;{{ item.branch }}
          </div>
          <div class="text--primary pb-4">
            <strong>Department:</strong> &ensp;{{ item.department }}
          </div>
        </v-card-text>
        <v-card-title class="headline">
          <v-icon color="black">fa-file-alt</v-icon>
          &ensp;Request Form
        </v-card-title>
        <v-card-text class="subheading">
          <div class="text--primary pb-4">
            <strong>System:</strong> &ensp;{{ item.system }}
          </div>
          <div class="text--primary pb-4">
            <strong>Topic:</strong> &ensp;{{ item.topic }}
          </div>
          <div class="text--primary pb-4">
            <strong>Description:</strong> &ensp;{{ item.description }}
          </div>
          <div v-if="item.file != null" class="text--primary pb-4">
            <v-icon>fa-paperclip</v-icon>
            &nbsp;<strong>File:</strong> &ensp;
            <v-chip v-for="file in item.file" :key="file" color="gray">
              {{ file }}
            </v-chip>
          </div>
          <div v-if="item.note != ''" class="text--primary pb-4">
            <v-icon>far fa-sticky-note</v-icon>
            &nbsp;<strong>Note:</strong> &ensp;{{ item.note }}
          </div>
          <div v-if="item.ccmail != null" class="text--primary pb-4">
            <v-icon>far fa-envelope</v-icon>
            &nbsp;<strong>CC Mail:</strong> &ensp;
            <v-chip v-for="ccmail in item.ccmail" :key="ccmail" color="gray">
              {{ ccmail }}
            </v-chip>
          </div>
        </v-card-text>
        <v-card-actions>
          <v-spacer />
          <v-dialog v-model="item.cdialog" width="600">
            <template #activator="{ on, attrs }">
              <v-btn
                v-if="item.status == '1'"
                slot="activator"
                color="error"
                v-bind="attrs"
                v-on="on"
              >
                Cancel Case
                <v-icon right>fa-ban</v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title class="headline justify-center">
                Do you want to cancel this case?
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
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Data
      details: [
        {
          id: '18',
          name: 'Teerapat Satitporn',
          country: 'Thailand',
          branch: 'Silom',
          department: 'IT',
          system: '',
          topic: '',
          description: '',
          file: ['image4.png', 'image5.jpg'],
          note: '',
          ccmail: null,
          status: '2',
          cdialog: false,
        },
        {
          id: '14',
          name: 'Teerapat Satitporn',
          country: 'Thailand',
          branch: 'Silom',
          department: 'IT',
          system: '',
          topic: '',
          description: '',
          file: null,
          note: 'Add some note',
          ccmail: null,
          status: '1',
          cdialog: false,
        },
      ],
    }
  },
  computed: {
    CancelSB: {
      get() {
        return this.$store.state.snackbar.CancelSB
      },
      set(val) {
        this.$store.dispatch('snackbar/setCancelSB', val, { root: true })
      },
    },
  },
  methods: {
    cancel(item) {
      item.cdialog = false
      this.CancelSB = true
    },
  },
}
</script>
