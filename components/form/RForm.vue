<template>
  <v-card class="pa-3">
    <v-card-title v-if="isDisabled == false" class="text-h4 justify-center">
      Request Case Form
    </v-card-title>
    <v-card-title v-if="isDisabled == true" class="text-h4 justify-center">
      Submit Request Form
    </v-card-title>
    <v-form ref="form" v-model="valid" :disabled="isDisabled" lazy-validation>
      <v-card-title class="headline">
        <v-icon color="black">fa-user</v-icon>
        &ensp;Case Informer
      </v-card-title>
      <v-card-text class="subheading">
        <v-row wrap>
          <v-col cols="12" xs="8" sm="8" md="8">
            <v-text-field
              v-model="name"
              label="Full Name *"
              :rules="[rules.required]"
              readonly
              required
            ></v-text-field>
          </v-col>
          <v-col cols="12" xs="4" sm="4" md="4">
            <v-dialog v-model="sdialog" persistent width="600">
              <template #activator="{ on, attrs }">
                <v-btn
                  slot="activator"
                  color="info"
                  :disabled="isDisabled"
                  v-bind="attrs"
                  v-on="on"
                >
                  <v-icon left>fa-search</v-icon>
                  Search Name
                </v-btn>
              </template>
              <v-card>
                <v-form ref="search">
                  <v-card-title class="headline justify-center">
                    Search Informer Name
                  </v-card-title>
                  <v-card-text>
                    <v-autocomplete
                      v-model="namesearch"
                      :rules="[rules.required]"
                      :items="NameList"
                      label="Full Name *"
                      prepend-icon="fa-user"
                      required
                    ></v-autocomplete>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn color="error" text @click="cancel"> Cancel </v-btn>
                    <v-spacer />
                    <v-btn color="success" @click="select">
                      Select
                      <v-icon right>fa-check</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-form>
              </v-card>
            </v-dialog>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-title class="headline">
        <v-icon color="black">fa-map-marker-alt</v-icon>
        &ensp;Current Workplace
      </v-card-title>
      <v-card-text class="subheading">
        <v-autocomplete
          v-model="country"
          :rules="[rules.required]"
          :items="CountryList"
          label="Country *"
          required
        ></v-autocomplete>
        <v-autocomplete
          v-model="branch"
          :rules="[rules.required]"
          :items="BranchList"
          label="Branch *"
          required
        ></v-autocomplete>
        <v-autocomplete
          v-model="department"
          :rules="[rules.required]"
          :items="DepartmentList"
          label="Department *"
          required
        ></v-autocomplete>
      </v-card-text>
      <v-card-title class="headline">
        <v-icon color="black">fa-file-alt</v-icon>
        &ensp;Request Form
      </v-card-title>
      <v-card-text class="subheading">
        <v-autocomplete
          v-model="system"
          :rules="[rules.required]"
          :items="SystemList"
          label="System *"
          required
        ></v-autocomplete>
        <v-autocomplete
          v-model="topic"
          :rules="[rules.required]"
          :items="TopicList"
          label="Topic *"
          required
        ></v-autocomplete>
        <v-textarea
          v-model="description"
          label="Description *"
          :rules="[rules.required]"
          required
        ></v-textarea>
        <v-radio-group
          v-model="priority"
          label="Priority *"
          row
          :rules="[rules.required]"
          required
        >
          <v-radio label="High" color="error" value="1"></v-radio>
          <v-radio label="Medium" color="warning" value="2"></v-radio>
          <v-radio label="Low" color="info" value="3"></v-radio>
        </v-radio-group>
        <v-file-input
          v-model="file"
          chips
          multiple
          label="File (Optional)"
          prepend-icon="fa-paperclip"
        ></v-file-input>
        <v-textarea
          v-model="note"
          label="Note (Optional)"
          prepend-icon="far fa-sticky-note"
          rows="2"
        ></v-textarea>
        <v-textarea
          v-model="ccmail"
          label="CC Mail (Optional)"
          prepend-icon="far fa-envelope"
          rows="1"
          hint="Use , for more than one cc mail"
          persistent-hint
        ></v-textarea>
      </v-card-text>
      <v-card-actions v-if="isDisabled == false" class="justify-center">
        <v-btn :disabled="!valid" color="success" @click="submit">
          Submit
        </v-btn>
      </v-card-actions>
      <v-card-actions v-else class="justify-center">
        <v-btn color="error" @click="isDisabled = false">
          Edit
          <v-icon right>fa-pencil-alt</v-icon>
        </v-btn>
        <v-btn color="primary" @click="send">
          Send
          <v-icon right>fa-paper-plane</v-icon>
        </v-btn>
      </v-card-actions>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Data
      name: 'Teerapat Satitporn',
      country: 'Thailand',
      branch: 'Silom',
      department: 'IT',
      topic: '',
      system: '',
      description: '',
      priority: '',
      file: null,
      note: '',
      ccmail: '',
      // Search
      namesearch: '',
      SearchList: [
        {
          name: 'Teerapat Satitporn',
          country: 'Thailand',
          branch: 'Silom',
          department: 'IT',
        },
        {
          name: 'John Doe',
          country: 'Thailand',
          branch: 'Silom',
          department: 'HR',
        },
        {
          name: 'John Smith',
          country: 'Thailand',
          branch: 'Sathorn',
          department: 'Engineer',
        },
      ],
      // List
      CountryList: ['Thailand', 'Cambodia', 'Malaysia', 'China'],
      BranchList: ['Silom', 'Sathorn', 'Bang Phli'],
      DepartmentList: ['IT', 'Accounting', 'HR', 'Engineer'],
      TopicList: ['Topic1', 'Topic2', 'Topic3', 'Topic4'],
      SystemList: ['System1', 'System2', 'System3', 'System4'],
      // Command
      sdialog: false,
      valid: true,
      isDisabled: false,
      rules: {
        required: (value) => !!value || 'This field is required.',
      },
    }
  },
  computed: {
    NameList() {
      const list = []
      for (const i in this.SearchList) {
        list.push(this.SearchList[i].name)
      }
      return list
    },
    SendSB: {
      get() {
        return this.$store.state.snackbar.SendSB
      },
      set(val) {
        this.$store.dispatch('snackbar/setSendSB', val, { root: true })
      },
    },
    ValidateSB: {
      get() {
        return this.$store.state.snackbar.ValidateSB
      },
      set(val) {
        this.$store.dispatch('snackbar/setValidateSB', val, { root: true })
      },
    },
    SubmitSB: {
      get() {
        return this.$store.state.snackbar.SubmitSB
      },
      set(val) {
        this.$store.dispatch('snackbar/setSubmitSB', val, { root: true })
      },
    },
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.isDisabled = true
        this.$vuetify.goTo(10, 1000)
        this.SubmitSB = true
      } else {
        this.$vuetify.goTo(400, 1000)
        this.ValidateSB = true
      }
    },
    select() {
      if (this.$refs.search.validate()) {
        this.name = this.namesearch
        for (const i in this.SearchList) {
          if (this.SearchList[i].name === this.namesearch) {
            this.country = this.SearchList[i].country
            this.branch = this.SearchList[i].branch
            this.department = this.SearchList[i].department
          }
        }
        this.sdialog = false
        this.$refs.search.reset()
      }
    },
    cancel() {
      this.sdialog = false
      this.$refs.search.reset()
    },
    send() {
      this.SendSB = true
      this.$router.push({
        name: 'index',
      })
    },
  },
}
</script>
