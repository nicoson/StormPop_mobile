<template>
  <div class="app-prod-card">
    <md-card md-with-hover class="app-prod-card">
      <md-card-header>
        <md-card-media>
          <img :src="cardinfo.url" alt="storm popcorn">
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">{{cardinfo.name}}</div>
          <md-input-container>
            <label for="flavor">口味</label>
            <md-select name="flavor" id="flavor" v-model="flavor">
              <md-option v-for="(option, index) in cardinfo.options" :key="index" :value="option">{{option}}</md-option>
            </md-select>
          </md-input-container>
        </md-card-header-text>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-raised md-primary" @click="addCart">来一份</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardAction',
  data () {
    return {
      volumn: 0,
      flavor: null
    }
  },
  props: ['cardinfo'],
  methods: {
    addCart () {
      if (!this.flavor) return
      let cart
      if (localStorage.cart) {
        cart = JSON.parse(localStorage.cart)
        let ind = cart.findIndex(item => (item.prodName === this.cardinfo.name && item.flavor === this.flavor))
        if (ind > -1) {
          cart[ind].volumn += 1
        } else {
          cart.push({url: this.cardinfo.url, prodName: this.cardinfo.name, flavor: this.flavor, volumn: 1})
        }
      } else {
        cart = []
        cart.push({url: this.cardinfo.url, prodName: this.cardinfo.name, flavor: this.flavor, volumn: 1})
      }

      localStorage.cart = JSON.stringify(cart)
      this.$store.commit('update_cartNum')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .app-prod-card-volumn-input {

  }
</style>
