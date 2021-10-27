/**
 *网站配置
 *
 * @export
 * @interface ConfigModel
 */
export interface ConfigModel {
    token?:string;
    id?: number;//                                   PKInteger
    site_title?: string;//(网站标题)                 String(255)
    sub_title?: string;//(网站子标题)                String(255)
    site_stat?: number;//e(网站状态)                 Integer
    site_type?: number;//(站点显示类型)              Integer
    diy_type?: number;//(单页图文显示模式)           Integer
    site_url?: string;//(站点地址)                   String(255)
    site_username?: string;//(站点名称)              String(50)
    site_email?: string;//(站点Email)                String(200)
    site_copyright?: string;//(版权说明)             String(200)
    site_description?: string;//(站点描述)           String(200)
    site_keywords?: string;//(站点关键词)            String(100)
    site_close_text?: string;//(站点关闭文本)        String(200)
    templatedir?: string;//(模板目录)                String(50)
    mailserver?: string;//(邮件服务器)               String(50)
    mail_object?: string;//(邮件主题)                String(100)
    mail_username?: string;//(邮件用户名)            String(20)
    mail_password?: string;//(邮件密码)              String(20)
    mail_domain?: string;//(邮件)                    String(50)
    sms_username?: string;//(短信用户名)             String(20)
    sms_userpwd?: string;//(短信密码)                String(20)
    sms_interface_url?: string;//(短信接口地址)      String(255)
    sms_manage_url?: string;//(短信管理地址)         String(255)
    water_type?: number;//(打水印类型)               Integer     //0关闭 1文字 2图片
    water_img?: string;//(图片水印)                  String(255)
    water_text?: string;//(文字水印)                 String(255)
    water_text_font?: string;//(水印文字字体)        String
    water_text_color?: string;//(水印字体颜色)       String(50)
    water_text_size?: number;//(水印文字大小)        Integer
    water_pos?: number;//(水印位置)                  Integer
    upload_max_width?: number;//(上传文件最大宽度)   Integer     //0,保持
    upload_max_height?: number;//上传文件最大高度)  Integer     //0,保持
    upload_img_type?: number;//(上传文件重名)        Integer     //1,跳过 2.重命名 3覆盖
    upload_allow_extend?: string;//(上传文件扩展)    String(255)
    thum_type?: number;//(缩略图类型)                Integer     //0关闭 1开启
    thum_width?: number;//(缩略图宽度)               Integer     //0,保持
    thum_height?: number;//                          Integer     //0,保持
}