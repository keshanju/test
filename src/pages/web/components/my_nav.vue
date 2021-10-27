<template>
  <div class="box-breadcrumb">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item ><a @click="onBackHomeHandler">首页</a></el-breadcrumb-item>
      <el-breadcrumb-item>{{options.title}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{options.op}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>
<script lang="ts" src="./my_navController.ts">
</script>
