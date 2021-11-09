/**
 * 资产
 * @export
 * @interface FinanceModel
 */

 export class AccountAssetsModle {
    public uid: string = ''; //用户id
    public fundType: string = ''; //账户类型：1币币
    public coinId: string = ''; //币种编号
    public coinName: string = ''; //币种名称
    public balance: string = ''; //可用余额
    public freeze: string = ''; //冻结资金
    public trading: string = ''; //交易冻结
    public payIning: boolean = false; //存入冻结
    public payOuting: boolean = false; //提现冻结
    public status: boolean = false; //锁定状态:0-可用，1-锁定
}