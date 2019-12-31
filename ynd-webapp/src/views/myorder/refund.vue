<template>
    <div class="bigbox">
        <div class="header">
            <div><img @click="back" class="back" src="../../../static/order/back.png" alt=""></div>
            <span>退款/售后</span>
            <div></div>
        </div>
        <div class="null">
            <p @click="tomanagement"><img src="../../../static/order/titleh.png" alt="">如何查看和管理我的订单？</p>
            <img src="../../../static/order/bkg.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "refund",
        methods:{
            back(){
                window.history.go(-1)
            },
            tomanagement(){
                this.$router.push("./order/management")
            }
        }
    }
</script>

<style scoped lang="scss">
    .header{
        width: 100%;
        /*background-color:#F2F2F2;*/
        height: 0.5rem;
        display: flex;
        div{
            display: inline-block;
            flex: 1;
            height: 0.5rem;
            text-align: center;
            .back{
                width: 0.25rem;
                display:block;
                margin: 0.12rem auto;
            }
        }
        span{
            display: inline-block;
            flex: 8;
            text-align: center;
            line-height: 0.5rem;
            font-size: 0.19rem;
        }
    }
    .null{
        width: 100%;
        height: 100%;
        background-color: #F2F2F2;
            margin-top: 0.52rem;
        >p{
            width: 100%;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            padding: 0.1rem 0;
            img{
                display: inline-block;
                height: 0.2rem;
                vertical-align: middle;
            }
        }
        >img{
            width: 100%;
            padding-bottom: 72%;
        }
    }
</style>