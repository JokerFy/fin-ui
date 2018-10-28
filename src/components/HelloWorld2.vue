<template>
  <div class="Container">
    <div class="NavBar">
      <div class="bar-logo">
        logo
      </div>
      <div class="bar-menu">
        i am sideBar
      </div>
    </div>
    <div class="MainContent">
      <div class="content-header">i am head</div>
      <div class="content-box">i am content</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .Container {
    height: 100%;
    display: flex;
    flex: 1
  }

  .NavBar {
    width: 10%;
    border: 1px solid #999;
  }
  .bar-logo{
    height:5%;
    border: 1px solid #999;
  }
  .MainContent {
    display: flex;
    flex: 1;
    flex-direction: column;
    border: 1px solid #999;
  }

  .content-header {
    height:5%;
    border: 1px solid #999;
  }

  .content-box {
    border: 1px solid #999;
    flex:1
  }
</style>
