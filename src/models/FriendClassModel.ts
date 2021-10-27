/**
 *友情链接分类
 *
 * @export
 * @interface FriendClassModel
 */
export interface FriendClassModel {
    classid?: number;//(编号)            PKInteger
    parentid?: number;//(父ID)           Integer
    is_show?: number;//(是否显示)        Integer
    classcode?: string;//(分类编号)      String(50)
    class_photo?: string;//(图片)        String(200)
    class_keyword?: string;//(关键词)    String(200)
    class_description?: string;//(描述)  String(200)
    classname?: string;//(分类名称)      String(50)
    readme?: string;//(描述)             String(255)
}