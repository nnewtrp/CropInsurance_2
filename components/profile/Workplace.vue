<template>
  <v-card class="pa-3">
    <v-card-title class="headline">
      <v-icon color="black">fa-map-marker-alt</v-icon>
      &ensp;All Workplaces
      <v-spacer />
      <div class="pl-3">
        <v-dialog v-model="wpdialog" persistent width="600">
          <template #activator="{ on: dialog, attrs }">
            <v-tooltip top open-delay="200">
              <template #activator="{ on: tooltip }">
                <v-btn
                  slot="activator"
                  color="info"
                  v-bind="attrs"
                  v-on="{ ...dialog, ...tooltip }"
                >
                  Add
                  <v-icon right>fa-plus</v-icon>
                </v-btn>
              </template>
              <span>Add New Workplace</span>
            </v-tooltip>
          </template>
          <v-card>
            <v-form ref="addwp">
              <v-card-title class="headline justify-center">
                Add New Workplace
              </v-card-title>
              <v-card-text>
                <v-text-field
                  v-model="addWPName"
                  :rules="[rules.required]"
                  label="Workplace Name *"
                  prepend-icon="fa-map-marker-alt"
                  required
                ></v-text-field>
                <v-autocomplete
                  v-model="addCountry"
                  :rules="[rules.required]"
                  :items="CountryList"
                  label="Country *"
                  required
                ></v-autocomplete>
                <v-autocomplete
                  v-model="addBranch"
                  :rules="[rules.required]"
                  :items="BranchList"
                  label="Branch *"
                  required
                ></v-autocomplete>
                <v-autocomplete
                  v-model="addDepartment"
                  :rules="[rules.required]"
                  :items="DepartmentList"
                  label="Department *"
                  required
                ></v-autocomplete>
              </v-card-text>
              <v-card-actions>
                <v-btn color="error" text @click="addCancel"> Cancel </v-btn>
                <v-spacer />
                <v-btn color="info" @click="add">
                  Add
                  <v-icon right>fa-plus</v-icon>
                </v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-dialog>
      </div>
    </v-card-title>
    <v-form ref="wpform" readonly>
      <v-expansion-panels accordion>
        <v-expansion-panel v-for="item in UserWorkplace" :key="item.wpid">
          <v-expansion-panel-header>{{ item.wpname }}</v-expansion-panel-header>
          <v-expansion-panel-content class="subheading">
            <v-text-field
              v-model="item.wpname"
              :rules="[rules.required]"
              label="Workplace Name *"
              prepend-icon="fa-briefcase"
              required
            ></v-text-field>
            <v-autocomplete
              v-model="item.country"
              :rules="[rules.required]"
              :items="CountryList"
              label="Country *"
              required
            ></v-autocomplete>
            <v-autocomplete
              v-model="item.branch"
              :rules="[rules.required]"
              :items="BranchList"
              label="Branch *"
              required
            ></v-autocomplete>
            <v-autocomplete
              v-model="item.department"
              :rules="[rules.required]"
              :items="DepartmentList"
              label="Department *"
              required
            ></v-autocomplete>
            <div class="pl-3" align="right">
              <v-dialog v-model="item.editdialog" persistent width="600">
                <template #activator="{ on: dialog, attrs }">
                  <v-tooltip top open-delay="200">
                    <template #activator="{ on: tooltip }">
                      <v-btn
                        slot="activator"
                        color="warning"
                        v-bind="attrs"
                        v-on="{ ...dialog, ...tooltip }"
                        @click="editData(item)"
                      >
                        Edit
                        <v-icon right>fa-pencil-alt</v-icon>
                      </v-btn>
                    </template>
                    <span>Edit This Workplace</span>
                  </v-tooltip>
                </template>
                <v-card>
                  <v-form ref="editwp" v-model="editValid">
                    <v-card-title class="headline justify-center">
                      Edit Workplace
                    </v-card-title>
                    <v-card-text>
                      <v-text-field
                        v-model="editWPName"
                        :rules="[rules.required]"
                        label="Workplace Name *"
                        prepend-icon="fa-briefcase"
                        required
                      ></v-text-field>
                      <v-autocomplete
                        v-model="editCountry"
                        :rules="[rules.required]"
                        :items="CountryList"
                        label="Country *"
                        required
                      ></v-autocomplete>
                      <v-autocomplete
                        v-model="editBranch"
                        :rules="[rules.required]"
                        :items="BranchList"
                        label="Branch *"
                        required
                      ></v-autocomplete>
                      <v-autocomplete
                        v-model="editDepartment"
                        :rules="[rules.required]"
                        :items="DepartmentList"
                        label="Department *"
                        required
                      ></v-autocomplete>
                    </v-card-text>
                    <v-card-actions>
                      <v-btn color="error" text @click="editCancel(item)">
                        Cancel
                      </v-btn>
                      <v-spacer />
                      <v-btn
                        color="success"
                        :disabled="!editValid"
                        @click="editSave(item)"
                      >
                        Save
                        <v-icon right>fa-save</v-icon>
                      </v-btn>
                    </v-card-actions>
                  </v-form>
                </v-card>
              </v-dialog>
              <v-dialog v-model="item.deldialog" width="600">
                <template #activator="{ on: dialog, attrs }">
                  <v-tooltip top open-delay="200">
                    <template #activator="{ on: tooltip }">
                      <v-btn
                        slot="activator"
                        color="error"
                        v-bind="attrs"
                        v-on="{ ...dialog, ...tooltip }"
                      >
                        Delete
                        <v-icon right>fa-trash</v-icon>
                      </v-btn>
                    </template>
                    <span>Delete This Workplace</span>
                  </v-tooltip>
                </template>
                <v-card>
                  <v-card-title class="headline justify-center">
                    Do you want to delete this workplace?
                  </v-card-title>
                  <v-card-actions class="justify-center">
                    <v-btn color="info" @click="item.deldialog = false">
                      No
                      <v-icon right>fa-times</v-icon>
                    </v-btn>
                    <v-btn color="error" @click="item.deldialog = false">
                      Yes
                      <v-icon right>fa-check</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
              <v-tooltip top open-delay="200">
                <template #activator="{ on, attrs }">
                  <v-btn
                    slot="activator"
                    color="success"
                    v-bind="attrs"
                    v-on="on"
                    @click="select(item)"
                  >
                    Select
                    <v-icon right>fa-check</v-icon>
                  </v-btn>
                </template>
                <span>Select This Workplace</span>
              </v-tooltip>
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      // Add Workplace Data
      addWPName: '',
      addCountry: '',
      addBranch: '',
      addDepartment: '',
      // Edit Workplace Data
      editWPID: '',
      editWPName: '',
      editCountry: '',
      editBranch: '',
      editDepartment: '',
      // User Workplace List
      UserWorkplace: [
        {
          wpid: '1',
          wpname: 'Workplace 1',
          country: 'Thailand',
          branch: 'Silom',
          department: 'IT',
          editdialog: false,
          deldialog: false,
        },
        {
          wpid: '2',
          wpname: 'Workplace 2',
          country: 'Thailand',
          branch: 'Sathorn',
          department: 'IT',
          editdialog: false,
          deldialog: false,
        },
        {
          wpid: '3',
          wpname: 'Workplace 3',
          country: 'Malaysia',
          branch: 'Kuala Lumper',
          department: 'IT',
          editdialog: false,
          deldialog: false,
        },
      ],
      // List
      CountryList: ['Thailand', 'Cambodia', 'Malaysia', 'China'],
      BranchList: ['Silom', 'Sathorn', 'Bang Phli', 'Kuala Lumper'],
      DepartmentList: ['IT', 'Accounting', 'HR', 'Engineer'],
      // Command
      wpdialog: false,
      valid: true,
      editValid: true,
      rules: {
        required: (value) => !!value || 'This field is required.',
        emailRule: (value) => /.+@.+\..+/.test(value) || 'E-mail must be valid',
        phoneRule: (value) =>
          Number.isInteger(Number(value)) ||
          'Phone number must be an integer number',
        phoneLength: (value) =>
          (value && value.length <= 10) ||
          'Phone number must be less that 10 numbers',
        usernameLength: (value) =>
          (value && value.length <= 25) ||
          'Username must be less that 25 characters',
      },
    }
  },
  computed: {
    storeWPname: {
      get() {
        return this.$store.state.workplace.storeWPname
      },
      set(val) {
        this.$store.commit('workplace/set_storeWPname', val)
      },
    },
    storeCountry: {
      get() {
        return this.$store.state.workplace.storeCountry
      },
      set(val) {
        this.$store.commit('workplace/set_storeCountry', val)
      },
    },
    storeBranch: {
      get() {
        return this.$store.state.workplace.storeBranch
      },
      set(val) {
        this.$store.commit('workplace/set_storeBranch', val)
      },
    },
    storeDepartment: {
      get() {
        return this.$store.state.workplace.storeDepartment
      },
      set(val) {
        this.$store.commit('workplace/set_storeDepartment', val)
      },
    },
  },
  methods: {
    add() {
      if (this.$refs.addwp.validate()) {
        this.wpdialog = false
        this.$refs.addwp.reset()
      }
    },
    addCancel() {
      this.wpdialog = false
      this.$refs.addwp.reset()
    },
    editSave(item) {
      item.wpname = this.editWPName
      item.country = this.editCountry
      item.branch = this.editBranch
      item.department = this.editDepartment
      item.editdialog = false
    },
    editCancel(item) {
      item.editdialog = false
    },
    editData(item) {
      this.editWPName = item.wpname
      this.editCountry = item.country
      this.editBranch = item.branch
      this.editDepartment = item.department
    },
    select(item) {
      this.storeWPName = item.wpname
      this.storeCountry = item.country
      this.storeBranch = item.branch
      this.storeDepartment = item.department
      this.$vuetify.goTo(400, 1000)
    },
  },
}
</script>
