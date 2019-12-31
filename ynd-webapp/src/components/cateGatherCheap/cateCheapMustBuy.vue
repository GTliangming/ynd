<template>
    <div>
        <div class="mustBuy" v-for="(v,i) in data" :key="i">
            <div class="buy"> 
                <!-- <img :src="v.mustBuy" alt=""> -->
                <span>必买清单</span>
            </div>
            <div class="goods" v-for="(val,i) in data" :key="i">
                <router-link :to="'goodsInfo/'+val.id">
                    <img :src="val.small_pic" alt="">
                    <p class="goods-p">{{val.title}}</p>
                    <p class="money"><span>￥</span>{{val.price2}}</p>
                    <button>立马抢</button>
                </router-link>
            </div>
            
        </div>
    </div>
</template>
<script scoped>
    export default {
        props: ["data"],
        data(){
            return {}
        }
    }
</script>
<style scoped>
    .mustBuy{
        width: 100%;
        background-color: #f4f4f4;
    }
    .buy{
        background: white;
         width: 94%;
         height: 0.7rem;
         margin-left: 3%;
         background-image: url(../../../static/cateGatherCheap/333.png);
         background-repeat: no-repeat;
         background-size:2rem 0.7rem; 
         background-position-x: 0.8rem;
         position: relative;
    }
   .buy img{
       vertical-align: middle;
       margin-left: 0.9rem;
       margin-top: 0.1rem;
   }
   .buy span{
       font-size: 0.2rem;
       margin-left: 1.4rem;
       position: absolute;
       top: 0.2rem;
       color: white;
       font-weight: 700;
   }
   .goods{
       width: 94%;
       background: white;
       margin: 0 auto;
       border-bottom: 0.01rem solid #d8d8d8;
   }
   .goods img{
       width: 1rem;
       height: 1rem;
       margin-top: 0.15rem;
       margin-left: 0.05rem;
     
   }
   .goods-p{
       width: 60%;
       margin-left: 1.15rem;
        margin-top: -1rem;
        font-size: 0.14rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
   }
   .money{
       margin-left: 1.15rem;
       margin-top: 0.3rem;
       font-size: 0.2rem;
       color: #e95339;
        font-weight: 700;
   }
    .money span{
        font-size: 0.14rem;
    }
    button{
        margin-left: 2.5rem;
        position: relative;
        top: -0.3rem;
        width: 0.8rem;
        height: 0.3rem;
        border-radius: 0.3rem;
        background: red;
        color: white;
        border: none;
        font-size: 0.16rem;
    }
</style>