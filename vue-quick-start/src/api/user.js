import request from "utils/request";

export default {
  // 登录
  login(data) {
    return request({
      url: "/login",
      method: "post",
      data
    });
  }
};
