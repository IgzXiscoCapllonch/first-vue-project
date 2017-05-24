import weatherService from '../../services/service'
import * as types from '../mutation-types'

const state = {
  weatherList: [],
  loading: false,
  error: null,
  searchText: ''
}

// getters
const getters = {
  searchText: state => state.searchText,
  loading: state => state.loading,
  weatherList: state => state.weatherList
}

// actions
const actions = {
  fetchWeather ({ commit, state }) {
    commit(types.FETCH_WEATHER)
    weatherService(
      state.searchText,
      (weatherList) => commit(types.FETCH_WEATHER_SUCCESS, { weatherList }),
      (error) => commit(types.FETCH_WEATHER_ERROR, { error })
    )
  },
  setSearchText ({commit}, searchText) {
    commit(types.SET_SEARCH_TEXT, {searchText})
  }
}

// mutations
const mutations = {
  [types.SET_SEARCH_TEXT] (state, { searchText }) {
    state.searchText = searchText
  },

  [types.FETCH_WEATHER] (state) {
    state.weatherList = []
    state.error = null
    state.loading = true
  },

  [types.FETCH_WEATHER_SUCCESS] (state, { weatherList }) {
    state.weatherList = weatherList
    state.error = null
    state.loading = false
  },

  [types.FETCH_WEATHER_ERROR] (state, { error }) {
    state.error = error
    state.loading = false
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
