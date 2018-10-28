<template>
  <div class="Content">
    <router-view></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
  }
</script>

<style scoped>
  .Content {
    overflow: auto;
    flex: 1;
    border: 1px solid #999;
  }
</style>
