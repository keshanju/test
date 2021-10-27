
/**
 *导航菜单
 *
 * @export
 * @interface MenuModel
 */
export interface MenuModel {
    classid?: number;//(编号)             PKInteger
    parentid?: number;//(所属父ID)        Integer
    is_show?: number;//(是否显示)         Integer
    menu_type?: number;//(菜单类型)       Integer
    is_system?: number;//(是否显示)       Integer
    classcode?: string;//(编号)           String(50)
    class_photo?: string;//(图片)         String(200)
    class_keyword?: string;//(关键词)     String(200)
    class_description?: string;//(描述)   String(200)
    classname?: string;//(名称)           String(50)
    readme?: string;//(描述)              String(255)
    menu_classid?: string;//(菜单分类ID)  String(50)
    link_url?: string;//(链接URL)         String(200)
}