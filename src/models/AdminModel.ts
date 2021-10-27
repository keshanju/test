/**
 *管理员
 *
 * @export
 * @interface AdminModel
 */
export interface AdminModel {
    token?: string;
    id?: number;//(编号)                       PKInteger
    admin_name?: string;//(用户名)             String(20)
    admin_pwd?: string;//(密码)                String(50)
    admin_pwd2?: string;//(密码)                String(50)
    login_times?: string;//(登陆次数)          Integer
    last_login_time?: string;//(最后登陆时间)  Date
    last_login_ip?: string;//(最后登陆IP)      String(50)
    role_ids?: number;//(所属角色组)           String(1000) //多个使用逗号分隔开
    is_lock?: number;//(是否锁定)              Integer
    is_system?: number;//(是否系统)            Integer     //是 不能删除
    create_time?: string;//(创建时间)          Date
    update_time?: string;//(修改时间)          Date
}