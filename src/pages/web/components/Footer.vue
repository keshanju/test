<!--  -->
<template>
  <div class="footer_box">
    <div class="flex_sbe_center f_inner_box">
      <div class="flex_start_center" style="width: 30%">
        <img class="mar_r20" src="../assets/img/weixin.png" alt="">
        <img class="mar_r20" src="../assets/img/icon_bai.png" alt="">
        <img class="mar_r20" src="../assets/img/weibo.png" alt="">
        <img src="../assets/img/icon_twitter.png" alt="">
      </div>
      <div class="flex_sbe_center" style="width: 60%">
        <div style="width: 25%" class="flex_start_end flex_column">
          <el-link class="f_link_font" :underline="false">关于我们</el-link>
          <el-link class="f_link_font" :underline="false">官方验证通道</el-link>
        </div>
        <div style="width: 25%" class="flex_start_end flex_column">
          <el-link class="f_link_font" :underline="false">帮助中心</el-link>
          <el-link class="f_link_font" :underline="false">上币申请</el-link>
        </div>
        <div style="width: 25%" class="flex_start_end flex_column">
          <el-link class="f_link_font" :underline="false">新手指南</el-link>
          <el-link class="f_link_font" :underline="false">用户协议</el-link>
        </div>
        <div style="width: 25%" class="flex_start_end flex_column">
          <el-link class="f_link_font" :underline="false">隐私条款</el-link>
          <router-link to="/business">
            <el-link class="f_link_font" :underline="false">成为商家</el-link>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    };
  },
}

</script>
<style lang='less' scoped>
.footer_box {
  width: 100%;
  min-width: 1200;
  margin: 0 auto;
  padding: 100px 0;
  background: #001640;
  font-size: 14px;
  color: #fff;
  position: relative;
  z-index: 999;
}

.f_inner_box {
  width: 1200px;
  margin: 0 auto;
  height: 226px
}

.f_link_font {
  font-size: 14px;
  color: #FFF;
}

</style>