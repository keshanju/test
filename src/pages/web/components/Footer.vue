<!--  -->
<template>
  <div class="footer">
    <div class="main-width">
      <div>
        <img src="../assets/img/weixin.png" alt="">
        <img src="../assets/img/icon_bai.png" alt="">
        <img src="../assets/img/weibo.png" alt="">
        <img src="../assets/img/icon_twitter.png" alt="">
      </div>
      <div>
        <div class="flex-1 col">
          <el-link class="link" :underline="false">关于我们</el-link>
          <el-link class="link" :underline="false">官方验证通道</el-link>
        </div>
        <div class="flex-1 col">
          <el-link class="link" :underline="false">帮助中心</el-link>
          <el-link class="link" :underline="false">上币申请</el-link>
        </div>
        <div class="flex-1 col">
          <el-link class="link" :underline="false">新手指南</el-link>
          <el-link class="link" :underline="false">用户协议</el-link>
        </div>
        <div class="flex-1 col">
          <el-link class="link" :underline="false">隐私条款</el-link>
          <router-link to="/business">
            <el-link class="link" :underline="false">成为商家</el-link>
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

  components: {},

  computed: {},

  mounted() { },

  methods: {}
}

</script>
<style lang='less' scoped>
.footer {
  width: 100%;
  background: #001640;
  color: #fff;
  // padding: 100px 120px;
  .main-width {
    display: flex;
    justify-content: space-between;
  }
  .main-width > div {
    display: flex;
    img {
      height: 30px;
      margin-right: 55px;
    }
    .link {
      width: 100%;
      // margin-left: 58px;
      text-align: left;
      color: #fff;
    }
    .link:hover{
      color: #0483EF;
    }
  }
}
</style>