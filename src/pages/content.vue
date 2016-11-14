<template>
  <section>
    <common-header :title="content">
      <router-link slot="left" to="/">返回</router-link>
      <router-link slot="right" to="/signout">退出</router-link>
    </common-header>
    <div>{{content}}</div>
  </section>
  
</template>
<script>
  export default {
    data() {
      return {
        content: '我是标签'
      }
    },
    watch: {
      $route (to, from) {
        // 对路由变化作出响应...
        console.log(this)
        this.fetchData()
      }
    },
    created () {
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      this.fetchData()
    },
    beforeRouteEnter (to, from, next) {
      // console.log(to);
      next();
    },
    methods: {
      fetchData () {
        this.content = this.$route.meta.name;
        console.log(this.content)
      }
    }
  }
</script>