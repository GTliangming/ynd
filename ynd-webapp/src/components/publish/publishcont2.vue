<template>
    <div class="cont">
        <div class="list">
            <img src="../../assets/publish/guanfang.png" class="icon">
            <div class="l1">
                <p>进一个小时有476位老板正在寻找生意机会，马上注册不要错过</p><br>
                <span>2019-11-21</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "publishcont"
    }
</script>

<style scoped>
    .cont{
        position: relative;
        margin-top: 0.12rem;
        height: 4.2rem;
    }
    /* .list img{
        width: 0.7rem;
    } */
    .l1{
        position: absolute;
        left:0.8rem;
        top: 0rem;
        width: 2.9rem;
        border-bottom: 0.01rem solid #C8C7CB;
    }
    .l1 p{
        display: inline-block;
        font-size: 0.13rem;
        width: 2rem;
    }
    .l1 span{
        color: #9D9D9D;
        display: inline-block;
        margin-top: 0.16rem;
        font-size: 0.13rem;
    }
        .icon{
            width: 0.5rem;
    height: 0.5rem;
    margin-top: 0.1rem;
    margin-left: 0.2rem;
    }
</style>