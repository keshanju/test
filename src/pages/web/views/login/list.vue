<template>
  <div class="login_box">
    <Header />
    <div class="login_form">
      <img class="l_form_img" src="../../assets/img/login_bg_left.png" alt="" />
      <div class="l_form_box flex_end_center">
        <div class="l_form_cell">
          <div class="l_title_font mar_b20">欢迎登录 SKIES</div>
          <el-form ref="loginForm" label-width="0" class="mar_t50">
            <el-form-item label="" prop="userName">
              <el-input placeholder="邮箱或手机号"></el-input>
            </el-form-item>
            <el-form-item label="" prop="password">
              <el-input show-password placeholder="登录密码"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button style="width: 100%" type="primary">立即登录</el-button>
            </el-form-item>
          </el-form>
          <div class="flex_sbe_center">
            <div class="flex_start_center">
              <div class="mar_r5">没有账号?</div>
              <el-link :underline="false" type="primary" href="#/register">注册</el-link>
            </div>
            <el-link type="primary">忘记密码</el-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>
.login_box {
  width: 100%;
  height: 100%;
  font-size: 14px;
  color: #333;
  position: relative;
  background-image: url("../../assets/img/login_bg.png");
  background-size: cover;
}

.login_form {
  width: 1000px;
  height: calc(100vh-60px);
  position:absolute;
  left:0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}

.l_form_img {
  // width: 595px;
  position: absolute;
  z-index: 2;
  top: 50%;
  transform: translate(0, -50%);
}

.l_form_box {
  // width: 1200px;
  height: 500px;
  background-color: #fff;
  border-radius: 8px;
  position:absolute;
  left:0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  margin-left: 15%;
}

.l_form_cell {
  width: 310px;
  margin-right: 50px;
}

.l_title_font {
  color: #333333;
  font-size: 22px;
}
</style>

