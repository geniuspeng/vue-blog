<template>
  <div class="wrap">
    <router-view></router-view>
    <router-view name="sidebar"></router-view>
    <router-view name="content"></router-view>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="stylus" scoped>
  .wrap 
    width 100%
    height 100%
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    aside
      width 15%
      height 100%
    section
      width 85%
</style>

