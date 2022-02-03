<template>
  <v-card>
    <v-card-title class="justify-left">
      <div class="text-h4 pl-2 font-weight-bold text-decoration-underline">
        Your Reports
      </div>
    </v-card-title>
    <v-card-text>
      <v-row wrap>
        <v-col cols="12" xs="12" sm="4" md="3">
          <v-autocomplete
            v-model="filter"
            :items="filterList"
            label="Filter"
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
      :items="SortReports"
      :items-per-page="10"
      :search="searchValue"
      class="elevation-1 font-weight-bold"
    >
      <template #[`item.title`]="{ item }">
        {{ sliceTitle(item.title) }}
      </template>
      <template #[`item.status`]="{ item }">
        <v-chip :color="getSColor(item.status)">
          {{ item.status }}
        </v-chip>
      </template>
      <template #[`item.detail`]="{ item }">
        <v-tooltip top open-delay="200">
          <template #activator="{ on, attrs }">
            <v-btn
              fab
              x-small
              color="info"
              :to="ClickDetail(item.id)"
              v-bind="attrs"
              v-on="on"
            >
              <v-icon>fa-clipboard-list</v-icon>
            </v-btn>
          </template>
          <span>See Detail</span>
        </v-tooltip>
        <v-dialog v-model="item.cdialog" width="600">
          <template #activator="{ on: dialog, attrs }">
            <v-tooltip top open-delay="200">
              <template #activator="{ on: tooltip }">
                <v-btn
                  v-if="item.status == 'New Case'"
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
      filter: '',
      search: '',
      SearchList: [],
      // Report Data
      headers: [
        { text: 'ID', value: 'id', filterable: false },
        { text: 'Title', value: 'title', filterable: false },
        {
          text: 'Submit Date',
          value: 'date',
          filterable: false,
          sortable: false,
        },
        { text: 'Status', value: 'status', filterable: false },
        {
          text: 'Detail / Cancel',
          value: 'detail',
          filterable: false,
          sortable: false,
        },
      ],
      reports: [
        {
          id: 1,
          title: 'Flood',
          date: '12-01-2022',
          status: 'Complete',
          cdialog: false,
        },
        {
          id: 2,
          title: 'Flood',
          date: '13-01-2022',
          status: 'In Progress',
          cdialog: false,
        },
        {
          id: 3,
          title: 'Flood',
          date: '14-01-2022',
          status: 'New Case',
          cdialog: false,
        },
        {
          id: 4,
          title: 'Flood in my farm and it cause my work and it cause my work',
          date: '14-01-2022',
          status: 'New Case',
          cdialog: false,
        },
      ],
    }
  },
  computed: {
    filterList() {
      const list = []
      for (const i in this.headers) {
        if (this.headers[i].text !== 'Detail / Cancel') {
          list.push(this.headers[i].text)
        }
      }
      return list
    },
    SortReports() {
      const list = this.reports
      return list.sort((a, b) => (parseInt(a.id) > parseInt(b.id) ? -1 : 1))
    },
  },
  watch: {
    filter() {
      this.reportFilter(this.changeHeaderToValue(this.filter))
    },
    search() {
      this.searchValue = this.search
    },
  },
  methods: {
    getSColor(status) {
      if (status === 'New Case') return 'info'
      else if (status === 'In Progress') return 'warning'
      else if (status === 'Complete') return 'success'
      else if (status === 'Cancel') return 'error'
    },
    sliceTitle(title) {
      if (title.length < 28) return title
      else return title.slice(0, 28) + '...'
    },
    // Change
    ClickDetail(ReportID) {
      const path = '/Report/' + ReportID
      return path
    },
    reportFilter(item) {
      this.SearchList = []
      this.search = ''
      for (const i in this.headers) {
        if (this.headers[i].value === item) {
          this.headers[i].filterable = true
          for (const j in this.SortReports) {
            this.SearchList.push(`${this.SortReports[j][item]}`)
          }
        } else {
          this.headers[i].filterable = false
        }
      }
    },
    changeHeaderToValue(item) {
      for (const i in this.headers) {
        if (this.headers[i].text === item) {
          return this.headers[i].value
        }
      }
    },
    cancel(item) {
      item.cdialog = false
    },
  },
}
</script>
