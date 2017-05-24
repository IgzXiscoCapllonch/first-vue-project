<template>
  <div>
    <div class="searchBox">
      <input
        type="text"
        v-model="searchText"
        v-on:input="setSearchText"
        v-on:keyup.enter="fetchWeather"
        placeholder="City"
      />
      <div>
        <button v-on:click="fetchWeather">
          {{ loading ? 'Loading...' : 'Get weather' }}
        </button>
      </div>
    </div>
    <weather-card
      v-for="(weatherItem, index) in weatherList"
      v-bind:item="weatherItem"
      :key="index"
    >
    </weather-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import WeatherCard from './WeatherCard.vue'
export default {
  computed: mapGetters(['searchText', 'loading', 'weatherList']),
  methods: {
    setSearchText (e) {
      this.$store.dispatch('setSearchText', e.target.value)
    },
    fetchWeather () {
      this.$store.dispatch('fetchWeather')
    }
  },
  components: {
    WeatherCard
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .searchBox {
    width: 500px;
    margin: 50px auto;
    text-align: center;
  }
  
  .searchBox button {
    border-radius: 5px;
    padding: 10px 20px;
    font-size: 20px;
    text-decoration: none;
    margin: 20px;
    color: #fff;
    position: relative;
    display: inline-block;
    background-color: #2ecc71;
    box-shadow: 0px 5px 0px 0px #15B358;
    border: none;
  }
  
  .searchBox button:active {
    transform: translate(0px, 5px);
    box-shadow: 0px 1px 0px 0px;
  }
  
  .searchBox button:disabled {
    opacity: 0.5;
  }
  
  .searchBox input[type="text"] {
    padding: 10px;
    border: solid 1px gainsboro;
    transition: box-shadow 0.3s, border 0.3s;
    width: 300px;
    font-size: 18px;
    font-family: 'Raleway', sans-serif;
  }
  
  .searchBox input[type="text"]:focus {
    border: solid 1px #2ecc71;
    box-shadow: 0 0 5px 1px #15B358;
    outline: none;
  }
</style>
