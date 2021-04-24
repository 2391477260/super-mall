<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner_list="banner_list"></home-swiper>
    <home-recommend-view :recommend_list="recommend_list"></home-recommend-view>
    <home-feature></home-feature>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeature from "./childComps/HomeFeature";
  import {getHomeMultidata} from "../../network/home";


  export default {
    name: "Home",
    components:{
      NavBar,
      HomeSwiper,
      HomeRecommendView,
      HomeFeature
    },
    data(){
      return{
        banner_list:[],
        recommend_list:[]
      }
    },
    created() {
      //1.请求多个数据
      getHomeMultidata().then(
        res=>{
          this.banner_list=res.data.banner.list;
          this.recommend_list=res.data.recommend.list;
          console.log(res);
          console.log(this.recommend_list);
          console.log(this.banner_list);
        }
      )
    }
  }
</script>

<style scoped>
.home-nav{
  background-color: var(--color-tint);
  color: #f6f6f6;
}
</style>
