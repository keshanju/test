import { Component, Vue, Prop } from "vue-property-decorator";
import BaseVue from "@/common/BaseVue";
import areaCode from "../../../assets/js/area_code";

@Component({
  components: {
    
  }
})
export default class List extends BaseVue {
  public showConfirmSteps:boolean = false;
  public isNextStep: boolean = false;
  public stepNum: number = 1;
  public areaOptions: Array<object> = areaCode;
  public authForm = {
    citizenship: '',
    idType: '',
    idNumber: '',
    name: '',
    cardFront: '',
    cardReverse: '',
    holdCard: ''
  }

  public authRules = {

  }

  public goNextStep() {
    this.stepNum = 2
    this.isNextStep = true
  }

  public confirmSubmit() {
    this.stepNum = 3
  }
  
  public goVerify() {
    this.showConfirmSteps = true
  }

}