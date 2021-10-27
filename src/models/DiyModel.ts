/**
 *单页图文
 *
 * @export
 * @interface DiyModel
 */
export interface DiyModel {
    id?:number;//                       PKInteger
    classid?:number;//(分类Id)          Integer
    parentid?:number;//(所属父Id)       Integer
    template?:string;//(自定义模板)     String(50)
    title?:string;//(页面标题)          String(50)
    keywords?:string;//(页面关键词)     String(200)
    description?:string;//(页面说明)    String(200)
    content?:string;//(页面内容)        String
    is_footer?:number;//(是否页脚导航)  Integer
    create_time?:string;//(创建时间)    Date
    update_time?:string;//(更新时间)    Date
}