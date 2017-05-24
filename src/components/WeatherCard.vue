<template>
  <div class="wrapper">
    <img v-bind:src="imagePath">
    <h3>{{item.description}} {{item.temp}} ºC</h3>
    
    <h1>{{item.city}}, {{item.country}}</h1>
  </div>
</template>

<script>
  export default {
    props: ['item'],
    computed: {
      imagePath: function () {
        return require(`../../images/weather/${this.item.icon}.svg`)
      }
    }
  }
</script>

<style scoped>
  .wrapper {
  padding: 20px;
  text-align: center;
  margin-bottom: 40px;
  background-color: rgba(0, 0, 0, 0.1);
  color: white;
  }
  
  .wrapper > img {
  height: 100px;
  }
</style>
