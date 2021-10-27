/**
 *全站关键词
 *
 * @export
 * @interface KeywordsModel
 */
export interface KeywordsModel {
    token?:string;
    id?: number;//(编号)               PKInteger
    type_id?: number;//(类型)          Integer     //1,全站
    status_id?: number;//(状态)        Integer
    keyword?: string;//(关键词)        String(50)
    url?: string;//(链接)              String(200)
    readme?: string;//(说明)           String(200)
    create_time?: string;//(添加时间)  Date
    update_time?: string;//(更新时间)  Date
}