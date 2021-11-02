import { AxiosUtil } from '@/utils/AxiosUtil';
import { DataModel } from '@/models/BaseModel';
import { BaseApi } from './BaseApi';
import { RegModel, CaptchaModel, LoginModel, resetPwdModel, verifySmsModel } from '@/models/UserModel';

export class UserApi extends BaseApi {

    public async register(options) {
        let url = "/auth/invite/register";
        let d =  await AxiosUtil.post<any>(url, options);
        return d;
    }

    public async login(options) {
        let url = "/auth/login";
        let d =  await AxiosUtil.post<LoginModel>(url, options);
        return d;
    }

    public async sendsms(options){
        let url = "/auth/invite/captcha";
        let d =  await AxiosUtil.post<any>(url, options);
        return d;
    }

    public async sendsms2(options){
        let url = "/auth/get_captcha";
        let d =  await AxiosUtil.post<any>(url, options);
        return d;
    }

    public async verifysms2(options){
        let url = "/auth/sms_login";
        let d =  await AxiosUtil.post<any>(url, options);
        return d;
    }

    public async resetpwd(options){
        let url = "/auth/backpwd";
        let d =  await AxiosUtil.post<any>(url, options);
        return d;
    }
}