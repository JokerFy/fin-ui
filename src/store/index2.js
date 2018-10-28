import Vue from 'vue'
import vuex from 'vuex'

Vue.use(vuex)

const store = new vuex.Store({
  state: {
    collapse: false, // 导航栏收缩状态
    editableTabs: [],
    editableTabsValue: 1,
    MenuTree: []
  },
  mutations: {
    collapse (state) { // 改变收缩状态
      state.collapse = !state.collapse
    },
    addTab (state) {
      // console.log(this.text)
      let newTabName = ++this.tabIndex + ''
      state.editableTabs.push({
        title: '111',
        name: 222,
        content: 'New Tab content2'
      })
      state.editableTabsValue = newTabName
    },
    setMenuTree (state, MenuTree) {
      state.MenuTree = MenuTree
    }
  }
})

export default store
