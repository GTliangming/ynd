<template>
    <div class="MarketQuotations">
<!--        头部-->
        <div class="header">
            <img src="http://39.107.139.165/hot/arrow_left.png" alt="" @click="fn">
            <span>热门好货</span>
        </div>
<!--        广告-->
        <div  class="advert">
            <img src="http://39.107.139.165/hot/remen.gif" alt="">
        </div>
    </div>

</template>

<script>
    export default {
        name: "HotSaleHeader",
        methods:{
            fn(){
                this.$router.push("./home")
            }
        }
    }
</script>

<style scoped>
    .header{
        background-color: white;
        height: 0.47rem;
        width: 3.75rem;
        position:fixed;
        z-index: 998;

    }
    .header img{
        width: 0.4rem;
        height: 0.4rem;
    }
    .header span{
        font-size: 0.24rem;
        position: absolute;
        left: 1.5rem;
        margin: 0.07rem;
        color: black;
    }
    /*广告*/
    .advert{
        width: 100%;
        text-align: center;
        padding-top: 0.5rem;
    }
    .advert img{
        height: 1.45rem;
        width: 98%;
        margin-top: 0.1rem;

    }
</style>