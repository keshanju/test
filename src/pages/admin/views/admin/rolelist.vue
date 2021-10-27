<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 17:10:18
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <my_nav :title="title"></my_nav> -->
    <!-- <div class="box-search">
      <el-form v-model="formSearch" :inline="true" class="demo-form-inline" size="small">
        <el-form-item label="类型：">
          <el-select placeholder="请选择搜索类型" v-model="formSearch.type">
            <el-option label="分类1" value="1"></el-option>
            <el-option label="分类2" value="2"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="搜索关键词：">
          <el-input placeholder="请输入搜索关键词" v-model="formSearch.keywords"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSearchForm(formSearch)">查询</el-button>
        </el-form-item>
      </el-form>
    </div> -->
    <!-- <div class="box-single-search">
      <el-form v-model="formFilter" :inline="true" class="demo-form-inline" size="small">
        <el-form-item label="筛选：">
          <el-select placeholder="请选择内容" v-model="formFilter.filter">
            <el-option
              :label="item.caption"
              :value="item.dataField"
              v-for="item in options.columns"
              :key="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label>
          <el-select placeholder="请选择内容" v-model="formFilter.condition">
            <el-option label="包含" value="include"/>
            <el-option label="等于" value="equal"/>
          </el-select>
        </el-form-item>
        <el-form-item label>
          <el-input placeholder="请输入标题内容" v-model="formFilter.keyword"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="options.onFormFilter(formFilter)"></el-button>
        </el-form-item>
      </el-form>
    </div> -->
    <div class="box-toolbar">
      <el-button-group>
        <el-button class="filter-item" type="primary" size="small">批量删除</el-button>
      </el-button-group>
      <el-button-group style="float:right">
        <el-button
          class="filter-item"
          type="primary"
          size="small"
          icon="el-icon-plus"
          @click="onAddHandler"
        >添加管理员角色</el-button>
      </el-button-group>
    </div>
    <div class="box-query">
      <el-table
        ref="grid"
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
        v-loading="loading"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="编号" width="60"></el-table-column>
        <el-table-column prop="name" label="角色名称" width="220"></el-table-column>
        <el-table-column prop="readme" label="说明" ></el-table-column>
        <el-table-column prop="is_system" label="是否系统" width="80">
          <template slot-scope="scope">
            {{scope.row.is_system==1?"是":'否'}}
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="230"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button
              type="primary"
              size="mini"
              icon="el-icon-edit"
              @click="onRowEditHandler(scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="onRowDeleteHandler(scope.row)"
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
        @size-change="onPageSizeChange"
        @current-change="onPageCurrentChange"
      ></el-pagination>
    </div>

    <el-dialog :title="dialog.title" :visible.sync="dialog.show">
      <div class="form">
        <el-form ref="form" :model="form" :rules="rules" label-width="120px">
          <el-form-item prop="name" label="角色名称:">
            <el-input type="text" v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="选择:">
            <el-checkbox v-model="checked" @change="checkedAll">全选/反选</el-checkbox>
          </el-form-item>
          <el-form-item label="权限列表:">
            <el-tree
               ref="tree"
              :props="defaultProps"
              :data="arr_modules"
              show-checkbox
              height=50
              @check-change="handleCheckChange"
              node-key="id"
              default-expand-all
              :default-checked-keys="default_checked_keys"
              style="height:200px; overflow-y: scroll;"
              >
            </el-tree>
          </el-form-item>

          <el-form-item prop="readme" label="角色说明:">
            <el-input type="textarea" v-model="form.readme" :rows="5"></el-input>
          </el-form-item>
          <el-form-item class="text_right">
            <el-button type="primary" @click="onSubmitHandler('form')">提 交</el-button>
            <el-button @click="dialog.show = false">取 消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./rolelistController.ts">

</script>