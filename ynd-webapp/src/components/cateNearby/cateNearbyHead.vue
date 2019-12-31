<template>
    <div>
        <div class="head">
             <router-link to="/">
            <div class="back"></div>
        </router-link>
            <span>附近好货</span>
        </div>
        <div class="headImg">
            <img src="../../../static/cateNearby/1.png" alt="">
        </div>
    </div>
</template>
<script>
    export default {
       
    }
</script>

<style scoped lang="scss">
    .head{
        height: 0.4rem;
        width: 100%;
        background: #f3f3f3;
        position: fixed;
        background-image: url(../../../static/cateHall/1.png);
        background-position: 0.1rem;
        background-size: 0.25rem 0.25rem;
        background-repeat: no-repeat;
        text-align: center;
        line-height: 0.4rem;
        font-size: 0.18rem;
        z-index: 3;
  }
  .headImg{
      width: 100%;
      height: 2.1rem;
  }
   .headImg img{
      width: 100%;
      height: 100%;
      
  }
  .back{
    width: 0.5rem;
    height: 0.3rem;
    position: absolute;
    top: 0.1rem;
}
</style>
