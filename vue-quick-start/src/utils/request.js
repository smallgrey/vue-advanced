/* eslint-disable */
import { getToken, setToken } from "./storage";

// 创建axios 实例
const service = axios.create({
  baseURL:
    process.env.NODE_ENV === "production"
      ? process.env.VUE_APP_REQUEST_URL
      : process.env.VUE_APP_BASE_API, // api的base_url
  timeout: 10000 // 请求超时时间
});

// request 拦截器
service.interceptors.request.use(
  config => {
    if (getToken()) {
      config.headers.Authorization = getToken();
    } else {
      setToken("tokenTest");
    }
    // 这里可以自定义一些config 配置
    return config;
  },
  error => {
    //  这里处理一些请求出错的情况
    Promise.reject(error);
  }
);

// response 拦截器
service.interceptors.response.use(
  response => {
    const res = response.data;
    // 这里处理一些response 正常放回时的逻辑
    return res;
  },
  error => {
    // 这里处理一些response 出错时的逻辑
    return Promise.reject(error);
  }
);

export default service;
