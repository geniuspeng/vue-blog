<template>
  <div class="tag-item">
    <router-link to="/tags">标签</router-link>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        r: this.$route,
        rr: this.$router
      }
    },
    props: {
      title: {
        type: String,
        default: '',
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .tag-item
    background #eaeaea
    a:hover
      color red
  
</style>