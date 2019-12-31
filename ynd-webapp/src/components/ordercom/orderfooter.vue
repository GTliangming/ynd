<template>
    <div class="footer">
        <p class="total" v-if="goods">合计：<span>￥{{goods.num.slice(0,-2)*goods.price}}</span></p>
        <button  type="button" class="btn" @click='create' >提交订单</button>
       
    </div>
</template>

<script>
    export default {
        name: "orderfooter",
        data() {
            return {
                scs:[]
            }
        },
           props:["goods"],
        methods: {
            create(){
                   this.$emit("create");     
                }


        }
    }
</script>

<style scoped>
    .footer{
        width: 100%;
        height: 0.8rem;
        background-color: white;
        position: fixed;
        bottom: 0rem;
    }
    .total{

    }
    .btn{
        position: absolute;
        right: 0.3rem;
        top: 0.2rem;
        display: inline-block;
        width: 1.2rem;
        height: 0.4rem;
        border-radius: 0.5rem;
        border: none;
        color: white;
        font-size: 0.15rem;
        background: linear-gradient(to right,#EE7D30 ,#EC6029);
    }
    .total{
        position: absolute;
        top: 0.2rem;
        left: 0.2rem;
        font-size: 0.15rem;
    }
    .total span{
        font-size: 0.2rem;
        color:red ;
    }
</style>