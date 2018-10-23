<template>
  <div id="home">
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 class="text-xs-center">
          <v-alert :value="busy" type="info">
            An Earthquake may be coming! Stay Safe!
          </v-alert>
          <img src="../assets/logo.png" alt="Doggy">
          <h1>E-Quake</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus eos libero consequatur voluptas. Corrupti reprehenderit animi, ex inventore atque ab qui consequuntur repudiandae nulla pariatur asperiores, consequatur dolorum totam deleniti provident quo sed minus labore natus sit aliquid tenetur eius soluta. Nisi sequi dolorum, delectus quam minus eveniet temporibus!
          </p>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'home',
  data: () => ({
    busy: false
  }),
  methods: {}
}
</script>
