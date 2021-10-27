import { BaseApi } from "./BaseApi";
import { AxiosUtil } from "@/utils/AxiosUtil";
import {
  BasePager,
  BaseArray,
  BaseResult,
  BaseModel
} from "@/models/BaseModel";
import {
  ProductModel,
  ProductAddressModel,
  ProductBrandModel,
  ProductClassModel,
  ProductCommentModel,
  ProductOrderModel,
  ProductReportModel,
  ProductPaymentModel,
  ProductTopicClassModel,
  ProductShipmentModel,
  ProductConfigModel
} from "@/models/ProductModel";

/**
 * 产品
 */
export class ProductApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1,
    search: string = "",
    sort: string = ""
  ) {
    let url: string =
      "/api/product/product?token=" +
      this.token +
      "&search=" + search +
      "&sort=" + sort +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex +
      strWhere;
    return await AxiosUtil.get<BasePager<ProductModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/product/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductModel) {
    data.token = this.token;
    let url = "/api/product/product";
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductModel) {
    data.token = this.token;
    let url = "/api/product/product/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/product/" + id + "?token=" + this.token;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/product/" + id + "?token=" + this.token;
    return await AxiosUtil.get<BaseModel<ProductModel>>(url);
  }
}

export class ProductConfigApi extends BaseApi {
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/config/" + id + "?token=" + this.token;
    return await AxiosUtil.get<BaseModel<ProductConfigModel>>(url);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductConfigModel) {
    data.token = this.token;
    let url = "/api/product/config/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }
}
/**
 * 产品地址
 */
export class ProductAddressApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1
  ) {
    let url: string =
      "/api/product/address?token=" +
      this.token +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex +
      strWhere;
    return await AxiosUtil.get<BasePager<ProductAddressModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/address/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductAddressModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductAddressModel) {
    let url = "/api/product/address" + "?token=" + this.token;
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductAddressModel) {
    let url = "/api/product/address/" + id + "?token=" + this.token;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/address/" + id + "?token=" + this.token;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/address/" + id + "?token=" + this.token;
    return await AxiosUtil.get<BaseModel<ProductAddressModel>>(url);
  }
}
/**
 * 产品品牌
 */
export class ProductBrandApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1,
    search,
    sort
  ) {
    let url: string =
      "/api/product/brand?token=" +
      this.token +
      "&search=" + search +
      "&sort=" + sort +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex;
    return await AxiosUtil.get<BasePager<ProductBrandModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/brand/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductBrandModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductBrandModel) {
    let url = "/api/product/brand";
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductBrandModel) {
    let url = "/api/product/brand/" + id + "?token=" + this.token;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/brand/" + id + "?token=" + this.token;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/brand/" + id + "?token=" + this.token;
    return await AxiosUtil.get<BaseModel<ProductBrandModel>>(url);
  }
}

/**
 * 产品分类
 */
export class ProductClassApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1,
    search = "",
    sort = ""
  ) {
    let url: string =
      "/api/product/class?token=" +
      this.token +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex +
      "&search=" + search +
      "&sort=" + sort;
    return await AxiosUtil.get<BasePager<ProductClassModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/class/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductClassModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductClassModel) {
    let url = "/api/product/class";
    data.token = this.token;
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductClassModel) {
    let url = "/api/product/class/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/class/" + id + "?token=" + this.token;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/class/" + id;
    return await AxiosUtil.get<BaseModel<ProductClassModel>>(url);
  }
}
/**
 * 产品评论
 */
export class ProductCommentApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1
  ) {
    let url: string =
      "/api/product/comment?token=" +
      this.token +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex +
      strWhere;
    return await AxiosUtil.get<BasePager<ProductCommentModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/comment/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductCommentModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductCommentModel) {
    let url = "/api/product/comment";
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductCommentModel) {
    let url = "/api/product/comment/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/comment/" + id;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/comment/" + id;
    return await AxiosUtil.get<BaseModel<ProductCommentModel>>(url);
  }
}
/**
 * 产品订单
 */
export class ProductOrderApi extends BaseApi {
  public async getListPager(
    pageSize: number = 15,
    pageIndex: number = 1,
    search='',
    sort=''
  ) {
    let url: string =
      "/api/product/order?token=" +
      this.token +
      "&search=" +search+
      "&sort=" +sort+
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex;
    return await AxiosUtil.get<BasePager<ProductOrderModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/order?token=" + this.token;
    return await AxiosUtil.get<BasePager<ProductOrderModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductOrderModel) {
    let url = "/api/product/order";
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductOrderModel) {
    let url = "/api/product/order/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/order/" + id;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/order/" + id;
    return await AxiosUtil.get<BaseModel<ProductOrderModel>>(url);
  }
}
/**
 * 产品支付方式
 */
export class ProductPaymentApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1
  ) {
    let url: string =
      "/api/product/payment?token=" +
      this.token +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex +
      strWhere;
    return await AxiosUtil.get<BasePager<ProductPaymentModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/payment/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductPaymentModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductPaymentModel) {
    let url = "/api/product/payment";
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductPaymentModel) {
    let url = "/api/product/payment/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/payment/" + id;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/payment/" + id;
    return await AxiosUtil.get<BaseModel<ProductPaymentModel>>(url);
  }
}
/**
 * 产品报表
 */
export class ProductReportApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1
  ) {
    let url: string =
      "/api/product/report?token=" +
      this.token +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex +
      strWhere;
    return await AxiosUtil.get<BasePager<ProductReportModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/report/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductReportModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductReportModel) {
    let url = "/api/product/report";
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductReportModel) {
    let url = "/api/product/report/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/report/" + id;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/report/" + id;
    return await AxiosUtil.get<BaseModel<ProductModel>>(url);
  }
}
/**
 * 产品发货方式
 */
export class ProductShipmentApi extends BaseApi {
  public async getListPager(
    pageSize: number = 15,
    pageIndex: number = 1,
    search='',
    sort=""
  ) {
    let url: string =
      "/api/product/shipment?token=" +
      this.token +
      "&search=" +search+
      "&sort=" +sort+
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex;
    return await AxiosUtil.get<BasePager<ProductShipmentModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/shipment/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductShipmentModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductShipmentModel) {
    let url = "/api/product/shipment";
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductShipmentModel) {
    let url = "/api/product/shipment/" + id;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/shipment/" + id;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/shipment/" + id;
    return await AxiosUtil.get<BaseModel<ProductShipmentModel>>(url);
  }
}
/**
 * 产品专题分类
 */
export class ProductTopicClassApi extends BaseApi {
  public async getListPager(
    strWhere: string = "",
    pageSize: number = 15,
    pageIndex: number = 1,
    search: string = "",
    sort: string = ""
  ) {
    let url: string =
      "/api/product/topicclass?token=" +
      this.token +
      "&search=" + search +
      "&sort=" + sort +
      "&page_size=" +
      pageSize +
      "&start_index=" +
      pageIndex;
    return await AxiosUtil.get<BasePager<ProductTopicClassModel>>(url);
  }

  /**
   * 获取列表
   */
  public async getList(strWhere: string = "") {
    let url: string = "/api/product/topicclass/list?token=" + this.token;
    return await AxiosUtil.get<BaseArray<ProductTopicClassModel>>(url);
  }

  /**
   * 添加
   * @param model
   */
  public async setAdd(data: ProductTopicClassModel) {
    let url = "/api/product/topicclass";
    data.token=this.token;
    return await AxiosUtil.post<BaseResult>(url, data);
  }

  /**
   * 更新
   * @param id
   * @param model
   */
  public async setUpdate(id: number, data: ProductTopicClassModel) {
    let url = "/api/product/topicclass/" + id;
    data.token = this.token;
    return await AxiosUtil.put<BaseResult>(url, data);
  }

  /**
   * 删除
   * @param ids
   */
  public async setDelete(id: number) {
    let url = "/api/product/topicclass/" + id + "?token=" + this.token;
    return await AxiosUtil.delete<BaseResult>(url);
  }
  /**
   * 获取模型
   * @param id
   */
  public async getModel(id: number) {
    let url = "/api/product/topicclass/" + id;
    return await AxiosUtil.get<BaseModel<ProductTopicClassModel>>(url);
  }
}
