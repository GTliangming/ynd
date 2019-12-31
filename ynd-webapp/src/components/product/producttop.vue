<template>
    <div class="product">
        
        <div  class="back" @click="back">
            <img src=".././../../static/index/back.png">
        </div>
        
            
                
                <div class="swiper"><img :src="detail.small_pic"></div>
              
            
        
        <!-- <div cla>
            <img :src="detail.small_pic">
        </div> -->

        <div class="cont">
            <div class="productall">
                <img class="back"  @click="back">
                <p class="price">￥{{detail.price}}/件<span>{{detail.num}}件起</span></p>
                <p class="title">{{detail.title}}</p> <img class="my_share" src="../../assets/info_product/my_share.png" >
                <p class="site">{{detail.adds}}</p>
                <p class="order"> <span>{{detail.browse}}</span> 万人看过  /订单：<span>{{detail.order}}</span>  <span class="ll">成交{{detail.deal}}元</span></p>
            </div>
        </div>
        <div class="last">

        </div>
    </div>
</template>

<script>
    // import Swiper from 'swiper';
    export default {
        name: "product",
        props:["detail"],
        // data() {
        //     return {
               
        //         product:{
        //             pic: require("../../assets/info_product/my_p1.jpg"),
        //             num: "15",
        //             price: "9.90",
        //             title: "红薯意见代发包邮六鳌沙地红蜜薯西瓜红品种适合微商电商",
        //             browse: "14.96",
        //             order: "10000",
        //             deal: "739"
        //         }
        //     }
        // },
                // mounted() {
                //     new Swiper('.swiper-container', {
                //         loop: true,
                //         // 如果需要分页器
                //         pagination: '.swiper-pagination',
                //         // 如果需要前进后退按钮
                //         nextButton: '.swiper-button-next',
                //         prevButton: '.swiper-button-prev',
                //         // 如果需要滚动条
                //         scrollbar: '.swiper-scrollbar',
                //     })
                // },
                methods:{
                    back(){
                        this.$router.go(-1);
                        
                    }
                }
            }


</script>

<style scoped>
    .swiper{
        width: 100%;
        height:3.6rem;
    }
    .swiper img{
        width: 100%;
        height:3.6rem;
    }
    .cont{
        position: relative;
        width: 100%;
        height: 1rem;
        background-color: white;
    }
    .price{
        color: #FE531D;
        font-size: 0.18rem;
    }
    .title{
        width: 2.6rem;
    }
    .productall{
        margin-left: 0.15rem;
    }
    .productall p{
        margin-top: 0.05rem;
    }
    .my_share{
        position: absolute;
        right: 0.2rem;
        top: 0.3rem;
        width: 0.2rem;
    }
    .site{
        font-size: 0.13rem;
        color: #9E9E9E;
    }
    .order{
        font-size: 0.13rem;
        color: #9E9E9E;
    }
    .price span{
        font-size: 0.1rem;
        display: inline-block;
        color: white;
        background-color:#FE531D ;
        margin-left: 0.1rem;
        width: 0.35rem;
        height: 0.15rem;
        text-align: center ;
    }
    .order .ll{
        margin-left: 2.7rem;
        font-size: 0.15rem;
    }
    .title{
        width: 1.6rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin-top: 0.15rem;
    }
    .back{
        position: absolute;
        top: -2.9rem;
        z-index: 999;
        left: 0.05rem;
        opacity: 0.5;
    }
    .back{
        position: fixed;
    top: 0.1rem;
    left: 0.1rem;
    z-index: 2;
    width: 0.4rem;
    height: 0.4rem;
    /* z-index: 12; */
    background-color: white;
    border-radius: 2rem;
    border: 0.02rem solid white;
    }
    .back img{
        width: 100%;
        height: 100%;
    }
</style>