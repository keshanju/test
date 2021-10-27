<template>
  <div class="navbar" :style="{background:'rgba(0,22,64,' + opcity + ')'}">
    <nav class="main-width">
      <ul class="flex flex-align-center">
        <router-link to="/home" class="nav-item">
          <img src="../assets/img/logo1.png" alt="" style="margin-right:7px">
          <img src="../assets/img/logo_txt.png" alt="">
        </router-link>
        <!-- <router-link to="/OTC" :class="['nav-item',active===1?'active':'']">法币交易</router-link> -->
        <router-link to="/ticker" :class="['nav-item',active===2?'active':'']">行情</router-link>
        <router-link to="/coinTrading" :class="['nav-item',active===3?'active':'']">币币交易</router-link>
        <router-link to="/miner" :class="['nav-item',active===4?'active':'']">算力超市</router-link>
        <router-link to="/quantized" :class="['nav-item',active===5?'active':'']">量化专区</router-link>
      </ul>
      <div class="flex flex-align-center">
        <!-- 登陆、 注册 -->
        <router-link v-if="!isLogin" to="/login/loginForm" class="nav-item">登录</router-link>
        <router-link v-if="!isLogin" to="/register" class="nav-item">注册</router-link>
        <!-- 资产 -->
        <el-dropdown @command="handleFinance" class="" v-if="isLogin">
          <span class="nav-item">资产</span>
          <!-- <router-link class="nav-item" to="/finance">资产</router-link> -->
          <el-dropdown-menu class="finance" slot="dropdown">
            <el-dropdown-item command="a">
              <router-link to="/finance/allAssets">资产总览</router-link>
            </el-dropdown-item>
            <el-dropdown-item command="a">
              <router-link to="/finance/coinAssets">币币账户（充币&提币）</router-link>
            </el-dropdown-item>
            <el-dropdown-item command="d"> 法币账户</el-dropdown-item>
            <el-dropdown-item command="c"> 量化账户</el-dropdown-item>
            <el-dropdown-item command="e"> 算力账户</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <!-- 个人中心 -->
        <el-dropdown @command="handleUser" v-if="isLogin">
          <span class="nav-item el-dropdown-link fz18 co-white"><i class="el-icon-user-solid"></i></span>
          <el-dropdown-menu class="nav-dropdown" slot="dropdown">
            <div class="account">
              <div class="fz18">{{userInfo.mobile || userInfo.email}}</div>
              <div class="fz12">UID:{{ userInfo.id }}</div>
            </div>
            <el-dropdown-item command="a">
              <i class="el-icon-postcard"></i> 身份认证
              <span v-if="userInfo.verifyStatus === 0" class="is-auth">未实名</span>
              <span v-if="userInfo.verifyStatus === 1" class="is-auth">审核中</span>
              <span v-if="userInfo.verifyStatus === 2" class="is-auth">已认证</span>
              <span v-if="userInfo.verifyStatus === 3" class="is-auth">审核失败</span>
            </el-dropdown-item>
            <el-dropdown-item command="b"><i class="el-icon-coin"></i> 我的资产</el-dropdown-item>
            <el-dropdown-item command="c"><i class="el-icon-notebook-2"></i> 我的订单</el-dropdown-item>
            <el-dropdown-item command="d"><i class="el-icon-unlock"></i> 安全中心</el-dropdown-item>
            <el-dropdown-item command="e"><i class="el-icon-setting"></i> 偏好设置</el-dropdown-item>
            <el-dropdown-item command="f"><i class="el-icon-upload"></i> API管理</el-dropdown-item>
            <el-dropdown-item command="g"><i class="el-icon-key"></i> 子账户</el-dropdown-item>
            <div @click="logout" class="tC">退出登录</div>
          </el-dropdown-menu>
        </el-dropdown>
        <router-link v-if="isLogin" to="" class="nav-item"><i class="el-icon-message-solid"></i></router-link>

        <!-- <router-link v-if="!isLogin" to="/login/loginForm" class="nav-item"></router-link> -->
        <el-popover popper-class='down-QRcode-url' placement="top-start" trigger="hover">
          <img class="qr-code" src="../assets/img/qr_code.png" alt="">
          <el-button slot="reference"><i class="el-icon-download">下载</i></el-button>
        </el-popover>
        <el-select class="select fz16" v-model="lang" placeholder="请选择" @change="changelanguage">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapActions,mapGetters,mapState } from 'vuex'
export default {
  props: {
    opcity: {
      type: String,
      // required: true,
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
    }
  },
  computed: {
    ...mapGetters({
      isLogin: 'user/token',
      userInfo: 'user/userInfo'
    }),
    // ...mapState({
    //   userInfo: state => state.user.userInfo
    // }),

    lang() {
      return localStorage.getItem('locale')
    },
    active() {
      if (this.$route.path === '/OTC') {
        return 1
      }
      if (this.$route.path === '/ticker') {
        return 2
      }
      if (this.$route.path === '/coinTrading') {
        return 3
      }
      if (this.$route.path === '/miner') {
        return 4
      }
      if (this.$route.path === '/quantized') {
        return 5
      }
      // if (this.$route.path === '/strategicCooperation') {
      //   return 4
      // }
      // if (this.$route.path === '/market') {
      //   return 5
      // }

      // if(this.$route.path === 'currencyTrading') {
      return 0
      // }
    }
  },
  created() {
    // console.log(this.isLogin);
  },
  methods: {
    changelanguage(type) {
      console.log('%c 🍿 type: ','font-size:20px;background-color: #465975;color:#fff;',type);
      this.$i18n.locale = type;//
      window.localStorage.setItem('locale',type)
      window.location.reload()
    },
    logout() {
      this.$confirm('是否确认退出?','提示',{
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('user/logout').then(res => {
          console.log('%c 🧀 res: ','font-size:20px;background-color: #B03734;color:#fff;',res);
          // this.$router.push({ path: this.redirect || '/' })
          // this.loading = false
          this.$message({
            type: 'success',
            message: '已退出登陆!'
          });
        }).catch(err => {
          console.log(err);
          this.loading = false
        })
      }).catch(err => {
        console.log(err);
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    handleUser(command) {
      switch (command) {
        // case "a":
        //   this.$router.push('/UC/applyForAPI')
        //   break;
        case "d":
          this.$router.push('/UC/safetyCenter')
          break;
        case "f":
          this.$router.push('/UC/applyForAPI')
          break;
        // default:
        //   this.$message('click on item ' + command);
        //   break;
      }
    },
    handleFinance(command) {
      // switch (command) {
      //   case "a":
      //     this.$router.push('/UC/applyForAPI')
      //     break;
      //   case "f":
      //     this.$router.push('/UC/applyForAPI')
      //     break;
      //   // case "b":
      //   //   this.$router.push('/UC/applyForAPI')
      //   //   break;
      // }
      // this.$message('click on item ' + command);
    }
  }
}
</script>

<style lang="less" scoped>
.navbar {
  position: relative;
  z-index: 99;
  // box-shadow: 0px 1px 2px rgb(36 43 50 / 20%), 0px 0px 2px rgb(36 43 50 / 12%),
  //   0px 0px 2px rgb(36 43 50 / 14%);
  nav {
    color: #fff;
    margin: 0 auto;
    width: 100%;
    height: 56px;
    display: flex;
    align-items: center;
    z-index: 5;
    font-size: 16px;
    // padding: 0 50px;
    min-width: 1400px;
    align-items: center;
    letter-spacing: 0.005em;
    justify-content: space-between;
    font-size: 18px;
    // padding: 0 100px;
    .nav-item {
      display: inline-block;
      padding: 0 30px;
      z-index: 500;
      position: relative;
      height: 56px;
      line-height: 61px;
      color: #fff;
      display: flex;
      align-items: center;
      font-size: 16px;
      justify-content: center;
    }
    .active {
      color: #fff;
      background: #409eff;
      opacity: 1;
    }
    .nav-item:hover {
      color: #fff;
      opacity: 0.6;
      // background: rgba($color: #409eff, $alpha: 0.4);
    }
    ::v-deep .el-select {
      width: 120px;
      .el-input__inner {
        background: none;
        border: none;
        color: #fff;
      }
    }
    ::v-deep .el-button {
      background: none;
      border: none;
      color: #fff;
    }
  }

  img {
    width: 100%;
  }
}
.nav-dropdown {
  padding: 0;
  border: none;
  width: 240px;
  border-radius: 20px;
  overflow: hidden;
  .account {
    position: relative;
    width: 242px;
    left: -1px;
    background: url("../assets/img/nav_dropdown_bg.png") no-repeat;
    background-size: 100% 100%;
    background-position: -5% -1%;
    color: #fff;
    padding: 30px 40px;
  }
  .tC {
    padding: 15px;
    background: #409eff;
    color: #fff;
    cursor: pointer;
  }
  // .tC:hover {
  //   background: rgba($color: #409eff, $alpha: 0.6);
  // }
  .is-auth {
    width: 46px;
    color: #fff;
    background: #409eff;
    border-radius: 4px;
    height: 20px;
    line-height: 20px;
    font-size: 12px;
    margin-left: 5px;
    text-align: center;
  }
}
::v-deep .popper__arrow {
  display: none !important;
}

</style>

