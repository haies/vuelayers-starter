import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import user from './modules/user'
import permission from './modules/permission'
import getters from './getters'
import map from './modules/map'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    user,
    map,
    permission
  },
  getters
})

export default store
