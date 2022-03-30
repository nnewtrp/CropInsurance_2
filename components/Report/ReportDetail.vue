<template>
  <v-card class="pa-3">
    <div v-for="item in reports" :key="item.id">
      <v-card-title v-if="item.id == $route.params.detail" class="headline">
        <v-icon color="black">fa-clipboard-list</v-icon>
        &ensp;<b>Report {{ item.id }}: {{ item.title }}</b>
      </v-card-title>
      <v-card-text v-if="item.id == $route.params.detail" class="subheading">
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Sender:</b> &ensp;{{ item.sender }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Submit Date:</b> &ensp;{{ item.date }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Detail:</b> &ensp;{{ item.detail }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Image/File:</b> &ensp;
          <v-chip v-for="file in item.file" :key="file" color="gray">
            {{ file }}
          </v-chip>
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Address:</b> &ensp;{{ item.address }}
        </div>
        <div id="map-wrap" style="height: 50vh">
          <client-only>
            <l-map :zoom="18" :center="item.location">
              <l-tile-layer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              ></l-tile-layer>
              <l-marker :lat-lng="item.location">
                <l-popup> Marker at {{ item.location }}</l-popup>
              </l-marker>
            </l-map>
          </client-only>
        </div>
      </v-card-text>
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
          title: 'Lorem ipsum dolor sit amet',
          sender: 'Mr. Teerapat Satitporn',
          date: '12-01-2022',
          detail:
            'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          file: ['image1.jpg', 'image2.jpg'],
          address:
            '99 Moo 18, Km. 41 on Paholyothin Highway Khlong Luang, Pathum Thani 12120, Thailand',
          location: [14.069556, 100.607857],
        },
        {
          id: 2,
          title: 'Lorem ipsum dolor sit amet',
          sender: 'Mr. Teerapat Satitporn',
          date: '13-01-2022',
          detail:
            'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          file: ['image1.jpg'],
          address:
            '99 Moo 18, Km. 41 on Paholyothin Highway Khlong Luang, Pathum Thani 12120, Thailand',
          location: [14.069556, 100.607857],
        },
        {
          id: 3,
          title: 'Lorem ipsum dolor sit amet',
          sender: 'Mr. Teerapat Satitporn',
          date: '14-01-2022',
          detail:
            'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          file: ['image2.jpg'],
          address:
            '99 Moo 18, Km. 41 on Paholyothin Highway Khlong Luang, Pathum Thani 12120, Thailand',
          location: [14.069556, 100.607857],
        },
        {
          id: 4,
          title: 'Lorem ipsum dolor sit amet, consectetur',
          sender: 'Mr. Teerapat Satitporn',
          date: '14-01-2022',
          detail:
            'consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          file: ['image1.jpg', 'image2.jpg'],
          address:
            '99 Moo 18, Km. 41 on Paholyothin Highway Khlong Luang, Pathum Thani 12120, Thailand',
          location: [14.069556, 100.607857],
        },
      ],
    }
  },
}
</script>
