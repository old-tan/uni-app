<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.filmId">
        <router-link :to="'/home/newsinfo/'+item.filmId" class>
          <img class="mui-media-object mui-pull-left" :src="item.poster" />
          <div class="mui-media-body">
            {{item.name}}
            <p class="mui-ellipsis">
                {{item.synopsis}}
            </p>
          </div>
        </router-link>
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
      newsList: []
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
          "X-Host": "mall.film-ticket.film.list"
        },
        method: "get",
        url: "https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=8154553"
      })
        .then(res => {
          console.log(res.data);
          if (res.data.status == 0) {
            this.newsList = res.data.data.films;
          } else {
            Toast('获取列表失败');
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style lang="scss" scoped>

</style>