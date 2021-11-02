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
        <el-tabs v-model="activeName" :stretch="true">
          <el-tab-pane label="涨幅榜" name="top">
            <el-table
              @row-click="handleRowClick"
              :data="tableTopData"
              :default-sort = "{prop: 'close', order: 'descending'}"
              style="width: 100%"
              row-class-name="a_row_cursor">
              <el-table-column
                prop="symbol"
                align="center"
                label="交易对"
                width="180">
                <template slot-scope="scope">
                  <span>{{scope.row.symbol.toUpperCase().substring(0, scope.row.symbol.length-4)+'/'+scope.row.symbol.toUpperCase().substr(-4)}}</span>
                </template>
              </el-table-column>
              <el-table-column
                prop="close"
                sortable
                align="center"
                label="最新价"
                width="180">
              </el-table-column>
              <el-table-column
                prop="high"
                sortable
                align="center"
                label="24h最高价">
              </el-table-column>
              <el-table-column
                prop="low"
                sortable
                align="center"
                label="24h最低价">
              </el-table-column>
              <el-table-column
                prop="rate"
                sortable
                align="center"
                label="涨幅">
                <template slot-scope="scope">
                  <span>{{(scope.row.rate * 100).toFixed(2)}}%</span>
                </template>
              </el-table-column>
              <!-- <el-table-column
                prop="address"
                align="center"
                label="行情">
              </el-table-column> -->
              <!-- <el-table-column
                prop="address"
                align="center"
                label="操作">
              </el-table-column> -->
            </el-table>
          </el-tab-pane>
          <el-tab-pane label="新币榜" name="bottom">
            <div class="text_center">敬请期待!</div>
          </el-tab-pane>
          <el-tab-pane label="成交额榜" name="volumn">
            <div class="text_center">敬请期待!</div>  
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
    <div class="index_box">
      <div class="i_info_inner">
        <div class="i_info_box flex_center_center flex_column">
          <div class="i_info_title mar_b50">关于我们</div>
          <div class="i_info_font">
            <div>Skies Exchange是一家来自美国的新生代全球生态型数字资产平台。平台致力于打造最具合规性的加密交易平台。团队成员 经验丰富，来自知名投资机构，跨国银行以及头部互联网公司，旗下拥有MSB牌照（Money Services Business）和MTL 牌 照（Money Transmission License ）等，合规手续齐全，保证平台用户的安全和发展。</div>
            <div class="mar_t20">Skies2021年预计将服务300万会员，达成1亿日成交量。并计划在2022年登陆纳斯达克，剑指中国版Coinbase+币安。</div>
          </div>
        </div>
      </div>
    </div>
    <div class="index_box">
      <div class="i_download_inner">
        <div class="i_download_box flex_sbe_center">
          <div class="mar_l50">
            <div class="i_download_title">随时随地  快速交易</div>
            <div class="flex_center_center mar_t50 mar_b50">
              <div class="flex_center_center flex_column">
                <img class="mr40" src="../../assets/img/icon_android.png" alt="">
                <div class="mar_t10">iOS</div>
              </div>
              <div class="flex_center_center flex_column mar_l50">
                <img class="mr40" src="../../assets/img/icon_ios.png" alt="">
                <div class="mar_t10">Android</div>
              </div>
            </div>
            <div class="flex_center_center flex_column">
              <img src="../../assets/img/qr_code.png" alt="">
              <div class="mar_t5">iOS&Android扫描下载</div>
            </div>
          </div>
          <div class="">
            <img src="../../assets/img/home_down_right.png" alt="">
          </div>
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

.i_info_inner {
  position: relative;
  background-image: url(../../assets/img/home_bg_about.png);
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: cover;
}

.i_info_box {
  width: 1200px;
  margin: 0 auto;
  height: 560px;
  // text-align: center;
}

.i_info_font {
  font-size: 18px;
  color: #FFF;
}

.i_info_title {
  font-size: 32px;
  color: #FFF;
}

.i_banner_box {
  width: 1200px;
  margin: 0 auto;
  height: 540px;
}

.i_download_box {
  width: 1200px;
  margin: 150px auto 100px;
  background: #FFFFFF;
  box-shadow: 0px 0px 26px 0px rgba(0, 0, 0, 0.08);
  font-size: 16px;
  font-weight: 400;
  color: #333333;
}

.i_download_title {
  color: #333333;
  font-size: 28px;
  font-weight: 400;
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

/deep/ .el-table__row {
  cursor: pointer;
}

</style>
