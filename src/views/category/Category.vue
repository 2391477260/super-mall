<template>
 <div class="wrapper">
   <ul class="content">
     <li>分类列表1</li>
     <li>分类列表2</li>
     <li>分类列表3</li>
     <li>分类列表4</li>
     <li>分类列表5</li>
     <li>分类列表6</li>
     <li>分类列表7</li>
     <li>分类列表8</li>
     <li>分类列表9</li>
     <li>分类列表10</li>
     <li>分类列表11</li>
     <li>分类列表12</li>
     <li>分类列表13</li>
     <li>分类列表14</li>
     <li>分类列表15</li>
     <li>分类列表16</li>
     <li>分类列表17</li>
     <li>分类列表18</li>
     <li>分类列表19</li>
     <li>分类列表20</li>
     <li>分类列表21</li>
     <li>分类列表22</li>
     <li>分类列表23</li>
     <li>分类列表24</li>
     <li>分类列表25</li>
     <li>分类列表26</li>
     <li>分类列表27</li>
     <li>分类列表28</li>
     <li>分类列表29</li>
     <li>分类列表30</li>
   </ul>
 </div>

</template>

<script>
  import BScroll from '@better-scroll/core'

    export default {
      name: "Category",
      methods:{
      },
      //挂载上模板上能拿到
      mounted() {
       const bscroll=new BScroll('.wrapper',{
          scrollY: true,
          click: true,
          probeType: 2,//2在手指离开后不侦测，3是惯性也侦测
        })
      }
    }
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    overflow: hidden;
  }

</style>
