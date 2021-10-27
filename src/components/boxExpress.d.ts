export declare namespace BoxExpress.ui {
  /**
   * 表格选项
   */
  export interface dataGridOptions {
    /**
     * 数据列表
     */
    dataSource?: any[];
    /**
     * 工具条
     */
    onToolbarPreparing?: () => void;
    /**
     * 搜索项
     */
    searchItems?: [
      {
        dataField: string,
        label: {
          text: string
        },
        editorType: string,
        editorOptions: {
          placeholder: string
        },
        validationRules: []
      }
    ],
    /**
     * 搜索表单
     */
    onSearchForm?: (o:any) => void;
    /**
     * 工具条
     */
    toolBars?: any[];
    /**
     * 列表
     */
    columns?: Array<dataGridColumn>;
    /**
     * 宽
     */
    width?: number;
    /**
     * 高
     */
    height?: number;
    /**
     * 位置
     */
    position?: string;

    /**
     * 分页
     */
    page?: {
      /**
       * 当前分页索引
       */
      pageIndex?: number;
      /**
       * 当前分页大小
       */
      pageSize?: number;
      /**
       * 总记录数
       */
      totalCount?: number;
    };

    /**
     * 数据加载事件
     */
    onLoadHandler?: (
      load: pageLoadOptions
    ) => { data?: any[]; totalCount?: number };
    /**
     * 单击行
     */
    onRowClick?: (data: any) => void;
    /**
     * 过滤搜索
     */
    onFormFilter?: (data: any) => void;
  }
  /**
   * 表格列
   */
  export interface dataGridColumn {
    /**
     * 是否显示
     */
    visible?: boolean;
    /**
     * 允许分页
     */
    allowFiltering?: boolean;
    /**
     * 允许排序
     */
    allowSorting?: boolean;
    /**
     * 是否固定
     */
    fixed?: boolean;
    /**
     * 固定位置
     */
    fixedPosition?: string;
    /**
     * 显示字段
     */
    dataField?: string;
    /**
     * 文本
     */
    caption?: string;
    /**
     * 宽度
     */
    width?: number;
    /**
     * 自定义模板
     */
    cellTemplate?: () => void;
  }

  /**
   * 分页选项
   */
  interface pageLoadOptions {
    /**
     * 当前页面索引
     */
    pageIndex?: number;
    /**
     * 分页大小
     */
    pageSize?: number;
    /**
     * 页面个数
     */
    pageCount?: number;
    /**
     * 过滤集合
     */
    filter?: Array<any>;
    /**
     * 排序
     */
    sort?: {
      /**
       * 排序类型   desc  asc
       */
      desc?: string;
      /**
       * 排序字段
       */
      selector?: string;
    };
  }


  /**
   * 表单选项
   */
  export interface formOptions {
    /**
     * 表单数据
     */
    formData?: {};
    /**
     * 表单项
     */
    items?: Array<formItem>;
    /**
     * 宽
     */
    width?: number;
    /**
     * 高
     */
    height?: number;
  }
  /**
   * 表单项
   */
  export interface formItem {
    /**
     * 字段
     */
    dataField?: string;
    /**
     * 标签
     */
    label?: {
      /**
       * 文本
       */
      text?: string;
      /**
       * 是否显示
       */
      visible?: boolean;
      /**
       * 位置
       */
      location?: "left" | "right" | "top";
    };
    /**
     * 编辑器类型
     */
    editorType?: string;
    /**
     * 选项
     */
    editorOptions?: any;

    /**
     *模板
     */
    template?: () => void;
  }
}