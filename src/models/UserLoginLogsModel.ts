/**
 *用户登录日志
 *
 * @export
 * @interface UserLoginLogsModel
 */
export interface UserLoginLogsModel {
    id?: number;//(编号)                       PKInteger
    user_id?: number;//(用户Id)                Integer
    last_login_time?: string;//(最后登陆时间)  Date
    last_login_ip?: string;//(最后登陆IP)      String(20)
    type_id?: number;//(登陆类型)              Integer     //1普通登陆 2微信登陆
}