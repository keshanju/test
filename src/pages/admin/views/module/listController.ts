/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 08:51:35
 * @LastEditTime: 2019-09-20 15:21:10
 * @LastEditors: Please set LastEditors
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BoxExpress from "@/box.all";
import {
    ProductApi,
    ProductAddressApi,
    ProductBrandApi,
    ProductClassApi,
    ProductCommentApi,
    ProductOrderApi,
    ProductPaymentApi,
    ProductReportApi,
    ProductShipmentApi,
    ProductTopicClassApi
} from "../../apis/ProductApi";
import { ProductClassModel } from "@/models/ProductModel";
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';
import { ModuleApi } from '../../apis/ModuleApi';
import { ModuleModel } from '@/models/ModuleModel';
import { ClassUtil } from '../../utils/ClassUtil';
import { from } from 'linq';
import BaseVue from '../../commons/BaseAdminVue';
import elementIcons from '../../commons/ElementIcon';
import { BaseResult } from '@/models/BaseModel';

@Component({
    components: {
        my_nav
    }
})
export default class List extends BaseVue {
    private formSearch: any = {};
    private formFilter: any = {};
    //列表
    private options: any = {
        dataSource: [],
        page: {
            pageSize: 20,
            totalCount: 0,
            pageIndex: 1
        }
    };

    //弹窗
    private dialog: any = {
        width: "800px",
        show: false,
        title: "添加模块"
    };

    private icons: any = {
        show: false,
        title: "选择图标(双击进行选择)",
        elementIcons: elementIcons
    }

    //表单
    private form: ModuleModel = {
        id: 0,
        parent_id: 0,
        action_path: "#",
        action_type: 0,
        action_icon: "el-icon-menu",
        is_hidden: 0
    };

    private form_reset: ModuleModel = {

    }

    private class_list = [];
    private group_list = [];
    private module_api = new ModuleApi();
    private loading: boolean = false;
    private form_rules = {
        action_name: [{
            required: true, message: "模块名称不能为空!", trigger: "blur"
        }],
        parent_id: [{
            required: true, message: "父模块不能为空!", trigger: "blur"
        }],
        action_type: [{
            required: true, message: "分组不能为空!", trigger: "blur"
        }],
        action_path: [{
            required: true, message: "地址不能为空!", trigger: "blur"
        }],
        action_icon: [{
            required: true, message: "图标不能为空!", trigger: "blur"
        }]
    }

    async created() {
        this.title = "系统模块";
        this.module_api = new ModuleApi();
        let d = await this.module_api.getList();
        let data = d.data;
        let data_parent_module = from(data).where(p => p.parent_id == 0).toArray();
        data_parent_module = [{ id: 0, action_name: "作为一级菜单" }, ...data_parent_module]
        this.class_list = data_parent_module;
        this.group_list = [{ id: 0, name: "内容管理" }, { id: 1, name: "模板管理" }, { id: 2, name: "用户中心" }, { id: 3, name: "系统设置" }];
    }

    async mounted() {
        await this.getListPager();
    }

    async sortChange() { }
    async currentChange() { }
    async getDataSelected() { }

    //#region 搜索表单
    /**
     * 表单搜索
     */
    private onSearchForm(form: any) { }
    //#endregion

    //#region 搜索过滤

    //#endregion

    //#region  工具条

    //#endregion

    //#region 数据表格开始
    /**
     * 分页大小改变
     */
    async onPageSizeChange(pageSize: number) {
        this.options.page.pageSize = pageSize;
        this.getListPager();
    }

    /**
     * 分页索引改变
     */
    async onPageCurrentChange(pageIndex: number) {
        this.options.page.pageIndex = pageIndex;
        this.getListPager();
    }

    /**
     * 数据分页
     */
    async getListPager() {
        this.loading = true;
        let d = await this.module_api.getListPager(
            "",
            this.options.page.pageSize,
            this.options.page.pageSize * (this.options.page.pageIndex - 1)
        );
        this.options.dataSource = d.data.list;
        this.options.page.totalCount = Number(d.data.total);
        this.loading = false;
    }

    /**
     * 数据编辑
     */
    async onRowEditHandler(row: ProductClassModel) {
        this.dialog.show = true;
        this.form = row;
        this.dialog.title = "编辑模块";
        this.getInstanceByKey<any>("form").resetFields();
    }

    /**
     * 数据删除
     */
    async onRowDeleteHandler(row: ProductClassModel) {
        this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(async () => {
            let d = await this.module_api.setDelete(row.classid);
            if (d.code == 0) {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            } else {
                this.$message({
                    type: 'error',
                    message: '处理失败!' + d.code + "::" + d.msg
                });
            }
        }).catch(() => {
            this.$message({
                type: 'info',
                message: '已取消删除'
            });
        });
    }

    //#endregion

    //#region 表单
    /**
     * 添加表单
     */
    async onAddHandler(sender: any) {
        this.dialog.show = true;
        // this.form = this.form_reset;
        this.getInstanceByKey<any>("form").resetFields();
    }
    /**
     * 表单提交
     */
    async onSubmitHandler(sender: any) {
        this.validateForm("form",
            async () => {
                let d: BaseResult = null;
                if (this.form.id == 0) {
                    d = await new ModuleApi().setAdd(this.form);
                } else {
                    d = await new ModuleApi().setUpdate(this.form.id, this.form);
                }
                return d;
            },
            (flag: boolean) => {
                if (flag) {
                    this.dialog.show = false;
                }
            });
    }
    //#endregion

    /**
     * 渲染标题
     * @param row 
     */
    public renderTitle(row: any) {
        return ClassUtil.GetTag(row.action_name, row.action_code.length);
    }

    /**
     * 移动类型
     * @param row 
     * @param move_type 
     */
    public movePostion(row: any, move_type: Number) {

    }

    private elementIconDialog(text: string) {
        this.icons.show = true;
    }

    //选择图标
    private elementIconSelect(text: string) {
        this.icons.show = false;
        this.form.action_icon = "el-icon-" + text;
    }
}