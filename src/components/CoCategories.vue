<template>
  <div class="categories-item">
    <router-link to="/categories">分类</router-link>
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
  .categories-item
    background #bababa
    a:hover
      color red
  
</style>