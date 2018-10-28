<template>
  <div>
  <el-button type="primary" @click="testAxios">测试</el-button>
  <el-button type="primary" @click="getUser">getUser</el-button>
  <el-button type="primary" @click="getMenu">getMenu</el-button>
  </div>
</template>

<script>
  // eslint-disable-next-line
  import mock from '@/mock/index.js'
  import axios from 'axios'
  export default {
    name: 'Home',
    methods: {
      testAxios () {
        axios.get('http://127.0.0.1:8080')
          .then(function (res) {
            alert(res.data)
          }).catch(function (res) {
            alert(res)
        })
      },
      // getUser () {
      //   axios.get('http://127.0.0.1:8080/user')
      //     .then(function (res) {
      //       alert(JSON.stringify(res.data))
      //     }).catch(function (res) {
      //     alert(res)
      //   })
      // },
      getUser () {
        this.$api.getUser().then(function (res) {
          alert(JSON.stringify(res.data))
        }).catch(function (res) {
          alert(res)
        })
      },
      getMenu () {
        axios.get('http://127.0.0.1:8080/menu')
          .then(function (res) {
            alert(JSON.stringify(res.data))
          }).catch(function (res) {
          alert(res)
        })
      }
    }
  }
</script>

<style>
  .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    line-height: 200px;
  }

  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
