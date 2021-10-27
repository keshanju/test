/**
 *广告分类
 *
 * @export
 * @interface AdClassModel
 */
export interface AdClassModel{
    classid?:number;//(编号)            PKInteger
    classcode?:string;//(分类代码)      String(50)
    class_photo?:string;//(图片)        String(50)
    class_keyword?:string;//(关键词)    String(50)
    class_description?:string;//(描述)  String(50)
    classname?:string;//(名称)          String(50)
    parentid?:number;//(所属父分类)     Integer
    readme?:string;//(描述信息)         String(255)
    is_show?:number;//(是否显示)        Integer
}