<template>
  <div id="home">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <v-alert :value="busy" type="info">
            Feeding your pet. Thank you for using PetFeedr !
          </v-alert>
          <img src="../assets/logo.png" alt="Doggy">
          <h1>PetFeedr</h1>
          <v-btn color="indigo white--text" :disabled="busy" large @click="feed">Feed Now!</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { db } from '../firebase.js'
export default {
  name: 'home',
  data: () => ({
    busy: false
  }),
  methods: {
    // eslint-disable-next-line
    feed() {
      this.busy = true
      // Firebase Call
      const pf = db.ref('feeder/')
      pf.set({
        motor: true
      })
      let self = this
      // eslint-disable-next-line
      setTimeout(function() {
        self.busy = false
      }, 3000)
    }
  }
}
</script>

<style scoped>
</style>
