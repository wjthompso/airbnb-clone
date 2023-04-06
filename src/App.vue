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

<style lang="scss">
@import "@/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
}

:root {
  --FS: 1rem;
  --FS-S: 0.8rem;
  --FS-M: 2rem;
  --FS-L: 3rem;
  --FS-XL: 4rem;
  --mobile-view: 768px;
  --page-margin: 3rem;
}

@media only screen and (max-width: $mobile-view) {
    :root {
    --FS: 1rem;
    --FS-S: 0.8rem;
    --FS-M: 2rem;
    --FS-L: 3rem;
    --FS-XL: 4rem;
    --mobile-view: 768px;
    --page-margin: 1rem;  
    }
}

#app {
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto, Helvetica Neue, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size:60px;
}
</style>
