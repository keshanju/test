<template>
  <div>
    <div class="box-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>文章管理</el-breadcrumb-item>
        <el-breadcrumb-item>列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="box-search">
      <el-form
        v-model="formSearch"
        :inline="true"
        class="demo-form-inline"
        size="small"
      >
        <el-form-item
          :label="item.label.text+'：'"
          v-for="item in options.searchItems"
          :key="item.id"
        >
          <el-input
            v-if="item.editorType=='boxTextBox'"
            :placeholder="item.editorOptions.placeholder"
            v-model="formSearch[item.dataField]"
          ></el-input>
          <el-select
            v-if="item.editorType=='boxSelectBox'"
            :placeholder="item.editorOptions.placeholder"
            v-model="formSearch[item.dataField]"
          >
            <el-option
              :label="item_child[item.editorOptions.displayExpr]"
              :value="item_child[item.editorOptions.valueExpr]"
              v-for="item_child in item.editorOptions.dataSource"
              :key="item_child.id"
            />
          </el-select>
          <el-date-picker
            v-if="item.editorType=='boxDateTime'"
            v-model="formSearch[item.dataField]"
            type="datetime"
            :placeholder="item.editorOptions.placeholder"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="options.onSearchForm(formSearch)"
          >查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="box-single-search">
      <el-form
        v-model="formFilter"
        :inline="true"
        class="demo-form-inline"
        size="small"
      >
        <el-form-item label="筛选：">
          <el-select
            placeholder="请选择内容"
            v-model="formFilter.filter"
          >
            <el-option
              :label="item.caption"
              :value="item.dataField"
              v-for="item in options.columns"
              :key="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select
            placeholder="请选择内容"
            v-model="formFilter.condition"
          >
            <el-option
              label="包含"
              value="include"
            />
            <el-option
              label="等于"
              value="equal"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input
            placeholder="请输入标题内容"
            v-model="formFilter.keyword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            icon="el-icon-search"
            @click="options.onFormFilter(formFilter)"
          ></el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="box-toolbar">
      <el-button
        class="filter-item"
        type="primary"
        :icon="item.icon"
        size="small"
        v-for="item in options.toolBars"
        :key="item.id"
        @click="item.onClick"
      >{{item.caption}}</el-button>
    </div>
    <div class="box-query">
      <el-table
        border
        fit
        highlight-current-row
        style="width: 100%;"
        size="small"
        :height="options.height"
        :data="options.dataSource"
        @sort-change="sortChange"
        @current-change="currentChange"
        @selection-change="getDataSelected"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          v-if="!item.cellTemplate"
          :label="item.caption"
          :prop="item.dataField"
          sortable="custom"
          :align="item.position"
          :width="item.width"
          v-for="item in options.columns"
          :key="item.id"
        >
        </el-table-column>
        <el-table-column
          v-if="item.cellTemplate"
          label="操作"
          align="center"
          width="230"
          class-name="small-padding fixed-width"
          v-for="item in options.columns"
          :key="item.id"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="box-pager">
      <el-pagination
        background
        :page-sizes="[10,20,50,100, 200, 300, 400]"
        :page-size="options.page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="options.page.totalCount"
        @size-change="pageSizeChange"
        @current-change="pageCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import $ from "jquery";
import axios from "axios";
import { BoxExpress } from "./boxExpress.d";

@Component({})
export default class boxDataGrid extends Vue {
  /**
   * 搜索表单
   */
  private formSearch: any = {};
  /**
   *
   */
  private formFilter: any = {};

  private options: BoxExpress.ui.dataGridOptions = {
    dataSource: [],
    page: {
      pageIndex: 1,
      pageSize: 20
    }
  };

  /**
   * 配置选项
   */
  public async option(
    op: BoxExpress.ui.dataGridOptions | string,
    value: any = null
  ) {
    if (typeof op == "object") {
      this.options= Object.assign(this.options, op);
      //分页
      if (op.onLoadHandler) {
        let data = await this.options.onLoadHandler({
          pageIndex: this.options.page.pageIndex,
          pageSize: this.options.page.pageSize
        });
        this.option({
          dataSource: data.data,
          page: {
            totalCount: Number(data.totalCount)
          }
        });
      }
    } else {
      this.options[op] = value;
    }
  }

  /**
   *排序
   */
  private sortChange(o: any) {
    let data = this.options.onLoadHandler({
      pageIndex: this.options.page.pageIndex,
      pageSize: this.options.page.pageSize,
      sort: {
        desc: o.order,
        selector: o.prop
      }
    });
    this.option("dataSource", data.data);
    this.options.page.totalCount = data.totalCount;
  }

  /**
   *当前行数据
   */
  private currentChange(o: any) {
    if (this.options.onRowClick) {
      this.options.onRowClick(o);
    }
  }

  /**
   * 分页大小改变
   */
  private pageSizeChange(pageSize: number) {
    this.options.page.pageSize = pageSize;
    let data = this.options.onLoadHandler({
      pageIndex: this.options.page.pageIndex,
      pageSize: this.options.page.pageSize
    });
    this.option("dataSource", data.data);
    this.options.page.totalCount = data.totalCount;
  }
  
  /**
   * 分页索引改变
   */
  private async pageCurrentChange(pageIndex: number) {
    this.option({
      page: {
        pageIndex: pageIndex,
      }
    });
    let data = await this.options.onLoadHandler({
      pageIndex: this.options.page.pageIndex,
      pageSize: this.options.page.pageSize
    });
    this.option({
      dataSource: data.data,
      page: {
        totalCount: Number(data.totalCount)
      }
    });
  }

  /**
   * 获取选中的数据
   */
  private getDataSelected(o: any) {
    return o;
  }
}
</script>
<style lang="less" scoped>
.box-breadcrumb {
  padding: 15px 0 15px 0;
}
.box-toolbar {
  padding: 5px 0 5px 0;
}
.box-pager {
  padding: 20px 0;
}
</style>

