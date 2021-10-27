var glob = require('glob')
var path = require('path')
var globPath = './src/pages/admin/*.html'
var pathDir = './src/pages_admin/'
glob.sync(globPath).forEach((entry) => {
  // console.log(path.extname(entry))
  // full_path = entry.replace(path.extname(entry), "");
  // pathname = entry.substring(pathDir.length);
  // basename = pathname.replace("/", "_").replace(".html", "");
  // console.log(basename)
})
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

let pages = getEntry()
console.log(pages)