<template>
    <div class="cont1" v-if="info">
        <div v-for="(item,index) in info" :key="index">
            <h4 class="shopname">农产大王 <img class="on" src="../../assets/order/on.png" ></h4>
            
            <div class="product">
                <img class="productimg" :src="item.good_img" >
                <h4 class="title">{{item.name}}</h4>
                <p class="num">共计{{item.num}}斤</p>
                <p class="price">￥<span>{{item.price}}</span></p>
            </div>
            <p class="distribution">配送方式<span>快递</span></p>
       
        </div>
       
    </div>
</template>

<script>
    export default {
        name: "ordercont1",
        props:["info"]
    }
</script>

<style scoped>
    .cont1{
        width: 3.6rem;
        height: 3rem;
        background-color: white;
        margin-left: 0.1rem;
        margin-top: 0.2rem;
        border-radius: 0.1rem;
    }
    .shopname{
        margin-left: 0.15rem;
        padding-top: 0.15rem;
    }
    .on{
        width: 0.13rem;
    }
    .product{
        width: 100%;
        position: relative;
        margin-left: 0.15rem;
        margin-top: 0.1rem;
    }
    .productimg{
        width: 0.8rem;
    }
    .title{
        display: inline-block;
        width: 1.4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        position: absolute;
        left: 0.9rem;
        top: 0rem;
    }
    .num{
        position: absolute;
        left: 0.9rem;
        top: 0.4rem;
        color: #959595;
        margin-top: 0.1rem
    }
    .price{
        position: absolute;
        right: 0.3rem;
        top: 0rem;
    }
    .distribution span{
        margin-left: 2.4rem;
    }
    .distribution{
           margin-left: 0.1rem;
    margin-top: 0.2rem;
    }
    .priceall{
        margin-top: 1rem;
        margin-left: 1.1rem;
    }
</style>