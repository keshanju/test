import { AxiosUtil } from '../../../utils/AxiosUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
import { WxModel } from '../../../models/WxModel';
import { BaseApi } from './BaseApi';
import { VerCodeModel } from '@/models/ToolsModel';

export class MarketsApi extends BaseApi {

    /**
     * 获取验证码
     */
    public async getList(){
        let url = "/api_web/order/markets";
        let d =  await AxiosUtil.get<BaseModel<any>>(url);
        return d;
    }
}