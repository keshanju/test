<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-09-04 09:08:49
 * @LastEditTime: 2019-09-20 15:39:15
 * @LastEditors: Please set LastEditors
 -->
<template>
  <div>
    <!-- <my_nav title="概览"></my_nav> -->
    <el-row :gutter="8" class="panel-group">
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <!-- <svg-icon icon-class="peoples" class-name="card-panel-icon"/> -->
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">文章数</div>
            <!-- <count-to :start-val="0" :end-val="102400" :duration="2600" class="card-panel-num"/> -->
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <!-- <svg-icon icon-class="message" class-name="card-panel-icon"/> -->
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">消息数</div>
            <!-- <count-to :start-val="0" :end-val="81212" :duration="3000" class="card-panel-num"/> -->
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-money">
            <!-- <svg-icon icon-class="money" class-name="card-panel-icon"/> -->
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">买入数</div>
            <!-- <count-to :start-val="0" :end-val="9280" :duration="3200" class="card-panel-num"/> -->
          </div>
        </div>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-shopping">
            <!-- <svg-icon icon-class="shopping" class-name="card-panel-icon"/> -->
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">订单数</div>
            <!-- <count-to :start-val="0" :end-val="13600" :duration="3600" class="card-panel-num"/> -->
          </div>
        </div>
      </el-col>
    </el-row>

    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;"></el-row>

    <el-row :gutter="8">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
        
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
         
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
         
        </div>
      </el-col>
    </el-row>

     <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 24}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
       <el-table :data="product_order_list" style="width: 100%;padding-top: 15px;">
        <el-table-column label="订单" min-width="200">
          <template slot-scope="scope">
            {{ scope.row.order_no | orderNoFilter }}
          </template>
        </el-table-column>
        <el-table-column label="价格" width="195" align="center">
          <template slot-scope="scope">
            ¥{{ scope.row.total_price | toThousandFilter }}
          </template>
        </el-table-column>
        <el-table-column label="状态" width="100" align="center">
          <template slot-scope="{row}">
            <el-tag :type="row.order_status|statusType">
              {{ row.order_status | statusFilter }}
            </el-tag>
          </template>
        </el-table-column>
      </el-table>
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 6}" style="margin-bottom:30px;">
       
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 12}" :xl="{span: 6}" style="margin-bottom:30px;">
        
      </el-col>
    </el-row>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less">
.panel-group {
  margin-top: 18px;
  .card-panel-col {
    margin-bottom: 32px;
  }
  .card-panel {
    height: 108px;
    cursor: pointer;
    font-size: 12px;
    position: relative;
    overflow: hidden;
    color: #666;
    background: #fff;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);
    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }
      .icon-people {
        background: #40c9c6;
      }
      .icon-message {
        background: #36a3f7;
      }
      .icon-money {
        background: #f4516c;
      }
      .icon-shopping {
        background: #34bfa3;
      }
    }
    .icon-people {
      color: #40c9c6;
    }
    .icon-message {
      color: #36a3f7;
    }
    .icon-money {
      color: #f4516c;
    }
    .icon-shopping {
      color: #34bfa3;
    }
    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }
    .card-panel-icon {
      float: left;
      font-size: 48px;
    }
    .card-panel-description {
      float: right;
      font-weight: bold;
      margin: 26px;
      margin-left: 0px;
      .card-panel-text {
        line-height: 18px;
        color: rgba(0, 0, 0, 0.45);
        font-size: 16px;
        margin-bottom: 12px;
      }
      .card-panel-num {
        font-size: 20px;
      }
    }
  }
}
</style>
