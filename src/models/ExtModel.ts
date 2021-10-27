/**
 *扩展字段
 *
 * @export
 * @interface ExtModel
 */
export interface ExtModel {
    id?:number;//(编号)               PKInteger
    name?:string;//(列名称)           String(100)
    classid?:number;//(所属分类)      Integer
    is_choice?:number;//(是否多选)    Integer     //使用逗号分开
    is_use_img?:number;//(使用图片)   Integer
    content?:string;//(字段初始值)    String(255)
    type_id?:number;//(字段类型)      Integer     //article,product等
    order_id?:number;//(排序)         Integer
    create_time?:string;//(创建时间)  Date
    update_time?:string;//(更新时间)  Date
}