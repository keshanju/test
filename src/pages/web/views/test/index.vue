<template>
  <div>
    <!-- <Nav></Nav> -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="price" label="价格"> </el-table-column>
      <el-table-column prop="side" label="买/卖"> </el-table-column>
      <el-table-column prop="size" label="成交数量"> </el-table-column>
      <el-table-column prop="timestamp" label="成交时间"> </el-table-column>
    </el-table>
    <el-button @click="handleOpen">启动</el-button>
    <el-button @click="handleClose">关闭</el-button>
  </div>
</template>
<script src="./index.ts">
</script>
<style lang="less" scoped>

</style>