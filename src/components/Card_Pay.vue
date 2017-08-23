<template>
  <div class="app-prod-card">
    <md-card md-with-hover class="app-prod-card">
      <md-card-header>
        <md-card-media>
          <img :src="order.url" alt="storm popcorn">
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">{{order.prodName}}</div>
          <div class="md-subhead">{{order.flavor}}</div>
          <md-card-actions>
            <md-button class="md-icon-button md-raised" @click="reduce">
              <md-icon>remove</md-icon>
            </md-button>
            <input type="text" class="app-shoppingcart-volumn" v-model="order.volumn" />
            <md-button class="md-icon-button md-raised md-primary" @click="add">
              <md-icon>add</md-icon>
            </md-button>
          </md-card-actions>
        </md-card-header-text>
      </md-card-header>

    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardPay',
  data () {
    return {
      favor: null
    }
  },
  props: ['order'],
  methods: {
    add () {
      this.volumn += 1
    },
    reduce () {
      if (this.order.volumn > 0) {
        this.order.volumn -= 1
      }
    }
  },
  created () {
    console.log(this.order)
  },
  mounted () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .app-prod-card-volumn-input {

  }

  .app-shoppingcart-volumn {
    width: 30pt;
    font-size: 15pt;
    margin: 0 10pt;
    padding: 2pt 0;
    text-align: center;
  }

  .md-title {
    font-size: 15pt;
  }
</style>
