<template>
  <aside class="aside">
    <co-tags></co-tags> 
    <co-archives></co-archives>
    <co-categories></co-categories>
  </aside>
</template>
<script>
  import CoTags from './CoTags';
  import CoArchives from './CoArchives';
  import CoCategories from './CoCategories';
  export default {
    props: {
      title: {
        type: String,
        default: '',
      }
    },
    components: {
      CoTags,
      CoArchives,
      CoCategories
    }
  }
</script>

<style lang="stylus" scoped>
  aside
    width 150px
    height 100%
  
</style>