<template>
  <div class="otc_user_box">
    <div class="otc_user_body">
      <div class="mar_b50">
        <div class="otc_title">商家申请</div>
        <div class="mar_t20">成为商家，享受更多交易特权</div>
      </div>
      <div class="mar_b50 flex_sbe_center">
        <div class="otc_user_cell1 flex_end_center flex_column">
          <div class="otc_sub_title mar_b15">安全保障</div>
          <div class="mar_b30">商家信息严格保密，拒绝信息泄漏</div>
        </div>
        <div class="otc_user_cell2 flex_end_center flex_column">
          <div class="otc_sub_title mar_b15">发布广告</div>
          <div class="mar_b30">商家可自由发布广告，买卖更灵 活、更便捷</div>
        </div>
        <div class="otc_user_cell3 flex_end_center flex_column">
          <div class="otc_sub_title mar_b15">专属标识</div>
          <div class="mar_b30">商家名称后有专属标识，增强交 易方信任</div>
        </div>
        <div class="otc_user_cell4 flex_end_center flex_column">
          <div class="otc_sub_title mar_b15">一对一服务</div>
          <div class="mar_b30">平台向商家提供一对一专属服务</div>
        </div>
      </div>
      <div class="flex_center_center flex_column">
        <el-checkbox v-model="checked">
          <div class="flex_start_center">
            <span class="mar_r5" style="color: #FFF">我已阅读并同意</span> 
            <a href="#" style="color: #0483EF">《认证商家协议》</a>
            </div>
        </el-checkbox>
        <el-button class="mar_t20" size="medium" type="primary" @click="applyOtcUser">立即申请</el-button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>
.otc_user_box {
  width: 100%;
  height: 798px;
  font-size: 14px;
  color: #FFF;
  text-align: center;
  background-image: url(../../../assets/img/user_center/otc_user_bg.png);
  background-repeat: no-repeat;
  background-size: cover;
}
.otc_user_body {
  width: 1200px;
  margin: 0 auto;
  padding: 130px 0 65px;
  font-size: 12px;
  color: #fff;
}

.otc_title {
  font-size: 24px;
  font-weight: 600;
  color: #0483EF;
}

.otc_sub_title {
  font-size: 24px;
  font-weight: 600;
  color: #FFF;
}

.otc_user_cell {
  width: 258px;
  height: 358px;
  border-radius: 26px;
  // margin-left: ;
  text-align: center;
}

.otc_user_cell1 {
  &:extend(.otc_user_cell);
  background-image: url(../../../assets/img/user_center/business_bg_1.png);
}

.otc_user_cell2 {
  &:extend(.otc_user_cell);
  background-image: url(../../../assets/img/user_center/business_bg_2.png);
}

.otc_user_cell3 {
  &:extend(.otc_user_cell);
  background-image: url(../../../assets/img/user_center/business_bg_3.png);
}

.otc_user_cell4 {
  &:extend(.otc_user_cell);
  background-image: url(../../../assets/img/user_center/business_bg_4.png);
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
