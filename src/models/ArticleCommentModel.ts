/**
 *文章评论
 *
 * @export
 * @interface ArticleCommentModel
 */
export interface ArticleCommentModel{
    id?:number;//                        PKInteger
    name?:string;//(评论人)              String(50)
    content?:string;//(评论内容)         String(200)
    replay_name?:string;//(回复人)       String(50)
    replay_content?:string;//(回复内容)  String(200)
    ip?:string;//(IP)                    String(50)
    self_id?:number;//(所属文章)         Integer
    zan_count?:number;//(赞个数)         Integer
    is_show?:number;//(是否显示)         Integer
    user_id?:number;//(所属用户)         Integer
    create_time?:string;//(提交时间)     Date
    replay_time?:string;//(回复时间)     Date
}