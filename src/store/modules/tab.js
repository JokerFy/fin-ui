export default {
  state: {
    editableTabs: [],
    editableTabsValue: 1
  },
  getters: {},
  mutations: {
    addTab (state) {
      // console.log(this.text)
      let newTabName = ++this.tabIndex + ''
      state.editableTabs.push({
        title: '111',
        name: 222,
        content: 'New Tab content2'
      })
      state.editableTabsValue = newTabName
    }
  },
  actions: {}
}
