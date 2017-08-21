<template>
    <!-- Main board -->
    <main class="main-content">
      <!-- AD slot -->
      <md-card md-with-hover>
<!--         <md-card-media>
          <img src="/static/imgs/Jumbotron.jpg" alt="Jumbotron">
        </md-card-media> -->
        <p>pay now</p>
      </md-card>
      
      <!-- Products list -->
      <CardAction v-for="(prod, index) in prodInfo" :cardinfo="prod" :key="index"></CardAction>
    </main>
</template>

<script>
import CardAction from '@/components/Card_Action'
import {mapGetters} from 'vuex'

export default {
  name: 'ShoppingCart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['prodInfo'])
  },
  created () {
    // console.log(this.prodInfo)
  },
  components: {
    CardAction
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.main-content {
  position: relative;
  z-index: 1;
  overflow: auto;

  .app-prod-card {
    margin: 15px;
  }
}
</style>
