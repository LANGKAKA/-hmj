<template>
  <div class="header">
    <el-row type="flex" justify="space-between" class="container">
      <div class="img">
        <img src="http://157.122.54.189:9093/images/logo.jpg" alt />
      </div>
      <div class="main">
        <el-row type="flex">
          <nuxt-link to="/">首页</nuxt-link>
          <nuxt-link to="/post">旅游攻略</nuxt-link>
          <nuxt-link to="/hotel">酒店</nuxt-link>
          <nuxt-link to="/air">国内机票</nuxt-link>
        </el-row>
      </div>

      <div class="login" v-if="!$store.state.user.userInfo.token">
        <a href="/user/login">登录/注册</a>
      </div>

      <div v-else>
        <el-dropdown>
          <span class="el-dropdown-link">
            <!-- 头像,昵称 -->
            <img
              :src="` ${$axios.defaults.baseURL}${$store.state.user.userInfo.user.defaultAvatar} `"
            />
            <span>{{$store.state.user.userInfo.user.nickname}}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {
    console.log(this.$store);
  },
  methods:{
    logout(){
      this.$store.commit("user/clearUserInfo")
      this.$message.success("退出登录")
    }
  }
};
</script>

<style lang="less" scoped>
.header {
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid #ddd;
  box-shadow: 0px 3px 0px #f5f5f5;
  .container {
    width: 1000px;
    margin: 0 auto;
  }
}
.main {
  flex: 1;
  a {
    display: block;
    padding: 0 20px;
    box-sizing: border-box;
    height: 60px;
    &:hover {
      color: #409eff;
      border-bottom: 5px solid #409eff;
    }
  }
  .nuxt-link-exact-active {
    background: #409eff;
    color: #fff;
    &:hover {
      color: #fff;
    }
  }
}
.img {
  padding: 9px;
  img {
    width: 156px;
    height: 42px;
  }
}
 .el-dropdown-link img{
        width: 36px;
        height:36px;
        border-radius: 50%;
        vertical-align: middle;
        box-sizing: border-box;
        border:2px #fff solid;
        &:hover{
            border:2px #409eff solid;
        }
    }
</style>