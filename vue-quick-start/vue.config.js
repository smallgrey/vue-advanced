const path = require("path");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
 
function resolve(dir) {
    return path.join(__dirname, dir);
}

const compress = new CompressionWebpackPlugin(
  {
    filename: "[path][base].gz",
    algorithm: "gzip", 
    threshold: 0, // 只有大小大于该值的资源会被处理, 单位是 bytes, 默认0
    test: new RegExp(
      "\\.(" +
      ["js", "css"].join("|") +
      ")$"
    ),
    minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理, 默认值是 0.8
    deleteOriginalAssets: false // 删除源文件
  }
)

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-quick-start/" : "/",
  assetsDir: "assets", // 静态文件目录
  lintOnSave: true, // 是否开启编译时是否不符合eslint提示
  productionSourceMap: false, //去掉打包后生成的map文件
  devServer: {
    proxy: {
      [process.env.VUE_APP_BASE_API]: {
        target: process.env.VUE_APP_REQUEST_API,
        changeOrigin: true,
        pathRewrite: {
          ["^" + process.env.VUE_APP_BASE_API]: ""
        }
      }
    }
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
               @import "@/assets/css/variable.scss"; 
               @import "@/assets/css/common.scss";
               @import "@/assets/css/mixin.scss";
              `
      }
    }
  },
  chainWebpack: config => {
    config.optimization.minimize(true); // 是否压缩代码
    config.optimization.splitChunks({ // 分割代码
      chunks: "all"
    });
    config.externals({
      "vue": "Vue",
      "vuex": "Vuex",
      "vue-router": "VueRouter",
      "axios": "axios",
      "element-ui": "ELEMENT"
    });
    config.resolve.alias
        .set("utils",resolve("src/utils"))
  },
  configureWebpack: {
    plugins: [compress]
  }
};