/**
 *单页图文分类
 *
 * @export
 * @interface DiyClassModel
 */
export interface DiyClassModel{
    classid?:number;//(编号)            PKInteger
    parentid?:number;//(所属父Id)       Integer
    classcode?:string;//(分类编号)      String(50)
    class_photo?:string;//(图片)        String(200)
    class_keyword?:string;//(关键词)    String(200)
    class_description?:string;//(描述)  String(200)
    classname?:string;//(标题)          String(50)
    readme?:string;//(说明)             String(255)
    is_show?:number;//(是否显示)        Integer
}