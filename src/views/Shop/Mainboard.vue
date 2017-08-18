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
              <span>{{username}}</span>
              <span>{{useraccount}}</span>
            </div>
    
            <md-button class="md-icon-button md-list-action">
              <md-icon>arrow_drop_down</md-icon>
            </md-button>
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
      </md-list>
    </md-sidenav>
    
    <!-- Main board -->
    <main class="main-content">
      <!-- AD slot -->
      <md-card md-with-hover>
        <md-card-media>
          <img src="../../assets/imgs/Jumbotron.jpg" alt="Jumbotron">
        </md-card-media>
      </md-card>
      
      <!-- Products list -->
      <CardAction v-for="{prod, index} in prods" :cardinfo="prod" :key="index"></CardAction>

    </main>

    <md-bottom-bar>
      <md-bottom-bar-item md-icon="account_box" @click="$refs.sidebar.toggle()">Login</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="favorite" md-active>Favorites</md-bottom-bar-item>
      <md-bottom-bar-item md-icon="near_me">Nearby</md-bottom-bar-item>
    </md-bottom-bar>
  </div>
</template>

<script>
import CardAction from '@/components/Card_Action'
export default {
  name: 'Mainboard',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      username: 'John Doe',
      useraccount: 'johndoe@email.com',
      prods: [{
        name: '旋风爆米花',
        options: [...'abc'],
        url: '../../assets/imgs/Jumbotron.jpg'
      }, {
        name: '劲爽饮料',
        options: [...'abc'],
        url: '../../assets/imgs/Jumbotron.jpg'

      }, {
        name: '火爆小食',
        options: [...'abc'],
        url: '../../assets/imgs/Jumbotron.jpg'
      }]
    }
  },
  components: {
    CardAction
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
html, body, .app-viewport {
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-flow: column;
}

.main-toolbar {
  position: relative;
  z-index: 10;
}

.md-title {
  padding-left: 8px;
  color: #fff;
}

.main-content {
  position: relative;
  z-index: 1;
  overflow: auto;

  .app-prod-card {
    margin: 15px;
  }
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

.md-bottom-bar {
  height: 70px;
}
</style>
