/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-20 10:13:25
 * @LastEditors: Please set LastEditors
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
import { ProductClassModel } from "@/models/ProductModel";
import my_nav from '../../components/my_nav.vue';
import { Loading } from 'element-ui';
import { ClassUtil } from '../../utils/ClassUtil';
@Component({
  components: {
    my_nav
  }
})
export default class List extends BaseVue {
  public imageUrl = '';//上传的图片地址
  private Modifyid = 0;
  private selectedDeletArr=[];
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
    search: '',
    sort: ''
  };

  //弹窗
  private dialog: any = {
    width: "800px",
    show: false,
    title: "添加专题分类"
  };

  //表单
  private form: ProductClassModel = {
    parentid: 0,
    is_show: 1,
  };
  public title = "专题分类";
  private class_list = [];//分类数组
  private _ProductTopicClassApi = new ProductTopicClassApi();
  private loading: boolean = false;
  //验证规则
  private form_rules = {
    classname: [{
      required: true, message: "标题不能为空!", trigger: "blur"
    }],
    parentid: [{
      required: true, message: "请选择分类!", trigger: "change"
    }],
    classphoto: [{
      required: true, message: "请选择图片!", trigger: "change"
    }]

  }
  created() {
    this._ProductTopicClassApi = new ProductTopicClassApi();
  }

  async mounted() {
    await this.getListPager();
    let d = await new ProductClassApi().getList();
    this.class_list = [{ id: 0, name: "请选择" }, ...d.data];
    this.loading = false;
  }

  async sortChange() { }
  async currentChange() { }
 

  
  getDataSelected(){

  }

  //#region 搜索表单

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
    this.loading=true;
    let d = await this._ProductTopicClassApi.getListPager(
      "",
      this.options.page.pageSize,
      this.options.page.pageSize * (this.options.page.pageIndex - 1),
      this.options.search,
      this.options.sort
    );
    this.loading=false;

    if (d.code == 0) {
      this.options.dataSource = d.data.list;
      this.options.page.totalCount = Number(d.data.total);
    }
  }

  /**
   * 数据编辑
   */
  async onRowEditHandler(row: ProductClassModel) {
    this.dialog.show = true;
    this.form = row;
    this.imageUrl = this.form.classphoto;
    this.Modifyid = row.classid;
    this.dialog.title = "编辑分类";
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
      let d = await this._ProductTopicClassApi.setDelete(row.classid);
      if (d.code == 0) {
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
        this.getListPager();
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
    this.form = {};
    this.imageUrl="";
    if (this.Modifyid) {
      this.resetForm('productClassForm')
    }
    this.dialog.show = true;
  }
  /**
   * 表单提交
   */
  async onSubmitHandler(formName: any) {
    this.form.classphoto = this.imageUrl;
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
      data = await new ProductTopicClassApi().setUpdate(Number(this.Modifyid), this.form);
    } else {
      data = await new ProductTopicClassApi().setAdd(this.form);
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
* 渲染标题
* @param row 
*/
  public renderTitle(row: any) {
    if (row.classcode) {
      return ClassUtil.GetTag(row.classname, row.classcode.length);
    }
  }


  /**
  * 搜索表单
  * @param formSearch 
  */
  public onSearchForm(formSearch) {
    this.options.search = '';
    let searchCon = "classname__include__" + formSearch.keywords;

    if (formSearch.keywords) {
      this.options.search = searchCon
    }
    this.getListPager()
  }

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
    console.log((this.$refs[formName] as any).resetFields)
    //@ts-ignore
    this.$refs[formName].resetFields();

  }
}