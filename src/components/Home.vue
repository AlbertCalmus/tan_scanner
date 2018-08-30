<template>
  <v-container v-if="times" grid-list-md text-xs-center fluid>
    <v-text-field
        xs12 sm6
        v-model="stop"
        label="Arrêt"
      ></v-text-field>
    <v-layout row wrap>
      <v-flex v-for="(time, i) in times.filter( item => { return this.filter ? item.ligne.numLigne == this.filter : true})" :key="i" xs12 sm6 md4 lg3 @click="changeFilter(time.ligne.numLigne)" style="cursor: pointer;">
        <v-card :color="time.sens == '1' ? 'teal darken-1' : 'light-blue accent-4'">
          <v-card-text>
            <h1 class="display-4">{{ time.ligne.numLigne }}</h1>
            <p class="headline pl-2">{{ time.terminus }}</p>
            <v-divider light></v-divider>
            <p class="display-3 pl-1 mt-3">{{ time.temps }}</p>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Home',
  data() {
    return {
      times: null,
      filter: null,
      stop: 'SNIC'
    }
  },
  methods: {
    changeFilter(numLigne) {
      if (this.filter) {
        this.filter = null
      } else {
        this.filter = numLigne
      }
    }
  },
  onChange() {
    axios
      .get('http://192.168.0.25:3000/times?stop=' + this.stop)
      .then(response => {
        this.times = response.data
      })
  },
  created() {
    axios
      .get('http://192.168.0.25:3000/times?stop=' + this.stop)
      .then(response => {
        this.times = response.data
      })
    setInterval(() => {
      axios
        .get('http://192.168.0.25:3000/times?stop=' + this.stop)
        .then(response => {
          this.times = response.data
        })
    }, 30000);
  }
}
</script>

<style>

</style>
