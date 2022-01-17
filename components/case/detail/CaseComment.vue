<template>
  <v-card class="pa-3">
    <v-card-title class="headline">
      <v-icon color="black">fa-comment-dots</v-icon>
      &ensp;Comments ({{ countComment() }})
    </v-card-title>
    <v-card-text>
      <div v-for="item in SortComment" :key="item.cid">
        <div v-if="item.id == $route.params.detail">
          <hr class="my-3" />
          <v-row wrap class="py-3 px-3">
            <div class="headline text--primary pb-4">
              <v-avatar :color="avatarColor(item.user)">
                <span class="white--text text-h5">
                  {{ item.firstname.substring(0, 1)
                  }}{{ item.lastname.substring(0, 1) }}
                </span>
              </v-avatar>
              &nbsp;{{ item.firstname }} {{ item.lastname }}
            </div>
            <v-spacer />
            <p class="text-caption mt-1 pr-3">{{ item.date }}</p>
          </v-row>
          <div class="text-h6 text--primary pb-4">
            <strong>{{ item.title }}</strong>
          </div>
          <div v-if="item.detail != ''" class="subheading text--primary pb-4">
            {{ item.detail }}
          </div>
          <div v-if="item.file != null" class="text--primary pb-4">
            <v-icon>fa-paperclip</v-icon>
            <v-chip v-for="fileitem in item.file" :key="fileitem" color="gray">
              {{ fileitem }}
            </v-chip>
          </div>
          <div v-if="item.log == true" class="subheading text--primary pb-4">
            <CommentLog :cid="item.cid" />
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
              <v-text-field
                v-model="title"
                :rules="[rules.required]"
                label="Title *"
                prepend-icon="fa-pencil-alt"
                required
              ></v-text-field>
              <v-textarea
                v-model="content"
                :rules="[rules.required]"
                label="Detail *"
                prepend-icon="fa-sticky-note"
                rows="4"
                required
              ></v-textarea>
              <v-file-input
                v-model="file"
                chips
                multiple
                label="Add File"
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
import CommentLog from '~/components/case/detail/CommentLog.vue'

export default {
  components: {
    CommentLog,
  },
  data() {
    return {
      // Data in comment input
      title: '',
      content: '',
      file: null,
      // Data List
      comments: [
        {
          cid: '1',
          id: '20',
          user: 'User',
          date: '5-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          title: 'First Comment',
          detail: 'This is my test comment',
          file: null,
          log: false,
        },
        {
          cid: '2',
          id: '13',
          user: 'Support',
          date: '8-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          title: 'Please submit information in this button.',
          detail: '',
          file: null,
          log: true,
        },
        {
          cid: '3',
          id: '20',
          user: 'User',
          date: '9-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          title: 'Second Comment',
          detail: 'attach image',
          file: ['image1.jpg', 'image2.png'],
          log: false,
        },
        {
          cid: '4',
          id: '15',
          user: 'Support',
          date: '12-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          title: 'Accept',
          detail: 'I receive this case',
          file: null,
          log: false,
        },
        {
          cid: '5',
          id: '18',
          user: 'Support',
          date: '10-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          title: 'Please submit information in this button.',
          detail: '',
          file: null,
          log: true,
        },
        {
          cid: '6',
          id: '13',
          user: 'Support',
          date: '8-07-2021',
          firstname: 'Teerapat',
          lastname: 'Satitporn',
          title: 'Cancel this case',
          detail: 'I want to cancel',
          file: null,
          log: false,
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
      if (user === 'User') return 'accent'
      else if (user === 'Support') return 'secondary'
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
