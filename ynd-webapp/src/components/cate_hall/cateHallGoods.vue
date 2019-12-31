<template>
    <div>

            <div class="goods">
                <div v-for="(v,i) in data" :key="i" class="a">
                    <router-link :to="'goodsInfo/'+v.id">
                    <img class="g" :src="v.small_pic" alt="">
                    <p class="p">{{v.title}}</p>
                    <p class="money"><span>￥</span>{{v.price2}}</p>
                    <!-- <p class="yx">4.1w</p> -->
                    <img class="chat" src="../../../static/cateHall/6.png" alt="">
                    </router-link>
                </div>
            </div>


    </div>
        
</template>
<script>
    export default {
        props: ["data"],
        data(){
            return{
               
            }
        }
    }
</script>
<style scoped>
    .goods{
        display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       background-color: #f3f3f3;
       
    }
  .goods div{
      width: 47%;
      margin-top: 0.1rem;
      margin-left: 2%;
      
  }
  .a{
      background-color: white;
      border-radius: 10%;
  }
  .p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
  .g{
      width: 100%;
      border-radius: 10%;
  }
  .money{
      font-size: 0.2rem;
      color: #e95339;
      font-weight: 700;
      margin-top: 0.1rem;
  }
  .money span{
      font-size: 0.14rem;
  }
  .chat{
      width: 0.3rem;
      height: 0.3rem;
      vertical-align: middle;
      margin-left: 1.3rem;
      margin-top: -0.4rem;
  }
  .yx{
      color: #8a8787;
  }
</style>