<template>
  <div class="app-prod-card" @click="openDialog('order_detail')">
    <md-card>
      <md-card-header>
        <md-card-media>
          <img src="/static/imgs/ordericon.jpg" alt="People">
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">我的订单</div>
          <div class="md-subhead">{{orderinfo.orderTime}}</div>
        </md-card-header-text>
      </md-card-header>
    </md-card>

    <md-dialog class="app-order-detail-container" ref="order_detail">
      <p class="app-order-detail-title">&#10052; 您的订单 &#10052;</p>
      <p class="app-order-detail-time"><small><small>{{orderinfo.orderTime}}</small></small></p>
      
      <svg v-if="valid" class="barcode" ref="barcode"></svg>
      
      <table class="app-order-detail-table">
        <tr v-for="order in orderinfo.orderDetail">
          <td>{{order.prodName}}</td>
          <td>{{order.flavor}}</td>
          <td>x {{order.volumn}}</td>
          <td>{{order.price}}</td>
        </tr>
      </table>
      <table class="app-order-detail-table">
        <tr>
          <td>小计：</td>
          <td></td><td></td>
          <td>{{total}}</td>
        </tr>
      </table>
    </md-dialog>
  </div>
</template>

<script>
import JsBarcode from 'jsbarcode'
export default {
  name: 'CardOrder',
  data () {
    return {
      volumn: 0,
      favor: null,
      total: 0
    }
  },
  props: ['orderinfo', 'valid'],
  mounted () {
    if (this.valid) {
      JsBarcode(this.$refs.barcode, this.orderinfo.orderID, {
        // format: 'code128',
        // lineColor: '#0aa',
        // width: 2,
        // height: 100,
        displayValue: false
      })
    }
    this.total = this.orderinfo.orderDetail.map(v => v.volumn * v.price).reduce((sum, item) => sum + item, 0)
  },
  methods: {
    openDialog (ref) {
      this.$refs[ref].open()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .app-prod-card {
    margin: 0 0 20px 0;
  }

  // .md-theme-default.md-dialog-container.md-active  {
  //   color: #aaa!important;
  // }

  .app-order-detail-title {
    text-align: center;
    margin-top: 10px;
  }

  .app-order-detail-time {
    text-align: center;
    color: #aaa;
  }

  .app-order-detail-table {
    width: 80%;
    margin: 10% 10% 0 10%;

    td:nth-of-type(1) {
      width: 40%;
    }
    td:nth-of-type(2) {
      width: 40%;
    }
    td:nth-of-type(3) {
      width: 10%;
      text-align: right;
    }
    td:nth-of-type(4) {
      width: 10%;
      text-align: right;
    }

    &:nth-of-type(2) {
      border-top: 1px solid #aaa;
      margin-top: 5%;
      margin-bottom: 20px;
    }
  }
</style>