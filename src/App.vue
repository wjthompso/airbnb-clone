<template>
  <landing-page></landing-page>
</template>

<script>
import LandingPage from './pages/LandingPage.vue'

export default {
  components: { LandingPage },
  name: 'App',

}
</script>

<style>

* {
  margin: 0;
  padding: 0;
  border: 0;
}

:root {
  --FS: 1rem;
  --FS-S: 0.8rem;
  --FS-M: 2rem;
  --FS-L: 3rem;
  --FS-XL: 4rem;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:60px;
}
</style>
