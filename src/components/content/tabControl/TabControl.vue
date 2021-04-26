<template>
    <div class="tab-control">
      <div class="tab-control-item" @click="itemClick(index)" v-for="(item,index) in titles" :class="{active: index===currentIndex}">
        <span>{{item}}</span>
      </div>
    </div>
</template>

<script>
    export default {
      name: "TabControl",
      props:{
        titles:{
          type:Array,
          default(){
            return []
          }
        }
      },
      data(){
        return{
          currentIndex:0
        }
      },
      methods:{
        itemClick(index){
          this.currentIndex=index;
          this.$emit('tabClick',index)
        }
      }

    }
</script>

<style scoped>
  .tab-control{
    display: flex;
    margin-top: 10px;
    font-size: 15px;
  }
  .tab-control-item{
    height: 40px;
    line-height: 40px;
    text-align: center;
    flex: 1;
  }
  .tab-control-item span{
    padding: 5px;
  }
  .active{
    color: var(--color-tint);

  }
  .active span{
    border-bottom: 3px solid var(--color-tint);
  }
</style>
