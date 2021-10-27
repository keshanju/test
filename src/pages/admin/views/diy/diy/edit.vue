<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 14:06:34
 * @LastEditTime: 2019-09-20 17:29:11
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="120px" v-loading="loading">
        <el-form-item prop="title" label="标题:">
          <el-input type="text" v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item label="所属分类:">
          <el-select v-model="form.classid" placeholder="所属分类">
            <el-option
              v-for="item in class_list"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="template" label="模板文件:">
          <el-input type="text" v-model="form.template"></el-input>
        </el-form-item>

        <el-form-item prop="is_footer" label="是否页脚:">
          <el-switch v-model="form.is_footer"></el-switch>
        </el-form-item>

        <el-form-item prop="keywords" label="页面关键词:">
          <el-input type="keywords" v-model.number="form.keywords"></el-input>
        </el-form-item>

        <el-form-item label="页面描述:">
          <el-input type="textarea" v-model="form.description"></el-input>
        </el-form-item>
        <el-form-item label="内容:">
          <Tinymce v-model="form.content" :height="400" />
        </el-form-item>

        <el-form-item class="text_right">
          <el-button type="primary" @click="onSubmitHandler('form')">提 交</el-button>
          <el-button @click="onReturnHandler">取 消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" src="./editController.ts"></script>