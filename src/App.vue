<script>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import TheNavigation from './components/TheNavigation.vue';

export default {
  components: {
    TheNavigation: TheNavigation
  }
}
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <br>
  <TheNavigation/>
  <router-view :key="$route.path"></router-view>
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
