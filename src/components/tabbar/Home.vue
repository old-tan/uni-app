<template>
  <div>
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.bannerId">
        <img :src="item.imgUrl" alt />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <span class="mui-icon mui-icon-home"></span>
          <div class="mui-media-body">newslist</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-email">
            <span class="mui-badge">5</span>
          </span>
          <div class="mui-media-body">Email</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-chatbubble"></span>
          <div class="mui-media-body">Chat</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-location"></span>
          <div class="mui-media-body">location</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-search"></span>
          <div class="mui-media-body">Search</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <span class="mui-icon mui-icon-phone"></span>
          <div class="mui-media-body">Phone</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

// banner
// https://m.maizuo.com/gateway?type=2&cityId=110100&k=6744083
// X-Client-Info: {"a":"3000","ch":"1002","v":"5.0.4","e":"15632774313693671875224","bc":"110100"}
// X-Host: mall.cfg.common-banner

// list
// https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8154553
// X-Client-Info: {"a":"3000","ch":"1002","v":"5.0.4","e":"15632774313693671875224","bc":"110100"}
// X-Host: mall.film-ticket.film.list

// 导入 axios
import axios from "axios";
export default {
  data() {
    return {
      lunboList: []
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      axios({
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15632774313693671875224","bc":"110100"}',
          "X-Host": "mall.cfg.common-banner"
        },
        method: "get",
        url: "https://m.maizuo.com/gateway?type=2&cityId=110100&k=6744083"
      })
        .then(res => {
          console.log(res.data);
          if (res.data.status == 0) {
            this.lunboList = res.data.data;
          } else {
            Toast(res.data.msg);
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
}
.mint-swipe-item {
  // &:nth-child(1) {
  //   background-color: red;
  // }
  // &:nth-child(2) {
  //   background-color: green;
  // }
  // &:nth-child(3) {
  //   background-color: blueviolet;
  // }
  img {
    width: 100%;
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  .mui-table-view-cell {
    border: 0;
  }
}
</style>