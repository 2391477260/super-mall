<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banner_list="banner_list"></home-swiper>
    <home-recommend-view :recommend_list="recommend_list"></home-recommend-view>
    <home-feature></home-feature>
    <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
    <goods-list :goods="showGoods"></goods-list>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/Goods/GoodsList";

  import HomeSwiper from "./childComps/HomeSwiper";
  import HomeRecommendView from "./childComps/HomeRecommendView";
  import HomeFeature from "./childComps/HomeFeature";


  import {getHomeMultidata} from "../../network/home";
  import {getHomeGoods} from "../../network/home";


  export default {
    name: "Home",
    components:{
      NavBar,
      TabControl,

      HomeSwiper,
      HomeRecommendView,
      HomeFeature,
      GoodsList
    },
    data(){
      return{
        banner_list:[],
        recommend_list:[],
        goods:{
          'pop':{page: 0,list: []},
          'new':{page: 0,list: []},
          'sell':{page: 0,list: []}
        },
        currentType: 'pop'
      }
    },
    computed:{
      showGoods(){
         return this.goods[this.currentType].list
      }
    },
    methods:{
      //事件监听相关方法
      tabClick(index){
        switch (index) {
          case 0:
            this.currentType= 'pop';
            break;
          case 1:
            this.currentType= 'new';
            break;
          case 2:
            this.currentType= 'sell';
            break
        }
      },
      //网络请求相关方法
      getHomeMultidata(){
        getHomeMultidata().then(
          res=>{
            this.banner_list=res.data.banner.list;
            this.recommend_list=res.data.recommend.list;
          }
        )
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1;
        getHomeGoods(type,page).then(
          res=>{
            //将数组的元素依次解析出来，push到list中去
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page+=1;
          }
        )
      }
    },
    //组件创建完执行created()函数
    created() {
      //1.请求多个数据
      this.getHomeMultidata;
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
      console.log(this.goods.pop.list);
      console.log(this.goods.new.list);
      console.log(this.goods.sell.list);
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom:50px ;
  }
  .home-nav{
    background-color: var(--color-tint);
    color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 9;
  }
  .tab-control {
    background-color: #f6f6f6;
    z-index: 9;
    position: sticky;
    top: 44px;
  }
</style>
