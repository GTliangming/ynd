<template>
    <div class="pages3_top">
        <div class="top">
            <img src="../../assets/bannerPages_imgs/arrows.png" @click="go"/>
            <p>根茎专卖</p>
            <img src="../../assets/bannerPages_imgs/share.png"/>
        </div>
        <img src='../../assets/bannerPages_imgs/pages3_2.jpg' class="tu1"/>
        <div class="con1">你也想卖货 点这里</div>
    </div>
</template>

<script>
export default {
    name: "pages3_top",
    methods:{
        go(){
            this.$router.push( { path:'/home'} )
        }
    }
}
</script>

<style scoped>
    .top{
        width: 100%;
        background-color: #D6F7BE;
        display: flex;
        justify-content: space-between;
        position: fixed;
        top: 0;
        margin-bottom: 0.2rem;
        background-image: url("../../assets/bannerPages_imgs/pages3_1.jpg");
        background-repeat: no-repeat;
        background-size: cover;
    }
    .top img{
        display: inline-block;
        width: 0.3rem;
        height: 0.3rem;
        margin: auto 0.12rem;
    }
    .top p{
        font-size: 0.17rem;
        line-height: 0.48rem;
        font-weight: bold;
        color: #03401C;
    }
    .tu1{
        margin-top: 0.48rem;
        height: 3.57rem;
        width: 100%;
    }
    .con1{
        font-size: 0.2rem;
        color: #00592E;
        width: 2rem;
        background-color: #D2F5CA;
        border-radius: 0.1rem;
        margin : 0.03rem auto;
        text-align: center;
    }
    .con2_box img{
        height: 1rem;
        border-radius: 0.08rem;
    }
    .con2_box p{
        margin-left: 0.04rem;
        height: 0.384rem;
    }
    .con2_box span{
        font-weight: bold;
        color: darkred;
        margin-left: 0.03rem;
    }
    .con2_box s{
        color: #000;
        margin-left: 0.1rem;
        font-weight: 500;
    }
</style>