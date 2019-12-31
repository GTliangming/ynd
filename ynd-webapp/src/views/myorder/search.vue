<template>
    <div class="bigbox">
        <div class="header">
            <div><img @click="back" class="back" src="../../../static/order/back.png" alt=""></div>
            <span><input type="text" name="" placeholder="输入订单号或关联词"></span>
            <div class="qx" @click="back"><p>取消</p></div>
        </div>
        <div class="null">
            <img src="../../../static/order/bkg.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        methods:{
            back(){
                window.history.go(-1)
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
    p{
        line-height: 0.5rem;
        padding-right: 0.05rem;
    }
    }
    span{
        display: inline-block;
        flex: 8;
        text-align: center;
        line-height: 0.5rem;
        font-size: 0.19rem;
        input{
            width: 75%;
            height: 0.24rem;
            padding-left: 0.25rem;
            border: solid black 0.005rem;
            background: url("../../../static/order/inp-search.png") no-repeat;
            background-size: 0.25rem 0.25rem;
        }
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
        padding-bottom: 85.5%;
        
    }
    }
</style>