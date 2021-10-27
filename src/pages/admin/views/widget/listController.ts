/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 09:51:37
 * @LastEditTime: 2019-09-07 11:12:44
 * @LastEditors: Please set LastEditors
 */
import { Vue, Component } from "vue-property-decorator"
import my_nav from '../../components/my_nav.vue';
import BaseVue from '../../commons/BaseAdminVue';

@Component({
    components: {
        my_nav
    }
})
export default class List extends BaseVue {

    private ShowType: number = 0;
    private table: any = {};
    private form: any = {};
    private search: any = {};
    private bat: any = {};

    created() {
        this.title = "体验项目";
        //搜索
        this.search = {
            loading: false,
            items: [

            ],
            onSearchHandler: (form_data: any) => {

            }
        }
        //批量操作
        this.bat = {
            batItems: [

            ],
            operItems: [

            ],
            onBatHandler: () => {

            },
            onOperHandler: () => {

            }
        }

        //表单
        this.form = {
            loading: false,
            formData: {},
            items: [
                {
                    caption: "标题",
                    placeholder: "请输入标题",
                    dataField: "title",
                    editorType: "boxTextBox"
                },
                {
                    caption: "内容",
                    placeholder: "请输入内容",
                    dataField: "content",
                    editorType: "boxTextBox"
                }
            ],
            onSubmitHandler: (form_data: any) => {
                
            }
        };
        //表格
        this.table = {
            loading: false,
            dataSource: [
                {
                    id: 1,
                    title: "sdfsdfds"
                },
                {
                    id: 2,
                    title: "sdfsdfds"
                },
                {
                    id: 3,
                    title: "sdfsdfds"
                }
            ],
            cols: [
                {
                    caption: "编号",
                    dataField: "id",
                    position: "center",
                    width: "60"
                },
                {
                    caption: "标题",
                    dataField: "title",
                    position: "center",
                },
                {
                    caption: "其他",
                    dataField: "id",
                    position: "center",
                    width: "60"
                }
            ],
            sortChange: () => {

            },
            currentChange: () => {

            },
            getDataSelected: () => {

            },
            onRowEditHandler: () => {

            },
            onRowDeleteHandler: () => {

            }
        };
    }

    mounted() {

    }
}