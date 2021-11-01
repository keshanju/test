import { AxiosUtil } from '@/utils/AxiosUtil';
import { DataModel } from '@/models/BaseModel';
import { BaseApi } from './BaseApi';
import { RegReqModel, CaptchaReqModel, LoginModel } from '@/models/UserModel';

export class UserApi extends BaseApi {

    public async register(options) {
        let url = "/api_web/auth/invite/register";
        let d =  await AxiosUtil.post<RegReqModel>(url, options);
        return d;
    }

    public async login(options) {
        let url = "/api_web/auth/login";
        let d =  await AxiosUtil.post<LoginModel>(url, options);
        return d;
    }

    public async sendsms(options){
        let url = "/api_web/auth/invite/captcha";
        let d =  await AxiosUtil.post<CaptchaReqModel>(url, options);
        return d;
    }
}