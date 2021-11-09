<template>
  <div class="user_center_box">
    <el-card class="u_card_box" shadow="hover">
      <div class="u_card_cell flex_sbe_center">
        <div class="flex_start_center">
          <div class="mar_r20">
            <img class="u_icon_box" src="../../assets/img/user_center/phone_icon.png" alt="">
          </div>
          <div>
            <div class="mar_b5">手机验证</div>
            <div>
              用于登陆、提现、修改密码、安全设置时收取验证短信
            </div>
          </div>
        </div>
      </div>
    </el-card>

    <el-card class="u_card_box" shadow="hover">
      <div class="u_card_cell flex_sbe_center">
        <div class="flex_start_center">
          <div class="mar_r20">
            <img class="u_icon_box" src="../../assets/img/user_center/phone_icon.png" alt="">
          </div>
          <div>
            <div class="mar_b5">手机验证</div>
            <div>
              用于登陆、提现、修改密码、安全设置时收取验证短信
            </div>
          </div>
        </div>
      </div>
    </el-card>
    
    <el-card class="u_card_box" shadow="hover">
      <div class="u_card_cell flex_sbe_center">
        <div class="flex_start_center">
          <div class="mar_r20">
            <img class="u_icon_box" src="../../assets/img/user_center/phone_icon.png" alt="">
          </div>
          <div>
            <div class="mar_b5">手机验证</div>
            <div>
              用于登陆、提现、修改密码、安全设置时收取验证短信
            </div>
          </div>
        </div>
      </div>
    </el-card>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>

.user_body {
  width: 1200px;
  margin: 24px auto 120px;
  font-size: 12px;
  color: #FFF;
}

.u_header_box {
  width: 1200px;
  height: 216px;
  margin: 0 auto;
}

.u_avtar_box {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url(../../assets/img/svg/user_icon.svg);
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 24px;
}

.u_cert_box {
  color: #495666;
  font-size: 12px;
  border: 1px solid #e6ecf2;
  padding: 24px;
  border-radius: 2px;
}

.u_card_box {
  margin-top: 20px;
}

.u_card_title {
  font-size: 14px;
  font-weight: 600;
}

.u_card_cell {
  padding: 24px;
  border-bottom: 1px solid #e6ecf2;
  
}

.u_card_cell:last-child {
  border-bottom: none;
}

.u_icon_box {
  width: 30px;
}

/deep/ .el-card__header {
  background-color: #e6ecf2;
}
</style>