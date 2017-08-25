<template>
  <div class="app-viewport" id="app_main">
  
    <!-- Slider Menu -->
    <md-sidenav class="md-left" ref="sidebar">
      <md-toolbar class="md-account-header">
        <md-list class="md-transparent">
          <md-list-item class="md-avatar-list">
            <md-avatar class="md-large">
              <img src="https://placeimg.com/64/64/people/8" alt="People">
            </md-avatar>
    
            <span style="flex: 1"></span>
    
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/3" alt="People">
            </md-avatar>
    
            <md-avatar>
              <img src="https://placeimg.com/40/40/people/4" alt="People">
            </md-avatar>
          </md-list-item>
    
          <md-list-item>
            <div class="md-list-text-container">
              <span>{{userInfo.username}}</span>
              <span>{{userInfo.useraccount}}</span>
            </div>
    
<!--             <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button> -->
          </md-list-item>
        </md-list>
      </md-toolbar>
    
      <md-list>
        <md-list-item @click="$refs.sidebar.toggle()" class="md-primary">
          <md-icon>insert_drive_file</md-icon> <span>My Profile</span>
        </md-list-item>
    
        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>people</md-icon> <span>My Orders</span>
        </md-list-item>
    
        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>access_time</md-icon> <span>Recent</span>
        </md-list-item>
    
        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>start</md-icon> <span>Favour</span>
        </md-list-item>
    
        <md-list-item @click="$refs.sidebar.toggle()">
          <md-icon>sms</md-icon> <span>Message</span>
        </md-list-item>
    
        <md-list-item @click="logout">
          <md-icon>sms</md-icon> <span>Logout</span>
        </md-list-item>
      </md-list>
    </md-sidenav>
    
    <!-- Main board -->
    <div class="app-container">
      <router-view></router-view>
    </div>

    <!-- Bottom Bar -->
    <md-bottom-bar @change="pagerouter">
      <md-button class="md-fab md-primary md-fab-bottom-left" @click="$refs.sidebar.toggle()">
        <md-icon>account_box</md-icon>
      </md-button>
      <div style="flex:1"></div>
      <md-bottom-bar-item md-icon="favorite" md-active>逛逛</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="shopping_cart">
        <p v-if="cartNum>0" class="app-mainboard-bottombar-badge">{{cartNum}}</p>
        结帐
      </md-bottom-bar-item>
      <md-bottom-bar-item md-icon="confirmation_number">订单</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Mainboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['userInfo', 'cartNum'])
  },
  methods: {
    pagerouter (e) {
      switch (e) {
        case 1:
          this.$router.push('/home/shopping'); break
        case 2:
          this.$router.push('/home/shoppingcart'); break
        case 3:
          this.$router.push('/home/myorders'); break
        default: break
      }
    },
    logout () {
      this.$router.push('/login')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.app-viewport {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
  justify-content: space-start;
  background-color: #f8f8f8;
}

.main-toolbar {
  position: relative;
  z-index: 10;
}

.md-title {
  padding-left: 8px;
  color: #fff;
}

.md-list-action .md-icon {
  color: rgba(0, 0, 0, 0.26);
}

.md-avatar-icon .md-icon {
  color: #fff !important;
}

.md-sidenav .md-list-text-container > :nth-child(2) {
  color: rgba(255, 255, 255, 0.54);
}

.md-account-header .md-list-item:hover .md-button:hover {
  background-color: inherit;
}

.md-account-header .md-avatar-list .md-list-item-container:hover {
  background: none !important;
}

.app-container {
  flex-grow: 1;
  overflow: scroll;
}

.md-bottom-bar {
  height: 56px;
  flex-grow: 0;
  flex-shrink: 0;
  z-index: 1;
  // background-color: rgba(33,150,243,0.5);

  .app-mainboard-bottombar-badge {
    position: absolute;
    left: 1rem;
    top: -2rem;
    border-radius: 50%;
    background: rgb(241, 56, 56);
    width: 1rem;
    height: 1rem;
    color: white;
    font-size: 0.6rem;
    vertical-align: middle;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
