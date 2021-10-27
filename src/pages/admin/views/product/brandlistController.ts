/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-04 09:08:49
 * @LastEditors: your name
 */
import { Component, Vue, Prop } from "vue-property-decorator";
import boxDataGrid from "@/components/boxDataGrid.vue";
import BaseVue from "@/pages/admin/commons/BaseAdminVue";
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
import { ProductBrandModel } from "@/models/ProductModel";
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';

@Component({
  components: {
    my_nav
  }
})
export default class List extends BaseVue {
  public imageUrl = '';//上传的图片地址
  private Modifyid = 0;
  private formSearch: any = {};
  private formFilter: any = {};
  //列表
  private options: any = {
    dataSource: [],
    page: {
      pageSize: 20,
      totalCount: 0,
      pageIndex: 1
    },
    search:'',
    sort:''
  };

  //弹窗
  private dialog: any = {
    width: "800px",
    show: false,
    title: "添加信息"
  };

  //表单
  private form: ProductBrandModel = {
    is_show:1
  };
  public title = "品牌管理";
  private class_list = [];
  private _ProductBrandApi = new ProductBrandApi();
  private loading: boolean = false;
   //验证规则
   private form_rules = {
    name: [{
      required: true, message: "标题不能为空!", trigger: "blur"
    }],
    class_id: [{
      required: true, message: "请选择分类!", trigger: "change"
    }],
    photo: [{
      required: true, message: "请选择图片!", trigger: "change"
    }]

  }
  created() {
    this._ProductBrandApi = new ProductBrandApi();  
  }

  async mounted() {
    this.loading=true;
    await this.getListPager();
    let d = await new ProductClassApi().getList();
    this.class_list = d.data;
    this.loading=false;
  }

  async sortChange() {}
  async currentChange() {}
  async getDataSelected() {}

  //#region 搜索表单
  /**
  * 搜索表单
  * @param formSearch 
  */
  public async onSearchForm(formSearch) {
    this.options.search = '';
    let searchCon = "name__include__" + formSearch.keywords;

    if (formSearch.keywords) {
      this.options.search = searchCon
    }
    this.loading=true;
    await this.getListPager()
    this.loading=false
  }

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
    let d = await this._ProductBrandApi.getListPager(
      "",
      this.options.page.pageSize,
      this.options.page.pageSize * (this.options.page.pageIndex - 1),
      this.options.search,
      this.options.sort
    );
    this.options.dataSource = d.data.list;
    this.options.page.totalCount = Number(d.data.total);
  }

  /**
   * 数据编辑
   */
  async onRowEditHandler(row: ProductBrandModel) {
    this.dialog.show = true;
    this.form = row;
    console.log(row)
    this.imageUrl=this.form.photo;
    this.Modifyid=this.form.id;
  }

  /**
   * 数据删除
   */
  async onRowDeleteHandler(row: ProductBrandModel) {
    
    this.$confirm('此操作将永久删除该项, 是否继续?', '提示', {
      confirmButtonText: '确定',
      cancelButtonText: '取消',
      type: 'warning'
    }).then(async () => {
      let d = await this._ProductBrandApi.setDelete(row.id);
      if (d.code == 0) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.getListPager();
      }else{
        this.$message({
          type: 'error',
          message: '处理失败!'+d.code + "::" + d.msg
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
    this.form={};
    this.imageUrl="";
    if (this.Modifyid) {
      this.resetForm('productBrandForm')
    }
    this.dialog.show = true;
  }
  /**
   * 表单提交
   */
  async onSubmitHandler(formName: any) {
    this.form.photo = this.imageUrl;
    this.$refs[formName]['validate']((valid) => {
      if (valid) {
        this.submitForm()
      } else {
        console.log('error submit!!');
        return false;
      }
    });
    // this.dialog.show = false;
  }

  /**
     * 
     * 提交产品分类表单
     */
  public async submitForm() {
    let data;
    this.loading = true;
    if (this.Modifyid) {
      data = await new ProductBrandApi().setUpdate(Number(this.Modifyid), this.form);
    } else {
      data = await new ProductBrandApi().setAdd(this.form);
    }
    this.loading = false;
    if (data.code == 0) {
      this.dialog.show = false;
      this.$message({
        type: "success",
        message: data.msg,
        duration: 1000
      })
      this.getListPager();
    } else {
      this.loading = false;
      this.$message({
        type: "error",
        message: data.msg,
      })
    }
  }

  //#endregion

   /**
   * 上传图片
   */
  uploadAvatarSuccess(res, file) {
    // this.imageUrl = URL.createObjectURL(file.raw);
    if (res.code == 0) {
      this.imageUrl = SITE_API_URL + res.data.file_path;
      (this.$refs.uploadPic as any).clearValidate();//清除校验提示
    } else {
      this.$message({
        message: res.msg,
        type: "error"
      })
    }
  }
  /**
   * 图片上传限制
   */
  beforeAvatarUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2;

    if (!isLt2M) {
      this.$message.error('上传头像图片大小不能超过 2MB!');
    }
    return isLt2M;
  }
  /**
   * 重置表单
   * @param formName 
   */
  resetForm(formName) {
    //@ts-ignore
    this.$refs[formName].resetFields();

  }
}