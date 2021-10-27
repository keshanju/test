/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-04 09:08:49
 * @LastEditors: your name
 */
/**
 *模块管理
 *
 * @export
 * @interface ModuleModel
 */
export interface ModuleModel {
    token?: string;
    id?: number;
    action?: string;
    action_name?: string;
    action_code?: string;
    action_path?: string;
    action_icon?: string;
    parent_id?: number;
    action_type?: number;
    is_hidden?: number;
    create_time?: string;
    update_time?: string;
    del_time?: string;
    is_del?: number;
    readme?: string;
}