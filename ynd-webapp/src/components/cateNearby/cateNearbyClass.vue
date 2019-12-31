<template>
    <div class="Nearby-classify">
        <a href="#/home/top_page">
            <img src="../../../static/cateNearby/5.png" alt="">
            <p>水果</p>
        </a>
        <a href="#/home/top_page2">
            <img src="../../../static/cateNearby/4.png" alt="">
            <p>蔬菜</p>
        </a>
        <a href="#/home/top_page4">
            <img src="../../../static/cateNearby/6.png" alt="">
            <p>粮副</p>
        </a>
        <a href="#/home/top_page9">
            <img src="../../../static/cateNearby/7.png" alt="">
            <p>农资</p>
        </a>
        <a href="#/home/top_page3">
            <img src="../../../static/cateNearby/6.png" alt="">
            <p>养殖</p>
        </a>
    </div>
        
</template>
<script>
    export default {
        props: ["data"],
    }
</script>
<style scoped>
    .Nearby-classify{
        width: 90%;
        height: 1rem;
        margin: auto;
        display:flex;
        justify-content: space-between;
        text-align: center;
    }
    .Nearby-classify a{
        display: inline-block;
        width: 23%;
        color: black;
        margin: 0.05rem;
        padding-top: 0.2rem;
    }
    .Nearby-classify a img{
        height:0.48rem;
        width: 0.40rem;
    }
</style>