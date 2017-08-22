<template>
    <!-- Main board -->
    <main class="main-content">
      <!-- AD slot -->
      <md-card md-with-hover>
<!--         <md-card-media>
          <img src="/static/imgs/Jumbotron.jpg" alt="Jumbotron">
        </md-card-media> -->
        <div class="app-shoppingcart-jumbotron">购物车</div>
      </md-card>
      
      <!-- Products list -->
      <CardPay v-for="(prod, index) in prodInfo" :cardinfo="prod" :key="index"></CardPay>
    </main>
</template>

<script>
import CardPay from '@/components/Card_Pay'
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
    CardPay
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .app-shoppingcart-jumbotron {
    padding: 10pt;
    font-size: 15pt;
    background: #2196f3;
    color: white;
  }

  .main-content {
    position: relative;
    z-index: 1;
    overflow: auto;

    .app-prod-card {
      margin: 15px;
    }
  }
</style>
