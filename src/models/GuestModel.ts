/**
 *留言管理
 *
 * @export
 * @interface GuestModel
 */
export interface GuestModel {
    id?: number;//                       PKInteger
    type_id?: number;//(类别)            Integer
    sex?: number;//(性别)                Integer
    name?: string;//(姓名)               String(50)
    oicq?: string;//                     String(50)
    msn?: string;//                      String(50)
    icq?: string;//                     String(50)
    email?: string;//(邮箱)              String(50)
    homepage?: string;//(主页)           String(50)
    images?: string;//(留言图片)         String(50)
    face?: string;//(头像)               String(50)
    ip?: string;//(IP)                   String(50)
    title?: string;//(主题)              String(50)
    content?: string;//(内容)            String(200)
    reply_content?: string;//(回复内容)  String(200)
    reply_admin?: string;//(回复管理员)  String(50)
    mobile?: string;//(手机号)           String(20)
    is_private?: number;//(是否隐藏)     Integer
    is_passed?: number;//(是否通过)      Integer
    create_time?: string;//(创建时间)    Date
    reply_time?: string;//(回复时间)     Date
}