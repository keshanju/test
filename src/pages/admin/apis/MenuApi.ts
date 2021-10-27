import { AxiosUtil } from '../../../utils/AxiosUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
import { MenuModel } from '../../../models/MenuModel';
import { BaseApi } from './BaseApi';

export class MenuApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/menu?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<MenuModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/menu/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<MenuModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: MenuModel) {
        let url = "/api/admin/menu"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: MenuModel) {
        let url = "/api/admin/menu/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/menu/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/menu/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<MenuModel>>(url);
    }
}