export default {
  state: {
    collapse: false // 导航栏收缩状态
  },
  getters: {},
  mutations: {
    collapse (state) { // 改变收缩状态
      state.collapse = !state.collapse
    }
  },
  actions: {}
}
