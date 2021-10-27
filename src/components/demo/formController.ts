import { Component, Vue, Watch, Prop } from "vue-property-decorator";

@Component({
  components: {},
})
export default class formController extends Vue {

  formData: any = {};
  items: any = [];

  public mounted() {

  }

  @Watch("items")
  public async render_form(oldVal: any, newVal: any) {
    await this.$nextTick(() => {
      layui.use(["form", "layedit", "laydate", 'jquery'], () => {
        let form = layui.form,
          layer = layui.layer,
          layedit = layui.layedit,
          laydate = layui.laydate;
        let $ = layui.jquery;
        console.log(layui);
        form.on('select', (data: any) => {
          this.formData[data.elem.name] = data.value;
        });
        form.on('checkbox', (data: any) => {
          let m = new Map<number, number>();
          this.formData[data.elem.name] = data.value;
        });
        //单选框
        form.on('switch', (data: any) => {
          let c = data.elem.checked;
          if (c) {
            this.formData[data.elem.name] = 1;
          } else {
            this.formData[data.elem.name] = 0;
          }
        });

        form.on('radio', (data: any) => {
          this.formData[data.elem.name] = data.value;
        });
        form.render();
        //日期选择框
        let bb = document.getElementsByClassName("box-date");

        let ee = document.getElementsByClassName("box-editor");
        let editor_index = 1;
        // for (const e of ee) {
        //   e.id = "box-editor" + editor_index;
        //   let index = layedit.build(e.id);
        //   // form.verify({
        //   //   content: function (value: any) {
        //   //     return layedit.getContent(index);
        //   //   }
        //   // });
        //   console.log(index);
        //   editor_index++;
        // }
        $("#LAY_layedit_1").contents().find("body").append("123123");
        $("#LAY_layedit_1").contents().find('body').change(function () {
          console.log("12312312");
        });

        // $("iframe[textarea=editor]").contents().find("body").keyup(function (a: any, b: any, c: any) {
        //   console.log(a, b, c);
        // });
        // console.log($("iframe[textarea=editor]").contents());

        //加载自定义模板
        let tt = $(".box-template");
        this.items[9].template({component:this,dataField:this.items[9].dataField},tt);
      });


    });
  }

  @Watch("formData")
  public layeditUpdate() {
    console.log("formData");
  }

  /**
   * 初始化表单
   * @param data 
   */

  public async option(
    data: {
      formData: object,
      items: []
    }
  ) {
    this.formData = data.formData;
    this.items = data.items;
  }

  /**
   * 获取控件实例
   * @param dataField 
   */
  public getEditor(dataField?: string) {

  }

  public editChangeHandler() {
    console.log("1233123");
  }

  public submitHandler() {
    console.log(13123);
    layui.use(["form", "layedit", "laydate"], () => {
      let layedit = layui.layedit;
      layedit.sync(1);
    });
  }
}