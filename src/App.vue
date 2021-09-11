<template>
  <div id="app">    
    <HomePage msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HomePage from '@/components/HomePage.vue'

export default {
  name: 'App',
  components: {
    HomePage
  }
}
</script>

<style>
@font-face {
  font-family: 'Vazir';
  src: url(./assets/fonts/Vazir-FD.5fa67fc.woff2);
}

body {
  font-family: 'Vazir';
  direction: rtl;
}
</style>
