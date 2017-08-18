<template>
  <div class="app-prod-card">
    <md-card md-with-hover class="app-prod-card">
      <md-card-header>
        <md-card-media>
          <img :src="cardinfo.url" alt="storm popcorn">
        </md-card-media>

        <md-card-header-text>
          <div class="md-title">{{cardinfo.name}}</div>
          <div class="md-subhead">{{cardinfo.options}}</div>
        </md-card-header-text>
      </md-card-header>

      <md-card-actions>
<!--         <md-button class="md-raised" @click="reduce">-</md-button>
        <input type="number" class="app-prod-card-volumn-input" v-bind:value="volumn" /> -->
        <md-button class="md-raised md-primary" @click="add">来一份</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'CardAction',
  data () {
    return {
      volumn: 0
    }
  },
  props: ['cardinfo'],
  methods: {
    add () {
      this.volumn += 1
    },
    reduce () {
      if (this.volumn > 0) {
        this.volumn -= 1
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .app-prod-card-volumn-input {

  }
</style>
