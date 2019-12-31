<template>
    <div>
          <router-link to="/home">
            <div class="back"></div>
        </router-link>
        <div class="head">
            <span>采购大厅</span>
        </div>
        <div class="headImg">
            <img src="../../../static/cateHall/1.jpg" alt="">
            
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
  }
  .headImg{
      width: 100%;
      height: 1.7rem;
    //   background-image: url(../../../static/cateHall/2.png)
  }
   .headImg img{
      width: 100%;
      height: 100%;
      margin-top: 0.4rem;
  }
//   .headImg1{
//       width: 1rem;
//       height: 0.6rem;;
//   }
  .back{
    width: 0.5rem;
    height: 0.3rem;
    position: absolute;
    top: 0.1rem;
    z-index: 2
}
</style>
