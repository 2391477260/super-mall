<template>
    <div class="wrapper" ref="a">
      <div class="content">
        <slot ></slot>
      </div>
    </div>
</template>

<script>
  import BScroll from 'better-scroll'

  export default {
      name: "Scroll",
      props:{
        //使得创建组件时可以通过probeType控制Scroll组件是否实时监听
        probeTypeValue:{
          type:Number,
          default:0
        },
        pullUpLoadValue:{
          type:Boolean,
          default: false
        }
      },
      data(){
        return{
          scroll:null
        }
      },
      methods:{
        scrollTo(x,y,time=500){
          this.scroll.scrollTo(x,y,time)
        },
        finishPullUp(){
          this.scroll.finishPullUp()
        }
      },
      mounted() {
        //创建BScroll对象
        this.scroll=new BScroll(this.$refs.a,{
          scrollY:true,
          probeType:this.probeTypeValue,
          pullUpLoad:this.pullUpLoadValue,
          click:true,
          observeDOM:true
        });
        this.scroll.on('scroll', (position) => {
          this.$emit('scrollPositionChange',position)
        });
        this.scroll.on('pullingUp',() =>{
          this.$emit("pullingUp")
        })
      }
    }
</script>

<style scoped>
  .wrapper{
    height: 100%;
    overflow: hidden;
  }
</style>
