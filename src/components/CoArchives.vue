<template>
  <div class="archives-item">
    <router-link to="/archives">归档</router-link>
  </div>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .archives-item
    background #cacaca
    a:hover
      color red
  
</style>