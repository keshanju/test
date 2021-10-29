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
              <el-link :underline="false" type="primary">登录</el-link>
            </div>
          </div>
          <el-form class="mar_t20" :model="regForm" :rules="rules" ref="regForm" label-width="0">
            <el-form-item label="" prop="mobile" v-if="loginType === 'phone'">
              <el-input placeholder="请输入电话号码" maxlength="13" v-model="regForm.mobile" class="input-with-select">
                <el-select v-model="regForm.mobileArea" slot="prepend" placeholder="请选择">
                  <el-option v-for="item in areaOptions" :key="item.id" :label="item.nationalCode" :value="item.nationalCode">{{item.countryName+item.nationalCode}}</el-option>
                </el-select>
              </el-input>
            </el-form-item>
            <el-form-item label="" prop="email" v-else>
              <el-input placeholder="请输入邮箱" maxlength="" v-model="regForm.email"></el-input>
            </el-form-item>
            <el-form-item label="" prop="pwd">
              <el-input placeholder="请输入密码" maxlength="16" show-password v-model="regForm.pwd"></el-input>
            </el-form-item>
            <el-form-item label="" prop="confirmPwd">
              <el-input placeholder="请输入确认密码" maxlength="16" show-password v-model="regForm.confirmPwd"></el-input>
            </el-form-item>
            <el-form-item label="" prop="captcha">
              <el-input placeholder="请输入验证码" v-model="regForm.captcha" class="input-with-select">
                <el-button :disabled="disabled" slot="append" @click="getVerCode" style="width:80px">{{btnText}}</el-button>
              </el-input>
            </el-form-item>
            <el-form-item label="" prop="inviteCode">
              <el-input placeholder="请输入邀请码（选填）" maxlength="16" v-model="regForm.inviteCode"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('regForm')" class="" style="width:299px">立即注册</el-button>
            </el-form-item>
            <el-form-item prop="checked">
              <div class="protocol flex flex-align-center">
                <el-checkbox class="mb5" v-model="regForm.checked"> </el-checkbox>
                <span class="ml5 flex flex-align-center">我已阅读并同意<el-link :underline="false" type="primary">《服务协议》</el-link>和<el-link :underline="false" type="primary">《隐私协议》</el-link></span>
              </div>
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
</style>

