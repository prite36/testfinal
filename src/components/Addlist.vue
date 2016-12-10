<template lang="html">
<div class="">
  name : <input type="text" v-model="name">
  surname : <input type="text" v-model="surname">
  <button type="button" name="button" @click="addTo">add Name</button>
</div>
</template>

<script>
export default {
  props: ['add'],
  data () {
    return {
      name: '',
      surname: ''
    }
  },
  methods: {
    addTo () {
      this.add(this.name, this.surname)
      this.name = ''
      this.surname = ''
    }
  }
}
</script>

<style lang="css">
</style>
