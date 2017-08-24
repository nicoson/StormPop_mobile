<template>
  <div class="app-viewport" id="app_loginPage">
    <div>
      <div class="app-login-title">
        <img src="/static/imgs/android.png" alt="logo" />
        <span>Storm POP</span>      
      </div>
      <form>
        <md-input-container>
          <label>用户名/邮箱</label>
          <md-input type="text" required></md-input>
        </md-input-container>

        <md-input-container>
          <label>密码</label>
          <md-input type="password" required></md-input>
        </md-input-container>

        <md-button class="md-raised md-primary app-login-submitbtn" @click="submit">登陆</md-button>
      </form>

      <div class="app-login-helper">
        <a href="">忘记密码?</a>
        <router-link to="/register">新用户注册</router-link>
      </div>
    </div>

    <div class="app-login-condition">
      <p>登录即代表已阅读并同意<a href="">服务条款</a></p>
    </div>
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
    // setTimeout(() => { this.$router.push('/home/shopping') }, 2000)

    // mobile doesn't respond for onload event, so deprecated for now
    // window.onload = () => this.$router.push('/shop')
    // document.body.onload = () => this.$router.push('/shop')
  },
  methods: {
    submit () {
      this.$router.push('/home/shopping')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  #app_loginPage {
    height: 100%;
    padding: 3rem;
    text-align: left;
    background-color: #f8f8f8;
    display: flex;
    flex-flow: column;
    justify-content: space-between;
  }

  .app-login-title {
    font-size: 1.3rem;
    color: #36b39b;
    margin: 1.5rem 0;

    img {
      width: 20%;
    }
  }

  .app-login-submitbtn {
    width: 100%;
    margin: 1.5rem 0 1.5rem 0;
  }

  .app-login-helper {
    display: flex;
    justify-content: space-between;
    color: #2196f3;
    font-size: 1rem;
  }

  .app-login-condition {
    text-align: center;
    margin-bottom: 3rem;
  }
</style>
