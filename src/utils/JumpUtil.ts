import Util from './index'


export class JumpUtil {
  static hashVal = "/#/"
  static URL_REGISTER = "register";// 注册界面
  static URL_LOGIN = "login";// 登录界面
  static URL_FORGETPWD = "forgetPwd";// 忘记密码
  static URL_EXCHANGE = "exchange";// 币币交易
  static URL_MARKETS = "markets";// 行情页面
  static URL_SUANLI = "suanli";// 算力超市
  static URL_QUANTIZATION = "quantization";// 量化专区

  static URL_OTCUSERAPPLY = "otcuser/apply";// 商家申请页
  static URL_OTCUSERAPPLYFORM = "otcuser/applyform";// 商家申请页

  static URL_USERCENTER_SECURITY = "user_center/security";// 账户&安全
  static URL_USERCENTER_UCAUTH = "user_center/uc_auth";// 身份认证

  static URL_FINANCECENTER = "finance/account";// 资产总览
  static URL_FINANCECENTER_SPOT = "finance/account/spot";// 币币账户
  static URL_FINANCECENTER_OTC = "finance/account/otc";// 法币账户

  static backIndex() {
    window.location.href = Util.getOrigin() + this.hashVal;
  }

  static backUserCenter() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_USERCENTER_SECURITY;
  }

  static backFinanceCenter() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_FINANCECENTER;
  }

  static backFinanceSpot() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_FINANCECENTER_SPOT;
  }

  static backFinanceOtc() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_FINANCECENTER_OTC;
  }

  static backOtcUserApplyForm() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_OTCUSERAPPLYFORM;
  }

  static backOtcUserApply() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_OTCUSERAPPLY;
  }

  static backUcAuth() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_USERCENTER_UCAUTH;
  }

  static backRegister() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_REGISTER;
  }
  
  static backLogin() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_LOGIN;
  }

  static backExchange() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_EXCHANGE;
  }

  static backMarkets() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_MARKETS;
  }

  static backSuanli() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_SUANLI;
  }

  static backQuantization() {
    window.location.href = Util.getOrigin() + this.hashVal + this.URL_QUANTIZATION;
  }


  /**
   * @Author Wings Ke
   * @Desc 重定向到任何可匹配的界面
   * @Param pageName
  */
 static backMatchingPage(pageName: string) {
  window.location.href = Util.getOrigin() + '/' + pageName;
 }

}