<template>
  <div class="user_center_box">
    <div class="user_header">
      <div class="u_header_box flex_start_end">
        <img class="u_avtar_box mar_r10" src="../../../assets/img/user_center/user_icon.png" alt="">
        <div class="auth_title">身份认证</div>
      </div>
    </div>
    <div class="user_body">
      <el-card class="u_card_box" shadow="hover" v-if="!showConfirmSteps">
        <!-- <div slot="header" class="u_card_title">
          <span>LV1.基础认证</span>
        </div> -->
        <div class="u_card_cell flex_sbe_center">
          <div>
            <div class="auth_sub_title mar_b20">LV1.基础认证</div>
            <div>基础认证后可提币，24小时限额2BTC，充币无限额</div>
          </div>
          <el-button size="small" @click="goVerify">认证</el-button>
        </div>
      </el-card>
      <div v-else>
        <el-steps simple :active="stepNum">
          <el-step title="第一步填写个人信息" icon="el-icon-user"></el-step>
          <el-step title="第二步上传证件照" icon="el-icon-picture-outline"></el-step>
          <el-step title="第三步提交成功" icon="el-icon-check"></el-step>
        </el-steps>
        <div class="auth_form_box">
          <el-card class="auth_form_cell" shadow="hover">
            <el-form :model="authForm" :rules="authRules" label-width="100px" label-position="left" ref="authForm" class="mar_t20">
              <div v-show="stepNum === 1">
                <el-form-item prop="citizenship" label="国籍:">
                  <el-select style="width: 100%" v-model="authForm.citizenship" placeholder="请选择">
                    <el-option class="flex_sbe_center" v-for="(item, index) in areaOptions" :key="index" :value="item.nationalCode" :label="item.countryName">
                      <div>{{item.countryName}}</div>
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="idType" label="证件类型:">
                  <el-select style="width: 100%" v-model="authForm.idType" placeholder="请选择">
                    <el-option label="身份证" value="1"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item prop="idNumber" label="证件号码:">
                  <el-input placeholder="请输入" v-model="authForm.idNumber"></el-input>
                </el-form-item>
                <el-form-item prop="name" label="姓名:">
                  <el-input placeholder="请输入" v-model="authForm.name"></el-input>
                </el-form-item>
              </div>
              <div v-show="stepNum === 2">
                <el-form-item prop="cardFront">
                  <el-upload
                   drag 
                   action="/api_web/storage/putfile" 
                   :headers=header
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
                </el-form-item>
                <el-form-item prop="cardReverse">
                  <el-upload
                   drag 
                   action="/api_web/storage/putfile"
                   :headers=header
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
                </el-form-item>
                <el-form-item prop="holdCard">
                  <el-upload
                   drag 
                   action="/api_web/storage/putfile"
                   :headers=header
                  >
                    <i class="el-icon-upload"></i>
                    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                  </el-upload>
                </el-form-item>
              </div>
              <div class="text_center">
                <el-button type="primary" @click="goNextStep" v-if="stepNum === 1">下一步</el-button>
                <el-button type="primary" @click="confirmSubmit" v-if="stepNum === 2">提交</el-button>
              </div>
            </el-form>
            <div class="flex_center_center flex_column" v-if="stepNum === 3">
              <img width="142" src="../../../assets/img/user_center/auth_success_img.png" alt="">
              <div class="auth_success_font">提交成功</div>
              <div>身份认证信息提交成功，平台将尽快审核，请您耐心等待......</div>
            </div>
          </el-card>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>
.user_header {
  width: 100%;
  background-color: #062786;
  margin: auto;
  font-size: 12px;
  color: #fff;
}

.u_header_box {
  width: 1200px;
  height: 120px;
  margin: 0 auto;
  padding-bottom: 24px;
}

.user_body {
  width: 1200px;
  margin: 24px auto 120px;
  font-size: 12px;
  color: #fff;
}

.u_avtar_box {
  width: 38px;
  height: 38px;
}

.u_card_box {
  margin-top: 50px;
}

.u_card_cell {
  padding: 24px;
  // border-bottom: 1px solid #e6ecf2;
}

.auth_title {
  font-size: 26px;
  color: #fff;
}

.auth_sub_title {
  font-size: 16px;
  color: #0483ef;
}

.auth_form_box {
  font-size: 14px;
  color: #333;
}

.auth_form_cell {
  width: 50%;
  margin: 50px auto;
}

.auth_success_font {
  margin: 50px auto;
  font-size: 24px;
  color: #0483ef;
}
</style>
