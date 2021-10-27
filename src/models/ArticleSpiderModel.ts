/**
 *文章采集
 *
 * @export
 * @interface ArticleSpiderModel
 */
export interface ArticleSpiderModel{
    id?:number;//                               PKInteger
    weburl?:string;//(采集示例地址)             String(255)
    name?:string;//(名称)                       String(50)
    classid?:number;//(分类Id)                  Integer
    collection_keys?:string;//(采集关键词)      String(255)
    is_close?:number;//(状态)                   Integer
    encode?:string;//(编码)                     String(50)
    content?:string;//(采集说明)                String(50)
    replace_html?:string;//(替换)               String(50)
    remote_list_url?:string;//(移除)            String(255)
    start_id?:string;//(开始)                   Integer
    end_id?:string;//(结束)                     Integer
    is_save_img?:number;//(是否保存图片)        Integer
    is_in_data?:number;//(是否直接入库)         Integer
    is_passed?:number;//(是否通过)              Integer
    str_replace?:string;//(字符替换)            String(50)
    list_start?:string;//(列表开始)             String(1000)
    list_end?:string;//(列表结束)               String(1000)
    link_start?:string;//(链接包含)             String(1000)
    link_end?:string;//(链接不包含)             String(1000)
    get_title_start?:string;//(获取标题开始)    String(255)
    get_title_end?:string;//(获取标题结束)      String(255)
    get_content_start?:string;//(获取内容开始)  String(255)
    get_content_end?:string;//(获取内容结束)    String(255)
    get_content?:string;//(获取内容)            String(2000)
    create_time?:string;//(创建时间)            Date
    update_time?:string;//(更新时间)            Date
    gather_count?:number;//(采集个数)           Integer
    user_id?:number;//(所属用户)                Integer
    get_photo_start?:string;//(获取图片开始)    String(1000)
    get_photo_end?:string;//(获取图片结束)      String(1000)
    get_url?:string;//(测试详细地址)            String(1000)
}