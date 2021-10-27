import { AxiosUtil } from '../../../utils/AxiosUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
import { PluginModel } from '../../../models/PluginModel';
import { BaseApi } from './BaseApi';

export class PluginApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/plugin?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<PluginModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/plugin/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<PluginModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: PluginModel) {
        let url = "/api/admin/plugin"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: PluginModel) {
        let url = "/api/admin/plugin/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/plugin/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/plugin/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<PluginModel>>(url);
    }
}