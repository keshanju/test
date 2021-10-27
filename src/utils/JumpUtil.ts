import Util from './index'


export class JumpUtil {
  static URL_HOME = "home";// 申请模拟交易账号界面
  static URL_REGISTER = "register";// 注册界面

  /**
   * @Author Wings Ke 2020-07-24
   * @Desc 回到到注册界面
   * @Param None
  */
  static backRegister() {
    window.location.href = Util.getOrigin() + '/' + this.URL_REGISTER;
  }

  /**
   * @Author Wings Ke 2020-07-27
   * @Desc 回到首页
   * @Param None
  */
  static backHome() {
    window.location.href = Util.getOrigin() + '/' + this.URL_HOME;
  }

  /**
   * @Author Wings Ke 2020-07-27
   * @Desc 重定向到任何可匹配的界面
   * @Param None
  */
 static backMatchingPage(page) {
  window.location.href = Util.getOrigin() + '/' + page;
 }

}