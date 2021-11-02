// import { AxiosUtil } from "../../../utils/AxiosUtil";
// import {
//   BaseResult,
//   BaseModel,
//   BaseArray,
//   BasePager
// } from "../../../models/BaseModel";
// import { AdModel } from "../../../models/AdModel";
// import { BaseApi } from "./BaseApi";

// export class AdApi extends BaseApi {
//   public async getListPager(
//     strWhere: string = "",
//     pageSize: number = 15,
//     pageIndex: number = 1
//   ) {
//     let url: string =
//       "/api/admin/ad?token=" +
//       this.token +
//       "&page_size=" +
//       pageSize +
//       "&start_index=" +
//       pageIndex +
//       strWhere;
//     return await AxiosUtil.get<BasePager<AdModel>>(url);
//   }

//   /**
//    * 获取列表
//    */
//   public async getList(strWhere: string = "") {
//     let url: string = "/api/admin/ad/list?token=" + this.token;
//     return await AxiosUtil.get<BaseArray<AdModel>>(url);
//   }

//   /**
//    * 添加
//    * @param model
//    */
//   public async setAdd(data: AdModel) {
//     let url = "/api/admin/ad?token=" + this.token;
//     return await AxiosUtil.post<BaseResult>(url, data);
//   }

//   /**
//    * 更新
//    * @param id
//    * @param model
//    */
//   public async setUpdate(id: number, data: AdModel) {
//     let url = "/api/admin/ad/" + id + "?token" + this.token;
//     return await AxiosUtil.put<BaseResult>(url, data);
//   }

//   /**
//    * 删除
//    * @param ids
//    */
//   public async setDelete(id: number) {
//     let url = "/api/admin/ad/" + id+"?token="+this.token;
//     return await AxiosUtil.delete<BaseResult>(url);
//   }
//   /**
//    * 获取模型
//    * @param id
//    */
//   public async getModel(id: number) {
//     let url = "/api/admin/ad/" + id+"?token="+this.token;
//     return await AxiosUtil.get<BaseModel<AdModel>>(url);
//   }
// }

// /**
//  *
//  */
// export class AdClassApi extends BaseApi {
//   public async getListPager(
//     strWhere: string = "",
//     pageSize: number = 15,
//     pageIndex: number = 1
//   ) {
//     let url: string =
//       "/api/admin/ad/class?token=" +
//       this.token +
//       "&page_size=" +
//       pageSize +
//       "&start_index=" +
//       pageIndex +
//       strWhere;
//     return await AxiosUtil.get<BasePager<AdModel>>(url);
//   }

//   /**
//    * 获取列表
//    */
//   public async getList(strWhere: string = "") {
//     let url: string = "/api/admin/ad/class/list?token=" + this.token;
//     return await AxiosUtil.get<BaseArray<AdModel>>(url);
//   }

//   /**
//    * 添加
//    * @param model
//    */
//   public async setAdd(data: AdModel) {
//     let url = "/api/admin/ad/class"+"?token="+this.token;
//     return await AxiosUtil.post<BaseResult>(url, data);
//   }

//   /**
//    * 更新
//    * @param id
//    * @param model
//    */
//   public async setUpdate(id: number, data: AdModel) {
//     let url = "/api/admin/ad/class/" + id+"?token="+this.token;
//     return await AxiosUtil.put<BaseResult>(url, data);
//   }

//   /**
//    * 删除
//    * @param ids
//    */
//   public async setDelete(id: number) {
//     let url = "/api/admin/ad/class/" + id+"?token="+this.token;
//     return await AxiosUtil.delete<BaseResult>(url);
//   }
//   /**
//    * 获取模型
//    * @param id
//    */
//   public async getModel(id: number) {
//     let url = "/api/admin/ad/class/" + id+"?token="+this.token;
//     return await AxiosUtil.get<BaseModel<AdModel>>(url);
//   }
// }
