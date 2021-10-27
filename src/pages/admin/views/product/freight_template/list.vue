<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 17:07:05
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <my_nav :title="title"></my_nav> -->
    <div class="box-search">
      <el-form v-model="formSearch" :inline="true" class="demo-form-inline" size="small">
        <el-form-item label="类型：">
          <el-select placeholder="请选择搜索类型" v-model="formSearch.type">
            <el-option label="名称" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="搜索关键词：">
          <el-input placeholder="请输入搜索关键词" v-model="formSearch.keywords"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSearchForm(formSearch)">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="box-single-search">
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
    </div>-->
    <div class="box-toolbar">
      <el-button-group>
        <el-button class="filter-item" type="primary" size="small">批量删除</el-button>
      </el-button-group>
      <el-button-group style="float:right;">
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-plus"
          @click="onAddHandler"
        >添加运费模板</el-button>
      </el-button-group>
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
        v-loading="loading"
      >
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="id" label="编号" width="60"></el-table-column>
        <el-table-column prop="name" label="名称" width="80"></el-table-column>
        <el-table-column prop="pay_type" label="配送范围"></el-table-column>
        <el-table-column prop="status_type" label="首件(个)" width="100"></el-table-column>
        <el-table-column prop="status_type" label="首件价格(元)" width="100"></el-table-column>
        <el-table-column prop="status_type" label="续件(个)" width="100"></el-table-column>
        <el-table-column prop="status_type" label="续件价格(元)" width="100"></el-table-column>
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
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="名称:">
            <el-input type="text" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="接口类型:">
            <el-select v-model="form.interface_id" placeholder="请选择接口类型"></el-select>
          </el-form-item>

          <el-form-item label="支付类型:">
            <el-select v-model="form.pay_type" placeholder="请选择支付类型"></el-select>
          </el-form-item>

          <el-form-item label="私有key:">
            <el-input type="text" v-model="form.private_key"></el-input>
          </el-form-item>

          <el-form-item label="支持货币:">
            <el-select v-model="form.support_coins" placeholder="请选择支持货币"></el-select>
          </el-form-item>

          <el-form-item label="状态:">
            <el-select v-model="form.status_type" placeholder="请选择状态"></el-select>
          </el-form-item>

          <el-form-item label="网址:">
            <el-input type="textarea" v-model="form.url"></el-input>
          </el-form-item>
          <el-form-item label="图片:">
            <el-input type="textarea" v-model="form.photo"></el-input>
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
<script lang="ts" src="./listController.ts">

</script>