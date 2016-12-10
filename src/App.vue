<template>
  <div id="app">
    <list-show :lists="lists"></list-show>
    <addlist :add="add"></addlist>
  </div>
</template>

<script>
import ListShow from './components/ListShow'
import Addlist from './components/Addlist'

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
    ListShow,
    Addlist
  },
  methods: {
    add (name, surname) {
      var data = {
        id: Date.now(),
        name: name,
        surname: surname
      }
      this.lists.push(data)
    }
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
