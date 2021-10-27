<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-06 17:06:45
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div v-loading="loading"> 
    <!-- <my_nav :title="title"></my_nav> -->
    <div class="box-search">
      <el-form
        v-model="formSearch"
        :inline="true"
        class="demo-form-inline"
        size="small"
      >
        <el-form-item label="类型：">
          <el-select
            placeholder="请选择搜索类型"
            v-model="formSearch.type"
          >
            <el-option
              label="订单号"
              value="order_no"
            >
            </el-option>
            <el-option
              label="收货人手机号"
              value="buyer_phone"
            >
            </el-option>
            <el-option
              label="收货人姓名"
              value="buyer_name"
            >
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="搜索关键词：">
          <el-input
            placeholder="请输入搜索关键词"
            v-model="formSearch.keywords"
            @keypress.native.enter="onSearchForm(formSearch)"
          ></el-input>
        </el-form-item>

        <el-form-item>
          <el-button
            
            icon="el-icon-search"
            @click="onSearchForm(formSearch)"
          >查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- <div class="box-single-search">
      <el-form
        v-model="formFilter"
        :inline="true"
        class="demo-form-inline"
        size="small"
      >
        <el-form-item label="筛选：">
          <el-select
            placeholder="请选择内容"
            v-model="formFilter.filter"
          >
            <el-option
              :label="item.caption"
              :value="item.dataField"
              v-for="item in options.columns"
              :key="item.id"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-select
            placeholder="请选择内容"
            v-model="formFilter.condition"
          >
            <el-option
              label="包含"
              value="include"
            />
            <el-option
              label="等于"
              value="equal"
            />
          </el-select>
        </el-form-item>
        <el-form-item label="">
          <el-input
            placeholder="请输入标题内容"
            v-model="formFilter.keyword"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            
            icon="el-icon-search"
            @click="options.onFormFilter(formFilter)"
          ></el-button>
        </el-form-item>
      </el-form>
    </div> -->
    <!-- 0 未支付 1已取消 2已支付 3已发货 4已收货 5已完成 6 退款中 -->
    <div class="box-toolbar">
      <el-button-group>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==0?'primary':''"
          @click="getorder('',0)"
        >全部订单</el-button>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==1?'primary':''"
           @click="getorder(2,1)"
        >待发货</el-button>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==2?'primary':''"
           @click="getorder(3,2)"
        >待收货</el-button>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==3?'primary':''"
           @click="getorder(0,3)"
        >待付款</el-button>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==4?'primary':''"
           @click="getorder(5,4)"
        >已完成</el-button>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==5?'primary':''"
           @click="getorder(1,5)"
        >已取消</el-button>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==6?'primary':''"
           @click="getorder(6,6)"
        >退款中</el-button>
        <el-button
          class="filter-item"
          size="small"
          :type="clickbtn==7?'primary':''"
           @click="getorder(7,7)"
        >已退款</el-button>


      </el-button-group>
    </div>
    <div class="box-query">
      <el-table
        border
        fit
        highlight-current-row
        style="width: 100%;"
        size="small"
        :height="options.height"
        :data="options.dataSource"
        @sort-change="sortChange"
        @current-change="currentChange"
        @selection-change="getDataSelected"
      >
        <el-table-column
          type="selection"
          width="55"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="编号"
          width="60"
        >
        </el-table-column>
        <el-table-column
          prop="order_no"
          label="订单号"
          width="200"
        >
        </el-table-column>
        <el-table-column
          prop="order_status"
          label="商品信息"
           width="200"
        >
        </el-table-column>
        <el-table-column
          prop="order_status"
          label="单价/数量"
           width="80"
        >
        </el-table-column>
        <el-table-column
          prop="total_price"
          label="实付款"
           width="80"
        >
        </el-table-column>
        <el-table-column
          prop="buyer_name"
          label="买家"
           width="80"
        >
        </el-table-column>
        <el-table-column
          prop="buyer_phone"
          label="手机号"
           width="120"
        >
        </el-table-column>
        <el-table-column
          prop="order_status"
          label="交易状态"
          width="100"
        >
        <template slot-scope="scope">
          {{ scope.row.order_status|statusFilter }}
        </template>
        </el-table-column>
        <el-table-column
          prop="payment_type"
          label="支付方式"
          width="80"
        >
        </el-table-column>
        
        <el-table-column
          prop="ship_type"
          label="配送方式"
           width="80"
        >
         <template slot-scope="scope">
          {{ scope.row.ship_type|shipTypeFilter }}
        </template>
        </el-table-column>
        <el-table-column
          prop="ship_no"
          label="运单号"
           width="80"
        >
        </el-table-column>
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-row>
              <el-col>
                 <el-button
              size="mini"
              icon="el-icon-edit"
              type="primary"
              @click="onRowEditHandler(scope.row)"
            >详细</el-button> 
              </el-col>

              <el-col style="margin-top:5px">
                <el-button
              size="mini"
              icon="el-icon-edit"
              @click="onRowShipmentHandler(scope.row)"
              v-show="scope.row.order_status==2"
            >发货</el-button>
              </el-col>
              <el-col style="margin-top:5px">
 <el-button
              size="mini"
              type="danger"
              icon="el-icon-delete"
              @click="onRowMoneyHandler(scope.row)"
              v-show="scope.row.order_status==2||scope.row.order_status==3||scope.row.order_status==4||scope.row.order_status==5"
            >退款</el-button>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="box-pager">
      <el-pagination
        background
        :page-sizes="[10,20,50,100, 200, 300, 400]"
        :page-size="options.page.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="options.page.totalCount"
        @size-change="onPageSizeChange"
        @current-change="onPageCurrentChange"
      >
      </el-pagination>
    </div>

    <el-dialog
      :title="dialog.title"
      :visible.sync="dialog.show"
    >
      <div class="form">
        <el-form
          ref="form"
          :model="form"
          label-width="120px"
          :rules="wuliurules"
        >

          <el-form-item label="选择物流:" prop="wuliutype">
            <el-select
              v-model="form.wuliutype"
              placeholder="请选择物流公司"
            >
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="(item,index) in wuliuListArr"
                :key=index
              ></el-option>
             
            </el-select>
          </el-form-item>

          <el-form-item
            prop='wuliuNumber'
            label="运单号:"
          >
            <el-input
              type="textarea"
              v-model="form.wuliuNumber"
            ></el-input>
          </el-form-item>

          <el-form-item label="备注:">
            <el-input
              type="textarea"
              v-model="form.remarks"
            ></el-input>
          </el-form-item>

          <el-form-item class="text_right">
            <el-button  @click="onSubmitHandler('form')">提 交</el-button>
            <el-button @click="dialog.show = false">取 消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-dialog>

    <el-dialog
      :title="dialog_order.title"
      :visible.sync="dialog_order.show"
    >
      <div class="form">
        <el-form
          ref="form1"
          :model="form1"
          label-width="120px"
        >
          <el-form-item label="退款原因">
            <el-input
              type="textarea"
              v-model="form1.reason"
            ></el-input>
          </el-form-item>

          <el-form-item class="text_right">
            <el-button  @click="onSubmitRefundHandler('form1')">确 定</el-button>
            <el-button @click="dialog_order.show = false">取 消</el-button>
          </el-form-item>

        </el-form>
      </div>
    </el-dialog>
  </div>
</template>
<script lang="ts" src="./orderlistController.ts"></script>
<style lang="less">
.active{
  background: #333;
}
</style>