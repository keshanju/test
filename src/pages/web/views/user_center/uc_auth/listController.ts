import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import areaCode from "../../../assets/js/area_code";
import LocalStorageUtil from "@/utils/LocalStorageUtil";

@Component({
  components: {},
})
export default class List extends BaseVue {
  public token: string = ''
  public header: object = {}
  public showConfirmSteps: boolean = false;
  public isNextStep: boolean = false;
  public stepNum: number = 1;
  public areaOptions: Array<object> = areaCode;

  public authForm = {
    citizenship: "",
    idType: "",
    idNumber: "",
    name: "",
    cardFront: "",
    cardReverse: "",
    holdCard: "",
  };

  async mounted() {
    this.token = LocalStorageUtil.getLoginInfo().token
    this.header = {
      Authorization: this.token
    }
  }

  public authRules = {
    citizenship: [{ required: true, message: "请选择国籍", trigger: "change" }],
    idType: [{ required: true, message: "请选择证件类型", trigger: "change" }],
    idNumber: [
      { required: true, message: "请选择身份证号码", trigger: "blur" },
    ],
    name: [{ required: true, message: "请输入姓名", trigger: "blur" }],
    cardFront: [
      { required: true, message: "请上传身份证正面", trigger: "change" },
    ],
    cardReverse: [
      { required: true, message: "请上传身份证反面", trigger: "change" },
    ],
    holdCard: [
      { required: true, message: "请上传手持身份证", trigger: "change" },
    ],
  };

  public goNextStep() {
    const fieldsArr = ["citizenship", "idType", "idNumber", "name"];
    Promise.all(
      fieldsArr.map((item) => {
        return new Promise((resolve, reject) => {
          (this.$refs["authForm"] as any).validateField(item, (result) => {
            resolve(result);
          });
        });
      })
    ).then((result) => {
      // result返回各个字段的验证信息，如果为空字符串则认为验证通过
      let msg = result.find((res) => {
        return res != "";
      });
      if (!msg) {
        this.$message.success("校验成功");
        this.stepNum = 2;
      }
    });
  }

  public confirmSubmit() {
    const fieldsArr = ["cardFront", "cardReverse", "namholdCarde"];
    Promise.all(
      fieldsArr.map((item) => {
        return new Promise((resolve, reject) => {
          (this.$refs["authForm"] as any).validateField(item, (result) => {
            resolve(result);
          });
        });
      })
    ).then((result) => {
      // result返回各个字段的验证信息，如果为空字符串则认为验证通过
      let msg = result.find((res) => {
        return res != "";
      });
      if (!msg) {
        this.$message.success("校验成功");
        this.stepNum = 3;
      }
    });
  }

  public goVerify() {
    this.showConfirmSteps = true;
  }
}
