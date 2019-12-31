<template>
  <div class="bottombar">
    <router-link to="/home">
      <div @click="switchTo('/home')">
        <img :src="'/home/index'===$route.path?sysrc:sysrc1" alt="">
        <p>首页</p>
      </div>
    </router-link>
    <router-link to="/advgoodsshow">
      <div @click="switchTo('/advgoodsshow')">
        <img :src="'/advgoodsshow'===$route.path?flsrc:flsrc1" alt="">
        <p>分类</p>
      </div>
      </router-link>
    <router-link to="/publish">
      <div @click="switchTo('/publish')">
        <img :src="'/publish'===$route.path?gsrc:gsrc1" alt="">
        <p>消息</p>
      </div>
      </router-link>
    <router-link to="/advgoodscars">
      <div>
        <img :src="'/advgoodscars'===$route.path?gwcsrc1:gwcsrc" alt="">
        <p>购物车</p>
      </div>
      </router-link>
    <router-link to="/advhome">
      <div>
        <img :src="'/advhome'===$route.path?mysrc1:mysrc" alt="">
        <p>我的</p>
      </div>
      </router-link>
  </div>
</template>

<script>
    export default {
        name: "footbar",
      data(){
          return {
            sysrc:require("../../../../static/sy/sy.png"),
            sysrc1:require("../../../../static/sy/sy1.png"),
            flsrc:require("../../../../static/sy/fl.png"),
            flsrc1:require("../../../../static/sy/fl1.png"),
            gsrc:require("../../../../static/sy/g.png"),
            gsrc1:require("../../../../static/sy/g1.png"),
            gwcsrc:require("../../../../static/sy/gwc1.png"),
            gwcsrc1:require("../../../../static/sy/gwc.png"),
            mysrc:require("../../../../static/sy/my1.png"),
             mysrc1:require("../../../../static/sy/my.png")
          }
      },
      methods:{
        switchTo(path){
          this.$router.replace(path)
        }
      }
    }
</script>

<style scoped lang="scss">
  a{
    font-size:0.16rem;
    display: inline-block;
    width: 25%;
    flex: 1;
    color: black;
    text-align: center;
    img{
      display: block;
      border: none;
      width: 0.3rem;
      height: 0.3rem;
      padding: 0.05rem;
      margin: 0 auto;
    }
    p{
      font-size: 0.12rem;
    }
  }
  .bottombar{
    border-top: #f0f0f0 0.008rem solid;
    width: 100%;
    position: fixed;
    bottom:0px;
    display: flex;
    flex-direction: row;
    background-color: white;
    padding-bottom: 0.03rem;
    z-index: 9999;
    
  }
</style>
