/**
 *碎片
 *
 * @export
 * @interface BlockerModel
 */
export interface BlockerModel {
    id  ?:number;//                      PKInteger
    blockertype?:string;//(碎片类型)     String(50)
    blockername?:string;//(名称)         String(50)
    blockerid?:string;//(唯一编号)       String(50)
    blockercontent?:string;//(HTML内容)  String
    blockerdesc?:string;//(说明)         String(200)
    create_time?:string;//(创建时间)     Date
    update_time?:string;//(更新时间)     Date
}