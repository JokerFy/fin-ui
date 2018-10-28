export default {
  state: {
    MenuTree: []// 导航菜单树
  },
  getters: {},
  mutations: {
    setMenuTree (state, MenuTree) { // 设置导航菜单树
      state.MenuTree = MenuTree
    }
  },
  actions: {}
}
