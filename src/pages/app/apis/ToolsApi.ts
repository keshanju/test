import { AxiosUtil } from '../../../utils/AxiosUtil';
import { BaseApi } from './BaseApi';

export class ToolsApi extends BaseApi {

    public async uploadfile(options){
        let url = "/storage/putfile";
        let d =  await AxiosUtil.post<any>(url, options);
        return d;
    }

    public async getSignalValue(options?: {}) {
        let url = "/signal/value";
        let d =  await AxiosUtil.get<any>(url, options);
        return d;
    }
    
}