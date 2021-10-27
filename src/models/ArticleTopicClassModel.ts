/**
 *文章专题
 *
 * @export
 * @interface ArticleTopicClassModel
 */
export interface ArticleTopicClassModel{
    classid?:number;//(编号)            PKInteger
    parentid?:number;//(所属父Id)       Integer
    is_show?:number;//(是否显示)        Integer
    classcode?:string;//(分类代码)      String(50)
    class_photo?:string;//(图片)        String(200)
    class_keyword?:string;//(关键词)    String(200)
    class_description?:string;//(描述)  String(200)
    classname?:string;//(名称)          String(50)
    readme?:string;//(说明)             String(200)
}