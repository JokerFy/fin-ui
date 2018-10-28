<template>
  <!--<div class="el-container">-->
    <!--<NavBar></NavBar>-->
    <!--<HeadBar></HeadBar>-->
    <!--<MainContent></MainContent>-->
  <!--</div>-->
  <div class="box">
    <span class="item"></span>
    <span class="item"></span>
  </div>
</template>

<script>
  import HeadBar from './layout/MainContent/HeadBar/HeadBar'
  import NavBar from './layout/NavBar/NavBar'

  export default {
    components: {
      HeadBar,
      NavBar
    }
  }
</script>

<style>
  html,body{height:100%; width:100%; overflow:hidden; margin:0;
    padding:0;}
  .box{
    display: -webkit-flex;
    height: 100%;
  }
  .item{
    height:33%;
    width: 33%;
    border-radius: 100px;
    border: 10px solid #999;
  }
  .item:nth-child(2) {
    align-self: center;
  }
</style>
