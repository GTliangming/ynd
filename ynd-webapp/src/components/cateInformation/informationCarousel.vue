<template>
    <div class="carousel">
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(n,i) in carousel" :key="i" >
                    <router-link :to="{path:'/cateInformationDetail',query:{value:n.i}}">
                        <img :src="n.pic">
                    </router-link>
                </div>
            </div>
            <div class="swiper-pagination swiper-pagination-banner"></div>
        </div>
    </div>
</template>

<script>
    import '../../../node_modules/swiper/css/swiper.css'
    import Swiper from 'swiper'
    export default {
        name: "informationCarousel",
        data(){
            return{
                //资讯轮播
                carousel: [
                    { i:15,pic:"http://39.107.139.165/cateInformation/carousel-1.jpg" },
                    { i:172,pic:"https://image.cnhnb.com/image/jpg/miniapp/2019/10/23/1f0b61a607514c4188d4ee067dd8825f.jpg" },
                    { i:9,pic:"https://image.cnhnb.com/image/jpg/miniapp/2019/11/15/719d22fac9564c52a7a76edae707dd77.jpg" },
                    { i:8,pic:"https://image.cnhnb.com/image/jpg/miniapp/2019/11/14/06c21a18311d49d1baba43f4174a755c.jpg" },
                    { i:20,pic:"http://39.107.139.165/cateInformation/carousel-5.jpg" },
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
        // methods:{
            // go(i){
            //     this.$router.push({path:'/carouselPage'+i})
            // }
        // }
    }
</script>

<style scoped lang="scss">
    .carousel{
        height: 1.85rem;
        width: 100%;
        padding-top: 0.48rem;
    }
    .swiper-slide img{
        height: 1.85rem;
        width: 100%;
    }
</style>
