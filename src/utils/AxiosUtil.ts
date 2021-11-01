import axios, { AxiosResponse } from "axios";
import { BaseResult, BaseModel, BaseArray, BasePager } from '@/models/BaseModel';
import Qs from "qs";
import { GlobalUtil } from "@/common/GlobalUtil";
import { BaseApi } from '@/pages/admin/apis/BaseApi';

export class AxiosUtil {
  /**
   * http get
   * @param url
   */
  public static async get<T>(url: string, params: any) {
    url = GlobalUtil.Url + url;
    // params = {params};
    try {
        let backData = await axios.get(url, params);
        let backData1 = backData.data as BaseModel<T>;
        return backData1;
    } catch (e) {
        // const errorData = new BaseModel();
        // errorData.code = HttpClient.HTTP_ERROR_NEW_CODE;
        // errorData.msg = "网络错误!";

        // return errorData;
    }
  }

  /**
   * http post
   * @param url
   * @param data
   */
  public static async post<T>(url: string, params: any) {
    url = GlobalUtil.Url + url;
    // params = {params};
    try {
        let backData = await axios.post(url, params);
        let backData1 = backData.data as BaseModel<T>;
        return backData1;
    } catch (e) {
        // const errorData = new BaseModel();
        // errorData.code = HttpClient.HTTP_ERROR_NEW_CODE;
        // errorData.msg = "网络错误!";
        // return errorData;
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
