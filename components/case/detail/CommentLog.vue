<template>
  <v-dialog v-model="dialog" persistent width="600">
    <template #activator="{ on, attrs }">
      <v-btn slot="activator" color="secondary" v-bind="attrs" v-on="on">
        Submit Information
        <v-icon right>fa-arrow-circle-up</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-form ref="form">
        <v-card-title class="headline justify-center">
          Submit These Information
        </v-card-title>
        <v-card-text>
          <div v-for="item in logs" :key="item.logid">
            <div v-if="item.cid == cid">
              <v-textarea
                v-model="item.info"
                :rules="[rules.required]"
                label="More Information *"
                prepend-icon="far fa-file-alt"
                rows="3"
                required
              ></v-textarea>
              <v-file-input
                v-model="item.casefile"
                :rules="[rules.required]"
                chips
                multiple
                label="Case File *"
                prepend-icon="fa-file-upload"
                required
              ></v-file-input>
            </div>
          </div>
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
</template>

<script>
export default {
  props: {
    cid: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      // Data
      logs: [
        {
          logid: '1',
          cid: '5',
          moreinfo: '',
          casefile: null,
        },
        {
          logid: '2',
          cid: '2',
          moreinfo: '',
          casefile: null,
        },
      ],
      // Command
      dialog: false,
      rules: {
        required: (value) => !!value || 'This field is required.',
      },
    }
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.dialog = false
        this.$refs.form.resetValidation()
      }
    },
    cancel() {
      this.dialog = false
      this.$refs.form.resetValidation()
    },
  },
}
</script>
