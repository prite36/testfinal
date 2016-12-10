<template lang="html">
  <div class="">
   <show v-for = "list in lists" :list="list" :deletelist="deletelist" :edit-list="editList"></show>
  </div>
</template>
<script>
import show from './show'
export default {
  props: ['lists', 'deletelist', 'editList'],
  components: {
    show
  }
}
</script>
<style lang="css">
</style>
