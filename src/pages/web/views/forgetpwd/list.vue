<template>
  <div class="login_box">
    <Header />
    <div class="login_form">
      <img class="l_form_img" src="../../assets/img/login_bg_left.png" alt="" />
      <div class="l_form_box flex_end_center">
        <div class="l_form_cell">
          <div class="l_title_font mar_b20">{{isNextStep?'忘记密码':'新密码'}}</div>
          <div class="l_title_tpis mar_b20" v-if="isNextStep">提示：重置密码成功后，24小时内不可提现资产</div>
          <div class="flex_sbe_center" v-if="isNextStep">
            <div class="flex_start_center">
              <div @click="changeRegType(1)" class="l_tab_cell" :class="loginType === 1?'i_tab_active':''">手机</div>
              <div @click="changeRegType(2)" class="l_tab_cell mar_l10" :class="loginType === 2?'i_tab_active':''">邮箱</div>
            </div>
            <div class="flex_start_center">
              <div class="mar_r5">已有账号?</div>
              <el-link :underline="false" type="primary" href="#/login">登录</el-link>
            </div>
          </div>
          <el-form :model="regForm" :rules="regRules" ref="regForm" class="mar_t20">
            <el-form-item prop="phoneNumber" v-if="loginType === 1 && isNextStep">
              <el-input @keyup.enter.native="comfirmResetPwd" placeholder="请输入电话号码" v-model="regForm.phoneNumber">
                <el-select v-model="regForm.nationalCode" slot="prepend" placeholder="请选择">
                  <el-option class="flex_sbe_center" v-for="(item, index) in areaOptions" :key="index" :value="item.nationalCode">
                    <div>{{item.countryName}}</div>
                    <div>{{'+'+item.nationalCode}}</div>
                  </el-option>
                </el-select>
              </el-input>
            </el-form-item>

            <el-form-item prop="email" v-if="loginType === 2 && isNextStep">
              <el-input @keyup.enter.native="comfirmResetPwd" placeholder="请输入邮箱" v-model="regForm.email"></el-input>
            </el-form-item>

            <el-form-item prop="captcha" v-show="isNextStep">
              <el-input @keyup.enter.native="comfirmResetPwd" placeholder="请输入验证码" v-model="regForm.captcha">
                <el-button slot="append" v-if="smsCountDownNum <= 0" @click="getCaptcha" style="width:80px">验证码</el-button>
                <el-button :disabled="true" slot="append" v-else style="width:80px">{{smsCountDownNum}}s</el-button>
              </el-input>
            </el-form-item>

            <el-form-item prop="newPwd" v-show="!isNextStep">
              <el-input @keyup.enter.native="comfirmResetPwd" placeholder="请输入新密码" maxlength="16" show-password v-model="regForm.newPwd"></el-input>
            </el-form-item>

            <el-form-item prop="confirmPwd" v-show="!isNextStep">
              <el-input @keyup.enter.native="comfirmResetPwd" placeholder="请确认新密码" maxlength="16" show-password v-model="regForm.confirmPwd"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button style="width: 100%" type="primary" @click="goNextStep" v-if="isNextStep">下一步</el-button>
              <el-button style="width: 100%" type="primary" @click="comfirmResetPwd" v-else>确认重置</el-button>
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

.l_title_tpis {
  font-size: 14px;
  color: #666;
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

