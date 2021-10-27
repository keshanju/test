import axios, { AxiosResponse } from "axios";
import Qs from "qs";
import { GlobalUtil } from "@/common/GlobalUtil";
import { BaseApi } from '@/pages/admin/apis/BaseApi';

export class AxiosUtil {
  /**
   * http get
   * @param url
   */
  public static async get<T>(url: string) {
    let d = await axios.get(GlobalUtil.Url + url, {
      // headers: {
      //   "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
      // }
      // headers:{
      //   "Content-Type":"application/json;charset=UTF-8"
      // }
      headers: {
        'content-type': 'application/json',
        "token":new BaseApi().token
      }
    });
    return d.data as T;
  }

  /**
   * http post
   * @param url
   * @param data
   */
  public static async post<T>(url: string, data: any) {
    let d = await axios.post(GlobalUtil.Url + url, data, {
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
