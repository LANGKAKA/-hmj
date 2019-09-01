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

      <div class="login">
        <a href="/user/login">登录/注册</a>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
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
  .nuxt-link-exact-active{
      background: #409eff;
      color: #fff;
      &:hover{
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
</style>