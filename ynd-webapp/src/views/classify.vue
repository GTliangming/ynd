<template>
    <div>
        <div class="header">
            <i><img src="../../static/index/icon_6.png" alt=""></i>
            <span class="money">我的余额</span>
            
        </div>
        <div class="con">
            <p class="con_title">可用余额</p>
            <p class="con_price">￥0.00</p>
        </div>
        <footbar></footbar>
    </div>
</template>

<script>
    import footbar from "../components/common/footerbar/footbar";
    export default {
        name: "classify",
        components:{
            footbar
        }
    }
</script>

<style scoped lang="scss">
.header{
    width: 100%;
    height: 0.5rem;
    background-color: #F8F8F8;
    display:flex;
}
.header i{
    width: 0.5rem;
    height: 0.4rem;
    display: inline-block;
    position: relative;
    top: 0.05rem
}
.header img{
    width: 100%;
    height: 100%;
}
.money{
    width: 70%;
    text-align: center;
    display: inline-block;
    line-height: 0.5rem
}
.money_info{
    text-align: center;
    display: inline-block;
    line-height: 0.5rem;
    color: gray;
    font-size: 0.14rem
}
.con{
    text-align: center;
    padding-top: 1rem;
}
.con_title{
    font-size: 0.16rem;
    color: gray
}
.con_price{
    font-size: 0.5rem;
    margin: 0.1rem 0rem;
}
.con_btn{
        width: 2rem;
    height: 0.3rem;
    border: none;
    background-color: gainsboro;
    outline: none
}
</style>
