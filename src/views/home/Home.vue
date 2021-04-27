<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroll ref="scroll" :probeTypeValue="3"
            @scrollPositionChange="scrollPositionChange"
            :pullUpLoadValue="true"
            @pullingUp="loadMore"
    >
        <home-swiper :banner_list="banner_list"></home-swiper>
        <home-recommend-view :recommend_list="recommend_list"></home-recommend-view>
        <home-feature></home-feature>
        <tab-control class="tab-control" :titles="['流行','新款','精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
    </scroll>
    //.native监听原生组件监听
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import Scroll from "components/common/scroll/Scroll"
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/Goods/GoodsList";
  import BackTop from "components/content/backTop/BackTop";


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
      Scroll,
      BackTop,

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
        currentType: 'pop',
        isShow:false
      }
    },
    computed:{
      showGoods(){
         return this.goods[this.currentType].list
      },
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
      //监听点击，backTop回到顶部
      backTopClick(){
        console.log("点击");
        //500毫秒回到顶部，父组件调用子组件的对象
        this.$refs.scroll.scrollTo(0,0,500);
      },
      scrollPositionChange(position){
        this.isShow=(-position.y)>=1000
      },
      //通过上拉发送自定义事件加载更多
      loadMore(){
        console.log('上拉');
        this.getHomeGoods(this.currentType);
        //重新计算可滚动高度，不然会出现滚动不了的清况
        this.$refs.scroll.scroll.refresh()
      },
      //网络请求后端数据相关方法
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
            console.log(res);
            this.goods[type].list.push(...res.data.list);
            this.goods[type].page+=1;
            this.$refs.scroll.finishPullUp()
          }
        )
      }
    },
    //组件创建完执行created()函数请求数据
    created() {
      //1.请求多个数据
      this.getHomeMultidata();
      this.getHomeGoods('pop');
      this.getHomeGoods('new');
      this.getHomeGoods('sell');
    }
  }
</script>

<style scoped>
  #home{
    padding-top: 44px;
    padding-bottom:50px ;
    height: 100vh;
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
