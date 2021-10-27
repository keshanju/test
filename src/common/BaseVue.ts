import { Component, Vue, Prop } from "vue-property-decorator";

export default class BaseVue extends Vue {
    protected boxDataGridKey="boxDataGridKey";
    protected boxFormKey="boxFormKey";
    
    /**
     * 根据Key获取实例
     * @param key 
     */
    protected getInstanceByKey<T>(key:string){
        let instance = (this.$refs[key] as any) as T;
        return instance;
    }
}