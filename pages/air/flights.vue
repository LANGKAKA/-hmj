<template>
  <section class="contianer">
    <el-row type="flex" justify="space-between">
      <!-- 顶部过滤列表 -->
      <div class="flights-content">
        <!-- 过滤条件 -->
        <div>
          <flightsFilters :data="flightData" @setlist="setlist" />
        </div>

        <!-- 航班头部布局 -->
        <div>
          <flightsListHead />
        </div>

        <!-- 航班信息 -->
        <div>
          <flightsItem v-for="(item,index) in dislist" :key="index" :data="item" />
        </div>

        <!-- 分页 -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="pageindex"
          :page-sizes="[5, 10, 15, 20]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total"
        ></el-pagination>
      </div>

      <!-- 侧边栏 -->
      <div class="aside">
        <!-- 侧边栏组件 -->
        <flightsAside />
      </div>
    </el-row>
  </section>
</template>

<script>
import flightsListHead from "@/components/air/flightsListHead.vue";
import flightsItem from "@/components/air/flightsItem.vue";
import flightsAside from "@/components/air/flightsAside.vue";
import flightsFilters from "@/components/air/flightsFilters.vue";
export default {
  data() {
    return {
      flightlist: [],
      dislist: [],
      pageindex: 1,
      pagesize: 5,
      total: 0,

      flightData: {
        flights: [],
        info: {},
        options: {}
      }
    };
  },
  watch: {
    $route() {
      this.getData();
    }
  },
  components: {
    flightsListHead,
    flightsItem,
    flightsFilters,
    flightsAside
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      this.$axios({
        url: `airs`,
        params: this.$route.query // 来自URL的5个参数'
      }).then(res => {
        // console.log(res);
        this.flightlist = res.data.flights;
        this.flightData = { ...res.data };
        //   this.dislist = res.data.flights
        //   console.log(this.dislist)
        this.total = res.data.flights.length;
        this.setlist();
      });
    },

    setlist(arr) {
      if (arr) {
        this.pageindex = 1;
        this.flightlist = arr;
        this.total = arr.length;
      }

      const start = (this.pageindex - 1) * this.pagesize;
      const end = this.pageindex * this.pagesize;
      this.dislist = this.flightlist.slice(start, end);
    },

    handleSizeChange(val) {
      this.pagesize = val;
      this.pageindex = 1;
      this.setlist();
    },
    handleCurrentChange(val) {
      // console.log(val)
      this.pageindex = val;
      this.setlist();
    }
  }
};
</script>

<style scoped lang="less">
.contianer {
  width: 1000px;
  margin: 20px auto;
}

.flights-content {
  width: 745px;
  font-size: 14px;
}

.aside {
  width: 240px;
}
</style>