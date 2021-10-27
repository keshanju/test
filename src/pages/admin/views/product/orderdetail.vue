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
    <!-- 基本信息 -->
   <div class="baseInfoBox">
     <h5 class="title">基本信息</h5>
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="order_no"
        label="订单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="buyer_name"
        label="买家"
        width="180">
      </el-table-column>
      <el-table-column
        prop="total_price"
        label="订单金额">
      </el-table-column>
      <el-table-column
        prop="payment_type"
        label="支付方式">
      </el-table-column>
      <el-table-column
        prop="ship_type"
        label="配送方式">
      </el-table-column>
      <el-table-column
        prop="order_status"
        label="交易状态">
      </el-table-column>
    </el-table>
    </div>
    <!-- 收货信息 -->
   <div class="baseInfoBox">
     <h5 class="title">收货信息</h5>
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="buyer_name"
        label="收货人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="buyer_phone"
        label="收货电话"
        width="180">
      </el-table-column>
      <el-table-column
        prop="buyer_address"
        label="收货地址"
        >
      </el-table-column>
    </el-table>
    </div>
    <!-- 发货信息 -->
   <div class="baseInfoBox">
     <h5 class="title">发货信息</h5>
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="ship_type"
        label="物流公司"
        width="180">
      </el-table-column>
      <el-table-column
        prop="ship_no"
        label="物流单号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="order_status"
        label="发货状态"
        >
      </el-table-column>
      <el-table-column
        prop="ship_time"
        label="发货时间"
        >
      </el-table-column>
    </el-table>
    </div>

    <!-- 付款信息 -->
   <div class="baseInfoBox">
     <h5 class="title">付款信息</h5>
     <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="total_price"
        label="应付款金额"
        width="180">
      </el-table-column>
      <el-table-column
        prop="payment_type"
        label="支付方式"
        width="180">
      </el-table-column>
      <el-table-column
        prop=""
        label="支付流水号"
        >
        <div>无</div>
      </el-table-column>
      <el-table-column
        prop="order_status"
        label="付款状态"
        >
      </el-table-column>
      <el-table-column
        prop="pay_time"
        label="付款时间"
        >
      </el-table-column>
    </el-table>
    </div>



  </div>
</template>
<script src="./orderdetailController.ts" lang="ts"></script>
<style lang="less" scoped>
.el-upload-list--picture-card .el-upload-list__item-actions::after{
  height:auto;
}
.baseInfoBox{
  margin-top: 20px;
}
.title{
  margin-bottom: 10px;
  border-left: 4px solid #FFC107;
  padding-left: 10px;
  color: #666;
  font-size: 12px;
}
.el-table th>.cell{
  color: #000!important;
}
</style>