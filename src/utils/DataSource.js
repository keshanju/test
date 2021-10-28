// ws推送数据源
// import CONST from "../config/const";
let count = 0;
let obj = {
  // 资产
  user_balance_source: {},
  // 订单ws推送 当前委托，历史委托
  new_order_source: [],
  // 成交订阅
  my_trades_source: [],
  kline_source: {
    // kline_301BTCUSDT15m: {},
  },
  // 深度订阅
  depth_source: {
    a: [],
    b: []
  },
  // 合并深度订阅
  mergedDepth_source: {
    a: [],
    b: []
  },
  // 最新成交
  newTradeSource: {},
  // 24小时行情
  symbol_quote_source: {},
  // 新成交订单通知
  order_notice: 0,
  // 期权指数
  indices_source: {},
  // 期权订单推送 当前委托
  option_order_source: [],
  // 期权订单推送 持仓
  option_position_source: [],
  // 期权资产
  option_balance_source: {},
  // 期权可交易信息
  option_tradeable_source: {},
  // 永续合约资产
  future_balance_source: {},
  // 永续合约可交易信息
  future_tradeable_source: {},
  // 永续合约订单推送 当前委托
  future_order_source: [],
  // 永续合约订单推送 当前持仓
  future_position_source: []
};

export default {
  clearAll: type => {
    if (type === "qws") {
      obj.depth_source = { a: [], b: [] };
      obj.mergedDepth_source = { a: [], b: [] };
      obj.newTradeSource = [];
      obj.indices_source = {};
      obj.kline_source = {};
    }
    if (type === "ws") {
      obj.user_balance_source = {};
      obj.new_order_source = [];
      obj.my_trades_source = [];
      obj.option_order_source = [];
      // obj.option_position_source = [];
      obj.option_balance_source = {};
      obj.option_tradeable_source = {};
      obj.future_balance_source = {};
      obj.future_tradeable_source = {};
      obj.future_order_source = [];
      // obj.future_position_source = [];
      obj.futures_order_filled = [];
    }
    obj.order_notice = 0;
  },
  clear: name => {
    if (name === "option_balance_source" || name == "option_tradeable_source") {
      obj[name] = {};
    }
    if (name === "future_balance_source" || name == "future_tradeable_source") {
      obj[name] = {};
      return;
    }
    if (name === "order_notice") {
      obj[name] = 0;
      return;
    }
    if (name == "indices") {
      obj.indices_source = {};
    }
    if (
      name === "user_balance_source" ||
      name === "depth_source" ||
      name === "symbol_quote_source" ||
      name === "kline_source"
    ) {
      obj[name] = {};
      return;
    }
    if (name === "depth_source" || name == "mergedDepth_source") {
      obj[name] = {
        a: [],
        b: []
      };
      return;
    }
    if (
      name === "new_order_source" ||
      name === "my_trades_source" ||
      name === "newTradeSource" ||
      name === "option_order_source" ||
      name === "option_position_source" ||
      name == "future_order_source" ||
      name == "future_position_source" ||
      name == "futures_order_filled"
    ) {
      obj[name] = [];
      return;
    }
  },
  getData: name => {
    return obj[name];
  },
  setData: (name, data, type) => {
    count++;
    //console.log(obj, count);
    if (name === "future_tradeable_source") {
      if (!data || !data.length) return;
      let d = {};
      data.map(item => {
        d[item["tokenId"]] = item;
      });
      obj["future_tradeable_source"] = d;
      return;
    }
    if (name === "option_tradeable_source") {
      if (!data.length) return;
      data.map(item => {
        obj.option_tradeable_source[item["tokenId"]] = item;
      });
      return;
    }
    if (name === "kline_source") {
      if (!data || !type) return;
      obj[name][type] = data[data.length - 1];
    }
    if (name === "user_balance_source") {
      if (!data.length) return;
      data.map(item => {
        obj.user_balance_source[item["tokenId"]] = item;
      });
      return;
    }
    if (name === "order_notice") {
      if (type) {
        obj.order_notice = data;
      } else {
        obj.order_notice = obj.order_notice + data;
      }
      //console.log("order_notice", obj.order_notice);
      return;
    }
    if (name == "indices_source") {
      if (!Object.keys(data).length) return;
      obj["indices_source"] = { ...obj["indices_source"], ...data };
    }
    if (name === "depth_source" || name === "mergedDepth_source") {
      if (!data || !data[0] || !type) return;
      obj[name][type] = {
        a: data[0].a,
        b: data[0].b
      };
      return;
    }
    if (name === "symbol_quote_source") {
      if (!data.length) return;
      data.map(item => {
        obj.symbol_quote_source[item.s] = item;
      });
      return;
    }
    if (name === "new_order_source") {
      if (!data) return;
      obj.new_order_source = obj.new_order_source.concat(data);
      return;
    }
    if (name === "my_trades_source") {
      if (!data || !data.length) return;
      obj.my_trades_source = obj.my_trades_source.concat(data);
    }
    if (name === "option_order_source") {
      if (!data) return;
      obj.option_order_source.push(data);
      return;
    }
    if (name === "option_position_source") {
      if (!data) return;
      obj.option_position_source = data;
    }
    if (name === "option_balance_source") {
      if (!data || !data.length) return;
      obj.option_balance_source = data[0];
    }
    if (name === "future_balance_source") {
      if (!data || !data.length) return;
      obj.future_balance_source = data[0];
    }
    if (name === "future_order_source") {
      if (!data) return;
      obj.future_order_source = obj.future_order_source.concat(data);
      return;
    }
    if (name === "future_position_source") {
      if (!data) return;
      obj.future_position_source = data;
      return;
    }
    if (name === "futures_order_filled") {
      if (!data) return;
      obj.futures_order_filled.push(data);
      return;
    }
  }
};
