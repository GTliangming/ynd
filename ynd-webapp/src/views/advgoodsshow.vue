<template>
    <div>
        <div class="catg-nav">
            <!-- <a href="" class="catg-back">
                
            </a> -->
            <p class="catg-nav-title">分类</p>
            <!-- <div class="catg-nav-operation">
                <a href="">
                    <i></i>
                </a>
            </div> -->
        </div>
        
        <div class="catg-list-box" v-if="categoryInfo">
            <div class="catg-list-con">
                <!--左侧开始-->
                <div class="catg-list-left">
                    <ul>
                        <li class="catg-list-nav-cur" v-for="(item, index) in categoryInfo" :key="index" @click="jump(index)"
                            :class="index==0?'catgCurrent':''">
                            <p>
                                <span>{{item.name}}</span>
                            </p>
                        </li>
                    </ul>
                </div>
                <!--右边开始-->
                <div class="catg-list-right" >
                    <div class="catg-right-item">
                        <div v-for="(item,call) in categoryInfo" class="catg-item-main"  :key="call" >
                            <!--图片-->
                            <!-- <div  class="catg-item-pic" v-if="item.img">
                                <router-link to="">
                                    
                                    <img :src="item.img" alt="">
                                </router-link>
                            </div> -->
                            <!-- <div :key="pindex" v-for="(good,pindex) in item"> -->
                                <div class="category_title"  >
                                    <span>{{item.name}}</span>
                                </div>
                            <!-- </div> -->
                            <!-- <div :key="pindex" v-for="(good,pindex) in item.scond_classes"> -->
                                <!--内容-->
                                <div class="category_group">
                                    <div class="category_group_box">
                                        <!-- <div class="category_group_product" v-for="(pro,pindex) in item.second_classes" :key="pindex"> -->
                                            <router-link tag="div" :to="{path:'/top_aspx',query:{id:1,pro:pro.id}}" class="category_group_product" v-for="(pro,pindex) in item.second_classes" :key="pindex">
                                                <!-- <div class="img">
                                                    内容展示界面的图片代替
                                                    <img :src="pro.pic" alt="">
                                                </div> -->
                                                <!-- 详细产平明类 -->
                                                <div class="name">{{pro.name}}</div>
                                            </router-link>
                                        <!-- </div> -->
                                    </div>
                                </div>
                            <!-- </div> -->
                        </div>
                        <div class="cate-empty"></div>
                    </div>
                </div>
            </div>
        </div>
        <footerbar></footerbar>
    </div>
</template>

<script >
import footerbar from '../components/common/footerbar/footbar'
    import $ from 'jquery'
    
    export default {
        name: "advhometo5",
        data() {
            return {
                scroll: "null",
                categoryInfo:""
            }
        },
        components:{
            footerbar
        },
        created() { 
            
         console.log(1)
       this.loginyan()
        },
        methods: {
            /**
             * 页面的数据加载
             **/
            // async _initPageData () {
            //     let data = await categoryApi.getCategoryInfo()
            //     this.categoryInfo = data.goodlist
            // },
           loginyan(){
           
    //需要处理异步请求的问题
    this.$axios.get(this.HOST+'/product/all_category/')
        .then((response)=>{
            //将response获得的数据进行处理
           // var data=response.data;
           // this.categoryInfo=data.data;
        //   console.log(response.data.data); 
         this.categoryInfo=response.data.data;
        //  console.log(this.categoryInfo)
            //data可以是多种数据类型，通过全局变量tableData将数据传出。
        })
        .catch(function (error) {
            console.log(error);
        })


            // this.$axios.post(this.HOST+'user/login/',{name:this.name,pwd:this.pwd})
            // .then(result=>{
            //     console.log(result.data)
            //     this.msg = result.data.msg
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
    },
            dataScroll: function () {
                    this.scroll = document.documentElement.scrollTop || document.body.scrollTop;
            },
            jump(index) {
                let jump = document.getElementsByClassName('catg-item-main');
                // 获取需要滚动的距
                let total = jump[index].offsetTop - 50;
                jump[index].style.color="#fb7d34!important";
                jump[index].style.fontSize='0.177rem!important' ;
                $('html, body').animate({
                'scrollTop': total
                }, 400);
            },
            loadSroll: function () {
                var $navs = $(".catg-list-nav-cur");
                var sections = document.getElementsByClassName('catg-item-main');
                for (var i = sections.length - 1; i >= 0; i--) {
                    if (this.scroll >= sections[i].offsetTop-100) {
                        $navs.eq(i).addClass("catgCurrent").siblings().removeClass("catgCurrent")
                        break;
                    }
                }
            }
        },
        watch: {
            scroll: function () {
                this.loadSroll()
            }
        },
        mounted() {
            window.addEventListener('scroll', this.dataScroll);
       
        }
    }

</script>

<style scoped>
    /* @import "../../node_modules/swiper/css/swiper.css"; */
    .catg-nav {
        position: fixed;
        z-index: 9999;
        top: 0;
        left: 0;
        right: 0;
        align-items: center;
        height: 50px;
        background: #f2f2f2;
        color: #666;
        display: flex;
        width:3.75rem;
        font-size: 0.16rem;
    }
    .catg-back {
        display: inline-block;
        width: .31rem;
        margin: 0 .1rem;
        height: 0.26rem;

    }
    .catg-back span{
        display: inline-block;
        width: 0.26rem;
        height: 0.26rem;
        background-color: #fb7d34;
        /* background: url("../assets/images/home-img/catg-back.png") no-repeat;
        background-size: contain; */
    }
    .catg-nav-title {
        width: 100%;
       
        text-align: center;
    }
    .catg-nav-operation {
        display: block;
        width: .32rem;
        height: .32rem;
        /* background: url(../assets/images/home-img/search.png) no-repeat;
        right: .1rem;
        background-size: contain; */
        background-color: aqua;
        position: absolute;
        top: 52%;
        transform: translateY(-50%);
    }
    .catg-list-box{
        position: relative;
        max-width: 7.2rem;
        margin: 0 auto;
    }
    .catg-list-con{
        padding-top: 50px;
        padding-bottom: 52px;
        background: #fff;
        color: #3c3c3c;
    }
    .catg-list-left {
        position: fixed;
        top: 50px;
        bottom: 52px;
        left: 0;
        width: 0.78rem;
        border-right: 1px solid #efefef;
        overflow: hidden;
        height: calc(100vh - 0.76rem);
        overflow-y: auto;
        z-index: 50;
        -webkit-overflow-scrolling: touch;
    }
    .catg-list-left::-webkit-scrollbar{      display:none    }
    .catg-list-left ul li {
        position: relative;
        font-size: .14rem;
        height: .47rem;
        line-height: .47rem;
        text-align: center;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .catg-list-left ul li span{
        display: block;
        height: .47rem;
        overflow: hidden;
        color:#3c3c3c;
    }
    .catg-list-right{
        padding-left: 0.958rem;
        padding-right: .166rem;
    }
    .catg-right-item{
        overflow-y: auto;
    }
    .catg-item-pic, .catg-item-pic img{
        height: 1.05rem;
        width: 2.6rem;
    }
    .category_title {
        background: #fff;
        font-size: .145rem;
        text-align: center;
        font-weight: 400;
        margin-top: .1rem;
        height: 0.666rem;
        line-height: 0.666rem;
        overflow: hidden;
    }
    .category_title span{
        position: relative;
    }
    .category_title span:after, .category_title span:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 0.208rem;
        border-top: 1px solid #e0e0e0;
        transform: translate3d(-150%,-50%,0);
    }
    .category_title span:after {
        left: auto;
        right: 0!important;
        transform: translate3d(150%,-50%,0) !important;
    }
    .category_group{
        background: #fff;
        margin: -.03rem 0 0;
    }
    .category_group_box {
        width: 100%;
        overflow: hidden;
        display: flex;
        /*justify-content: space-between;*/
        flex-wrap: wrap;
    }
    .category_group_product{
        float: left;
        width: 33.333333333333336%;
        text-align: center;
        margin-top: .1rem;
        margin-bottom: .1rem;
        overflow: hidden;
        display: block;

    }
    .category_group_product a {
        display: inline-block;
        width: 100%;
    }
    .category_group_product .img{
        width: 0.52rem;
        height: 0.52rem;
        margin: 0 auto;
        background: #fff;
        overflow: hidden;
        position: relative;
    }
    .category_group_product img{
        width: 0.52rem;
        height: 0.52rem;
    }
    .category_group_product .name {
        margin-top: .145rem;
        white-space: nowrap;
        font-size: .12rem;
        color: rgba(0,0,0,.54);
    }
    .catg-list-right{
        box-sizing: border-box;
        overflow: hidden;
        /*height: calc(100vh - 0.76rem);*/
        /*overflow-y: auto;*/
        /*z-index: 50;*/
        /*-webkit-overflow-scrolling: touch;*/
    }
    .catg-item-main{
        position: relative;
    }
    .catgCurrent span{
        color: #fb7d34!important;
        font-size: 0.177rem!important;
        transform: scale(1);
        transition: transform .1s linear;
    }
    .cate-empty{
        height: 2rem;
    }
</style>
