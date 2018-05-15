<template>
  <div class="app-container">
     <mt-header fixed title="金色飞鹰">
  <router-link to="/" slot="left">
    <mt-button icon="back"></mt-button>
  </router-link>
  <mt-button icon="more" slot="right"></mt-button>
</mt-header>
    <router-view></router-view>
  
  <mt-tabbar>
  <mt-tab-item id="首页">
    <img slot="icon" src="">
    首页
  </mt-tab-item>
  <mt-tab-item id="商城">
    <img slot="icon" src="">
    商城
  </mt-tab-item>

  <mt-tab-item id="个人中心">
    <img slot="icon" src="">
    个人中心
  </mt-tab-item>
</mt-tabbar>

  </div>
</template>

<script>
import { Header } from 'mint-ui';
import { Tabbar, TabItem } from 'mint-ui';
export default {
    data(){
      return{
        flag:false
      }
    },
    created(){
     
    },
    methods:{
     
    },
   

}
</script>

<style>
.app-container {
  padding-top: 40px;
  overflow: hidden;
}
.app-container {
  padding-bottom: 55px;
}
.mint-header{
  background-color: black;
}
.mint-tabbar{
  opacity:0.2
}
</style>
