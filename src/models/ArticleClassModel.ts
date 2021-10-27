/**
 *文章分类
 *
 * @export
 * @interface ArticleClassModel
 */
export interface ArticleClassModel{
    classid?:number;//(编号)            PKInteger
    parentid?:number;//(所属父Id)       Integer
    is_show?:number;//(是否显示)        Integer
    classcode?:string;//(分类代码)      String(50)
    class_photo?:string;//(图片)        String(200)
    class_keyword?:string;//(关键词)    String(200)
    class_description?:string;//(描述)  String(200)
    classname?:string;//(名称)          String(50)
    readme?:string;//(简介)             String(255)
    template_list?:string;//(列表模板)  String(255)
    template_view?:string;//(详细模板)  String(255)
}