<template>
  <div>
    <div class="film-detail" v-if="datailData.filmType">
      <div class="col">
        <div class="film-name">
          <span class="">{{datailData.name}}</span>
          <span class="item">{{datailData.filmType.name}}</span>
        </div>
      </div>
      <div class="film-category grey-text">{{datailData.category}}</div>
      <div class="film-premiere-time grey-text">2019-12-20上映</div>
      <div class="film-nation-runtime grey-text">{{datailData.nation}} | {{datailData.runtime}}分钟</div>
      <div
        class="test grey-text"
      >{{datailData.synopsis}}</div>
    </div>
    <comment-box></comment-box>
  </div>
</template>
<script>
// https://m.maizuo.com/gateway?filmId=5011&k=3405165
import { Toast } from "mint-ui";
import axios from 'axios'
import comment from '../subcomponents/comment.vue'
export default {
  data() {
    return {
      id: this.$route.params.id, // 将 URL 地址中传递过来的 Id 值，挂载到 data 上，方便以后调用
      datailData: []
    };
  },
  created() {
      this.getDetail()
  },
  methods: {
    getDetail() {
      axios({
        headers: {
          "X-Client-Info":
            '{"a":"3000","ch":"1002","v":"5.0.4","e":"15632774313693671875224","bc":"110100"}',
          "X-Host": "mall.film-ticket.film.info"
        },
        method: "get",
        url: "https://m.maizuo.com/gateway?filmId=" + this.id
      })
        .then(res => {
            console.log(res.data.data.film)
            if(res.data.status === 0) {
                this.datailData = res.data.data.film
            }else {
                Toast('请求数据失败')
            }
        })
    }
  },
  components:{
      "comment-box":comment
  }
};
</script>
<style lang="scss" scoped>
.film-detail {
    padding: 15px;
    padding-top: 12px;
    background-color: #fff;
}
.film-detail .film-name .name {
    color: #191a1b;
    font-size: 18px;
    height: 24px;
    line-height: 24px;
    margin-right: 7px;
}
.film-detail .film-name .item {
    font-size: 9px;
    color: #fff;
    background-color: #d2d6dc;
    height: 14px;
    line-height: 14px;
    padding: 0 2px;
    border-radius: 2px;
    display: inline-block;
}
.film-detail .grey-text {
    font-size: 13px;
    color: #797d82;
    margin-top: 4px;
}
.film-detail .hidde {
    height: 38px!important;
    overflow: hidden;
}
</style>