<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-05 08:51:35
 * @LastEditTime: 2019-09-20 15:20:35
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <my_nav :title="title"></my_nav> -->
    <div class="box-toolbar">
      <el-button-group style="float:right;">
        <el-button
          class="filter-item"
          type="primary"
          icon="el-icon-plus"
          @click="onAddHandler"
        >添加模块</el-button>
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
        <!-- <el-table-column type="selection" width="55"></el-table-column> -->
        <el-table-column
          prop="id"
          label="编号"
          width="60"
        ></el-table-column>
        <el-table-column
          prop="action_name"
          label="名称"
          width="200"
        >
          <template slot-scope="scope">{{renderTitle(scope.row)}}</template>
        </el-table-column>
        <el-table-column
          prop="action_icon"
          label="图标"
          width="60"
        >
          <template slot-scope="scope">
            <i :class="scope.row.action_icon" style="font-size:20px;"></i>
          </template>
        </el-table-column>
        <el-table-column
          prop="action_path"
          label="地址"
        ></el-table-column>
        <el-table-column
          prop="action_name"
          label="移动位置"
          width="200"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              type="success"
              size="mini"
              @click="movePostion(scope.row,-1)"
            >上</el-button>
            <el-button
              type="success"
              size="mini"
              @click="movePostion(scope.row,-1)"
            >下</el-button>
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

    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
    >
      <div class="form">
        <el-form
          ref="form"
          :model="form"
          label-width="120px"
          :rules="form_rules"
        >
          <el-form-item
            label="所属父模块:"
            prop="parent_id"
          >
            <el-select
              v-model="form.parent_id"
              placeholder="请选择父模块"
            >
              <el-option
                v-for="item in class_list"
                :key="item.id"
                :label="item.action_name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="名称:"
            prop="action_name"
          >
            <el-input
              type="text"
              v-model="form.action_name"
              placeholder="请输入名称."
            ></el-input>
          </el-form-item>
          <el-form-item
            label="分组:"
            prop="action_type"
          >
            <el-select
              v-model="form.action_type"
              placeholder="所属分组"
            >
              <el-option
                v-for="item in group_list"
                :key="item.id"
                :label="item.name"
                :value="item.id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item
            label="访问地址:"
            prop="action_path"
          >
            <el-input
              type="text"
              v-model="form.action_path"
              placeholder="请输入路由地址."
            ></el-input>
          </el-form-item>
          <!-- <el-form-item
            label="文件地址:"
            prop="action_path"
          >
            <el-input
              type="text"
              v-model="form.action_path"
              placeholder="请输入文件地址."
            ></el-input>
          </el-form-item> -->
          <el-form-item
            label="图标:"
            prop="action_icon"
          >
            <el-col :span="4">
              <i
                :class="form.action_icon"
                class="form-icon-item"
              />
            </el-col>
            <el-col :span="4">
              <el-button @click="elementIconDialog(form.action_icon)">选择</el-button>
            </el-col>
          </el-form-item>
          <el-form-item
            label="说明:"
            prop="readme"
          >
            <el-input
              type="textarea"
              v-model="form.readme"
              :rows="3"
              placeholder="请输入说明."
            ></el-input>
          </el-form-item>
          <el-form-item label="是否隐藏:">
            <el-checkbox
              label="是"
              name="type"
              :checked="form.is_hidden==1?true:false"
              @change="form.is_hidden=form.is_hidden==1?0:1"
            ></el-checkbox>
          </el-form-item>
          <el-form-item class="text_right">
            <el-button
              type="primary"
              @click="onSubmitHandler('form')"
            >提 交</el-button>
            <el-button @click="dialog.show = false">取 消</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-dialog>

    <el-dialog
      :title="icons.title"
      :visible.sync="icons.show"
    >
      <div class="icons-container">
        <div
          v-for="item of icons.elementIcons"
          :key="item"
        >
          <div class="icon-item">
            <i
              :class="'el-icon-' + item"
              @dblclick="elementIconSelect(item)"
            />
            <span @dblclick="elementIconSelect(item)">{{ item }}</span>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script src="./listController.ts" lang="ts" ></script>
<style lang="less">
.form-icon-item {
  font-size: 30px;
  color: #24292e;
}
.icons-container {
  margin: 5px;
  overflow: hidden;
  .icon-item {
    margin: 10px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    color: #24292e;
    cursor: pointer;
  }
  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }
  .disabled {
    pointer-events: none;
  }
}
</style>