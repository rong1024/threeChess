<template>
  <div id="app">
    <game></game>
  </div>
</template>


<script>
import Game from './components/Game.vue';

export default {
  name: 'App',
  components: {
    Game,
  },
  // template: '<Game/>',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
a {
  color: #ccc;
}
</style>
