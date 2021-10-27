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
        <el-form-item label="分类：">
          <el-select placeholder="请选择搜索类型" v-model="formSearch.type">
            <el-option label="标题" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="类型：">
          <el-select placeholder="请选择搜索类型" v-model="formSearch.type">
            <el-option label="标题" value="1"></el-option>
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
        <el-button class="filter-item" type="primary">批量删除</el-button>
        <el-button class="filter-item" type="primary">批量移动分类</el-button>
        <el-button class="filter-item" type="primary">批量审核</el-button>
      </el-button-group>
      <el-button-group style="float:right;">
        <el-button class="filter-item" type="primary" icon="el-icon-plus" @click="onAddHandler">添加文章</el-button>
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
        <el-table-column prop="classname" label="分类" width="100"></el-table-column>
        <el-table-column prop="title" label="标题"></el-table-column>
        <el-table-column prop="author" label="编辑者" width="120"></el-table-column>
        <el-table-column prop="hits" label="点击" width="60"></el-table-column>
        <el-table-column prop="is_passed" label="审核" width="60">
          <template slot-scope="scope">
            <span v-if="scope.row.is_passed==1">通过</span> 
            <span v-else style="color:red">审核中</span>
          </template>
        </el-table-column>
        <el-table-column prop="id" label="状态" width="120" align="center">
          <template slot-scope="scope">
            <span v-if="scope.row.is_top==1" style="color:red;"> 顶 </span>
            <span v-if="scope.row.is_recommend==1" style="color:blue;"> 荐 </span>
          </template>
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
          width="230"
          class-name="small-padding fixed-width"
        >
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" @click="onRowEditHandler(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" @click="onRowDeleteHandler(scope.row)">删除</el-button>
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

    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
      :width="dialog.width"
      :modal-append-to-body="false"
    >
      <div class="form">
        <el-form ref="form" :model="form" label-width="120px">
          <el-form-item label="标题：">
            <el-input v-model="form.title"></el-input>
          </el-form-item>

          <el-form-item label="分类：">
            <el-select v-model="form.classid" placeholder="选择分类">
              <el-option
                v-for="item in class_list"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="关键词：">
            <el-input v-model="form.keywords"></el-input>
          </el-form-item>

          <el-form-item label="描述：">
            <el-input type="textarea" v-model="form.description" :rows="3"></el-input>
          </el-form-item>

          <el-form-item label="专题分类：">
            <el-select v-model="form.topic_classids" placeholder="选择专题分类">
              <el-option
                v-for="item in topic_class_list"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="来源：">
            <el-select v-model="form.copyfrom" placeholder="来源">
              <el-option label="站内" :value="1"></el-option>
              <el-option label="站外" :value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="作者：">
            <el-input v-model="form.author"></el-input>
          </el-form-item>

          <el-form-item label="转向链接：">
            <el-col :span="18">
              <el-input v-model="form.link_url"></el-input>
            </el-col>
            <el-col :span="4">
              <el-switch v-model="form.is_url" active-text="是" inactive-text></el-switch>
            </el-col>
          </el-form-item>

          <el-form-item label="简介：">
            <el-input type="textarea" v-model="form.short_content" :rows="3"></el-input>
          </el-form-item>

          <el-form-item label="详细：">
            <Tinymce v-model="form.content" :height="400" />
          </el-form-item>

          <el-form-item label="图片地址：">
            <el-row>
              <el-col :span="18">
                <el-input v-model="form.default_pic"></el-input>
              </el-col>
              <el-col :span="4" style="margin-left:10px;">
                <el-button>上 传 图 片</el-button>
              </el-col>
            </el-row>
          </el-form-item>
          <div @click="cc">qqq</div>
          <el-form-item label="多图：">
            <el-row>
              <el-col :span="24">
                <!-- <el-input type="text" v-model="form.more_photo"></el-input> -->
                <el-upload
                  action="https://jsonplaceholder.typicode.com/posts/"
                  list-type="picture-card"
                  :file-list="fileList"
                  :on-preview="handlePictureCardPreview"
                  :on-remove="handleRemove"
                  :on-change="dd"
                  multiple
                  :auto-upload="false"
                >
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible" :append-to-body="true">
                  <img width="100%" :src="dialogImageUrl" alt />
                </el-dialog>
              </el-col>
            </el-row>
          </el-form-item>

          <el-form-item label="文件附件：">
            <el-input v-model="form.file_name"></el-input>
          </el-form-item>

          <el-form-item label="阅读所需点数：">
            <el-input v-model="form.read_point"></el-input>
          </el-form-item>

          <el-form-item label="访问登录：">
            <el-input v-model="form.user_role_id"></el-input>
          </el-form-item>

          <el-form-item label="点击次数：">
            <el-input v-model="form.hits"></el-input>
          </el-form-item>

          <el-form-item label="添加时间：">
            <el-date-picker
              type="datetime"
              placeholder="选择日期"
              v-model="form.create_time"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>

          <el-form-item label="属性：">
            <el-checkbox
              label="固顶"
              name="type"
              :checked="form.is_top==1?true:false"
              @change="form.is_top=form.is_top==1?0:1"
            ></el-checkbox>
            <el-checkbox
              label="推荐"
              name="type"
              :checked="form.is_recommend==1?true:false"
              @change="form.is_recommend=form.is_recommend==1?0:1"
            ></el-checkbox>
            <el-checkbox
              label="立即发布"
              name="type"
              :checked="form.is_passed==1?true:false"
              @change="form.is_passed=form.is_passed==1?0:1"
            ></el-checkbox>
          </el-form-item>

          <el-form-item>
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
<style lang="less" scoped>
.box-breadcrumb {
  padding: 10px 0 15px 0;
}
.box-toolbar {
  padding: 5px 0 5px 0;
}
.box-pager {
  padding: 20px 0;
}
</style>
