<template>
  <div>
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
  .header 
    position relative
    line-height 38px
    color #fff
    text-align center
    background #222
    .item 
      position absolute
      top 0
      bottom 0
      z-index 1
      a 
        color #fff
    .left 
      left 10px
    
    .right 
      right 10px
    
  
</style>