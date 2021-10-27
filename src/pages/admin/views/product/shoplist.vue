<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-04 09:08:49
 * @LastEditors: your name
 -->
<template>
    <div>
    <!-- <my_nav :title="title"></my_nav> -->
    <div class="box-search">
      <el-form v-model="formSearch" :inline="true" class="demo-form-inline" size="small">
        <el-form-item label="类型：">
          <el-select placeholder="请选择搜索类型" v-model="formSearch.type">
            <el-option label="店铺名称" value="1"></el-option>
            <el-option label="手机号" value="2"></el-option>
            <el-option label="联系人" value="3"></el-option>
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
    </div>-->
    <div class="box-toolbar">
      <el-button-group>
        <el-button class="filter-item" type="primary" size="small">批量删除</el-button>
        <el-button class="filter-item" type="primary" size="small">批量审核</el-button>
      </el-button-group>
      <el-button-group style="float:right;">
        <el-button class="filter-item" type="primary" icon="el-icon-plus" @click="onAddHandler">添加店铺</el-button>
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
        <el-table-column prop="name" label="店铺标题"></el-table-column>
        <el-table-column prop="name" label="营业时间"></el-table-column>
        <el-table-column prop="name" label="联系人"></el-table-column>
        <el-table-column prop="name" label="联系电话"></el-table-column>
        <el-table-column prop="name" label="门店地址"></el-table-column>
        <el-table-column prop="name" label="门店状态"></el-table-column>
        <el-table-column prop="name" label="创建时间"></el-table-column>
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
          <el-form-item label="所属分类:">
            <el-select v-model="form.class_id" placeholder="请选择分类">
              <el-option
                v-for="item in class_list"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="名称:">
            <el-input type="text" v-model="form.name"></el-input>
          </el-form-item>

          <el-form-item label="网址:">
            <el-input type="text" v-model.number="form.url"></el-input>
          </el-form-item>

          <el-form-item label="图片:">
            <el-input type="text" v-model.number="form.photo"></el-input>
          </el-form-item>

          <el-form-item label="说明:">
            <el-input type="textarea" v-model.number="form.readme"></el-input>
          </el-form-item>

          <el-form-item label="是否推荐:">
            <el-checkbox
              :checked="form.is_recommond==1?true:false"
              @change="form.is_recommond=form.is_recommond==1?0:1"
            >是</el-checkbox>
          </el-form-item>
          <el-form-item label="是否显示:">
            <el-checkbox
              :checked="form.is_show==1?true:false"
              @change="form.is_show=form.is_show==1?0:1"
            >是</el-checkbox>
          </el-form-item>
          <el-form-item label="代码:">
            <el-input type="text" v-model="form.code"></el-input>
          </el-form-item>
          <el-form-item label="首字母:">
            <el-input type="text" v-model="form.char_index"></el-input>
          </el-form-item>
          <el-form-item label="电话:">
            <el-input type="text" v-model="form.mobile"></el-input>
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
<script lang="ts" src="./shoplistController.ts">

</script>
