<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-07 09:51:30
 * @LastEditTime: 2019-09-07 11:09:09
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <my_nav :title="title"></my_nav> -->
    <div class="box-search">
      <el-form :inline="true" class="demo-form-inline" size="small" :model="search">
        <el-form-item label="类型：">
          <el-select placeholder="请选择搜索类型">
            <el-option label="分类1" value="1"></el-option>
            <el-option label="分类2" value="2"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="搜索关键词：">
          <el-input placeholder="请输入搜索关键词"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="el-icon-search">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="box-toolbar">
      <el-button-group>
        <el-button class="filter-item" type="primary" size="small">批量删除</el-button>
      </el-button-group>
      <el-button-group style="float:right">
        <el-button class="filter-item" type="primary" size="small" icon="el-icon-plus">添加用户</el-button>
      </el-button-group>
    </div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="160px">
        <el-form-item
          :prop="item.dataField"
          :label="item.caption+':'"
          v-for="item in form.items"
          :key="item"
        >
          <el-input type="text" :placeholder="item.placeholder"></el-input>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button type="primary" @click="form.onSubmitHandler('form')">提 交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="box-query">
      <el-table
        border
        fit
        highlight-current-row
        style="width: 100%;"
        size="small"
        :height="table.height"
        :data="table.dataSource"
        @sort-change="table.sortChange"
        @current-change="table.currentChange"
        @selection-change="table.getDataSelected"
        v-loading="table.loading"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column
          :prop="row.dataField"
          :label="row.caption"
          :width="row.width"
          v-for="row in table.cols"
          :key="row"
        ></el-table-column>
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
              @click="table.onRowEditHandler(scope.row)"
            >编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="table.onRowDeleteHandler(scope.row)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script lang="ts" src="./listController.ts"></script>