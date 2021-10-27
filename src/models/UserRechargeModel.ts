/**
 *用户充值
 *
 * @export
 * @interface UserRechargeModel
 */
export interface UserRechargeModel{
    id?:number;//                       PKInteger
    user_id?:number;//(用户金额)        Integer
    balance?:number;//(充值余额)        Float
    create_time?:string;//(充值时间)    Date
    recharge_type?:number;//(充值类型)  Integer     //1.支付宝2.财付通3.微信4.手动
    status_id?:number;//(充值状态)      Integer     //0未支付 1已支付
    order_id?:number;//(充值订单)       Integer
}