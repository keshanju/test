<template>
  <div class="index_box">
    <div class="i_inner_box">
      <div class="i_banner_box flex_start_center">
        <div>
          <div class="i_banner_title"> 全球领先的数字资产交易平台 </div>
          <div class="i_banner_sub_title">海量策略 一站式交易</div>
        </div>
      </div>
    </div>
    <div id="myContainer">
      <div className="tradingview-widget-container">
        <div className="tradingview-widget-container__widget"></div>
      </div>
    </div>
    <div class="i_market_box">
      <div class="i_market_cell">
        <el-tabs v-model="activeName" :stretch="true" @tab-click="handleClick">
          <el-tab-pane label="涨幅榜" name="top">
            <el-table
              :data="tableTopData"
              style="width: 100%">
              <el-table-column
                prop="date"
                align="center"
                label="市场"
                width="180">
                <template slot-scope="scope">
                  <span>{{scope.row.sellCoinName + '/' + scope.row.buyCoinName}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="name"
                align="center"
                label="最新价"
                width="180">
              </el-table-column>
              <el-table-column
                prop="address"
                align="center"
                label="涨幅榜">
              </el-table-column>
              <el-table-column
                prop="address"
                align="center"
                label="行情">
              </el-table-column>
              <el-table-column
                prop="address"
                align="center"
                label="操作">
              </el-table-column>
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="跌幅榜" name="bottom">跌幅榜</el-tab-pane>
          <el-tab-pane label="24H成交量" name="volumn">24H成交量</el-tab-pane>
        </el-tabs>
        <div>

        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" src="./listController.ts">
</script>
<style lang="less" scoped>
.index_box {
  width: 100%;
  margin: 0 auto;
  background-color: #fff;
}

.i_inner_box {
  position: relative;
  background-image: url(../../assets/img/home_banner.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}

.i_banner_box {
  width: 1200px;
  margin: 0 auto;
  height: 540px;
}

.i_banner_title {
  font-size: 52px;
  color: #FFF;
  font-weight: bold;
  margin-bottom: 48px;
}

.i_banner_sub_title {
  font-size: 36px;
  color: #FFF;
  width: 540px;
  height: 70px;
  line-height: 70px;
  text-align: center;
  background: linear-gradient(90deg, #2465ff, #24b1ef);
  border-radius: 2em;
}

.i_market_box {
  width: 100%;
  margin: 70px auto;
  background: #F9F9F9;
}

.i_market_cell {
  width: 1200px;
  height: 725px;
  margin: 0 auto;
}

</style>
