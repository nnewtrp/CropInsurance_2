<template>
  <v-card class="pa-3 mt-2">
    <v-card-title class="headline">
      <v-icon color="black">fa-comment-dots</v-icon>
      &ensp;<b>Comments ({{ countComment() }})</b>
    </v-card-title>
    <v-card-text>
      <div v-for="item in SortComment" :key="item.cid">
        <div v-if="item.id == $route.params.detail">
          <hr class="mb-3 mt-1" />
          <v-row wrap class="py-3 px-3">
            <div class="text--primary pb-2" style="font-size: 18px">
              <v-avatar size="36" :color="avatarColor(item.user)">
                <span class="white--text text-h6">
                  {{ item.firstname.substring(0, 1)
                  }}{{ item.lastname.substring(0, 1) }}
                </span>
              </v-avatar>
              &nbsp;<b>{{ item.firstname }} {{ item.lastname }}</b>
            </div>
            <v-spacer />
            <p class="text-caption mt-1 pr-3">{{ item.date }}</p>
          </v-row>
          <div
            v-if="item.detail != ''"
            class="subheading text--primary pt-1 pb-2"
            style="font-size: 16px"
          >
            {{ item.detail }}
          </div>
          <div v-if="item.file != null" class="text--primary pb-2">
            <v-icon>fa-paperclip</v-icon>
            <v-chip v-for="fileitem in item.file" :key="fileitem" color="gray">
              {{ fileitem }}
            </v-chip>
          </div>
        </div>
      </div>
    </v-card-text>
    <v-card-actions>
      <v-spacer />
      <v-dialog v-model="dialog" persistent width="600">
        <template #activator="{ on, attrs }">
          <v-btn slot="activator" color="info" v-bind="attrs" v-on="on">
            Add Comment
            <v-icon right>fa-comment</v-icon>
          </v-btn>
        </template>
        <v-card>
          <v-form ref="form">
            <v-card-title class="headline justify-center">
              Add New Comment
            </v-card-title>
            <v-card-text>
              <v-textarea
                v-model="detail"
                :rules="[rules.required]"
                label="Detail *"
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
      // Data in comment input
      detail: '',
      file: null,
      // Data List
      comments: [
        {
          cid: '1',
          id: '1',
          user: 'User',
          date: '5-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          detail: 'This is my test comment',
          file: null,
        },
        {
          cid: '2',
          id: '2',
          user: 'Staff',
          date: '8-07-2021',
          firstname: 'Chayanon',
          lastname: 'Noisapung',
          detail: 'Please submit information in this button.',
          file: null,
        },
        {
          cid: '3',
          id: '1',
          user: 'User',
          date: '9-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          detail: 'attach image',
          file: ['image1.jpg', 'image2.png'],
        },
        {
          cid: '4',
          id: '3',
          user: 'Staff',
          date: '12-07-2021',
          firstname: 'Chayanon',
          lastname: 'Noisapung',
          detail: 'I receive this case',
          file: null,
        },
        {
          cid: '5',
          id: '4',
          user: 'Staff',
          date: '10-07-2021',
          firstname: 'Chayanon',
          lastname: 'Noisapung',
          detail: 'Please submit information in this button.',
          file: null,
        },
        {
          cid: '6',
          id: '2',
          user: 'User',
          date: '8-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          detail: 'I want to cancel',
          file: null,
        },
        {
          cid: '7',
          id: '1',
          user: 'Staff',
          date: '10-07-2021',
          firstname: 'Chayanon',
          lastname: 'Noisapung',
          detail: 'I want to cancel',
          file: ['image1.jpg', 'image2.png'],
        },
      ],
      // Command
      dialog: false,
      rules: {
        required: (value) => !!value || 'This field is required.',
      },
    }
  },
  computed: {
    SortComment() {
      const list = this.comments
      return list.sort((a, b) => (parseInt(a.cid) < parseInt(b.cid) ? -1 : 1))
    },
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.dialog = false
        this.$refs.form.reset()
      }
    },
    cancel() {
      this.dialog = false
      this.$refs.form.resetValidation()
    },
    avatarColor(user) {
      if (user === 'User') return 'primary'
      else if (user === 'Staff') return 'accent'
    },
    countComment() {
      let count = 0
      for (const i in this.comments) {
        if (this.comments[i].id === this.$route.params.detail) {
          count++
        }
      }
      return count
    },
  },
}
</script>
