<template>
  <md-tabs md-centered>
    <md-tab md-label="未使用的订单" md-icon="ondemand_video">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    </md-tab>

    <md-tab md-label="已使用的订单" md-icon="music_note">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>
    </md-tab>
  </md-tabs>
</template>

<script>
import CardAction from '@/components/Card_Action'
import {mapGetters} from 'vuex'

export default {
  name: 'Myorders',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  computed: {
    ...mapGetters(['orderInfo'])
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
