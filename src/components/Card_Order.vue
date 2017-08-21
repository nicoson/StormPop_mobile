<template>
  <div class="app-prod-card">
    <md-card md-with-hover class="app-prod-card">
      <md-card-header>
        <md-card-media>
          <img :src="orderinfo.url" alt="storm popcorn">
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">{{orderinfo.orderID}}</div>
<!--           <md-input-container>
            <label for="favor">口味</label>
            <md-select name="favor" id="favor" v-model="favor">
              <md-option v-for="(option, index) in cardinfo.options" :key="index" :value="option">{{option}}</md-option>
            </md-select>
          </md-input-container> -->
        </md-card-header-text>
      </md-card-header>

      <md-card-actions>
        <md-button class="md-raised md-primary">来一份</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardOrder',
  data () {
    return {
      volumn: 0,
      favor: null
    }
  },
  props: ['orderinfo'],
  methods: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>

</style>
