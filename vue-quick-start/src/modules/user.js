import api from "@/api/user";

const user = {
  namespaced: true,
  state: {
    username: "",
    password: ""
  },

  mutations: {
    SET_USERINFO: (state, userInfo) => {
      state.username = userInfo.username ? userInfo.username : "";
      state.password = userInfo.password ? userInfo.password : "";
    }
  },

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      return new Promise((resolve, reject) => {
        api
          .login(userInfo)
          .then(res => {
            if (res.code === 200) {
              commit("SET_USERINFO", res.userInfo);
            }
            resolve();
          })
          .catch(err => {
            reject(err);
          });
      });
    }
  }
};

export default user;
