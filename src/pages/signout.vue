<style lang="stylus" scoped>
  .signout-wrap
    width 100%
    .btn 
      padding 50px
      text-align center
      button 
        padding 5px 10px
    
  
</style>
<template>
  <div class="signout-wrap">
    <common-header title="退出">
      <router-link slot="left" to="/home">返回</router-link>
    </common-header>
    <div class="btn">
      <button v-on:click="submit">确认退出</button>
    </div>
  </div>
</template>
<script>
  import { mapActions } from 'vuex';
  export default {
    methods: {
      ...mapActions(['SIGNOUT']),
      submit() {
        this.SIGNOUT()
        this.$router.replace({path: '/login'})
      }
    }
  }
</script>