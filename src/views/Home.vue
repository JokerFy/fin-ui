<template>
  <div class="container">
    <!-- 导航菜单栏 -->
    <NavBar></NavBar>
    <!-- 主内容区域 -->
    <MainContainer></MainContainer>
  </div>
</template>

<script>
  import NavBar from './layout/NavBar/NavBar'
  import MainContainer from './layout/MainContainer/MainContainer'

  export default {
    components: {
      NavBar,
      MainContainer
    }
  }
</script>

<style scoped lang="scss">
  .container {
    height: 100%;
    display: flex;
    align-content: flex-start;
  }

</style>
