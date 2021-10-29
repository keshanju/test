<template>
  <div class="login-page">
    <div class="login-card">
      <div class="login-main">
        <div class="login-title">{{SiteName}}</div>
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="0px"
          class="login-content"
          v-loading="loading"
        >
          <el-form-item prop="admin_name">
            <el-input v-model="ruleForm.admin_name" placeholder="请输入用户名">
            </el-input>
          </el-form-item>
          <el-form-item prop="admin_pwd">
            <el-input
              type="password"
              placeholder="请输入密码"
              v-model="ruleForm.admin_pwd"
              @keyup.enter.native="submitForm('ruleForm')"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="ver_code">
            <el-col :span="16">
              <el-input placeholder="请输入验证码" v-model="ruleForm.ver_code">
              </el-input>
            </el-col>
            <el-col :span="8">
              <img :src="vercode.img" @click="getVerCode" />
            </el-col>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>
.login-page {
  background: #fff;
  height: 100%;
  position: absolute;
  width: 100%;
}
.login-card {
  width: 840px;
  height: 482px;
  margin: 100px auto;
  border-radius: 3px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  line-height: 1;
  background: url("../../assets/img/signup_bg-5ff4429982.jpg");
}
.login-main {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.login-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  border-bottom: 1px solid #ddd;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-content {
  padding: 30px 30px;
}
</style>

