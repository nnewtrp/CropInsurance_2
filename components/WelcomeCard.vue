<template>
  <v-card>
    <v-card-title class="headline">
      <h1 style="font-weight: bold" class="mx-4 mt-10 mb-4">Hi, Chayanon.</h1>
    </v-card-title>
    <v-card-text>
      <p class="mx-4 mt-2" style="color: black; font-size: 20px">
        Your farm is more than land and crops, Its our family’s heritage and
        future.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn
        large
        color="primary"
        class="mx-5 mt-2"
        @click="$router.push({ name: 'Form' })"
      >
        New Report
        <v-icon color="white" right>fa-arrow-right</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <v-divider class="mx-3 mb-10" />
    </v-card-text>
  </v-card>
</template>
