<template>
  <v-app id="inspire" dark>
    <v-toolbar dark fixed app>
      <v-toolbar-title>Tan Scanner</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from '@/components/Home'

export default {
  name: 'App',
  components: {
    Home
  },
  data () {
    return {

    }
  }
}
</script>
