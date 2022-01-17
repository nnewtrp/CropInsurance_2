<template>
  <v-card>
    <v-card-title class="justify-center">
      <div class="text-h4 pl-2">Your Sent Case</div>
    </v-card-title>
    <v-card-text>
      <v-row wrap>
        <v-col cols="12" xs="12" sm="4" md="3">
          <v-autocomplete
            v-model="searchBy"
            :items="SearchByList"
            label="Search By"
            clearable
          ></v-autocomplete>
        </v-col>
        <v-col cols="12" xs="12" sm="8" md="9">
          <v-autocomplete
            v-model="search"
            append-icon="fa-search"
            :items="SearchList"
            label="Search"
            single-line
            clearable
          ></v-autocomplete>
        </v-col>
      </v-row>
    </v-card-text>
    <v-data-table
      :headers="headers"
      :items="SortCases"
      :items-per-page="10"
      :search="searchValue"
      class="elevation-1 font-weight-bold"
    >
      <template #[`item.priority`]="{ item }">
        <v-chip :color="getPColor(item.priority)">
          {{ getPName(item.priority) }}
        </v-chip>
      </template>
      <template #[`item.status`]="{ item }">
        <v-chip :color="getSColor(item.status)">
          {{ getSName(item.status) }}
        </v-chip>
      </template>
      <template #[`item.button`]="{ item }">
        <v-tooltip top open-delay="200">
          <template #activator="{ on, attrs }">
            <v-btn
              fab
              x-small
              color="info"
              v-bind="attrs"
              v-on="on"
              @click="ClickDetail(item.id, item.type)"
            >
              <v-icon>fa-clipboard-list</v-icon>
            </v-btn>
          </template>
          <span>See Details</span>
        </v-tooltip>
        <v-dialog v-model="item.cdialog" width="600">
          <template #activator="{ on: dialog, attrs }">
            <v-tooltip top open-delay="200">
              <template #activator="{ on: tooltip }">
                <v-btn
                  v-if="item.status == '1'"
                  slot="activator"
                  fab
                  x-small
                  color="error"
                  v-bind="attrs"
                  v-on="{ ...dialog, ...tooltip }"
                >
                  <v-icon>fa-ban</v-icon>
                </v-btn>
                <v-btn v-else fab x-small depressed disabled>
                  <v-icon>fa-ban</v-icon>
                </v-btn>
              </template>
              <span>Cancel This Case</span>
            </v-tooltip>
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
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Search
      searchValue: '',
      searchBy: '',
      search: '',
      SearchList: [],
      // Case Data
      headers: [
        { text: 'Case ID', value: 'id', filterable: false },
        { text: 'Type', value: 'type', filterable: false },
        { text: 'Topic', value: 'topic', filterable: false },
        {
          text: 'Submit Date',
          value: 'date',
          filterable: false,
          sortable: false,
        },
        { text: 'Informer', value: 'informer', filterable: false },
        { text: 'Receiver', value: 'receiver', filterable: false },
        { text: 'Priority', value: 'priority', filterable: false },
        { text: 'Status', value: 'status', filterable: false },
        {
          text: 'Details / Cancel Case',
          value: 'button',
          filterable: false,
          sortable: false,
        },
      ],
      cases: [
        {
          id: '20',
          type: 'Incident',
          topic: 'Topic 2',
          date: '21-06-2021',
          informer: 'Teerapat Satitporn',
          receiver: '',
          priority: '1',
          status: '1',
          cdialog: false,
        },
        {
          id: '18',
          type: 'Request',
          topic: 'Topic 1',
          date: '20-06-2021',
          informer: 'Teerapat Satitporn',
          receiver: 'Teerapat Satitporn',
          priority: '2',
          status: '2',
          cdialog: false,
        },
        {
          id: '15',
          type: 'Incident',
          topic: 'Topic 3',
          date: '15-06-2021',
          informer: 'Teerapat Satitporn',
          receiver: 'Teerapat Satitporn',
          priority: '3',
          status: '3',
          cdialog: false,
        },
        {
          id: '14',
          type: 'Request',
          topic: 'Topic 4',
          date: '14-06-2021',
          informer: 'Teerapat Satitporn',
          receiver: '',
          priority: '3',
          status: '1',
          cdialog: false,
        },
        {
          id: '13',
          type: 'Incident',
          topic: 'Topic 2',
          date: '12-06-2021',
          informer: 'Teerapat Satitporn',
          receiver: 'Teerapat Satitporn',
          priority: '2',
          status: '4',
          cdialog: false,
        },
      ],
    }
  },
  computed: {
    SearchByList() {
      const list = []
      for (const i in this.headers) {
        if (this.headers[i].text !== 'Details / Cancel Case') {
          list.push(this.headers[i].text)
        }
      }
      return list
    },
    SortCases() {
      const list = this.cases
      return list.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? -1 : 1))
    },
    CancelSB: {
      get() {
        return this.$store.state.snackbar.CancelSB
      },
      set(val) {
        this.$store.dispatch('snackbar/setCancelSB', val, { root: true })
      },
    },
  },
  watch: {
    searchBy() {
      this.caseFilter(this.changeTextToValue(this.searchBy))
    },
    search() {
      if (this.searchBy === 'Priority') {
        this.searchValue = this.getPNumber(this.search)
      } else if (this.searchBy === 'Status') {
        this.searchValue = this.getSNumber(this.search)
      } else {
        this.searchValue = this.search
      }
    },
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
    getPNumber(priority) {
      if (priority === 'High') return '1'
      else if (priority === 'Medium') return '2'
      else if (priority === 'Low') return '3'
    },
    getSNumber(status) {
      if (status === 'New Case') return '1'
      else if (status === 'In Progress') return '2'
      else if (status === 'Complete') return '3'
      else if (status === 'Cancel') return '4'
    },
    ClickDetail(CaseID, CaseType) {
      this.$router.push({
        name: 'case-detail',
        params: {
          detail: CaseID,
        },
        query: {
          type: CaseType,
        },
      })
    },
    caseFilter(item) {
      this.SearchList = []
      this.search = ''
      for (const i in this.headers) {
        if (this.headers[i].value === item) {
          this.headers[i].filterable = true
          if (item === 'priority') {
            for (const j in this.SortCases) {
              this.SearchList.push(this.getPName(`${this.SortCases[j][item]}`))
            }
          } else if (item === 'status') {
            for (const j in this.SortCases) {
              this.SearchList.push(this.getSName(`${this.SortCases[j][item]}`))
            }
          } else {
            for (const j in this.SortCases) {
              this.SearchList.push(`${this.SortCases[j][item]}`)
            }
          }
        } else {
          this.headers[i].filterable = false
        }
      }
    },
    changeTextToValue(item) {
      for (const i in this.headers) {
        if (this.headers[i].text === item) {
          return this.headers[i].value
        }
      }
    },
    cancel(item) {
      item.cdialog = false
      this.CancelSB = true
    },
  },
}
</script>
