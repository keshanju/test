import axios, { AxiosRequestConfig } from "axios";
import { BaseModel } from '@/models/BaseModel';
import Qs from "qs";
import { GlobalUtil } from "@/common/GlobalUtil";
import LocalStorageUtil from "./LocalStorageUtil";
import { BaseApi } from '@/pages/web/apis/BaseApi';

export class AxiosUtil {
  /**
   * http get
   * @param url
   */
  public static async get<T>(url: string, params?: any) {
    url = GlobalUtil.Url + url;
    const LoginInfo = LocalStorageUtil.getLoginInfo()
    const _config:AxiosRequestConfig = {
      params: {...params},
      headers: {
        Authorization: LoginInfo.token?LoginInfo.token:''
      }
    }
    try {
        let backData = await axios.get(url, _config);
        let backData1 = backData.data as BaseModel<T>;
        return backData1;
    } catch (e) {
        const errorData = e as BaseModel<T>;
        errorData.status = 500;
        errorData.message = "网络错误!";
        return errorData;
    }
  }

  /**
   * http post
   * @param url
   * @param data
   */
  public static async post<T>(url: string, params: any) {
    url = GlobalUtil.Url + url;
    const LoginInfo = LocalStorageUtil.getLoginInfo()
    const _config:AxiosRequestConfig = {
      headers: {
        Authorization: LoginInfo.token?LoginInfo.token:''
      }
    }
    try {
        let backData = await axios.post(url, params, _config);
        let backData1 = backData.data as BaseModel<T>;
        return backData1;
    } catch (e) {
        const errorData = e as BaseModel<T>;
        errorData.status = 500;
        errorData.message = "网络错误!";
        return errorData;
    }
  }

  /**
   * http put
   * @param url
   * @param data
   */
  public static async put<T>(url: string, data: any) {
    let d = await axios.put(GlobalUtil.Url + url,data, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "token":new BaseApi().token
      },
      transformRequest: [
        function(data) {
          //在请求之前对data传参进行格式转换
          data = Qs.stringify(data);
          return data;
        }
      ]
    });
    return d.data as T;
  }

  /**
   * http delete
   * @param url
   */
  public static async delete<T>(url: string) {
    let d = await axios.delete(GlobalUtil.Url + url, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        "token":new BaseApi().token
      }
    });
    return d.data as T;
  }
}
