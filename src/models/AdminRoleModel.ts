/**
 *管理员角色
 *
 * @export
 * @interface AdminRoleModel
 */
export interface AdminRoleModel{
    id?:number;//(编号)                 PKInteger
    name?:string;//(名称)               String(50)
    module_ids?:string;//(模块列表)     String(50)  //多个使用逗点隔开
    is_system?:number;//(是否属于系统)  Integer
    readme?:string;//(说明)             String(255)
    create_time?:string;//(创建时间)    Date
    update_time?:string;//(更新时间)    Date
}