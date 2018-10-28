import Vue from 'vue'
import vuex from 'vuex'

import collapse from './modules/collapse'
import menu from './modules/menu'
import tab from './modules/tab'

Vue.use(vuex)

const store = new vuex.Store({
  modules: {
    collapse: collapse,
    menu: menu,
    tab: tab
  }
})

export default store
