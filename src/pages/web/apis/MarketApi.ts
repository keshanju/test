import { AxiosUtil } from '../../../utils/AxiosUtil';
import { MarketsResModel } from '@/models/MarketModel';
import { BaseApi } from './BaseApi';
import { VerCodeModel } from '@/models/ToolsModel';

export class MarketsApi extends BaseApi {

    public async getList(options?: {}){
        let url = "/order/markets";
        let d =  await AxiosUtil.get<any>(url, options);
        return d;
    }
}