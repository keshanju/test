/**
 *友情链接
 *
 * @export
 * @interface FriendModel
 */
export interface FriendModel {
    id?:number;//(编号)               PKInteger
    classid?:string;//(所属分类)      Integer
    link_type?:number;//(连接类型)    Integer
    is_show?:number;//(是否显示)      Integer
    name?:string;//(名称)             String(50)
    url?:string;//(地址)              String(200)
    logo?:string;//(Logo地址)         String(200)
    user_id?:number;//(所属用户)      Integer
    create_time?:string;//(添加时间)  Date
    update_time?:string;//(更新时间)  Date
}