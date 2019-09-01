<template>
  <div class="div">

    <div class="tabs">
      <span
       v-for="(item,index) in ['新闻','体育','娱乐']" :key="index"
       @click="handleClick(index)"
       :class="{ active: cur === index }"
      >{{item}}</span>  
    </div>

    <ul v-show="cur === 0">
      <li>中秋将至</li>
      <li>中秋将至</li>
      <li>中秋将至</li>
    </ul>

    <ul v-show="cur === 1">
      <li>中国男篮</li>
      <li>中国男篮</li>
      <li>中国男篮</li>
    </ul>

    <ul v-show="cur === 2">
      <li>文章出轨</li>
      <li>文章出轨</li>
      <li>文章出轨</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
        cur:0
    };
  },
  methods:{
      handleClick(index){
          this.cur = index
      }
  }
};
</script>

<style lang="less" scoped>
    .div{
        margin: 100px
    }
    .tabs{
        span{
            margin:10px;
            cursor: pointer;
        }
    }
    .active{
        color: red
    }
</style>