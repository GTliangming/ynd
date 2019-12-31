<template>
<div>
<swipe class="my-swipe">
    <swipe-item class="slide1" @click="go"></swipe-item>
    <swipe-item class="slide2"><router-link to="/carouselPage1"></router-link></swipe-item>
    <swipe-item class="slide3"><router-link to="/carouselPage2"></router-link></swipe-item>
    <swipe-item class="slide4"><router-link to="/carouselPage3"></router-link></swipe-item>
    <swipe-item class="slide5"><router-link to="/carouselPage4"></router-link></swipe-item>
</swipe>
</div>
</template>


<script>
import Swiper from 'swiper'
export default {
  name:"bgimg",
  props: {
    msg: String
  },
  methods:{
    go(){
      this.$router.push({path:"/carouselPage1"});
    }
  },
  data() {
   return {
    swiperOption: {//以下配置不懂的，可以去swiper官网看api，链接http://www.swiper.com.cn/api/
     // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，<br>　　　　　　　　假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
     notNextTick: true,
     // swiper configs 所有的配置同swiper官方api配置
     autoplay: 3000,
     direction : 'vertical',
     grabCursor : true,
     setWrapperSize :true,
     autoHeight: true,
     pagination : '.swiper-pagination',
     paginationClickable :true,
     prevButton:'.swiper-button-prev',//上一张
     nextButton:'.swiper-button-next',//下一张
     scrollbar:'.swiper-scrollbar',//滚动条
     mousewheelControl : true,
     observeParents:true,
     // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
     debugger: true,
    }
   }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

@import '../../../node_modules/vue-swipe/dist/vue-swipe.css';
.my-swipe {
  height: 1.5rem;
  color: #fff;
  font-size: 30px;
  text-align: center;
  background-size: contain;
  margin-top: 0.05rem;
}



.slide2 {
  background-image: url("../../../static/index/banner_5.jpg");
  color: #000;
  background-size: cover;
}

.slide1{
  background-image: url("../../../static/index/banner_3.jpg");
  color: rgb(0, 0, 0);
  background-size: cover;
}
.slide3 {
  background-image: url("../../../static/index/banner_1.jpg");
  color: #fff;
  background-size: cover;
}
.slide4 {
  background-image: url("../../../static/index/banner_4.jpg");
  color: #fff;
  background-size: cover;
}
.slide5 {
  background-image: url("../../../static/index/banner_5.jpg");
  color: #000;
  background-size: cover;
}
</style>