// import { AxiosUtil } from '../../../utils/AxiosUtil';
// import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
// import { MenuModel } from '../../../models/MenuModel';
// import { BaseApi } from './BaseApi';
// import { ModuleModel } from '@/models/ModuleModel';

// export class ModuleApi extends BaseApi {

//     public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
//         let url: string = "/api/admin/module?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
//         return await AxiosUtil.get<BasePager<ModuleModel>>(url);
//     }

//     /**
//      * 获取列表
//      */
//     public async getList(action_type=9999) {
//         let url: string = "/api/admin/module/list/"+action_type+"?token=" + this.token;
//         return await AxiosUtil.get<BaseArray<ModuleModel>>(url);
//     }

//     /**
//      * 添加
//      * @param model 
//      */
//     public async setAdd(data: ModuleModel) {
//         let url = "/api/admin/module";
//         data.token = this.token;
//         return await AxiosUtil.post<BaseResult>(url, data);
//     }

//     /**
//      * 更新
//      * @param id 
//      * @param model 
//      */
//     public async setUpdate(id: number, data: ModuleModel) {
//         let url = "/api/admin/module/" + id;
//         data.token = this.token;
//         return await AxiosUtil.put<BaseResult>(url, data);
//     }

//     /**
//      * 删除
//      * @param ids 
//      */
//     public async setDelete(id: number) {
//         let url = "/api/admin/module/" + id+"?token="+this.token;
//         return await AxiosUtil.delete<BaseResult>(url);
//     }
//     /**
//      * 获取模型
//      * @param id 
//      */
//     public async getModel(id: number) {
//         let url = "/api/admin/module/" + id+"?token="+this.token;
//         return await AxiosUtil.get<BaseModel<ModuleModel>>(url);
//     }

//         /**
//      * 获取授权列表
//      */
//     public async getAuthList(strWhere: string = "") {
//         let url: string = "/api/admin/module/auth?token=" + this.token;
//         return await AxiosUtil.get<BaseArray<ModuleModel>>(url);
//     }
// }