<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-20 15:02:42
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <my_nav :title="title" op="编辑"></my_nav> -->
    <el-form ref="form" :model="form" label-width="160px" v-loading="loading">
      <el-form-item label="模块名称：">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="模块品牌名称：">
        <el-input v-model="form.brand_name"></el-input>
      </el-form-item>
      <el-form-item label="分页大小：">
        <el-input v-model="form.page_size"></el-input>
      </el-form-item>
      <el-form-item label="是否静态化：">
        <el-input v-model="form.is_html"></el-input>
      </el-form-item>
      <el-form-item label="评论分页大小：">
        <el-input v-model="form.page_size_comment"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" src="./configController.ts">
</script>
