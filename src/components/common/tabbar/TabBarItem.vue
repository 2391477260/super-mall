<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeStyle"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props:{
            path: String,
            activeColor:{
                type:String,
                default:'red'
            }
        },
        data(){
            return{

            }
        },
        computed:{
            //根据route里获取的路由路径决定当前css状态
            isActive(){
                //indexof()返回-1没找到，不为-1则找着了
                return this.$route.path.indexOf(this.path)!==-1
            },
            activeStyle(){
                return this.isActive ? {color: this.activeColor} : {}
            }
        },
        methods:{
            itemClick(){
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped>
  .tab-bar-item{
    flex: 1;
    text-align: center;
    height: 49px;
  }
  .tab-bar-item img{
    height: 20px;
    width: 24px;
  }
</style>
