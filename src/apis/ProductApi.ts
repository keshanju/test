import { BaseApi } from './BaseApi';
import { AxiosUtil } from '@/utils/AxiosUtil';
import { BasePager, BaseArray, BaseResult, BaseModel } from '@/models/BaseModel';
import { ProductModel, ProductAddressModel, ProductBrandModel, ProductClassModel, ProductCommentModel, ProductOrderModel, ProductReportModel, ProductPaymentModel, ProductTopicClassModel, ProductShipmentModel } from '@/models/ProductModel';

/**
 * 产品
 */
export class ProductApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
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
        let url = "/api/product/product";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductModel) {
        let url = "/api/product/product/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/" + id;
        return await AxiosUtil.get<BaseModel<ProductModel>>(url);
    }
}
/**
 * 产品地址
 */
export class ProductAddressApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/address?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductAddressModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/address/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductAddressModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductAddressModel) {
        let url = "/api/product/product/address";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductAddressModel) {
        let url = "/api/product/product/address/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/address/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/address/" + id;
        return await AxiosUtil.get<BaseModel<ProductAddressModel>>(url);
    }
}
/**
 * 产品品牌
 */
export class ProductBrandApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/brand?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductBrandModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/brand/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductBrandModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductBrandModel) {
        let url = "/api/product/product/brand";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductBrandModel) {
        let url = "/api/product/product/brand/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/brand/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/brand/" + id;
        return await AxiosUtil.get<BaseModel<ProductBrandModel>>(url);
    }
}

/**
 * 产品分类
 */
export class ProductClassApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/class?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductClassModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/class/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductClassModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductClassModel) {
        let url = "/api/product/product/class";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductClassModel) {
        let url = "/api/product/product/class/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/class/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/class/" + id;
        return await AxiosUtil.get<BaseModel<ProductClassModel>>(url);
    }
}
/**
 * 产品评论
 */
export class ProductCommentApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/comment?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductCommentModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/comment/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductCommentModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductCommentModel) {
        let url = "/api/product/product/comment";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductCommentModel) {
        let url = "/api/product/product/comment/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/comment/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/comment/" + id;
        return await AxiosUtil.get<BaseModel<ProductCommentModel>>(url);
    }
}
/**
 * 产品订单
 */
export class ProductOrderApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/order?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductOrderModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/order/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductOrderModel>>(url);
    }
    // /**
    //  * 获取订单详情
    //  */
    // public async getListdetail(id) {
    //     let url: string = "/api/product/product/order/"+id+"?token=" + this.token;
    //     return await AxiosUtil.get<BaseModel<ProductOrderModel>>(url);
    // }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductOrderModel) {
        let url = "/api/product/product/order";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductOrderModel) {
        let url = "/api/product/product/order/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/order/" + id;
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

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/payment?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductPaymentModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/payment/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductPaymentModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductPaymentModel) {
        let url = "/api/product/product/payment";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductPaymentModel) {
        let url = "/api/product/product/payment/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/payment/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/payment/" + id;
        return await AxiosUtil.get<BaseModel<ProductPaymentModel>>(url);
    }
}
/**
 * 产品报表
 */
export class ProductReportApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/report?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductReportModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/report/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductReportModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductReportModel) {
        let url = "/api/product/product/report";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductReportModel) {
        let url = "/api/product/product/report/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/report/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/report/" + id;
        return await AxiosUtil.get<BaseModel<ProductModel>>(url);
    }
}
/**
 * 产品发货方式
 */
export class ProductShipmentApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/shipment?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductShipmentModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/shipment/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductShipmentModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductShipmentModel) {
        let url = "/api/product/product/shipment";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductShipmentModel) {
        let url = "/api/product/product/shipment/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/shipment/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/shipment/" + id;
        return await AxiosUtil.get<BaseModel<ProductShipmentModel>>(url);
    }
}
/**
 * 产品专题分类
 */
export class ProductTopicClassApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/product/product/topicclass?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ProductTopicClassModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/product/product/topicclass/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ProductTopicClassModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ProductTopicClassModel) {
        let url = "/api/product/product/topicclass";
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ProductTopicClassModel) {
        let url = "/api/product/product/topicclass/" + id;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/product/product/topicclass/" + id;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/product/product/topicclass/" + id;
        return await AxiosUtil.get<BaseModel<ProductTopicClassModel>>(url);
    }
}

/**
 * 搜索产品
 */
export class ProductSearchApi extends BaseApi {
    /**
     * 获取列表
     * @param param 
     */
    public async search(param) {
        let url = '/api/client/product/search?search=' + param.search + '&page_size=' + param.page_size + '&page_index=' + param.page_index;
        return await AxiosUtil.get<BasePager<ProductModel>>(url);
    }
}
