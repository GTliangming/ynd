<template>
    <div>
            <div class="buy">
                <span>优选推荐</span>
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
         width: 100%;
         height: 0.6rem;
         background-image: url(../../../static/cateStrict/111.png);
         background-repeat: no-repeat;
         background-size:100% 0.6rem; 
    }
    .buy span{
        font-size: 0.2rem;
       margin-left: 1.5rem;
       position: relative;
       top: 0.15rem;
       color: white;
       font-weight: 700;
    }
   .buy img{
       width: 100%;
       vertical-align: middle;
       /* margin-left: 0.9rem; */
       margin-top: 0.1rem;
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