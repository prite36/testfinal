<template lang="html">
  <div class="">
 {{list.name}}
 {{list.surname}}
 <button type="button" name="button" @click="deletelist(list.id)">X</button>
 <hr>
  </div>
</template>

<script>
export default {
  props: ['list', 'deletelist']
}
</script>

<style lang="css">
</style>
