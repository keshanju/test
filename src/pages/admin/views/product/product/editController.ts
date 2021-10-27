/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 09:15:23
 * @LastEditTime: 2019-09-20 16:49:23
 * @LastEditors: Please set LastEditors
 */
import { Component } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import {
    ProductApi,
    ProductBrandApi,
    ProductClassApi
} from "../../../apis/ProductApi";
import { ProductModel } from "@/models/ProductModel";

import my_nav from '../../../components/my_nav.vue';
import Tinymce from '../../../components/Tinymce/index.vue';
import { Loading } from 'element-ui';
import BaseVue from '../../../commons/BaseAdminVue';
import { ElForm } from 'element-ui/types/form';
import { GlobalUtil } from '@/common/GlobalUtil';

@Component({
    components: {
        my_nav,
        boxDataGrid,
        Tinymce
    }
})
export default class List extends BaseVue {
    //表单
    private form: ProductModel = {};
    private class_list: any[] = [];
    private brand_list: any[] = [];
    private loading: boolean = false;
    //验证规则
    private form_rules = {
        name: [{
            required: true, message: "产品标题不能为空!", trigger: "blur"
        }],
        class_id: [{
            required: true, message: "请选择分类!", trigger: "change"
        }],
        brand_id: [{
            required: true, message: "请选择品牌!", trigger: "change"
        }],
        unit: [{
            required: true, message: "单位不能为空!", trigger: "blur"
        }],
        weight: [{
            required: true, message: "重量不能为空!", trigger: "blur"
        }],
        market_price: [{
            required: true, message: "不能为空!", trigger: "blur"
        }],
        member_price: [{
            required: true, message: "不能为空!", trigger: "blur"
        }],
        more_pic: [{
            required: true, message: "请上传图片!", trigger: "change"
        }],
        stock_count: [{
            required: true, message: "库存不能为空!", trigger: "blur"
        }],
        short_content: [{
            required: true, message: "简介不能为空!", trigger: "blur"
        }],
        // content: [{
        //     required: true, message: "内容不能为空!", trigger: "blur"
        // }],

    }
    private fileList = [];//多图列表
    public uploadUrl = SITE_API_URL + "/api/admin/tools/upload"//图片上传接口
    public uploadMorePic = []//多图上传数组
    public dialogImageUrl: string = "";//预览图地址
    public dialogVisible: boolean = false;//预览弹窗

    async created() {
        this.title = "编辑产品";
        this.loading = true;
        const id = this.getParam("id");
        if (id != undefined && id != "") {
            let d = await new ProductApi().getModel(id as any);
            this.form = d.data;
            if (this.form.more_pic) {
                this.fileList = GlobalUtil.MorePicToSinglePicList(this.form.more_pic);
            }
        }
        //分类
        let d = await new ProductClassApi().getList();
        this.class_list = [...d.data];
        //品牌
        let d2 = await new ProductBrandApi().getList();
        this.brand_list = [...d2.data];
        this.loading = false;
    }
    init() {
        console.log("编辑产品")
    }
    /**
     * 提交数据 验证表单数据
     */
    public async onSubmitHandler(formName) {
        this.$refs[formName]['validate']((valid) => {
            if (valid) {
                this.submitForm()
            } else {
                console.log('error submit!!');
                return false;
            }
        });
    }
    /**
     * 
     * 提交产品表单
     */
    public async submitForm() {
        const id = this.getParam("id");
        let data;
        this.loading = true;
        if (id) {
            data = await new ProductApi().setUpdate(Number(id), this.form);
        } else {
            data = await new ProductApi().setAdd(this.form);
        }
        if (data.code == 0) {
            this.$message({
                type: "success",
                message: data.msg,
                duration: 1000,
                onClose: () => {
                    this.loading = false;
                    this.$router.push({ path: "/admin/product/list" });
                }
            })
        } else {
            this.loading = false;
            this.$message({
                type: "error",
                message: data.msg,
            })
        }
    }

    /**
     * 上传图片前限制限制大小2M 内
     * @param file 
     */
    beforeupload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;
        if (!isLt2M) {
            this.$message({
                message: '上传文件大小不能超过 2MB!',
                type: 'warning'
            });
            return false
        }
    }
    /**
     * 图片上传成功
     * @param res 
     * @param file 
     * @param fileList 
     */
    uploadSuccess(res, file, list) {
        console.log(this.fileList);
        let a = { url: SITE_API_URL + res.data.file_path, name: file.name, default: 0 };
        if (this.fileList.length == 0) {
            a = { url: SITE_API_URL + res.data.file_path, name: file.name, default: 1 };
        }
        if (this.form.more_pic) {
            this.form.more_pic = this.form.more_pic + "||" + a.name + "," + a.url + "," + a.default;
        } else {
            this.form.more_pic = a.name + "," + a.url + "," + a.default;
        }
        this.fileList = list;
        (this.$refs.uploadPic as any).clearValidate();//清除校验提示
    }
    /**
     * 图片上传失败
     * @param res 
     * @param file 
     * @param fileList 
     */
    uploadFail(res, file, fileList) {
        console.log(res)
        this.$message({
            message: res.msg,
            type: 'error'
        });
    }
    /**
     * 预览图片
     * @param file 
     */
    uploadCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
    }
    /**
     * 删除图片  
     * @param file 
     * @param fileList 
     * TODO...
     */
    pictureRemove(file) {
        this.fileList = this.fileList.filter((ele) => {
            return file.url != ele.url;
        })
        console.log(this.fileList);
    }
    /**
     * 图片change事件
     * @param file 
     * @param fileList 
     */
    handleChange(file, fileList) {
        // this.fileList = fileList;
    }
    /**
     * 设为默认
     */
    uploadSetDefault(file) {
        console.log(file)
    }
    /**
     * 跳转回列表页
     */
    back() {
        this.$router.push({ path: "/admin/product/list" });
    }
}