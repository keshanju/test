<template>
  <div class="user_center_box">
    <div class="user_header">
      <div class="u_header_box flex_start_end">
        <div class="auth_title">商家申请</div>
      </div>
    </div>
    <div class="user_body">
      <el-steps simple :active="stepNum">
        <el-step title="填写信息" icon="el-icon-user"></el-step>
        <el-step title="上传视频" icon="el-icon-picture-outline"></el-step>
        <el-step title="提交成功" icon="el-icon-check"></el-step>
      </el-steps>
      <div class="auth_form_box">
        <el-card class="auth_form_cell" shadow="hover">
          <el-form :model="authForm" :rules="authRules" label-width="130px" label-position="left" ref="authForm" class="mar_b20">
            <div v-show="stepNum === 1">
              <el-row :gutter="24">
                <el-col :span="12">
                  <el-form-item prop="realName" label="申请人姓名:">
                    <el-input placeholder="请输入" v-model="authForm.realName"></el-input>
                  </el-form-item>
                  <el-form-item prop="mobile" label="申请人电话:">
                    <el-select style="width: 100%" v-model="authForm.mobile" placeholder="请选择">
                      <el-option label="身份证" value="1"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item prop="mobileArea" label="所属地区:">
                    <el-select style="width: 100%" v-model="authForm.mobileArea" placeholder="请选择">
                      <el-option class="flex_sbe_center" v-for="(item, index) in areaOptions" :key="index" :value="item.nationalCode" :label="item.countryName">
                        <div>{{item.countryName}}</div>
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item prop="email" label="邮箱地址:">
                    <el-input placeholder="请输入" v-model="authForm.email"></el-input>
                  </el-form-item>
                  <el-form-item prop="wechatId" label="微信号:">
                    <el-input placeholder="请输入" v-model="authForm.wechatId"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="12">
                  <el-form-item prop="emergencyContact" label="紧急联系人:">
                    <el-input placeholder="请输入" v-model="authForm.emergencyContact"></el-input>
                  </el-form-item>
                  <el-form-item prop="emergencyContactNumber" label="紧急联系人电话:">
                    <el-input placeholder="请输入" v-model="authForm.emergencyContactNumber"></el-input>
                  </el-form-item>
                  <el-form-item prop="planAssets" label="预投入资产:">
                    <el-select style="width: 100%" v-model="authForm.planAssets" placeholder="请选择">
                      <el-option label="三千" value="3000"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item prop="assetPrint" label="申请类别:">
                    <el-select style="width: 100%" v-model="authForm.assetPrint" placeholder="请选择">
                      <el-option label="首次" value="1"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item prop="assetIntro" label="个人申明:">
                    <el-input placeholder="请输入" type="textarea" :rows="5" v-model="authForm.assetIntro"></el-input>
                  </el-form-item>
                </el-col>
              </el-row>
            </div>
            <div v-show="stepNum === 2">
              <el-form-item class="mar_b50 text_center upload_card_box" label-width="0" prop="cardFront">
                <el-upload
                  list-type="picture-card"
                  action="/api_web/storage/putfile" 
                  :show-file-list="false"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :limit=uploadLimit
                  :headers=header
                  :on-success="(res, file) => {
                    onFileChange(res, file, 'cardFront')
                  }"
                >
                  <img v-if=cardFUrl :src=cardFUrl class="auth_avatar">
                  <div v-else class="auth_upload_box flex_center_center flex_column">
                    <i class="el-icon-plus"></i>
                    <div class="auth_upload_title">上传身份证正面</div>
                    <div class="auth_upload_desc">级别保密，请放心上传</div>
                  </div>
                </el-upload>
              </el-form-item>
            </div>
          </el-form>
          <div class="text_center">
            <el-button type="primary" @click="goNextStep" v-if="stepNum === 1">下一步</el-button>
            <el-button type="primary" @click="confirmSubmit" v-if="stepNum === 2">提交</el-button>
          </div>
          <div class="flex_center_center flex_column" v-if="stepNum === 3">
            <img width="142" src="../../../assets/img/user_center/auth_success_img.png" alt="">
            <div class="auth_success_font">提交成功</div>
            <div>身份认证信息提交成功，平台将尽快审核，请您耐心等待......</div>
          </div>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-card>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./formController.ts">
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
  width: 100%;
  margin: 50px auto;
}

.auth_success_font {
  margin: 50px auto;
  font-size: 24px;
  color: #0483ef;
}

.auth_upload_box {
  height: 100%;
}

.el-icon-plus {
  font-size: 46px;
}
.auth_upload_title {
  font-size: 18px;
  margin-top: 15px;
  font-weight: bold;
  line-height: normal;
  color: #393838;
}

.auth_upload_desc {
  font-size: 12px;
  line-height: normal;
  color: #393838;
}

.auth_avatar {
  width: 100%;
  height: 100%;
}

.upload_card_box {
  /deep/ .el-form-item__error {
    left: 28%;
  }
}


 /deep/ .el-upload--picture-card {
  width: 245px;
  height: 160px;
  line-height: normal;
}
</style>
