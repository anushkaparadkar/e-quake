<template>
  <div id="app">
    <v-app>
      <v-navigation-drawer v-model="drawer" temporary dark absolute class="blue-grey darken-4">
        <v-list>
          <v-list-tile class="sidebarHeader" height="auto">
            <v-list-tile-avatar tile size="50">
              <img src="./assets/logo.png">
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title class="council-name">PetFeedr</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
        <v-list>
          <v-divider class="mb-5"></v-divider>
          <v-list-tile to="/" class="side-links">
            <v-list-tile-content>
              <v-list-tile-title>Home</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/logs" class="side-links">
            <v-list-tile-content>
              <v-list-tile-title>Logs</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar color="indigo darken-1" dark>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="white--text main">
          <router-link to="/">PetFeedr</router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn to="/" flat>Home</v-btn>
          <v-btn to="/logs" flat>Logs</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      <v-content>
        <v-container fluid>
          <router-view></router-view>
        </v-container>
      </v-content>
      <v-footer height="auto" color="indigo" app absolute>
        <v-layout justify-center row wrap>
          <v-btn v-for="link in links" :key="link.name" color="white" :to="link.href" flat round>
            {{ link.name }}
          </v-btn>
          <v-btn color="white" href="https://github.com/RyanDsilva/petfeeder" target="_blank" flat round>
            GitHub
          </v-btn>
          <v-flex indigo darken-1 py-3 text-xs-center white--text xs12>
            &copy;2018 —
            <strong>Ryan Dsilva</strong>
          </v-flex>
        </v-layout>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: () => {
    return {
      drawer: false,
      links: [
        {
          name: 'Home',
          href: '/'
        },
        {
          name: 'Logs',
          href: '/logs'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.main a {
  text-decoration: none;
  color: white;
}
.sidebarHeader {
  margin: 10px;
}
.council-name {
  line-height: auto;
  font-weight: 700;
  font-size: 1.9em;
  margin-left: 0.5em;
}
</style>
