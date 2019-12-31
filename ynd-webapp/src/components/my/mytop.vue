<template>
  <div>
    <div class="top">
        <div class="a1" >
            <img class="tt1" src="../../assets/my/my_tt1.png" >
            <p>点击登录</p>
        </div>
        <div class="shezhi">
            <img src="../../assets/my/my_sz.png" >
        </div>
        <div class="my_top_2">
            <img class="my_rz" src="../../assets/my/my_rz.png" >
            <p class="p1">我的认证</p>
            <img class="my_right" src="../../assets/my/my_right.png" >
            <p class="p2">未认证</p>
        </div>
    </div>
   </div>
</template>

<script>
    export default {
        name: "mytop"
    }
</script>

<style scoped>
    .top{
        width: 100%;
        height: 1.5rem;
        background-image: url(../../assets/my/my_tt.gif);
        background-size: 100%;
        background-position-y: -2rem;
        position: relative;
    }
    *{
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 26.67vw;
    }

    body {
        font-family: "微软雅黑";
        font-size: 0.14rem;
        background-color: #EFEFEF;
    }
    .tt1{
        width: 0.5rem;

    }
    .a1{
        position: absolute;
        top: 0.3rem;
        left: 0.2rem;
        display: inline-block;
    }
    .a1 p{
        display: inline-block;
        position: absolute;
        top: 0.15rem;
        left: 0.7rem;
        width: 2rem;
        font-weight: 500;
    }
    .shezhi img{
        width: 0.2rem;
        position: absolute;
        right: 0.2rem;
        top: 0.15rem;
    }
    .my_top_2{
        height: 0.45rem;
        width: 100%;
        background-color: white;
        position: absolute;
        bottom: 0rem;
    }
    .my_rz{
        width: 0.32rem;
        position: absolute;
        left: 0.2rem;
        top: 0.07rem;
    }
    .p1{
        position: absolute;
        left: 0.7rem;
        top: 0.11rem;
        display: inline-block;
    }
    .my_right{
        position: absolute;
        right: 0.07rem;
        width: 0.3rem;
        top: 0.1rem;
    }
    .p2{
        position: absolute;
        right: 0.4rem;
        top: 0.2rem;
        color: #999999;
        display: inline-block;
        font-size: 0.1rem;
    }
</style>