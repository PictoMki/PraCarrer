/* eslint-disable no-new */
import Vuex from 'vuex'
import usersModule from './users'

new Vuex.Store({
  modules: {
    users: usersModule
  }
})
