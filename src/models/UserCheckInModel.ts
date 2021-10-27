/**
 *用户签到
 *
 * @export
 * @interface UserCheckInModel
 */
export interface UserCheckInModel {
    id?: number;//(编号)              PKInteger
    user_id?: number;//(所属用户)     Integer
    check_time?: string;//(签到时间)  Date
}