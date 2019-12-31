<template>
  <div>
    <!-- <indexbanner></indexbanner> -->
    <!-- <bannerHome></bannerHome> -->
        <van-swipe class="vantbobo2" :autoplay="2500">
      <van-swipe-item><router-link class="bo1" to="/carouselPage0" tag="div"></router-link></van-swipe-item>
      <van-swipe-item><router-link class="bo2" to="/carouselPage1" tag="div"></router-link></van-swipe-item>
      <van-swipe-item><router-link class="bo5" to="/carouselPage2" tag="div"></router-link></van-swipe-item>
      <van-swipe-item><router-link class="bo6" to="/carouselPage3" tag="div"></router-link></van-swipe-item>
      <van-swipe-item><router-link class="bo7" to="/carouselPage4" tag="div"></router-link></van-swipe-item>
      
      <!-- <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
      <div class="custom-indicator" slot="indicator">
    <!-- {{ current + 1 }}/4 -->
    </div>
    </van-swipe>
    <indexsubnav></indexsubnav>
    <indexcontent></indexcontent>
    <cate></cate>
    <div class="body">

    <van-swipe vertical class="vantbobo2" :autoplay="2500">
      <van-swipe-item><router-link class="bo3" to="/advhometo3" tag="div"></router-link></van-swipe-item>
      <van-swipe-item><router-link class="bo4" to="/advhometo4" tag="div"></router-link></van-swipe-item>
      <!-- <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item> -->
      <div class="custom-indicator" slot="indicator">
    <!-- {{ current + 1 }}/4 -->
    </div>
    </van-swipe>
    </div>
    
    <!-- <indexsubbanner></indexsubbanner> -->
    <subcate></subcate>
    <goods></goods>
    <blank></blank>
  </div>
</template>

<script>
import footbar from "../components/common/footerbar/footbar";
import indexbanner from "../components/index/banner";
import bannerHome from "../components/bannerHome/banner";
import indexsubnav from "../components/index/subnav";
import indexcontent from "../components/index/content";
import indexsubbanner from "../components/index/banner";
import blank from "../components/index/blank";
import cate from "../components/index/cate";
import subcate from "../components/index/subcate";
import goods from "../components/index/goods";
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)

export default {
  name: "home",
  data() {
    return {
    
    };
  },
  components: {
    footbar,
    // indexbanner,
    indexsubnav,
    indexcontent,
    indexsubbanner,
    blank,
    cate,
    subcate,
    goods,
    bannerHome
  }
};
</script>

<style scoped lang="scss">
.vantbobo1{
    width: 100%;
    height:1rem;
    // background-color: aqua;
    border-radius: .08rem;
    
}
.vantbobo2{
    width: 100%;
    height:1.2rem;
    // background-color: aqua;
    border-radius: .08rem;
    margin-top: .14rem;
    //margin-bottom: 1rem;
}
.bo1{
  width: 100%;
  height:100%;
  background-image: url("../../static/index/banner_1.jpg");
   background-repeat: no-repeat;
  background-size: cover;
}
.bo2{
  width: 100%;
  height:100%;
  background-image: url("../../static/index/banner_2.jpg");
  background-repeat: no-repeat;
  background-size: contain
}
.bo3{
  width: 100%;
  height:100%;
  background-image: url("../assets/hotguoguo.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bo4{
  width: 100%;
  height:100%;
  background-image: url("../assets/hotguo2.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bo5{
  width: 100%;
  height:100%;
  background-image: url("../../static/index/banner_3.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bo6{
  width: 100%;
  height:100%;
  background-image: url("../../static/index/banner_4.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.bo7{
  width: 100%;
  height:100%;
  background-image: url("../../static/index/banner_5.jpg");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.body{
  border-right: .06rem solid white;
  border-left: .06rem solid white;
}
</style>
