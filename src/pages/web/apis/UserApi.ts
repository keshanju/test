import { AxiosUtil } from "@/utils/AxiosUtil";
import { DataModel } from "@/models/BaseModel";
import { BaseApi } from "./BaseApi";
import {
  RegModel,
  CaptchaModel,
  LoginModel,
  UserDetailModle,
  resetPwdModel,
  verifySmsModel,
} from "@/models/UserModel";

export class UserApi extends BaseApi {
  public async register(options) {
    let url = "/auth/invite/register";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async login(options) {
    let url = "/auth/login";
    let d = await AxiosUtil.post<LoginModel>(url, options);
    return d;
  }

  public async sendsms(options) {
    let url = "/auth/invite/captcha";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async sendsms2(options) {
    let url = "/auth/get_captcha";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async verifysms2(options) {
    let url = "/auth/sms_login";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async resetpwd(options) {
    let url = "/auth/backpwd";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async getuserdetail(options?: {}) {
    let url = "/user/details";
    let d = await AxiosUtil.get<UserDetailModle>(url, options);
    return d;
  }

  public async setmobile(options?: {}) {
    let url = "/user/set_mobile";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async setemail(options?: {}) {
    let url = "/user/set_email";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async bindmobile(options?: {}) {
    let url = "/user/binding_mobile";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async bindemail(options?: {}) {
    let url = "/user/binding_email";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async updatepwd(options?: {}) {
    let url = "/auth/update_pwd";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async setmoneypwd(options?: {}) {
    let url = "/user/set_moneypwd";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async sendmobilecode(options?: {}) {
    let url = "/user/moble_code";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async sendemailcode(options?: {}) {
    let url = "/user/email_code";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }
  
  public async sendnmobilecode(options?: {}) {
    let url = "/user/nmoble_code";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async sendnemailcode(options?: {}) {
    let url = "/user/nemail_code";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  public async usercertification(options?: {}) {
    let url = "/user/certification";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }
  
  public async otcuserapply(options?: {}) {
    let url = "/otc/user/apply";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }


}
