/**
 *用户认证
 *
 * @export
 * @interface UserCertLogsModel
 */
export interface UserCertLogsModel {
    id?: number;//                     PKInteger
    user_id?: number;//(所属用户)      Integer
    cert_type?: number;//(认证类型)    Integer     //1.email 2.手机号 3.支付宝
    create_time?: string;//(创建时间)  Date        //10分钟之内认证 超过失效
    token?: string;//(认证票据)        String(255)
    is_cert?: number;//(是否认证)      Integer
    ip?: string;//(IP地址)             String(100)
}