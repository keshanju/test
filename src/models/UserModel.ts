/**
 *用户
 *
 * @export
 * @interface UserModel
 */
export interface UserModel {
    id?: number;//                             PKInteger
    user_name?: string;//(用户账号)            String(20)
    user_pwd?: string;//(密码)                 String(50)
    nick_name?: string;//(昵称)                String(50)
    sex?: number;//(性别)                      Integer
    true_name?: string;//(真实姓名)            String(50)
    user_level?: number;//(等级)               Integer
    valid_num?: number;//(有效期)              Integer
    is_lock?: number;//(是否锁定用户)          Integer
    last_login_time?: string;//(最后登陆时间)  Date
    login_times?: number;//(登陆次数)          Integer
    question?: string;//(问题)                 String(50)
    answer?: string;//(答案)                   String(50)
    email?: string;//(Email)                   String(100)
    mobile?: string;//(手机号)                 String(20)
    home_page?: string;//(主页)                String(200)
    oicq?: string;//                           String(50)
    msn?: string;//                           String(50)
    icq?: string;//                           String(50)
    weixin?: string;//(微信号)                 String(200)
    alipay?: string;//(支付宝)                 String(255)
    content?: string;//(备注)                  String(255)
    role_ids?: string;//(用户角色组)           String(255)
    last_login_ip?: string;//(最后登陆IP)      String(50)
    create_time?: string;//(添加时间)          Date
    update_time?: string;//(修改时间)          Date
    photo?: string;//(照片)                    String(255)
    address?: string;//(详细地址)              String(255)
    balance?: number;//(用户余额)              Float
    balance_update_time?: string;//(余额时间)  Date
    security_key?: string;//(安全秘钥)         String(32)
    score?: number;//(积分)                    Integer
    wx_openid?: string;//(微信openid)          String(32)
    province?: string;//(省份)                 String(50)
    city?: string;//(城市)                     String(50)
    points?: number;//(积分)                   Integer
}