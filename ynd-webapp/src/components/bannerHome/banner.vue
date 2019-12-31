<template>
    <div class="banner">
        
        <div class="swiper-container" >
            <div class="swiper-wrapper">
                 <div class="swiper-slide" v-for="(n,sid) in bannerHome" :key="sid">
                    <router-link :to="'/carouselPage'+n.i">
                        <img :src="n.pic">
                        
                    </router-link>
                  </div>
            </div>
            <!-- 分页器 -->
            <div class="swiper-pagination swiper-pagination-banner"></div>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper'
// import bannerHomeApi from '../../api/bannerHomeApi'

export default {
    name: "banner",
    data(){
        return{
            // bannerH:[]
            bannerHome: [
                { i:0,pic:require("../../../static/index/banner_5.jpg") },
                { i:1,pic:require("../../../static/index/banner_3.jpg") },
                { i:2,pic:require("../../../static/index/banner_1.jpg") },
                { i:3,pic:require("../../../static/index/banner_4.jpg") },
                { i:4,pic:require("../../../static/index/banner_5.jpg") },
            ]
        }
    },
    mounted(){
        new Swiper ('.swiper-container', {
            // effect : 'coverflow',
            // slidesPerView: 3,
            // centeredSlides: true,
            // 轮播图的方向
            direction:'horizontal',
            // //播放速度
            loop: true,
            // 自动播放时间
            autoplay:true,
            // 播放的速度
            speed:1000,
            // 如果需要分页器，即下面的小圆点
            pagination: {
                el: '.swiper-pagination-banner',
                clickable: true,
            },
            // 即使滑动之后 定时器也不会被清除
            autoplayDisableOnInteraction : false,
        });
    },
    methods:{
    //    / go(i){
    //         this.$router.push({path:'/carouselPage'+i})
    //     },
        // //传值
        // _initPageData(){
        //     bannerHomeApi.getLBTU(data=>{
        //         // console.log(data.data.bannerHome)
        //         this.bannerH =data.data.bannerHome
        //     })
        // }
    },
    // created(){
    //     this._initPageData()
    // }
}
</script>

<style scoped lang="scss">
    .swiper-container img{
         /*height: 0.76rem;*/
         width: 100%;
         height: 1.52rem;
         touch-action: none;
         border-radius: 0.1rem;
         opacity: 0.95;
     }
    .banner{
        height: 1.52rem;
        width: 100%;
        /*background: linear-gradient(13deg,#00E4FF,#81FBB8,#3CD500);*/
        /*background-image: url("../../assets/bannerHome_imgs/back6.jpg");*/
        // background-image: url("../../assets/bannerHome_imgs/back.gif");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center
    }
    /*.swiper-pagination-bullet-active{*/
    /*   background-color: greenyellow;*/
    /*}*/
</style>