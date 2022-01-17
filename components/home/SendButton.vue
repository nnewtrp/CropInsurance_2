<template>
  <v-card class="pa-3">
    <v-card-title class="text-h4 justify-center"> Send New Case </v-card-title>
    <br />
    <v-card-text class="subheading">
      <v-layout row wrap>
        <v-flex md6>
          <v-card class="pa-3 warning" nuxt to="/form/IncidentForm">
            <v-card-title
              class="headline justify-center font-weight-bold white--text"
            >
              Incident Case&nbsp;
              <v-icon color="white" right>fa-paper-plane</v-icon>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex md6>
          <v-card class="pa-3 info" nuxt to="/form/RequestForm">
            <v-card-title
              class="headline justify-center font-weight-bold white--text"
            >
              Request Case&nbsp;
              <v-icon color="white" right>fa-paper-plane</v-icon>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-card-text>
  </v-card>
</template>
