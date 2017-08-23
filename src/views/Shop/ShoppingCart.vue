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
      <CardPay v-for="(order, index) in orderList" :order="order" :key="index"></CardPay>

      <!-- Submit Order -->
      <md-button v-if="orderList?(orderList.length > 0):false" class="md-raised md-primary app-shoppingcart-confirmorder" @click="submitOrder">确认下单</md-button>
      <p v-else class="app-shoppingcart-noorder">您还没有订单，赶紧去"逛逛"下单吧</p>
    </main>
</template>

<script>
import CardPay from '@/components/Card_Pay'
// import {mapGetters} from 'vuex'

export default {
  name: 'ShoppingCart',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      orderList: []
    }
  },
  computed: {
    // ...mapGetters(['prodInfo'])
  },
  created () {
    // console.log(this.prodInfo)
  },
  mounted () {
    this.orderList = JSON.parse(localStorage.cart ? localStorage.cart : null)
  },
  components: {
    CardPay
  },
  methods: {
    submitOrder () {
      //  post
      localStorage.removeItem('cart')
      this.orderList = []
    }
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

  .app-shoppingcart-confirmorder {
    width: 80%;
    margin-bottom: 20pt;
  }

  .app-shoppingcart-noorder {
    color: #aaa;
    margin: 50pt 0;
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
