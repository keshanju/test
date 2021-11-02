// import { AxiosUtil } from "../../../utils/AxiosUtil";
// import {
//   BaseResult,
//   BaseModel,
//   BaseArray,
//   BasePager
// } from "../../../models/BaseModel";
// import { AdminModel } from "../../../models/AdminModel";
// import { BaseApi } from "./BaseApi";

// /**
//  * 管理员
//  */
// export class AdminApi extends BaseApi {
//   public async getListPager(
//     strWhere: string = "",
//     pageSize: number = 15,
//     pageIndex: number = 1
//   ) {
//     let url: string =
//       "/api/admin/admin?token=" +
//       this.token +
//       "&page_size=" +
//       pageSize +
//       "&start_index=" +
//       pageIndex +
//       strWhere;
//     return await AxiosUtil.get<BasePager<AdminModel>>(url);
//   }

//   /**
//    * 获取列表
//    */
//   public async getList(strWhere: string = "") {
//     let url: string = "/api/admin/admin/list?token=" + this.token;
//     return await AxiosUtil.get<BaseArray<AdminModel>>(url);
//   }

//   /**
//    * 添加
//    * @param model
//    */
//   public async setAdd(data: AdminModel) {
//     let url = "/api/admin/admin";
//     data.token = this.token;
//     return await AxiosUtil.post<BaseResult>(url, data);
//   }

//   /**
//    * 更新
//    * @param id
//    * @param model
//    */
//   public async setUpdate(id: number, data: AdminModel) {
//     let url = "/api/admin/admin/" + id;
//     data.token = this.token;
//     return await AxiosUtil.put<BaseResult>(url, data);
//   }

//   /**
//    * 删除
//    * @param ids
//    */
//   public async setDelete(id: number) {
//     let url = "/api/admin/admin/" + id + "?token=" + this.token;
//     return await AxiosUtil.delete<BaseResult>(url);
//   }
//   /**
//    * 获取模型
//    * @param id
//    */
//   public async getModel(id: number) {
//     let url = "/api/admin/admin/" + id + "?token=" + this.token;
//     return await AxiosUtil.get<BaseModel<AdminModel>>(url);
//   }

//   /**
//    * 登录
//    * @param data
//    */
//   public async chkLogin(data: any) {
//     let url = "/api/admin/login";
//     return await AxiosUtil.post<BaseResult>(url, data);
//   }
// }

// /**
//  * 管理员角色
//  */
// export class AdminRoleApi extends BaseApi {
//   public async getListPager(
//     strWhere: string = "",
//     pageSize: number = 15,
//     pageIndex: number = 1
//   ) {
//     let url: string =
//       "/api/admin/admin/role?token=" +
//       this.token +
//       "&page_size=" +
//       pageSize +
//       "&start_index=" +
//       pageIndex +
//       strWhere;
//     return await AxiosUtil.get<BasePager<AdminModel>>(url);
//   }

//   /**
//    * 获取列表
//    */
//   public async getList(strWhere: string = "") {
//     let url: string = "/api/admin/admin/role/list?token=" + this.token;
//     return await AxiosUtil.get<BaseArray<AdminModel>>(url);
//   }

//   /**
//    * 添加
//    * @param model
//    */
//   public async setAdd(data: AdminModel) {
//     let url = "/api/admin/admin/role" + "?token=" + this.token;
//     data.token = this.token;
//     return await AxiosUtil.post<BaseResult>(url, data);
//   }

//   /**
//    * 更新
//    * @param id
//    * @param model
//    */
//   public async setUpdate(id: number, data: AdminModel) {
//     let url = "/api/admin/admin/role/" + id;
//     data.token = this.token;
//     return await AxiosUtil.put<BaseResult>(url, data);
//   }

//   /**
//    * 删除
//    * @param ids
//    */
//   public async setDelete(id: number) {
//     let url = "/api/admin/admin/role/" + id + "?token=" + this.token;
//     return await AxiosUtil.delete<BaseResult>(url);
//   }
  
//   /**
//    * 获取模型
//    * @param id
//    */
//   public async getModel(id: number) {
//     let url = "/api/admin/admin/role/" + id + "?token=" + this.token;
//     return await AxiosUtil.get<BaseModel<AdminModel>>(url);
//   }
// }
