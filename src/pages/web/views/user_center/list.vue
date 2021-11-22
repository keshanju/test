<template>
  <div class="user_center_box">
    <div class="user_header">
      <div class="u_header_box flex_start_center">
        <div class="u_avtar_box"></div>
        <div class="flex_start_start flex_column">
          <div>Hi, {{userDetailInfo.mobile}}</div>
          <div>UID: {{userDetailInfo.id}}</div>
        </div>
      </div>
    </div>
    <div class="user_body">
      <div class="u_cert_box flex_sbe_center">
        <div>
          <div class="mar_b5">个人认证</div>
          <div class="mar_b10">完成个人认证有助于保护账户安全，提高提现额度及交易权限</div>
        </div>
        <el-button type="primary" size="small" @click=goUcAuth>身份认证</el-button>
      </div>
      <el-card class="u_card_box" shadow="hover">
        <div slot="header" class="u_card_title">
          <span>安全认证</span>
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
            <div class="mar_r10">{{userDetailInfo.mobile}}</div>
            <el-link :underline="false" @click="editUserPhone" v-if="userDetailInfo.bindMobile">修改</el-link>
            <el-link :underline="false" @click="bindUserPhone" v-else>绑定</el-link>
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
            <div class="mar_r10">{{userDetailInfo.email}}</div>
            <el-link :underline="false" @click="editUserEmail" v-if="userDetailInfo.bindEmail">修改</el-link>
            <el-link :underline="false" @click="bindUserEmail" v-else>绑定</el-link>
          </div>
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
                通过设置登陆密码，您将可以使用账号和登陆密码直接登录
              </div>
            </div>
          </div>
          <div class="flex_start_center">
            <el-link :underline="false" @click="loginPwdDialog = true">修改</el-link>
          </div>
        </div>
        <div class="u_card_cell flex_sbe_center">
          <div class="flex_start_center">
            <div class="mar_r20">
              <img class="u_icon_box" src="../../assets/img/user_center/lock_icon.png" alt="">
            </div>
            <div>
              <div class="mar_b5">资金密码</div>
              <div>
                资金密码 用于交易、提现时的验证
              </div>
            </div>
          </div>
          <div class="flex_start_center">
            <el-link :underline="false" @click="tradePwdDialog = true" v-if="!userDetailInfo.bindTradePwd">设置</el-link>
            <el-link :underline="false" @click="tradePwdDialog = true" v-else>重置</el-link>
          </div>
        </div>
      </el-card>

      <!-- 已登录用户修改密码弹框 -->
      <el-dialog
        title="修改登录密码"
        :visible.sync="loginPwdDialog"
        width="30%"
        :before-close="handleClose">
        <div>
          <el-form class="mar_t20" :model="loginpwdForm" :rules="loginpwdRules" ref="loginpwdForm">
            <el-form-item prop="pwd">
              <el-input placeholder="新密码" show-password v-model="loginpwdForm.pwd"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input placeholder="验证码" v-model="loginpwdForm.code">
                <el-button slot="append" @click="getLogVerifyCode" v-if="smsCountDownNum <= 0" style="width:80px">验证码</el-button>
                <el-button :disabled='true' slot="append" v-else style="width:80px">{{smsCountDownNum}}s</el-button>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelResetLoginPassword">取 消</el-button>
          <el-button type="primary" @click="confirmResetLoginPassword">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 资金密码设置重置弹框 -->
      <el-dialog
        :title="!userDetailInfo.bindTradePwd?'设置资金密码':'重置资金密码'"
        :visible.sync="tradePwdDialog"
        width="30%"
        :before-close="handleClose">
        <div>
          <el-form class="mar_t20" :model="authTradepwdForm" :rules="authTradepwdRules" ref="authTradepwdForm">
            <el-form-item prop="moneyPwd">
              <el-input placeholder="资金密码" show-password v-model="authTradepwdForm.moneyPwd"></el-input>
            </el-form-item>
            <el-form-item prop="confirmMoneyPwd">
              <el-input placeholder="确定资金密码" show-password v-model="authTradepwdForm.confirmMoneyPwd"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-input placeholder="验证码" v-model="authTradepwdForm.code">
                <el-button slot="append" @click="getVerifyCode" v-if="smsCountDownNum <= 0" style="width:80px">验证码</el-button>
                <el-button :disabled='true' slot="append" v-else style="width:80px">{{smsCountDownNum}}s</el-button>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelSetTradePassword">取 消</el-button>
          <el-button type="primary" @click="confirmSetTradePassword">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 手机验证弹框 -->
      <el-dialog
        width="30%"
        :title="isEditOrBind===1?'修改手机号':'绑定手机号'"
        :visible.sync="phoneDialog"
        :before-close="handleClose"
      >
        <div>
          <el-form class="mar_t20" :model="authPhoneForm" :rules="authPhoneRules" ref="authPhoneForm">
            <!-- 修改手机号 -->
            <div v-if="isEditOrBind===1">
              <el-form-item prop="moneyPwd">
                <el-input placeholder="请填写资金密码" show-password v-model="authPhoneForm.moneyPwd"></el-input>
              </el-form-item>
              <el-form-item prop="newMobile">
                <el-input placeholder="请填写新手机号" show-password v-model="authPhoneForm.newMobile"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input placeholder="请填写验证码" v-model="authPhoneForm.code">
                  <el-button slot="append" @click="getPhoneCode" v-if="smsCountDownNum <= 0" style="width:80px">验证码</el-button>
                  <el-button :disabled='true' slot="append" v-else style="width:80px">{{smsCountDownNum}}s</el-button>
                </el-input>
              </el-form-item>
            </div>
            <!-- 绑定手机号 -->
            <div v-else>
              <el-form-item prop="newMobile">
                <el-input placeholder="请填写手机号" show-password v-model="authPhoneForm.newMobile"></el-input>
              </el-form-item>
              <el-form-item prop="phoneCode">
                <el-input placeholder="请填写手机验证码" v-model="authPhoneForm.phoneCode">
                  <el-button :disabled="disabled" slot="append" @click="getPhoneCode" style="width:80px">验证码</el-button>
                </el-input>
              </el-form-item>
              <el-form-item prop="emailCode">
                <el-input placeholder="请填写邮箱验证码" v-model="authPhoneForm.emailCode">
                  <el-button :disabled="disabled" slot="append" @click="getEmailCode" style="width:80px">验证码</el-button>
                </el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelPhoneDialog">取 消</el-button>
          <el-button type="primary" @click="confirmPhoneSubmit">确 定</el-button>
        </span>
      </el-dialog>

      <!-- 邮箱验证弹框 -->
      <el-dialog
        width="30%"
        :title="isEditOrBind===1?'修改邮箱号':'绑定邮箱号'"
        :visible.sync="emailDialog"
        :before-close="handleClose"
      >
        <div>
          <el-form class="mar_t20" :model="authEmailForm" :rules="authEmailRules" ref="authEmailForm">
            <!-- 修改邮箱号 -->
            <div v-if="isEditOrBind===1">
              <el-form-item prop="moneyPwd">
                <el-input placeholder="请填写资金密码" show-password v-model="authEmailForm.moneyPwd"></el-input>
              </el-form-item>
              <el-form-item prop="newEmail">
                <el-input placeholder="请填写新邮箱号" v-model="authEmailForm.newEmail"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <el-input placeholder="请填写验证码" v-model="authEmailForm.code">
                  <el-button :disabled="disabled" slot="append" @click="getEmailCode" style="width:80px">验证码</el-button>
                </el-input>
              </el-form-item>
            </div>
            <!-- 绑定邮箱号 -->
            <div v-else>
              <el-form-item prop="newEmail">
                <el-input placeholder="请填写邮箱号" v-model="authEmailForm.newEmail"></el-input>
              </el-form-item>
              <el-form-item prop="emailCode">
                <el-input placeholder="请填写邮箱验证码" v-model="authEmailForm.emailCode">
                  <el-button :disabled="disabled" slot="append" @click="getEmailCode" style="width:80px">验证码</el-button>
                </el-input>
              </el-form-item>
              <el-form-item prop="phoneCode">
                <el-input placeholder="请填写手机验证码" v-model="authEmailForm.phoneCode">
                  <el-button :disabled="disabled" slot="append" @click="getPhoneCode" style="width:80px">验证码</el-button>
                </el-input>
              </el-form-item>
            </div>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="cancelEmailDialog">取 消</el-button>
          <el-button type="primary" @click="confirmEmailSubmit">确 定</el-button>
        </span>
      </el-dialog>
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