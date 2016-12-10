<template>
  <div id="app">
    <list-show :lists="lists" :deletelist="deletelist"></list-show>
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
        id: '1',
        name: 'Wanvipa',
        surname: 'Boonpiset'
      },
      {
        id: '2',
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
    },
    deletelist (id) {
      var index = this.lists.findIndex(list => list.id === id)
      this.lists.splice(index, 1)
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
