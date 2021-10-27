<template>
  <div>
    <div class="box-breadcrumb">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>{{title}}</el-breadcrumb-item>
        <el-breadcrumb-item>编辑</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <el-form ref="form" :model="form" label-width="160px" v-loading="loading">
      <el-form-item label="站点名称：">
        <el-input v-model="form.site_title"></el-input>
      </el-form-item>
      <el-form-item label="站点子名称：">
        <el-input v-model="form.sub_title"></el-input>
      </el-form-item>
      <el-form-item label="站点地址：">
        <el-input v-model="form.site_url"></el-input>
      </el-form-item>
      <el-form-item label="站点姓名：">
        <el-input v-model="form.site_username"></el-input>
      </el-form-item>
      <el-form-item label="站点邮箱：">
        <el-input v-model="form.site_email"></el-input>
      </el-form-item>
      <el-form-item label="版权信息：">
        <el-input type="textarea" v-model="form.site_copyright"></el-input>
      </el-form-item>
      <el-form-item label="站点SEO关键词：">
        <el-input v-model="form.site_keywords"></el-input>
      </el-form-item>
      <el-form-item label="站点SEO描述：">
        <el-input type="textarea" v-model="form.site_description"></el-input>
      </el-form-item>
      <el-form-item label="站点状态：">
        <el-switch v-model="form.site_state"></el-switch>
      </el-form-item>
      <el-form-item label="站点关闭说明：">
        <el-input type="textarea" v-model="form.site_close_text"></el-input>
      </el-form-item>
      <el-form-item label="站点显示方式：">
        <el-select v-model="form.site_type" placeholder="站点显示方式">
          <el-option label="PHP" :value="1"></el-option>
          <el-option label="重写" :value="2"></el-option>
          <el-option label="静态" :value="3"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="邮件发送组件：">
        <el-select v-model="form.mail_module_type" placeholder="邮件发送组件">
          <el-option label="PHP" :value="1"></el-option>
          <el-option label="其他" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="SMTP服务器地址：">
        <el-input v-model="form.mail_server"></el-input>
      </el-form-item>
      <el-form-item label="SMTP登录用户名：">
        <el-input v-model="form.mail_username"></el-input>
      </el-form-item>
      <el-form-item label="SMTP登录密码：">
        <el-input v-model="form.mail_password"></el-input>
      </el-form-item>
      <el-form-item label="SMTP域名：">
        <el-input v-model="form.mail_domain"></el-input>
      </el-form-item>
      <el-form-item label="水印类型：">
        <el-select v-model="form.water_type" placeholder="水印类型">
          <el-option label="文字" :value="1"></el-option>
          <el-option label="图片" :value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="水印位置：">
        <el-select v-model="form.water_pos" placeholder="水印位置">
          <el-option label="左上" :value="1"></el-option>
          <el-option label="中上" :value="2"></el-option>
          <el-option label="右上" :value="3"></el-option>
          <el-option label="左中" :value="4"></el-option>
          <el-option label="中中" :value="5"></el-option>
          <el-option label="右中" :value="6"></el-option>
          <el-option label="左下" :value="7"></el-option>
          <el-option label="中下" :value="8"></el-option>
          <el-option label="右下" :value="9"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="水印图片：">
        <el-input v-model="form.water_img"></el-input>
      </el-form-item>
      <el-form-item label="水印文字：">
        <el-input v-model="form.water_text"></el-input>
      </el-form-item>
      <el-form-item label="水印文字字体：">
        <el-input v-model="form.water_text_font"></el-input>
      </el-form-item>
      <el-form-item label="水印文字字体大小：">
        <el-input v-model="form.water_text_size"></el-input>
      </el-form-item>
      <el-form-item label="水印文字字体颜色：">
        <el-input v-model="form.water_text_color"></el-input>
      </el-form-item>

      <el-form-item label="允许上传图片格式：">
        <el-input v-model="form.upload_allow_extend"></el-input>
      </el-form-item>
      <el-form-item label="上传图片最大宽度：">
        <el-input v-model="form.upload_max_width"></el-input>
      </el-form-item>
      <el-form-item label="上传图片最大高度：">
        <el-input v-model="form.upload_max_height"></el-input>
      </el-form-item>
      <el-form-item label="上传图片重名时：">
        <el-radio-group v-model="form.upload_img_type">
          <el-radio :label="0">跳过</el-radio>
          <el-radio :label="1">随机</el-radio>
          <el-radio :label="2">覆盖</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="缩略图开关：">
        <el-switch v-model="form.thum_type"></el-switch>
      </el-form-item>
      <el-form-item label="缩略图宽度：">
        <el-input v-model="form.thum_width"></el-input>
      </el-form-item>
      <el-form-item label="缩略图高度：">
        <el-input v-model="form.thum_height"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存修改</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" src="./editController.ts">

</script>
