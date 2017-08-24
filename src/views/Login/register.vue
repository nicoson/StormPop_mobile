<template>
  <div class="app-viewport" id="app_loginPage">
    <div>
      <div class="app-login-title">
        <img src="/static/imgs/android.png" alt="logo" />
        <span>Storm POP</span>      
      </div>
      <form>
        <md-input-container>
          <label>用户名/登陆名</label>
          <md-input type="text" required></md-input>
        </md-input-container>

        <md-input-container>
          <label>密码</label>
          <md-input type="password" required></md-input>
        </md-input-container>

        <md-input-container>
          <label>密码确认</label>
          <md-input type="password" required></md-input>
        </md-input-container>

        <md-input-container>
          <label>注册邮箱</label>
          <md-input type="mail" required></md-input>
        </md-input-container>

        <md-input-container>
          <label>生日</label>
          <md-input type="date"></md-input>
        </md-input-container>

        <div id="app_register_gender">
          <span>性别： </span>
          <md-radio v-model="gender" name="app-register-gender" md-value="1" class="md-primary">
            <i class="fa fa-mars" aria-hidden="true">&nbsp;男</i>
          </md-radio>
          <md-radio v-model="gender" name="app-register-gender" md-value="0" class="md-primary">
            <i class="fa fa-venus" aria-hidden="true">&nbsp;女</i>
          </md-radio>
        </div>

        <md-button class="md-raised md-primary app-login-submitbtn" @click="submit">注册</md-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  data () {
    return {
      msg: '',
      gender: 1
    }
  },
  created () {
    // setTimeout(() => { this.$router.push('/home/shopping') }, 2000)
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

  #app_register_gender {
    i {
      font-weight: 700;
    }

    .fa-mars {
      text-shadow: 0 0 0.5rem #2196f3;
      color: #2196f3;
    }

    .fa-venus {
      text-shadow: 0 0 0.5rem #ea1953;
      color: #ea1953;
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
