<template>
  <div class="NavBar">
    <div class="nav-menu">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="this.$store.state.collapse.collapse">
        <div class="nav-top">
          <span class="desc">
            {{desc}}
          </span>
        </div>
        <!-- 导航菜单树组件，动态加载菜单 -->
        <MenuTree v-for="item in NavTree" :key="item.id" :menu="item"></MenuTree>
      </el-menu>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {mapState} from 'vuex'
  import MenuTree from '@/components/MenuTree/MenuTree'

  export default {
    name: 'NavBar',
    components: {
      MenuTree
    },
    data () {
      console.log(this.$store.state.collapse)
      return {
        logo: require('./logo.png'),
        desc: 'FIN-ADMIN'
      }
    },
    methods: {
      findMenuTree () {
        this.$api.menu.findMenuTree()
          .then((res) => {
            this.$store.commit('setMenuTree', res.data)
            console.log(this.$store.state.menu.MenuTree)
          })
          .catch(function (res) {
            alert(res)
          })
      }
    },
    computed: {
      ...mapState({
          NavTree: state => state.menu.MenuTree
        })
    },
    mounted: function () {
      this.findMenuTree()
    }
  }
</script>

<style scoped lang="scss">
  .NavBar {
    height: 100%;
    border: 1px solid #999;
    overflow: auto;
    .nav-menu {
      height: 100%;
      background-color: rgb(238, 241, 246);
      .el-menu-vertical-demo:not(.el-menu--collapse) {
        height: 100%;
        width: 250px;
        min-height: 40px;
        .nav-top {
          display: flex;
          height: 6%;
          border-bottom: 1px solid #999;
          .desc {
            margin: auto;
          }
        }
      }
    }
  }
</style>
