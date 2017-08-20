<template>
  <div class="app-viewport" id="app_loadingpage">
    <div class="app-offset"></div>
    <div class="app-offset"></div>
    <md-spinner class="app-spinner md-accent" md-indeterminate></md-spinner>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  created () {
    setTimeout(() => { this.$router.push('/shop') }, 2000)

    // mobile doesn't respond for onload event, so deprecated for now
    // window.onload = () => this.$router.push('/shop')
    // document.body.onload = () => this.$router.push('/shop')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.app-viewport {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  background-image: url("/static/imgs/splash.png");
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}

.app-offset {
  flex-grow: 1;
}
.app-spinner {
  flex-grow: 1;
}
</style>
