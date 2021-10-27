/**
 *微信设置
 *
 * @export
 * @interface WxModel
 */
export interface WxModel {
    id?: number;//(编号)                  PKInteger
    template_num?: string;//(模板编号)    String
    name?: string;//(公众账号名称)        String(200)
    origin?: string;//(公众号原始id)      String(100)
    wx_account?: string;//(微信账号)      String(120)
    avatar?: string;//(头像)              String(255)
    interface_url?: string;//(接口地址)   String(255)
    token?: string;//                     String
    encode_aes_key?: string;//(加密方式)  String(200)
    appid?: string;//                    String(200)
    appsecret?: string;//                String(255)
    pay_name?: string;//(支付名称)        String(50)
    pay_state?: number;//(支付状态)       Integer
    pay_account?: string;//(支付账号)     String(50)
    pay_key?: string;//(支付key)          String(255)
    pay_send_type?: number;//(发货类型)   Integer
    pay_photo?: string;//(支付图片)       String(255)
    note?: string;//(描述)                String(255)
    createtime?: string;//(创建时间)      Date
    isdefault?: number;//(是否默认)       Integer
}