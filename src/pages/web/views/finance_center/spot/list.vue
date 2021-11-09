<template>
  <div class="user_center_box">
    <el-card class="u_card_box" shadow="hover">
      <div class="u_card_cell">
        <div class="flex_sbe_center">
          <div>币币账户</div>
          <div>
            <el-button class="mar_r10" type="default">划转</el-button>
            <el-button class="mar_r10" type="default">提币</el-button>
            <el-button class="mar_r10" type="primary">充币</el-button>
          </div>
        </div>
        <div class="flex_sbe_center mar_t20">
          <div class="">
            <!-- <div>{{financeData.balance || '--'}}</div> -->
            <a href="#">盈亏分析</a>
          </div>
          <div class="">
            
          </div>
        </div>
      </div>

      <div class="u_card_cell">
        <div class="flex_sbe_center">
          <div>
            <el-input placeholder="请输入内容" prefix-icon="el-icon-search" v-model="coinSearchVal"></el-input>
          </div>
          <div>
            <el-checkbox v-model="checkedSmallCoin">隐藏小额币种</el-checkbox>
          </div>
        </div>
        <el-card class="mar_t30">
          <div slot="header" class="clearfix">
            <span>加密货币</span>
            <!-- <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button> -->
          </div>
          <el-table
            :data="coinListData"
            style="width: 100%">
            <el-table-column
              prop="name"
              label="币种"
            >
            </el-table-column>
            <el-table-column
              prop="balance"
              label="可用"
            >
              <template slot-scope="scope">
                {{scope.row.balance || '--'}}
              </template>
            </el-table-column>
            <el-table-column
              prop="freeze"
              label="冻结">
              <template slot-scope="scope">
                {{scope.row.freeze || '--'}}
              </template>
            </el-table-column>
            <el-table-column
              fixed="right"
              label="操作"
              width="180"
            >
              <template slot-scope="scope">
                <el-button class="mar_r10" @click="handleChange(scope.row)" type="text" size="small">划转</el-button>
                <el-button class="mar_r10" @click="handleWithdral(scope.row)" type="text" size="small">提币</el-button>
                <el-button class="mar_r10" @click="handleDeposit(scope.row)" type="text" size="small">充币</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-card>
      </div>
    </el-card>

  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>

.user_body {
  width: 1200px;
  margin: 24px auto 120px;
  font-size: 12px;
  color: #FFF;
}

.u_header_box {
  width: 1200px;
  height: 216px;
  margin: 0 auto;
}

.u_avtar_box {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background-color: #fff;
  background-image: url(../../../assets/img/svg/user_icon.svg);
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 24px;
}

.u_cert_box {
  color: #495666;
  font-size: 12px;
  border: 1px solid #e6ecf2;
  padding: 24px;
  border-radius: 2px;
}

.u_card_box {
  margin-top: 20px;
}

.u_card_title {
  font-size: 14px;
  font-weight: 600;
}

.u_card_cell {
  width: 100%;
  padding: 24px;
  box-sizing: border-box;
  border-bottom: 1px solid #e6ecf2;
  
}

.u_card_cell:last-child {
  border-bottom: none;
}

.u_icon_box {
  width: 30px;
}

/deep/ .el-card__header {
  background-color: #e6ecf2;
}
</style>