<template>
  <div id="logs" class="text-xs-center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table :headers="headers" :items="getLogs" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ new Date(props.item.time).toLocaleString() }}</td>
            </template>
          </v-data-table>
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
    logs: [],
    headers: [
      {
        text: 'Time of Serving',
        align: 'center',
        sortable: false,
        value: 'time'
      }
    ]
  }),
  computed: {
    // eslint-disable-next-line
    getLogs() {
      const ref = db.ref('feedings/')
      let self = this
      self.logs = []
      // eslint-disable-next-line
      ref.on('value', function(snapshot) {
        const feedings = snapshot.val()
        for (const feed in feedings) {
          const log = {
            time: feedings[feed]
          }
          self.logs.push(log)
        }
      })
      return this.logs
    }
  }
}
</script>

<style scoped>
</style>
