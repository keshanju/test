<template>
  <div class="login_box">
    <Header />
    <div class="login_form">
      <img class="l_form_img" src="../../assets/img/login_bg_left.png" alt="" />
      <div class="l_form_box flex_end_start">
        <div class="l_form_cell mar_t30">
          <div class="flex_sbe_center">
            <div class="flex_start_center">
              <div @click="changeRegType('phone')" class="l_tab_cell" :class="loginType === 'phone'?'i_tab_active':''">手机</div>
              <div @click="changeRegType('email')" class="l_tab_cell mar_l10" :class="loginType === 'email'?'i_tab_active':''">邮箱</div>
            </div>
            <div class="flex_start_center">
              <div class="mar_r5">已有账号?</div>
              <el-link :underline="false" type="primary" href="#/login">登录</el-link>
            </div>
          </div>
          <el-form class="mar_t20" :model="regForm" :rules="regRules" ref="regForm">
            <el-form-item prop="phoneNumber" v-show="loginType === 'phone'">
              <el-input placeholder="请输入电话号码" v-model="regForm.phoneNumber">
                <el-select v-model="regForm.nationalCode" slot="prepend" placeholder="请选择">
                  <el-option class="flex_sbe_center" v-for="(item, index) in areaOptions" :key="index" :value="item.nationalCode">
                    <div>{{item.countryName}}</div>
                    <div>{{'+'+item.nationalCode}}</div>
                  </el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <el-form-item prop="email" v-show="loginType === 'email'">
              <el-input placeholder="请输入邮箱" v-model="regForm.email"></el-input>
            </el-form-item>
            <el-form-item prop="pwd">
              <el-input placeholder="请输入密码" maxlength="16" show-password v-model="regForm.pwd"></el-input>
            </el-form-item>
            <el-form-item prop="confirmPwd">
              <el-input placeholder="请输入确认密码" maxlength="16" show-password v-model="regForm.confirmPwd"></el-input>
            </el-form-item>
            <el-form-item prop="captcha">
              <el-input placeholder="请输入验证码" v-model="regForm.captcha">
                <el-button :disabled="disabled" slot="append" @click="getVerCode" style="width:80px">{{btnText}}</el-button>
              </el-input>
            </el-form-item>
            <el-form-item prop="inviteCode" style="margin-bottom: 0px">
              <el-input placeholder="请输入邀请码（选填）" maxlength="16" v-model="regForm.inviteCode"></el-input>
            </el-form-item>
            <el-form-item prop="checked" style="margin-bottom: 20px">
              <div class="flex_start_center">
                <el-checkbox v-model="regForm.checked"> </el-checkbox>
                <span class="mar_l5">我已阅读并同意</span>
                <el-link :underline="false" type="primary">《服务协议》</el-link>
                <span>和</span>
                <el-link :underline="false" type="primary">《隐私协议》</el-link>
              </div>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitRegForm" class="" style="width:100%">立即注册</el-button>
            </el-form-item>
          </el-form>
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
  width: 1080px;
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
  width: 330px;
  margin-right: 50px;
}

.l_title_font {
  color: #333333;
  font-size: 22px;
}

.l_tab_cell {
  font-size: 22px;
  color: #333333;
  cursor: pointer;
  padding-bottom: 5px;
  border-bottom: 4px solid transparent;
  box-sizing: border-box;
}

.l_tab_cell:hover {
  color: #0483EF;
  border-bottom: 4px solid #0483EF;
  // border-radius: 4px;
}

.i_tab_active {
  color: #0483EF;
  border-bottom: 4px solid #0483EF;
}

/deep/ .el-select .el-input {
    width: 100px;
  }
</style>

