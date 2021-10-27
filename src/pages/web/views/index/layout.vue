<template>
  <div style="height:100%;">
    <div class="layout-header">
      <div class="layout-header-left">
        <h3>{{SiteName}}</h3>
      </div>

      <div class="layout-header-center">
        <div style="float:left">
          <i class="el-icon-menu" @click="openAndCloseSilder"></i>
        </div>
        <!-- <div style="float:left;width:100px;">
          <el-input placeholder="请输入内容"></el-input>
        </div> -->
        <div style="float:left;">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#23262E"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="onSelectTopHandler"
            :default-active="defaultActive"
          >
            <el-menu-item index="1">内容管理</el-menu-item>
            <el-menu-item index="2">模板管理</el-menu-item>
            <el-menu-item index="3">
              <a>用户中心</a>
            </el-menu-item>
            <el-menu-item index="4">
              <a>系统配置</a>
            </el-menu-item>
            <el-menu-item index="5">
               <a>小程序中心</a>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      
      <div class="layout-header-right">
        <div style="float:right">
          <el-menu
            class="el-menu-demo"
            mode="horizontal"
            background-color="#23262E"
            text-color="#fff"
            active-text-color="#ffd04b"
            @select="onSelectLeftHandler"
          >
            <el-submenu index="2">
              <template slot="title">我的</template>
              <el-menu-item index="2-1">修改密码</el-menu-item>
              <el-menu-item index="2-2">退出</el-menu-item>
            </el-submenu>
          </el-menu>
        </div>
      </div>
    </div>
    <div class="layout-main">
      <div
        class="layout-sidebar-container"
        :class="{'layout-sidebar-mini':isCollapse,'layout-sidebar-max':!isCollapse}"
      >
        <el-menu
          :collapse="isCollapse"
          unique-opened
          background-color="#23262E"
          text-color="#fff"
          @select="onSelectHandler"
          ref="menu"
          :default-openeds="openeds"
        >
          <el-submenu :index="menu.id.toString()" v-for="(menu, index) in items" :key="index">
            <template slot="title">
              <i v-if="!menu.action_icon" class="el-icon-menu"></i>
              <i v-if="menu.action_icon" :class="menu.action_icon"></i>
              <span class="nav-next">{{menu.action_name}}</span>
            </template>
            <el-menu-item
              :index="subMenu.id.toString()"
              v-for="(subMenu, subIndex) in getModuleByParentId(menu.id)"
              :key="subIndex"
            >
              <i v-if="!subMenu.action_icon" class="el-icon-menu"></i>
              <i v-if="subMenu.action_icon" :class="subMenu.action_icon"></i>
              <span class="nav-next">
                <a @click="redirect(subMenu.action_path)">{{subMenu.action_name}}</a>
              </span>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </div>
      <div class="layout-main-container">
        <div class="layout-main-body">
          <el-breadcrumb separator="/" v-if="breakList.length>0" style="margin-bottom:20px;">
            <el-breadcrumb-item :to="{ path: '/admin/index' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item v-for="(item,index) in breakList" :key="index" :to="{path:item.path}">{{item.title}}</el-breadcrumb-item>
          </el-breadcrumb>
          <router-view></router-view>
        </div>
        <div class="layout-main-foot">版权所有 2018 ~ {{copyright_year}} {{SiteName}}</div>
      </div>
    </div>

    <el-dialog
      :title="dialog_pwd.title"
      :visible.sync="dialog_pwd.show"
    >
      <div class="form">
        <el-form
          ref="form"
          :model="form"
          label-width="120px"
          :rules="form_rules"
        >
          <el-form-item
            prop='admin_pwd'
            label="新密码:"
          >
            <el-input
              type="password"
              v-model.number="form.admin_pwd"
            ></el-input>
          </el-form-item>

          <el-form-item
            prop='admin_pwd_two'
            label="确认密码:"
          >
            <el-input
              type="password"
              v-model.number="form.admin_pwd_two"
            ></el-input>
          </el-form-item>

          <el-form-item class="text_right">
            <el-button
              type="primary"
              @click='onSubmitHandler("form")'
            >确定修改</el-button>
             <el-button @click="dialog_pwd.show = false">取 消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./layoutController.ts">

</script>
<style lang="less" scoped>
@header_height: 60px;
@left_sider_mini: 65px;
@left_sider_max: 200px;
@main_foot_height: 30px;
@main_background: #23262e;

.layout-header {
  background: @main_background;
  color: rgba(255, 255, 255, 0.5);
  display: flex;
  height: @header_height;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  .layout-header-left {
    width: @left_sider_max;
  }
  .layout-header-center {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 60%;
    .el-menu {
      display: flex;
    }
  }
  .layout-header-right {
    flex: 1;
  }
}

// .layout-main {
//   // display: -webkit-box;
//   // display: -webkit-flex;
//   // display: -ms-flexbox;
//   display: flex;
//   //overflow: hidden;
//   // height: 100%; /*写给不支持calc()的浏览器*/
//   // height: -moz-calc(100% - 80px);
//   // height: -webkit-calc(100% - 80px);
//   // height: calc(100% - 80px);
//   .layout-sider {
//     min-width: 200px;
//     overflow-x: hidden;
//     // height: 100%; /*写给不支持calc()的浏览器*/
//     // height: -moz-calc(100% - 80px);
//     // height: -webkit-calc(100% - 80px);
//     // height: calc(100% - 80px);
//   }
//   .layout-body {
//     flex: 1;
//     position: relative;
//     margin-left: 15px;
//     overflow: hidden;
//     height: 90%;
//     .layout-body-foot {
//       position: absolute;
//       left: 0;
//       bottom: 0;
//     }
//   }
// }

.layout-main {
  height: 100%;
  display: flex;
  .layout-sidebar-container {
    height: 100%;
    height: -moz-calc(100% - @header_height);
    height: -webkit-calc(100% - @header_height);
    height: calc(100% - @header_height);
    width: 200px;
    overflow: hidden;
    background: @main_background;
    .el-menu {
      border-right: none;
    }
    a {
      display: inline-block;
      overflow: hidden;
      width: 100%;
    }
  }
  .layout-sidebar-mini {
    width: @left_sider_mini;
  }
  .layout-sidebar-max {
    width: @left_sider_max;
  }
  .layout-main-container {
    flex: 1;
    height: 100%;
    position: relative;
  }
  .layout-main-body {
    position: absolute;
    bottom: @header_height+ @main_foot_height;
    left: 1%;
    top: 0;
    width: 98%;
    overflow-y: scroll;
    padding: 15px 0;

  }
  .layout-main-foot {
    position: absolute;
    left: 0;
    height: @main_foot_height;
    bottom: @header_height;
    font-size: 12px;
    text-align: center;
    border-top: 1px solid #cccccc;
    width: 100%;
    line-height: 200%;
  }
 
}
</style>


