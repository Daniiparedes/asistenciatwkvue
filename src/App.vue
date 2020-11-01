<template>
  <div id="app">
    <router-view></router-view>

  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-image: url("./assets/school.jpg");
  background-repeat: no-repeat;
  border:3px solid #000;
  background-size: cover;
}
</style>
