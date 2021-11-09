import { AccountAssetsModle } from "@/models/FinanceModel";
import { AxiosUtil } from "../../../utils/AxiosUtil";
import { BaseApi } from "./BaseApi";

export class FinanceApi extends BaseApi {

  // demo
  public async uploadfile(options) {
    let url = "/storage/putfile";
    let d = await AxiosUtil.post<any>(url, options);
    return d;
  }

  // 获取资产总览
  public async getassetaccount(options) {
    let url = "/asset/account";
    let d = await AxiosUtil.get<Array<AccountAssetsModle>>(url, options);
    return d;
  }

  // 获取用户充币地址
  public async getcoinaddress(options) {
    let url = "/asset/coin/address";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

  // 获取币种列表
  public async getassetcoins(options) {
    let url = "/asset/coin/coins";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

  // 法币账户交易记录查询
  public async getassetlegaltenderrecord(options) {
    let url = "/asset/legaltender/record";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

  // 法币账户交易记录查询
  public async getassetfinancialrecord(options) {
    let url = "/asset/financial/record";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

  // 获取充币记录
  public async getassetdeposits(options) {
    let url = "/asset/deposits";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

  // 获取提币记录
  public async getassetwithdraws(options) {
    let url = "/asset/withdraws";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

  // 获取币种协议
  public async getassetdepositsaddresses(options) {
    let url = "/asset/deposits/addresses";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

  // 获取划转记录
  public async getassetchanges(options) {
    let url = "/asset/changes";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }
  
  // 获取全部ticker
  public async getklineticker(options) {
    let url = "/kline/tickerAll";
    let d = await AxiosUtil.get<any>(url, options);
    return d;
  }

}
