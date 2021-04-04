<template>
  <div class="home">
    <h1>{{ title }}</h1>
    <span @click="login_">登录</span>
    <p class="myBorder">用户名: {{ username }} 密码 {{ password }}</p>
    <el-button>按钮</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "home",
  data() {
    return {
      title: "首页",
      selects: []
    };
  },
  computed: {
    ...mapGetters(["username", "password"])
  },
  methods: {
    ...mapActions("user", ["Login"]),
    login_() {
      let loginParam = {
        username: "admin",
        password: "123456"
      };
      this.Login(this.$qs.stringify(loginParam));
    }
  }
};
</script>
