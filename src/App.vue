<template>
  <div id="app">
    <weather-search></weather-search>
  </div>
</template>

<script>
import WeatherSearch from './components/WeatherSearch'
import store from './store/index'

export default {
  name: 'app',
  store,
  components: {
    WeatherSearch
  }
}
</script>

<style>
@import url(https://fonts.googleapis.com/css?family=Raleway:100,400);

body {
  margin: 0;
  padding: 0;
  background-image: url('../images/pattern.svg');
  color: #35342f;
  font-family: 'Raleway', sans-serif;
}
</style>
