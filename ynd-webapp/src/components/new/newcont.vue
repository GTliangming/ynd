<template>
    <div class="cont">
        <div class="contall">
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
            <div class="c1">
                <img src="../../assets/new/product.jpg" >
                <p>美味的蔬菜水果大咖</p>
                <p class="price">￥19.5</p>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "newcont"
    }
</script>

<style scoped>
    .cont{
        width: 100%;
        background: linear-gradient(to bottom,  greenyellow ,green);
        border-radius: 0.2rem;
        display: flex;
        justify-content: space-around;
    }
    .c1{
        width: 1rem;
        height: 1.75rem;
        background-color: #F7F7F7;
        margin-top: 0.2rem;
        border-radius: 0.1rem;

    }
    .c1 img{
        width: 1rem;
        border-radius: 0.1rem;
    }
    .contall{
        flex-wrap: wrap;
        display: flex;
        width: 3.7rem;
        justify-content: space-around;
        margin-bottom: 0.2rem;
    }
    .price{
        color: red;
    }
</style>