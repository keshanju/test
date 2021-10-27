import { BaseApi } from './BaseApi';
import { RegRequestModel } from '@/models/RegLoginModels';
import { AxiosUtil } from '@/utils/AxiosUtil';
import { BaseModel, BaseResult } from '@/models/BaseModel';



/**
 * 登录注册忘记密码api
 */
export class BeforeLoginApi extends BaseApi{
      /**
     * 注册
     */
    public async reg(param:RegRequestModel) {
        let url: string = "/api/client/user/reg";
        return await AxiosUtil.post<BaseResult>(url,param);
    }
 
}
/**
 * 用户中心用到的api
 */
export class UserApi extends BaseApi{
 
}