/* eslint-disable */
import user from "./modules/user"; // 引入user模块
import getters from "./getters";

const storeInstall = new Vuex.Store({
  modules: {
    user
  },
  getters
});

export default storeInstall;
