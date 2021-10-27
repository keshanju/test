import { AxiosUtil } from '../../../utils/AxiosUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
import { DiyModel } from '../../../models/DiyModel';
import { BaseApi } from './BaseApi';

export class DiyApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/diy?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<DiyModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/diy/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<DiyModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: DiyModel) {
        let url = "/api/admin/diy"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: DiyModel) {
        let url = "/api/admin/diy/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/diy/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/diy/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<DiyModel>>(url);
    }
}


export class DiyClassApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/diy/class?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<DiyModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/diy/class/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<{id:Number,name:string}>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: DiyModel) {
        let url = "/api/admin/diy/class"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: DiyModel) {
        let url = "/api/admin/diy/class/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/diy/class/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/diy/class/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<DiyModel>>(url);
    }
}