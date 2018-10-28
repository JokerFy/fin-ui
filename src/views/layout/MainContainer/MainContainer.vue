<template>
  <div class="MainContainer">
    <Header></Header>
    <Content></Content>
  </div>
</template>

<script>
  import Header from './Header/Header'
  import Content from './Content/Content'

  export default {
    components: {
      Header,
      Content
    }
  }
</script>

<style scoped lang="scss">
  .MainContainer {
    display: flex;
    flex: 1;
    flex-direction: column;
  }
</style>
