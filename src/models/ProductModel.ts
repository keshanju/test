/**
 *产品
 *
 * @export
 * @interface ProductModel
 */
export interface ProductModel {
  token?: string;
  big_pic?: string;
  brand_id?: number;
  buy_num?: number;
  change_admin_id?: number;
  change_time?: string;
  class_id?: number;
  classname?: string;
  code?: string;
  content?: string;
  create_admin_id?: number;
  create_time?: string;
  del_admin_id?: string;
  del_time?: string;
  description?: string;
  discount_buy?: string;
  discount_sell?: string;
  hits?: number;
  href_from?: string;
  id?: number;
  is_del?: number;
  is_hot?: number;
  is_link?: number;
  is_new?: number;
  is_offer?: number;
  is_onsale?: number;
  is_package?: number;
  is_passed?: number;
  is_recommond?: number;
  is_virtual?: number;
  keywords?: string;
  link_url?: string;
  make_time?: string;
  market_price?: number;
  member_price?: number;
  min_price?: number;
  more_pic?: string;
  name?: string;
  production_date?: string;
  related_ids?: string;
  short_content?: string;
  small_pic?: string;
  stock_count?: number;
  unit?: string;
  user_change_time?: string;
  user_id?: number;
  weight?: string;
}

/**
 * 产品配置
 */
export class ProductConfigModel {
  token?:string;
  id?: number;
  name?: string;
  brand_name?: string;
  page_size?: number;
  is_html?: number;
  page_size_comment?: number;
  create_time?: string;
  update_time?: string;
}
/**
 * 搜索列表需要的参数
 */
export class SearchRequest {
  search: string = "";
  page_size: number = 1;
  page_index: number = 1;
}
/**
 *产品分类
 *
 * @export
 * @interface
 */
export interface ProductClassModel {
  token?:string;
  classid?: number;
  classcode?: string;
  classphoto?: string;
  classkeyword?: string;
  classdescription?: string;
  classname?: string;
  parentid?: number;
  readme?: string;
  ext_ids?: string;
  is_show?: number;
  template_list?: string;
  template_view?: string;
  is_recommond?: number;
  create_time?: string;
  change_time?: string;
  make_time?: string;
  del_time?: string;
  is_del?: number;
}

/**
 *产品评论
 *
 * @export
 * @interface
 */
export interface ProductCommentModel {
  token?:string;
  id?: number;
  user_id?: number;
  name?: string;
  ip?: string;
  content?: string;
  self_id?: number;
  reply_name?: string;
  reply_content?: string;
  status_type?: number;
  grade_count?: number;
  create_time?: string;
  reply_time?: string;
  del_time?: string;
  is_del?: number;
}

/**
 *产品地址
 *
 * @export
 * @interface
 */
export interface ProductAddressModel {
  token?:string;
  id?: number;
  user_id?: number;
  name?: string;
  area_pro?: string;
  area_city?: string;
  area_city2?: string;
  area_info?: string;
  postcode?: string;
  phone?: string;
  mobile?: string;
  is_default?: number;
  create_time?: string;
  change_time?: string;
  del_time?: string;
  is_del?: number;
}

/**
 *产品品牌
 *
 * @export
 * @interface
 */
export interface ProductBrandModel {
  token?:string;
  id?: number;
  class_id?: number;
  name?: string;
  url?: string;
  photo?: string;
  readme?: string;
  is_recommond?: number;
  is_show?: number;
  code?: string;
  char_index?: string;
  mobile?: string;
  create_time?: string;
  change_time?: string;
  del_time?: string;
  is_del?: number;
}

/**
 *产品订单
 *
 * @export
 * @interface
 */
export interface ProductOrderModel {
  token?:string;
  id?: number;
  user_id?: number;
  order_no?: string;
  order_status?: number;
  buyer_name?: string;
  buyer_phone?: string;
  buyer_email?: string;
  buyer_address?: string;
  buyer_postcode?: string;
  receiver_id?: number;
  remark?: string;
  discount?: number;
  ship_price?: string;
  payment_type?: string;
  ship_type?: number;
  score?: number;
  weight?: string;
  quantity?: number;
  is_invoice?: number;
  invoice_head?: string;
  invoice_content?: string;
  total_price?: string;
  ip?: string;
  is_virtual?: number;
  pay_time?: string;
  ship_time?: string;
  ship_admin_id?: string;
  create_time?: string;
  finish_time?: string;
  del_time?: string;
  is_del?: number;
  ship_no?:number;
}

/**
 *产品支付方式
 *
 * @export
 * @interface
 */
export interface ProductPaymentModel {
  token?:string;
  id?: number;
  name?: string;
  interface_id?: number;
  pay_type?: number;
  private_key?: string;
  support_coins?: number;
  status_type?: number;
  url?: string;
  photo?: string;
  create_time?: string;
  change_time?: string;
  del_time?: string;
  is_del?: number;
}

/**
 *产品报表
 *
 * @export
 * @interface
 */
export interface ProductReportModel {
  token?:string;
  id?: number;
  date_line?: string;
  order_num?: number;
  order_complete_num?: number;
  ordere_complete_money?: string;
  source_type?: number;
  create_time?: string;
  pay_type?: number;
}

/**
 *产品发货方式
 *
 * @export
 * @interface
 */
export interface ProductShipmentModel {
  token?:string;
  id?: number;
  name?: string;
  interface_url?: string;
  url?: string;
  photo?: string;
  base_price?: string;
  step_price?: string;
  area_price?: string;
  area_free?: string;
  is_del?: number;
  create_time?: string;
  change_time?: string;
  del_time?: string;
}

/**
 *产品专题分类
 *
 * @export
 * @interface
 */
export interface ProductTopicClassModel {
  token?:string;
  classid?: number;
  classcode?: string;
  classphoto?: string;
  classkeyword?: string;
  classDescription?: string;
  classname?: string;
  parentid?: number;
  readme?: string;
  is_show?: number;
  template_index?: string;
  create_time?: string;
  change_time?: string;
  del_time?: string;
  is_del?: number;
}
export class OurPicListModel {
 name:string;
 url:string;
 default?:number;
}

