<template>
  <div>
    <Nav></Nav>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-button @click="handleOpen">启动</el-button>
    <el-button @click="handleClose">关闭</el-button>
  </div>
</template>
<script src="./index.ts">
</script>
<style lang="less" scoped>

</style>