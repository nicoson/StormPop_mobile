<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {checkLogin} from '@/api/login'

export default {
  name: 'app',
  created () {
    // axios.get('http://localhost:3000/testapi').then(function (data) {
    //   console.log(data)
    // })
    this.getUserInfo()
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  methods: {
    async getUserInfo () {
      let data = await checkLogin()
      this.$store.commit('update_userInfo', data)
    }
  }
}
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  -ms-touch-action: none;
  -webkit-touch-callout: none;
  user-select: none;
  text-size-adjust: none;
}

html, body, #app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  font-family: 'Microsoft Yahei' !important
}

@media screen and (min-width: 769px) {
  body{
    box-shadow: 0 0 30px gray;
    margin:0 auto;
  }

  body, #app {
    width:440px
  }
}

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
	/*  margin-top: 60px;*/
	background: url("./assets/splash.png");
	background-size: contain;
}
</style>