<template>
  <div class="Header">
    <el-button @click="collapse">展开</el-button>
    <!--<el-tabs v-model="editableTabsValue" type="card" closable @tab-remove="removeTab">-->
      <!--<el-tab-pane-->
        <!--v-for="item in editableTabs"-->
        <!--:key="item.name"-->
        <!--:label="item.title"-->
      <!--&gt;-->
        <!--{{item.content}}-->
      <!--</el-tab-pane>-->
    <!--</el-tabs>-->
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        editableTabsValue: this.$store.state.tab.editableTabsValue,
        editableTabs: this.$store.state.tab.editableTabs
      }
    },
    methods: {
      collapse: function () {
        return this.$store.commit('collapse')
      },
      removeTab (targetName) {
        let tabs = this.editableTabs2
        let activeName = this.editableTabsValue2
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }

        this.editableTabsValue2 = activeName
        this.editableTabs2 = tabs.filter(tab => tab.name !== targetName)
      }
    }
  }
</script>

<style scoped lang="scss">
  .Header {
    height: 6%;
    width: 100%;
    border-bottom: 1px solid #999;
    .head-logo {
    }
  }
</style>
