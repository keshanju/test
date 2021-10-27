<template>
  <div>
    <div class="img-list">
      <div class="img-content" v-for="(item,key) in imagelist" :key="key">
        <img :src="item.url">
        <div class="name">
          <div>{{ item.name }}</div>
          <el-button type="text" @click="handleFileName(item,key)">修改名字</el-button>
        </div>
        <!-- 删除icon -->
        <div class="del">
          <i @click="handleFileRemove(item,key)" class="el-icon-delete2"></i>
        </div>
        <!-- 放大icon -->
        <div class="layer" @click="handleFileEnlarge(item.url)">
          <i class="el-icon-view"></i>
        </div>
      </div>
      <div class="img-upload">
        <el-upload
          class="uploader"
          accept="image/*"
          ref="upload"
          list-type="picture-card"
          :show-file-list="false"
          :action="params.action"
          :data="params.data"
          :on-change="uploadOnChange"
          :on-success="uploadOnSuccess"
          :on-error="uploadOnError"
          :on-progress="uploadOnProgress"
        >
          <el-button type="primary">点击上传</el-button>
        </el-upload>
      </div>
      <el-dialog
        title
        :visible.sync="isEnlargeImage"
        size="large"
        :modal-append-to-body="false"
        top="8%"
        width="60%"
      >
        <img @click="isEnlargeImage = false" style="width:100%;" :src="enlargeImage">
      </el-dialog>
    </div>
  </div>
</template>
<script lang="ts" src="./my_photoController.ts">
</script>
<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.img-list {
  overflow: hidden;
  width: 100%;
}
.img-list .img-content {
  float: left;
  position: relative;
  display: inline-block;
  width: 200px;
  height: 270px;
  padding: 5px;
  margin: 5px 20px 20px 0;
  border: 1px solid #d1dbe5;
  border-radius: 4px;
  transition: all 0.3s;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
}
.img-list .img-content img {
  display: block;
  width: 100%;
  height: 190px;
  margin: 0 auto;
  border-radius: 4px;
}
.img-list .img-content .name {
  margin-top: 10px;
}
.img-list .img-content .name > div {
  width: 90%;
  text-overflow: ellipsis;
  overflow: hidden;
  height: 25px;
  line-height: 25px;
}
.img-list .img-content:hover .del,
.img-list .img-content:hover .layer {
  opacity: 1;
}
.img-list .img-content .del,
.img-list .img-content .layer {
  opacity: 0;
  transition: all 0.3s;
}
.img-list .img-content .del {
  position: absolute;
  bottom: 10px;
  right: 10px;
  height: 200px;
  color: #8492a6;
  cursor: pointer;
  font-size: 1.1em;
}
.img-list .img-content .layer {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 200px;
  color: #fff;
  text-align: center;
  z-index: 5;
  background-color: rgba(0, 0, 0, 0.4);
}
.img-list .img-content .layer i {
  font-size: 1.6em;
  margin-top: 80px;
}
</style>

