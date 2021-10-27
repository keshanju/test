<template>
  <div>
    <div class="form">
      <el-form ref="form" :model="form" label-width="120px">
        <el-form-item label="所属类别:">
          <el-select v-model="form.classid" placeholder="所属类别">
            <el-option label="提现" value="0"></el-option>
            <el-option label="提现手续费" value="1"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item prop="title" label="标题:">
          <el-input type="text" v-model="form.title"></el-input>
        </el-form-item>

        <el-form-item prop="link" label="链接:">
          <el-input type="text" v-model.number="form.link"></el-input>
        </el-form-item>

        <el-form-item prop="pic" label="图片:">
          <el-input type="text" v-model.number="form.pic"></el-input>
        </el-form-item>

        <el-form-item label="说明:">
          <el-input type="textarea" v-model="form.readme" :rows="5"></el-input>
        </el-form-item>

        <el-form-item prop="status_id" label="状态:">
          <el-select v-model="form.status_id" placeholder="选择状态">
            <el-option label="提现" value="0"></el-option>
            <el-option label="提现手续费" value="1"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item class="text_right">
          <el-button type="primary" @click="onSubmitHandler('form')">提 交</el-button>
          <el-button @click="dialog.show = false">取 消</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script lang="ts" src="./my_formController.ts"></script>
