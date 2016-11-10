<template>
  <div id="app">
    <img src="../assets/logo.png">
    <hello></hello>
    <router-link to="/login">Go to Login</router-link>
    <router-link to="/signout">Go to Signout</router-link>
    <div :id="test"></div>
  </div>
</template>

<script>
import Hello from '../components/Hello';

export default {
  name: 'app',
  data() {
    return {
      test: 'ddddddd'
    }
  },
  components: {
    Hello,
  },
};
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  img {
    width: 200px;
    height: 200px;
  }
</style>
