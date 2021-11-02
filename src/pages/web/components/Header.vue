<template>
  <div class="header_box">
    <div class="flex_sbe_center" style="height: 60px">
      <div class="h_logo" style="width: 10%">
        <img src="../assets/img/logo1.png" alt="" class="mar_r5">
        <img src="../assets/img/logo_txt.png" alt="">
      </div>
      <div style="width: 75%" class="h_nav_box flex_start_center">
        <div class="h_nav_cell">
          币币交易
        </div>
        <div class="h_nav_cell">
          行情
        </div>
        <div class="h_nav_cell">
          算力超市
        </div>
        <div class="h_nav_cell">
          量化专区
        </div>
      </div>
      <div style="width: 15%" class="h_nav_other flex_sar_center">
        <div class="h_nav_login" v-if="!isLogin">
          <a @click="toLogin" class="h_login_font mar_r15">登录</a>
          <el-button size="medium" type="primary" @click="toRegister">注册</el-button>
        </div>
        <div v-else>
          <el-popover popper-class='down-QRcode-url' placement="top-start" trigger="hover">
            <div class="h_user_box">
              <div>{{userInfo.mobile || userInfo.email}}</div>
              <div>{{userInfo.uid}}</div>
            </div>
            <i slot="reference" class="el-icon-download"></i>
          </el-popover>
        </div>
        <el-popover popper-class='down-QRcode-url' placement="top-start" trigger="hover">
          <img src="../assets/img/qr_code.png" alt="">
          <i slot="reference" class="el-icon-download"></i>
        </el-popover>
        <el-popover popper-class='down-QRcode-url' placement="top-start" trigger="hover">
          <div class="h_lang_box">
            语言选择
          </div>
          <i slot="reference" class="el-icon-discover"></i>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import LocalStorageUtil from '@/utils/LocalStorageUtil'
export default {
  props: {
    opcity: {
      type: String,
      default: '1'
    }
  },
  data() {
    return {
      options: [{
        value: 'zh',
        label: '简体中文'
      },{
        value: 'en',
        label: 'English'
      }],
      isLogin: false,
      userInfo: {}
    }
  },
  created() {
    this.checkLogin()
  },
  methods: {
    /**
     * 检测是否登录
     */
    checkLogin() {
      const info = LocalStorageUtil.getLoginInfo();
      console.log(info)
      if (info !== null) {
          this.userInfo = info;
          this.isLogin = true;
      }
    },

    toRegister() {
      this.$router.push('/register')
    },

    toLogin() {
      this.$router.push('/login')
    }
  }
}
</script>

<style lang="less" scoped>
.header_box {
  width: 100%;
  min-width: 1200;
  margin: 0 auto;
  height: 60px;
  background: #001640;
  font-size: 14px;
  color: #fff;
  position: relative;
  z-index: 999;
}

.h_logo {
  margin-left: 8px;
}

.h_login_font {
  cursor: pointer;
}

.h_login_font:hover {
  color: #409EFF;
}

.h_nav_cell {
  margin-left: 24px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
}

.h_nav_other {
  margin-right: 8px;
}

.h_nav_login {

}

.h_nav_lang {

}

.el-icon-download {
  font-size: 14px;
  cursor: pointer;
}

// .el-icon-download::before {
//   content: "";
//   position: absolute;
//   left: 0;
//   top: 50%;
//   margin-top: -12px;
//   background: rgba(97,105,138,.3);
//   height: 24px;
//   width: 1px;
//   overflow: hidden;
// } 

/deep/ .el-button--medium {
  font-size: 14px;
  padding: 8px 16px;
}
</style>

