<template>
  <div id="logs" class="text-xs-center">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12>
          <v-data-table :headers="headers" :items="getData" hide-actions class="elevation-1">
            <template slot="items" slot-scope="props">
              <td class="text-xs-center">{{ new Date(props.item.created_at).toString() }}</td>
              <td class="text-xs-center">{{ props.item.field1 }}</td>
              <td class="text-xs-center">{{ props.item.field2 }}</td>
              <td class="text-xs-center">{{ props.item.field3 }}</td>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'home',
  data: () => ({
    logs: [],
    headers: [
      {
        text: 'TimeStamp',
        align: 'center',
        sortable: true,
        value: 'created_at'
      },
      {
        text: 'X',
        align: 'center',
        sortable: false,
        value: 'field1'
      },
      {
        text: 'Y',
        align: 'center',
        sortable: false,
        value: 'field2'
      },
      {
        text: 'Z',
        align: 'center',
        sortable: false,
        value: 'field3'
      }
    ]
  }),
  computed: {
    // eslint-disable-next-line
    getData() {
      return this.logs
    }
  },
  // eslint-disable-next-line
  created() {
    axios
      .get('https://api.thingspeak.com/channels/607146/feeds.json?results=15')
      .then(res => {
        const feeds = res.data.feeds
        this.logs = feeds
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}
</script>
