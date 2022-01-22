<template>
  <v-card class="pa-3">
    <div v-for="item in reports" :key="item.id">
      <v-card-title v-if="item.id == $route.params.detail" class="headline">
        <v-icon color="black">fa-clipboard-list</v-icon>
        &ensp;<b>Report {{ item.id }}:</b>
      </v-card-title>
      <v-card-text v-if="item.id == $route.params.detail" class="subheading">
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Submit Date:</b> &ensp;{{ item.date }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Detail:</b> &ensp;{{ item.detail }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Image:</b> &ensp;{{ item.detail }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Address:</b> &ensp;{{ item.detail }}
        </div>
        <div class="text--primary pb-4" style="font-size: 16px">
          <b>Location:</b> &ensp;{{ item.detail }}
        </div>
        <div id="map-wrap" style="height: 50vh">
          <client-only>
            <l-map :zoom="18" :center="item.location">
              <l-tile-layer
                url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
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
          title: 'Flood',
          date: '12-01-2022',
          detail: '',
          location: [14.069556, 100.607857],
        },
        {
          id: 2,
          title: 'Flood',
          date: '13-01-2022',
          detail: '',
          location: [14.069556, 100.607857],
        },
        {
          id: 3,
          title: 'Flood',
          date: '14-01-2022',
          detail: '',
          location: [14.069556, 100.607857],
        },
        {
          id: 4,
          title: 'Flood',
          date: '14-01-2022',
          detail: '',
          location: [14.069556, 100.607857],
        },
      ],
    }
  },
}
</script>
