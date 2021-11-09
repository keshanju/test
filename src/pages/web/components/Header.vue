<template>
  <div class="header_box">
    <div class="flex_sbe_center" style="height: 60px">
      <div class="h_logo" @click="goIndex" style="width: 10%">
        <img src="../assets/img/logo1.png" alt="" class="mar_r5">
        <img src="../assets/img/logo_txt.png" alt="">
      </div>
      <div style="width: 65%" class="h_nav_box flex_start_center">
        <div class="h_nav_cell"  @click="goExchange">
          币币交易
        </div>
        <div class="h_nav_cell"  @click="goMarkets">
          行情
        </div>
        <div class="h_nav_cell"  @click="goSuanli">
          算力超市
        </div>
        <div class="h_nav_cell"  @click="goQuantization">
          量化专区
        </div>
      </div>
      <div style="width: 25%" class="h_nav_other flex_end_center">
        <div class="h_nav_login" v-if="!isLogin">
          <a @click="goLogin" class="h_login_font mar_r15">登录</a>
          <el-button size="medium" type="primary" @click="goRegister">注册</el-button>
        </div>
        <div class="flex_end_center" v-else>
          <el-popover class="mar_l20" placement="top-start" trigger="hover" :visible-arrow="false">
            <div class="h_assets_list">
              <div class="h_assets_cell" @click="goFinanceCenter">资产总览</div>

              <div class="h_assets_cell">币币账户</div>

              <div class="h_assets_cell">法币账户</div>

            </div>
            <div slot="reference">
              资产
            </div>
          </el-popover>

          <el-popover class="mar_l20" placement="top-start" trigger="hover" :visible-arrow="false">
            <div class="h_order_list">
              法币订单
            </div>
            <div slot="reference">
              订单
            </div>
          </el-popover>

          <el-popover class="mar_l20" placement="top-start" trigger="hover" :visible-arrow="false">
            <div class="h_user_box">
              <div>
                <a @click="goUserCenter">HI，{{userInfo.mobile || userInfo.email}}</a>
              </div>
              <div>UID：{{userInfo.uid}}</div>
              <div @click="logOut">退出登录</div>
            </div>
            <div slot="reference">
              <i  class="el-icon-user"></i>
            </div>
          </el-popover>
        </div>

        <el-popover class="mar_l20" placement="top-start" trigger="hover" :visible-arrow="false">
          <img src="../assets/img/qr_code.png" alt="">
          <div slot="reference">
            <i class="el-icon-download"></i>
          </div>
        </el-popover>

        <el-popover class="mar_l20" placement="top-start" trigger="hover" :visible-arrow="false">
          <div class="h_lang_box">
            <div class="mar_b10">语言选择</div>
            <div>
              <div class="h_lang_text">中文简体</div>
              <div class="h_lang_text">中文繁體</div>
              <div class="h_lang_text">ENGLISH</div>
            </div>
          </div>
          <div slot="reference">
            <i class="el-icon-discover"></i>
          </div>
        </el-popover>
      </div>
    </div>
  </div>
</template>

<script>
import LocalStorageUtil from '@/utils/LocalStorageUtil'
import { JumpUtil } from '@/utils/JumpUtil'
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
  mounted() {
    this.checkLogin()
  },
  methods: {
    /**
     * 检测是否登录
     */
    checkLogin() {
      const info = LocalStorageUtil.getLoginInfo();
      if (info.token) {
          this.userInfo = info;
          this.isLogin = true;
      }
    },

    logOut() {
      LocalStorageUtil.removeCookie(LocalStorageUtil.STORAGES_TOKEN)
      this.goLogin()
    },

    goFinanceCenter() {
      JumpUtil.backFinanceCenter()
    },

    goUserCenter() {
      JumpUtil.backUserCenter()
    },

    goIndex() {
      JumpUtil.backIndex()
    },

    goExchange() {
      JumpUtil.backExchange()
    },
    
    goMarkets() {
      JumpUtil.backMarkets()
    },
    
    goSuanli() {
      JumpUtil.backSuanli()
    },
    
    goQuantization() {
      JumpUtil.backQuantization()
    },

    goLogin() {
      JumpUtil.backLogin()
    },

    goRegister() {
      JumpUtil.backRegister()
    },
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
  margin-left: 24px;
  cursor: pointer;
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
  margin-right: 24px;
}

.h_nav_login {

}

.h_lang_box {
  // width: 92px;
  // margin: auto;
}

.h_lang_text {
  width: 100%;
  box-sizing: border-box;
  color: #333;
  font-weight: 500;
  font-size: 14px;
  padding: 10px;
  cursor: pointer;
}

.h_lang_text:hover {
  color: #409EFF;
  background-color: #ecf5ff;
  border-radius: 2px;
}

.h_assets_cell {
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
}

.h_assets_cell:hover {
  color: #409EFF;
  background-color: #ecf5ff;
  border-radius: 2px;
}


.h_popover_box {
  margin-top: 20px;
}

.el-icon-download {
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
} 

.el-icon-discover {
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

.el-icon-user {
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
}

/deep/ .el-button--medium {
  font-size: 14px;
  padding: 8px 16px;
}

/deep/ .el-popper[x-placement^=bottom] {
  margin-top: 20px;
}
</style>

