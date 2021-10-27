/**
 *用户角色
 *
 * @export
 * @interface UserRoleModel
 */
export interface UserRoleModel{
    id?:number;//                     PKInteger
    name?:string;//(角色名称)         String(50)
    purview_ids?:string;//(权限列表)  String(1000)
    readme?:string;//(说明)           String(200)
    points?:number;//(阅读积分)       Integer
    create_time?:string;//(创建时间)  Date
    update_time?:string;//(修改时间)  Date
}