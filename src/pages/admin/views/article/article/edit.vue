<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 14:06:34
 * @LastEditTime: 2019-09-20 17:29:32
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="180px">
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

        <el-form-item label="标签：">
          <el-input v-model="form.labels"></el-input>
        </el-form-item>
        <el-form-item label="SEO关键词：">
          <el-input v-model="form.keywords"></el-input>
        </el-form-item>

        <el-form-item label="SEO描述：">
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
          <el-col :span="4">
            <el-input v-model="form.author"></el-input>
          </el-col>
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
          <el-col :span="22">
            <el-input v-model="form.default_pic"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button
              icon="el-icon-upload"
              size="mini"
              type="primary"
              @click="dialogVisible=true"
            >上传图片</el-button>
          </el-col>
        </el-form-item>

        <el-form-item label="多图：(还可传5张）">
          <el-col :span="22">
            <el-input type="text" v-model="form.more_photo"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button
              icon="el-icon-upload"
              size="mini"
              type="primary"
              @click="dialogVisible=true"
            >上传图片</el-button>
          </el-col>
        </el-form-item>

        <el-form-item label="文件附件：">
          <el-col :span="22">
            <el-input type="text" v-model="form.file_name"></el-input>
          </el-col>
          <el-col :span="2">
            <el-button
              icon="el-icon-upload"
              size="mini"
              type="primary"
            >上传附件</el-button>
          </el-col>
        </el-form-item>

        <!-- <el-form-item label="阅读所需点数：">
          <el-col :span="4">
            <el-input v-model="form.read_point"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="访问用户等级：">
          <el-col :span="4">
            <el-input v-model="form.user_role_id"></el-input>
          </el-col>
        </el-form-item>-->

        <el-form-item label="点击次数：">
          <el-col :span="4">
            <el-input v-model="form.hits"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="添加时间：">
          <el-col :span="6">
            <el-date-picker
              type="datetime"
              placeholder="选择日期"
              v-model="form.create_time"
              style="width: 100%;"
            ></el-date-picker>
          </el-col>
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
          <el-button @click="onReturnHandler">取 消</el-button>
        </el-form-item>
      </el-form>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <el-upload
        class="editor-slide-upload"
        action="https://httpbin.org/post"
        list-type="picture-card"
      >
        <el-button size="small" type="primary">
          点击上传
        </el-button>
      </el-upload>
      <el-button @click="dialogVisible = false">
        取 消
      </el-button>
      <el-button type="primary">
        确 定
      </el-button>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./editController.ts"></script>