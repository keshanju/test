<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-20 10:15:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <my_nav :title="title"></my_nav> -->
   <div class="box-search">
      <el-form v-model="formSearch" :inline="true" class="demo-form-inline" size="small">
        <el-form-item label="搜索关键词：">
          <el-input placeholder="请输入搜索关键词" v-model="formSearch.keywords"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="onSearchForm(formSearch)">查询</el-button>
        </el-form-item>
        <!-- <el-form-item>
           <el-button class="filter-item" type="primary" size="small">批量删除</el-button>
        </el-form-item> -->
        <el-form-item style="float:right;">
            <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-plus"
          @click="onAddHandler"
        >添加专题分类</el-button>
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
        <el-table-column prop="classid" label="编号" width="60"></el-table-column>
        <el-table-column prop="classname" label="名称">
          <template slot-scope="scope">
            {{renderTitle(scope.row)}}
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
        <el-form :model="form" label-width="120px" ref="productClassForm" :rules="form_rules">
          <el-form-item label="所属父分类:" prop="parentid">
            <el-select v-model="form.parentid" placeholder="请选择父分类" ref="classtype">
              <el-option
                v-for="item in class_list"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="名称:" prop="classname">
            <el-input type="text" v-model="form.classname"></el-input>
          </el-form-item>
          <!-- <el-form-item label="图片:">
            <el-input type="text" v-model.number="form.classphoto"></el-input>
          </el-form-item>-->
          <el-form-item label="图片:" prop="classphoto" ref="uploadPic">
            <el-upload
            class="avatar-uploader"
              :action="uploadUrl"
              :show-file-list="false"
              :on-success="uploadAvatarSuccess"
              :before-upload="beforeAvatarUpload"
              name="file_name"
            >
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="SEO关键词:">
            <el-input type="text" v-model.number="form.classkeyword"></el-input>
          </el-form-item>
          <el-form-item label="SEO描述:">
            <el-input type="textarea" v-model.number="form.classdescription" :rows="2"></el-input>
          </el-form-item>
          <el-form-item label="备注:">
            <el-input type="textarea" v-model="form.readme"></el-input>
          </el-form-item>
          <el-form-item label="扩展字段:">
            <el-input type="textarea" v-model="form.ext_ids"></el-input>
          </el-form-item>
          <el-form-item label="列表模板:">
            <el-input type="text" v-model="form.template_list"></el-input>
          </el-form-item>
          <el-form-item label="详细模板:">
            <el-input type="text" v-model="form.template_view"></el-input>
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
          <el-form-item class="text_right">
            <el-button type="primary" @click="onSubmitHandler('productClassForm')">提 交</el-button>
            <el-button @click="dialog.show = false">取 消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./topicclasslistController.ts">
</script>
<style lang="less">
 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 108px;
    height: 108px;
    line-height: 108px;
    text-align: center;
  }
  .avatar {
    width: 108px;
    height: 108px;
    display: block;
  }
</style>