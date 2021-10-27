import { BaseModel } from './BaseModel';

/**
 *文章
 *
 * @export
 * @interface ArticleModel
 */
export interface ArticleModel {
    id?:number;//(编号)                      PKInteger
    is_italic?:number;//(是否斜体)           Integer
    classid?:number;//(所属分类)             Integer
    hits?:number;//(点击次数)                Integer
    is_passed?:number;//(是否通过)           Integer
    is_ontop?:number;//(置顶)                Integer
    is_recommended?:number;//(推荐)          Integer
    is_specials?:number;//(特价)             Integer
    title?:string;//(标题)                   String(200)
    title_color?:string;//(颜色)             String(50)
    article_keywords?:string;//(文字关键词)  String(50)
    keywords?:string;//(关键词)              String(50)
    description?:string;//(描述)             String(200)
    topic_classids?:string;//(专题Id)        String(20)  //多个使用逗号分开
    copyfrom?:string;//(来源)                String(50)
    author?:string;//(作者)                  String(20)
    is_url?:number;//(是Url)                 Integer
    link_url?:string;//(链接地址)            String(200)
    template?:string;//(自定义模板)          String(50)
    default_pic_url?:string;//(默认图片)     String(200)
    admin_id?:number;//(所属管理员)          Integer
    user_id?:number;//(所属用户)             Integer
    file_name?:string;//(文件)               String(50)  //文件地址 或者 描述
    property?:string;//(其他属性)            String(20)
    short_content?:string;//(简介)           String(200)
    content?:string;//(详细内容)             String
    create_time?:string;//(创建时间)         Date
    update_time?:string;//(更新时间)         Date
    more_photo?:string;//(更多图片)          String(1000) //更多图片
    read_point?:number;//(所需点数)          Integer     //可以做成下载所需积分 文章阅读所需积分等....
    user_roleid?:number;//(用户访问权限)     Integer     //一般不用 0 全部都可以访问 其他值根据用户角色确定
    tags?:string;//(标签Id列表)              String(50)
}