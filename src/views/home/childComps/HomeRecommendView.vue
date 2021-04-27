<template>
    <div class="recommends">
      <div v-for="(item,id) in recommend_list" class="recommend" :key="id">
        <a :href="item.link">
          <img :src="item.image" alt="">
        </a>
        <p>{{item.title}}</p>
      </div>
    </div>
</template>

<script>
    export default {
      name: "HomeRecommendView",
      props:{
        recommend_list:{
          type:Array,
          default(){
            return []
          }
        }
      }
    }
</script>

<style scoped>
  .recommends{
    margin-bottom: 5px;
    display: flex;
    box-shadow:0 5px rgba(100,100,100,0.2);
  }
  .recommend{
    padding-top: 15px;
    padding-bottom: 30px;
    text-align: center;
    flex: 1;
  }
  .recommend img{
    width: 50px;
    height: 50px;
  }
</style>
