<template>
  <swiper>
    <swiper-item v-for="(item, id) in banner_list" :key="id">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
  import {Swiper, SwiperItem} from 'components/common/swiper'
    export default {
      name: "HomeSwiper",
      components:{
        Swiper,
        SwiperItem
      },
      props:{
        banner_list:{
          type:Array,
        }
      }
    }
</script>

<style scoped>

</style>
