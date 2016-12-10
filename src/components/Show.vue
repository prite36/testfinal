<template lang="html">
  <div class="">
    <div class="" v-show="!edit">
      {{list.name}}
      {{list.surname}}
      <button type="button" name="button" @click="edit = true">edit</button>
      <button type="button" name="button" @click="deletelist(list.id)">X</button>
    </div>
   <div class="" v-show="edit">
     <input type="text" v-model="name">
     <input type="text" v-model="surname">
     <button type="button" name="button" @click="editData">edit</button>
   </div>
   <hr>
  </div>
</template>

<script>
export default {
  props: ['list', 'deletelist', 'editList'],
  data () {
    return {
      edit: false,
      name: this.list.name,
      surname: this.list.surname
    }
  },
  methods: {
    editData () {
      this.editList(this.list.id, this.name, this.surname)
      this.edit = false
    }
  }
}
</script>

<style lang="css">
</style>
