import WebsocketUtil from '../../../utils/WebsocketUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
import { WxModel } from '../../../models/WxModel';
import { BaseWsApi } from './BaseWsApi';
import { VerCodeModel } from '@/models/ToolsModel';

export class MarketsWsApi extends BaseWsApi {

    /**
     * 获取验证码
     */
    public async getList(options){
        // let d = new WebsocketUtil(options)
        // return d;
    }
}