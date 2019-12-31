<template>
    <div class="pay">
        <img class="img1" src="../assets/pay/pay.png" >
        <p class="paysussed">支付成功</p>
        <img class="img2" src="../assets/pay/ynd.png" >
        <h1 class="money">￥1.50</h1>
        <p class="sussed" @click="back" >完成</p>
    </div>
</template>

<script>
    export default {
        name: "pay",
        methods:{
            back(){
                this.$router.replace("/home")
            }

        }
    }
</script>

<style scoped>
    body {
        font-family: "微软雅黑";
        font-size: 0.14rem;
        text-align: center;
    }
    .img1{
        margin-top: 0.3rem;
    }
    .paysussed{
        color: #008000;
    }
    .sussed{
        display: inline-block;
        width: 1.8rem;
        border: #008000 0.015rem solid;
        text-align: center;
        height: 0.3rem;
        line-height: 0.3rem;
        margin-top: 3rem;
        border-radius: 0.05rem;
        color: #008000;
    }

    .money{
        margin-top: 0.15rem;
    }
    .img2{
        margin-top: 0.5rem;
    }
    .pay{
        text-align: center;
    }
</style>