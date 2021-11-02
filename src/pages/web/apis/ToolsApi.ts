/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-07 11:35:28
 * @LastEditors: Please set LastEditors
 */
import { AxiosUtil } from '../../../utils/AxiosUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
import { WxModel } from '../../../models/WxModel';
import { BaseApi } from './BaseApi';
import { VerCodeModel } from '@/models/ToolsModel';

export class ToolsApi extends BaseApi {

    /**
     * 获取验证码
     */
    public async vercode(){
        let url = "/api/client/tools/vercode";
        let d =  await AxiosUtil.get<any>(url, {});
        return d;
    }

    public sendsms(){

    }
    
}