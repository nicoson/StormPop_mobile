<template>
  <md-tabs md-centered>
    <md-tab md-label="未使用的订单" md-icon="ondemand_video">
<!--       您还没有订单，赶紧去"逛逛"下单吧 -->
      <CardOrder v-for="(order, index) in orderInfo" :orderinfo="order" :valid=true :key="index"></CardOrder>
    </md-tab>

    <md-tab md-label="已使用的订单" md-icon="music_note">
      <CardOrder v-for="(order, index) in orderInfo" :orderinfo="order" :valid=false :key="index"></CardOrder>
    </md-tab>
  </md-tabs>
</template>

<script>
import CardOrder from '@/components/Card_Order'
import {checkOrder} from '@/api/order'
import {mapGetters} from 'vuex'

export default {
  name: 'Myorders',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      orderInfo: []
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created () {
    this.getOrderInfo()
  },
  methods: {
    async getOrderInfo () {
      let data = await checkOrder(this.userInfo.username)
      this.$store.commit('update_orderInfo', data)
      this.orderInfo = data
    }
  },
  components: {
    CardOrder
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
