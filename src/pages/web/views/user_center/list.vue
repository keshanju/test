<template>
  <div class="user_center_box">
    <div class="user_header">
      <div class="u_header_box flex_start_center">
        <div class="u_avtar_box"></div>
        <div class="flex_start_start flex_column">
          <div class="flex_start_center">
            <div>Hi, 15165645621</div>
            <div>UID: 183787630</div>
          </div>
          <div class="">最后登录时间: 2021-11-03 10:08:21 IP:103.135.251.46 </div>
        </div>
      </div>
    </div>
    <div class="user_body">
      <div class="u_cert_box flex_sbe_center">
        <div>
          <div class="mar_b5">个人认证</div>
          <div class="mar_b10">完成个人认证有助于保护账户安全，提高提现额度及交易权限</div>
        </div>
        <el-button type="primary" size="small">身份认证</el-button>
      </div>
      <el-card class="u_card_box" shadow="hover">
        <div slot="header" class="u_card_title">
          <span>安全认证</span>
          <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
        </div>
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
          <div class="flex_start_center">
            <div class="mar_r10">15172400950</div>
            <el-link :underline="false">验证</el-link>
          </div>
        </div>
        <div class="u_card_cell flex_sbe_center">
          <div class="flex_start_center">
            <div class="mar_r20">
              <img class="u_icon_box" src="../../assets/img/user_center/email_icon.png" alt="">
            </div>
            <div>
              <div>邮箱验证</div>
              <div>
                您可以绑定一个常用邮箱，用于登陆、找回密码、提币时的确认
              </div>
            </div>
          </div>
          <div class="flex_start_center">
            <div class="mar_r10">key****@gmail.com</div>
            <el-link :underline="false">验证</el-link>
          </div>
        </div>
        <div class="u_card_cell flex_sbe_center">
          
        </div>
      </el-card>

      <el-card class="u_card_box" shadow="hover">
        <div slot="header" class="u_card_title">
          <span>安全密码管理</span>
        </div>
        <div class="u_card_cell flex_sbe_center">
          <div class="flex_start_center">
            <div class="mar_r20">
              <img class="u_icon_box" src="../../assets/img/user_center/lock_icon.png" alt="">
            </div>
            <div>
              <div class="mar_b5">登录密码</div>
              <div>
                通过设置登陆密码，您将可以使用账号和登陆密码直接登陆
              </div>
            </div>
          </div>
          <div class="flex_start_center">
            <el-link :underline="false">修改</el-link>
          </div>
        </div>
        <div class="u_card_cell　flex_sbe_center">
          
        </div>
      </el-card>

    </div>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>
.user_header {
  width: 100%;
  background-color: #1b2945;
  margin: auto;
  font-size: 12px;
  color: #FFF;
}

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

.u_icon_box {
  width: 30px;
}

/deep/ .el-card__header {
  background-color: #e6ecf2;
}
</style>