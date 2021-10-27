<template>
  <div id="sky-web-exchange">
    <Navbar id="header"></Navbar>
    <div class="main-container">
      <keep-alive v-if="$route.meta.keepAlive">
        <router-view></router-view>
      </keep-alive>
      <router-view v-else></router-view>
    </div>
    <Footer id="footer"></Footer>
  </div>
</template>
<script lang="ts" src="./layoutController.ts">

</script>
<style lang="less" scoped>

</style>


