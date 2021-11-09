<template>
  <div>
    <Header />
    <div class="lay_page">
      <div class="lay_sidebar">
        <!-- <el-scrollbar wrap-class="scrollbar-wrapper"> -->
          <div class="sidebar_icon_box">
            <i class="el-icon-s-fold"></i>
          </div>
          <el-menu :default-active="activeMenu" @open="handleOpen" @close="handleClose" :collapse="isCollapse" :router="true">
            <el-menu-item index="/finance/account">
              <i class="el-icon-bank-card"></i>
              <span slot="title">资产总览</span>
            </el-menu-item>
            <el-menu-item index="/finance/account/spot">
              <i class="el-icon-news"></i>
              <span slot="title">币币账户</span>
            </el-menu-item>
            <el-menu-item index="/finance/account/otc">
              <i class="el-icon-guide"></i>
              <span slot="title">法币账户</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-cpu"></i>
              <span slot="title">量化账户</span>
            </el-menu-item>
            <el-menu-item index="5">
              <i class="el-icon-set-up"></i>
              <span slot="title">算力账户</span>
            </el-menu-item>
          </el-menu>
        <!-- </el-scrollbar> -->
      </div>
      <div class="lay_content_box">
        <transition :name=transitionName  mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <Footer />
  </div>
</template>
<script lang="ts" src="./financeLayoutController.ts">

</script>
<style lang="less" scoped>

.lay_page {
  width: 100%;
  display: flex;
  flex: 1 0 auto;
  margin: 0 auto;
  max-width: 2560px;
  background-color: #eef1f5;
}

.lay_sidebar {
  width: 200px;
  background-color: #fff;
}

.lay_content_box {
  flex: 1;
  padding: 24px;
}

.sidebar_icon_box {
  // text-align: center;
}

.el-icon-s-fold {
  font-size: 24px;
  padding: 12px 24px 12px;
  cursor: pointer;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}

/deep/ .el-menu {
  border: none;
}

</style>


