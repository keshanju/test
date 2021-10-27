<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-20 09:15:14
 * @LastEditTime: 2019-09-20 09:37:59
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div v-loading="loading">
    <!-- <my_nav :title="title"></my_nav> -->
    <div class="form">
      <el-form ref="form" :model="form" label-width="140px" :rules="form_rules" v-loading="loading">
        <el-form-item label="名称:" prop="name">
          <el-input type="text" v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="分类:" prop="class_id">
          <el-select v-model="form.class_id" placeholder="所属分类">
            <el-option
              v-for="item in class_list"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="品牌:" prop="brand_id">
          <el-select v-model="form.brand_id" placeholder="所属品牌">
            <el-option
              v-for="item in brand_list"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="SEO关键词:">
          <el-input type="text" v-model="form.keywords"></el-input>
        </el-form-item>
        <el-form-item label="SEO描述:" >
          <el-input type="textarea" v-model="form.description" :rows="2"></el-input>
        </el-form-item>
        <el-form-item label="产品编码(ISBN):">
          <el-input type="text" v-model="form.code"></el-input>
        </el-form-item>
        <el-form-item label="单位:" prop="unit">
          <el-input type="text" v-model="form.unit"></el-input>
        </el-form-item>
        <el-form-item label="重量:" prop="weight">
          <el-input type="text" v-model="form.weight"></el-input>
        </el-form-item>
         <el-form-item label="市场价(元):" prop="market_price">
            <el-input type="text" v-model="form.market_price"></el-input>
        </el-form-item>
         <el-form-item label="会员价(元):" prop="member_price">
           <el-row>
            <el-col :span="5">
            <el-input type="text" v-model="form.member_price"></el-input>
          </el-col> 
          </el-row>
        </el-form-item>
        <el-form-item label="最小价(元):" >
          <el-row>
            <el-col :span="5">
            <el-input type="text" v-model="form.min_price"></el-input>
          </el-col> 
          </el-row>
         
        </el-form-item>
        <el-form-item label="主图:" >
          <el-input type="text" v-model="form.big_pic"></el-input>
        </el-form-item>
        <el-form-item :label="'多图:(还可传'+Number(5-fileList.length)+'张）:'" prop="more_pic" ref="uploadPic">
          <el-upload
            :action="uploadUrl"
            list-type="picture-card"
            :file-list="fileList"
            :before-upload="beforeupload"
            :on-success="uploadSuccess"
            :on-error="uploadFail"
            :limit=5
            name="file_name"
          >
          <div slot="file" slot-scope="{file}">
            <img
              class="el-upload-list__item-thumbnail"
              :src="file.url" alt=""
            >
            <span class="el-upload-list__item-actions">
                <div style="margin-top: 30px;display: block;">
                 <span
                class="el-upload-list__item-preview"
                @click="uploadCardPreview(file)"
              >
                <i class="el-icon-zoom-in"></i>
              </span>
              <span
                class="el-upload-list__item-delete"
                @click="pictureRemove(file)"
              >
                <i class="el-icon-delete"></i>
              </span>  
                </div>
              <span
                class="el-upload-list__item-delete"
                @click="uploadSetDefault(file)"
              >
                <span style="border:1px solid #fff;font-size:14px;padding:0 5px;">设为默认</span>
              </span>
            </span>
          </div>
            <i slot="default" class="el-icon-plus"></i>
          </el-upload>

         <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="dialogImageUrl" alt="">
        </el-dialog>
        </el-form-item>
      <el-form-item label="库存:" prop="stock_count">
          <el-col :span="5">
            <el-input type="text" v-model.number="form.stock_count"></el-input>
          </el-col>
        </el-form-item>
         <el-form-item label="是否地址:" >
          <el-checkbox
            :checked="form.is_link==1?true:false"
            @change="form.is_link=form.is_link==1?0:1"
          >是</el-checkbox>
        </el-form-item>
        <el-form-item label="外部链接:">
          <el-input type="text" v-model="form.link_url"></el-input>
        </el-form-item>
        <el-form-item label="生产日期:">
          <el-date-picker v-model="form.production_date" type="date" placeholder="生产日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="购买数量:">
          <el-col :span="5">
            <el-input type="text" v-model.number="form.buy_num"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="简介:" prop="short_content">
          <el-input type="textarea" v-model="form.short_content"></el-input>
        </el-form-item>
        <el-form-item label="内容:" prop="content">
          <Tinymce v-model="form.content" :height="400" />
        </el-form-item>
        <el-form-item label="点击次数:">
          <el-input type="text" v-model.number="form.hits"></el-input>
        </el-form-item>
        <el-form-item label="属性:">
          <el-checkbox
            :checked="form.is_passed==1?true:false"
            @change="form.is_passed=form.is_passed==1?0:1"
          >是否通过</el-checkbox>
          <el-checkbox
            :checked="form.is_onsale==1?true:false"
            @change="form.is_onsale=form.is_onsale==1?0:1"
          >是否上架</el-checkbox>
          <el-checkbox
            :checked="form.is_recommond==1?true:false"
            @change="form.is_recommond=form.is_recommond==1?0:1"
          >是否推荐</el-checkbox>
          <el-checkbox
            :checked="form.is_hot==1?true:false"
            @change="form.is_hot=form.is_hot==1?0:1"
          >是否热门</el-checkbox>
          <el-checkbox
            :checked="form.is_new==1?true:false"
            @change="form.is_new=form.is_new==1?0:1"
          >是否新品</el-checkbox>
          <el-checkbox
            :checked="form.is_offer==1?true:false"
            @change="form.is_offer=form.is_offer==1?0:1"
          >是否特价</el-checkbox>
          <el-checkbox
            :checked="form.is_package==1?true:false"
            @change="form.is_package=form.is_package==1?0:1"
          >是否打包</el-checkbox>
          <el-checkbox
            :checked="form.is_virtual==1?true:false"
            @change="form.is_virtual=form.is_virtual==1?0:1"
          >是否虚拟产品</el-checkbox>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button type="primary" @click="onSubmitHandler('form')">提 交</el-button>
          <el-button @click="back">取 消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script src="./editController.ts" lang="ts"></script>
<style lang="less" scoped>
.el-upload-list--picture-card .el-upload-list__item-actions::after{
  height:auto;
}
</style>