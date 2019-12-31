<template>
    <div>
        <div class="header">
            <div><img @click="back" class="back" src="../../../static/order/back.png" alt=""></div>
            <span>订单管理</span>
            <div></div>
        </div>
        <img src="../../../static/order/management.png" alt="">
    </div>
</template>

<script>
    export default {
        name: "management",
        methods:{
            back(){
                window.history.go(-1)
            }
        }
    }
</script>

<style scoped lang="scss">
img{
    width: 100%;
        margin-top: 0.52rem;
}
.header{
    width: 100%;
    background-color:#F2F2F2;
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
</style>