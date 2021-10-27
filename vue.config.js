/**
 * 主要参考
 * html 图片解析 包含文件 html-withimg-loader
 * html 中vue中SEO优化 预编译 prerender-spa-plugin
 */
let _config = {
  dir: "web", //模板目录 default qimiao bohe admin product
  is_template: true//是否模板 如果是 替换模板规则
};

let path = require("path");
let glob = require("glob");

const debug = process.env.NODE_ENV !== "production";
//指定模板目录
process.env.PAGE_DIR = _config.dir;
//配置pages多页面获取当前文件夹下的html和js
function getEntry(
  globPath = "./src/pages/**/*.html",
  pathDir = "./src/pages/"
) {
  let entries = {},
    basename,
    tmp,
    pathname,
    appname;
  // 
  glob.sync(globPath).forEach(function (entry) {
    full_path = entry.replace(path.extname(entry), ""); //入口纯路径
    pathname = entry.substring(pathDir.length); //全路径
    basename = pathname.replace("/", "_").replace(".html", ""); //入口文件名
    entries[basename] = {
      entry: full_path + ".ts", // 配置多页的的入口文件，相当于一般项目的main.js
      template: entry, 
      filename: pathname
    };
  });
  return entries;
}

/**
 * 获取模板基本路径
 */
function getBaseUrl() {
  if (debug) {
    return "/"
  }
  if (_config.is_template) {
    return "./{{config.template_dir}}"
  }
  return "./";
}

// let pages = getEntry("./src/pages/" + _config.dir + "/**/!(_*).html", "./src/pages_" + _config.dir + "/");
let pages = getEntry("./src/pages/" + _config.dir + "/**/*.html", "./src/pages_" + _config.dir + "/");
module.exports = {
  baseUrl: getBaseUrl(),
  pages,
  productionSourceMap: false,
  devServer: {
    index: "index.html"
  },
  filenameHashing: debug,
  runtimeCompiler: true,
  outputDir: "dist/" + _config.dir,
  chainWebpack: config => {
    //不压缩html
    for (const key in pages) {
      config.plugin("html-" + key).tap(args => {
        //是否最小化html 压缩html
        args[0].minify = false;
        return args;
      });
    }

    if (_config.is_template) {
      if (debug) {
        //处理模板标签
        config.module
          .rule("twig")
          .test(/\.(htm|html)$/i)
          .use("html-twig-loader")
          .loader("html-twig-loader");
      }
    } else {
      config.module
        .rule("withimg")
        .test(/\.(htm|html)$/i)
        .use("html-withimg-loader")
        .loader("html-withimg-loader");
    }

    config.plugin("copy").tap(args => {
      args[0][0].from = "./src/pages/" + _config.dir + "/public";
      args[0][0].to = "./";
      return args;
    });
  }
};
