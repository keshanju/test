import { OurPicListModel } from '@/models/ProductModel';

/***
 * 全局配置文件
 */
export class GlobalUtil {
  private static _url = "/api_web";

  /**
   * Api地址
   */
  public static get Url(): string {
    if (SITE_DEBUG) {
      if (process.env.NODE_ENV !== "production") {
        return this._url;
      }
    }
    return SITE_API_URL;
  }

  /**
   * 多图列表分解
   */
  public static MorePicToSinglePicList(morepic: string) {
    let list = morepic.split("||");

    let ourPicList: OurPicListModel[] = [];

    list.forEach(element => {
      let a = element.split(",");
      let ourPic = new OurPicListModel();
      ourPic.name = a[0];
      ourPic.url = a[1];
      ourPic.default = Number(a[2]) || 0;
      ourPicList.push(ourPic);
    });
    console.log(ourPicList)
    return ourPicList;
  }
}
