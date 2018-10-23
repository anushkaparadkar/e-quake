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
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus ipsam eos repellat voluptatum repellendus voluptates sapiente inventore voluptatem nihil molestiae optio iste veritatis at fuga distinctio sit eaque expedita quibusdam eveniet, sint cupiditate in. Maiores neque cum quisquam, illo facere vitae unde suscipit quod placeat, nulla, reprehenderit quam consectetur cumque!
          </p>
          <v-btn color="indigo white--text" :disabled="busy" large @click="alert">Alert!</v-btn>
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
  methods: {
    // eslint-disable-next-line
    alert() {
      this.busy = true
      let self = this
      // eslint-disable-next-line
      setTimeout(function() {
        self.busy = false
      }, 3000)
    }
  }
}
</script>
