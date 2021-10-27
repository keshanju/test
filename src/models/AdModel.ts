/**
*广告
 *
 * @export
 * @interface AdModel
 */
export interface AdModel {
    id?:number;//(编号)               PKInteger
    classid?:number;//(所属分类)      Integer
    title?:string;//(标题)            String(255)
    link?:string;//(链接)             String(255)
    pic?:string;//(图片地址)          String(255)
    readme?:string;//(说明)           String(255)
    order_id?:number;//(排序)         Integer
    status_id?:number;//(状态)        Integer
    create_time?:string;//(创建时间)  Date
    update_time?:string;//(更新时间)  Date
}