/**
 *用户收藏
 *
 * @export
 * @interface UserFav
 */
export interface UserFav {
    id?: number;//(编号)               PKInteger
    self_id?: number;//(所属Id)        Integer
    user_id?: number;//(所属用户)      Integer
    self_type?: number;//(所属类型)    Integer
    ip?: string;//(IP地址)             String(100)
    create_time?: string;//(创建时间)  Date
    update_time?: string;//(更新时间)  Date
}