<template lang="html">
<div class="">
 <show v-for = "list in lists" :list="list" :deletelist="deletelist"></show>
</div>
</template>

<script>
import show from './show'
export default {
  props: ['lists', 'deletelist'],
  components: {
    show
  }
}
</script>

<style lang="css">
</style>
