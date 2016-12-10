<template>
  <div id="app">
    <list-show :lists="lists"></list-show>
  </div>
</template>

<script>
import ListShow from './components/ListShow'

export default {
  name: 'app',
  data () {
    return {
      lists: [{
        name: 'Wanvipa',
        surname: 'Boonpiset'
      },
      {
        name: 'eiei',
        surname: 'eieiriri'
      }]
    }
  },
  components: {
    ListShow
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
