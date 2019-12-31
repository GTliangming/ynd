<template>
    <div class="HotSale">
        <div class="HotSale-classify">
            <a href="#/home/top_page">
                <img src="http://39.107.139.165/hot/热门好货_03.gif" alt="">
                <p>水果</p>
            </a>
            <a href="#/home/top_page4">
                <img src="http://39.107.139.165/hot/热门好货_05.gif" alt="">
                <p>农副加工</p>
            </a>
            <a href="#/home/top_page3">
                <img src="http://39.107.139.165/hot/热门好货_07.gif" alt="">
                <p>禽畜肉蛋</p>
            </a>
            <a href="#/home/top_page8">
                <img src="http://39.107.139.165/hot/热门好货_09.gif" alt="">
                <p>农资农机</p>
            </a>
        </div>
        <div class="HotSale-content">
            <img src="http://39.107.139.165/hot/recommend.gif" alt="">
            <div class="HotSale-content-product">
                <router-link :to="'goodsInfo/'+m.id" v-for="(m,sid) in hotsale.data" :key="sid"  :sid="sid" class="detail">
                <div >
                    <img :src="m.small_pic" alt="">
                    <p class="title">{{m.title}}</p>
                    <p class="price"><span>{{m.price}}</span><span>元/斤</span> <s>{{m.price2}}元/斤</s></p>
                </div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "HotSaleContent",
        data: function () {
            return {
                hotsale:[]
            }
        },
        methods: {
            getInfo(){
                this.$axios.get(this.HOST+'product/hot_products/')
                    .then((response)=>{
                        this.hotsale=response.data;
                        console.log(respons.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
        },
        mounted () {
            this. getInfo()
        }
    }
</script>

<style scoped>
    .HotSale{
        background-color:#f5f5f6 ;
    }
 .HotSale-classify{
    width: 90%;
    height: 1rem;
     margin: auto;
     display:flex;
     justify-content: space-between;
     text-align: center;
     background-color: #f5f5f5;
     border-left: #B8A398 0.02rem solid;

}
.HotSale-classify a{
display: inline-block;
    width: 23%;
    color: black;
    margin: 0.05rem;

}
 .HotSale-classify a img{
     height:0.48rem;
     width: 0.40rem;
 }
    /*内容部分*/
    .HotSale-content{
        width: 90%;
        margin: auto;

    }
 .HotSale-content>img{
    height: 0.35rem;


 }
 .HotSale-content .detail{
     border-radius: 0.1rem;
     background-color: white;
 }
 .HotSale-content .detail img{
     width: 1.6rem;
     height: 1.4rem;
     display: inline-block;
     border-radius: 0.2rem;

 }
    .HotSale-content-product{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0.05rem;
    }
.title{
    width: 1.6rem;
    height: 0.4rem;
    overflow: hidden;
}
    .price{
        margin: 0.2rem 0rem;
    }
    .price>span:first-child{
          color: red;
          font-size: 0.16rem;
          font-weight: 600;
      }
    .price>span:last-child{
        /*color: red;*/
        font-size: 0.14rem;
    }
    .price s{
        color: grey;
        font-size: 0.14rem;
    }
</style>