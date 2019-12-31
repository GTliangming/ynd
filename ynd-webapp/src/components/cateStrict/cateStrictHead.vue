<template>
    <div>
        <div class="head">
                <a href="/home">
            <div class="back"></div>
        </a>
            <span>优农严选</span>
        </div>
        <div class="headImg">
            <img class="headImg1" src="../../../static/cateHall/13.jpg" alt="">
            <!-- <img src="../../../static/cateStrict/2.png" alt=""> -->
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
     background-image: url(../../../static/cateGatherCheap/2.png);
     background-position: 0.1rem;
     background-size: 0.25rem 0.25rem;
     background-repeat: no-repeat;
     text-align: center;
     line-height: 0.4rem;
     font-size: 0.2rem;
     z-index: 3;
     color: #08327b;
     font-weight: 700;

  }
  .headImg{
      width: 100%;
      
  }
   .headImg img{
      width: 100%;
  }
    .back{
    width: 0.5rem;
    height: 0.3rem;
    position: absolute;
    top: 0.1rem;
    z-index: 2
}
.headImg1{
    height: 1.7rem;
    margin-top: 0.4rem;
}
</style>
