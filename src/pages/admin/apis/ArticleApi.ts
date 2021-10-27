import { AxiosUtil } from '../../../utils/AxiosUtil';
import { BaseResult, BaseModel, BaseArray, BasePager } from '../../../models/BaseModel';
import { ArticleModel } from '../../../models/ArticleModel';
import { BaseApi } from './BaseApi';

/**
 * 文章
 */
export class ArticleApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/article?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ArticleModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/article/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ArticleModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ArticleModel) {
        let url = "/api/admin/article"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ArticleModel) {
        let url = "/api/admin/article/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/article/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/article/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<ArticleModel>>(url);
    }
}

/**
 * 文章分类
 */
export class ArticleClassApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/article/class?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ArticleModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/article/class/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ArticleModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ArticleModel) {
        let url = "/api/admin/article/class"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ArticleModel) {
        let url = "/api/admin/article/class/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/article/class/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/article/class/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<ArticleModel>>(url);
    }
}
/**
 * 文章专题分类
 */
export class ArticleTopicClassApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/article/topicclass?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ArticleModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/article/topicclass/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ArticleModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ArticleModel) {
        let url = "/api/admin/article/topicclass"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ArticleModel) {
        let url = "/api/admin/article/topicclass/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/article/topicclass/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/article/topicclass/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<ArticleModel>>(url);
    }
}

/**
 * 文章评论
 */
export class ArticleCommentApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/article/comment?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ArticleModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/article/comment/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ArticleModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ArticleModel) {
        let url = "/api/admin/article/comment"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ArticleModel) {
        let url = "/api/admin/article/comment/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/article/comment/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/article/comment/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<ArticleModel>>(url);
    }
}

/**
 * 文章采集
 */
export class ArticleSpiderApi extends BaseApi {

    public async getListPager(strWhere: string = "", pageSize: number = 15, pageIndex: number = 1) {
        let url: string = "/api/admin/article/spider?token=" + this.token + "&page_size=" + pageSize + "&start_index=" + pageIndex + strWhere;
        return await AxiosUtil.get<BasePager<ArticleModel>>(url);
    }

    /**
     * 获取列表
     */
    public async getList(strWhere: string = "") {
        let url: string = "/api/admin/article/spider/list?token=" + this.token;
        return await AxiosUtil.get<BaseArray<ArticleModel>>(url);
    }

    /**
     * 添加
     * @param model 
     */
    public async setAdd(data: ArticleModel) {
        let url = "/api/admin/article/spider"+"?token="+this.token;
        return await AxiosUtil.post<BaseResult>(url, data);
    }

    /**
     * 更新
     * @param id 
     * @param model 
     */
    public async setUpdate(id: number, data: ArticleModel) {
        let url = "/api/admin/article/spider/" + id+"?token="+this.token;
        return await AxiosUtil.put<BaseResult>(url, data);
    }

    /**
     * 删除
     * @param ids 
     */
    public async setDelete(id: number) {
        let url = "/api/admin/article/spider/" + id+"?token="+this.token;
        return await AxiosUtil.delete<BaseResult>(url);
    }
    /**
     * 获取模型
     * @param id 
     */
    public async getModel(id: number) {
        let url = "/api/admin/article/spider/" + id+"?token="+this.token;
        return await AxiosUtil.get<BaseModel<ArticleModel>>(url);
    }
}