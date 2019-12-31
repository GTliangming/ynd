<template>
    <div class="module">
        <div v-for="(data,i) in this.orderInfo.data" :key="i" class="bag">
            <div class="good">
                <p class="topp"> <span><img src="../../../static/index/logo.jpg" alt="">一亩农产 > </span>
                    <span class="dd">买家已付款</span> </p>
                <div class="cen">
                    <div class="leftimg"><img :src="data.pic" alt=""></div>
                    <div class="rightname">
                        <div class="shop-name"> <div class="goodname">{{data.name}}</div></div>
                        <div class="goodprice">单价:{{data.price}}元</div>
                        <p class="totalprice">合计：￥{{data.total_price}}元</p>
                    </div>
                </div>
                <div class="button"><button>申请开票</button><button class="obtn">修改地址 </button></div>
            </div>
        </div>
        <div v-show="shopshow" class="null">
            <p @click="tomanagement"><img src="../../../static/order/titleh.png" alt="">如何查看和管理我的订单？</p>
            <img src="../../../static/order/bkg.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        name: "pending",
        data(){
            return {
                orderInfo:[],
                shopshow:false
            }
        },
        mounted: function () {
            this.afterRead()
        },
        methods:{
            afterRead() {
                fetch('http://39.98.112.201/order/get_orders/?order_status=0&start=0&end=20', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token":"MTc0ZmUxOWQyMmQ1NDVmYmIxNDMzMTZiMjQ5NTQwOWI="
                    },
                    // body: JSON.stringify({
                    //     order_status:4,
                    //     start:0,
                    //     end:20
                    // })
                }).then(resp=>resp.json()).then(data=>{
                    // console.log(data);
                    this.orderInfo=data;
                    if (this.orderInfo.data!==undefined && this.orderInfo.data.length > 0 ){
                        this.shopshow=false
                    }else if (this.orderInfo.data == undefined || this.orderInfo.data.length <= 0){
                        this.shopshow=true
                    }

                });
            },
            tomanagement(){
                this.$router.push("./management")
            }
        }
    }
</script>

<style scoped lang="scss">
    .bag{
        background-color: #F2F2F2;
        padding: 0.12rem 0 0;
    }
    .shop-name{
        overflow : hidden;
        height: 0.7rem;
        width: 2rem;
        padding: 0;
        .goodname{
            width: 2rem;
            overflow : hidden;
            text-overflow: ellipsis;
            padding: 0;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
        }
    }
    .totalprice{
        text-align: right;
        margin-top: 0.06rem;
        color: dimgrey;
    }
    .goodprice{
        text-align: right;
        width: 2rem;
        overflow: hidden;
        font-size: 0.13rem;
    }
    .good{
        width: 96%;
        // border: 1px solid black;
        font-size: 0.14rem;
        border-radius: 0.1rem;
        background-color: white;
        margin: 0rem auto;
        .topp{
            display: flex;
            height: 0.3rem;
            justify-content: space-around;
            padding: 0.05rem 0 0;
            span{
                flex: 1;
                text-align: left;
                img{
                    display: inline-block;
                    width: 0.3rem;
                    height: 0.3rem;
                    vertical-align: middle;
                }
            }
            .dd{
                padding-right: 0.2rem;
                text-align: right;
                line-height: 0.3rem;
                color: orangered;
            }
        }
        img{
            width: 1.2rem;
            height: 1.2rem;
            margin:0 0.1rem;
        }
        .cen{
            display: flex;
            margin: 0.1rem 0;
        }
        .button{
            text-align: right;
            button{
                margin:0rem 0.2rem 0.1rem 0;
                padding: 0.02rem 0.05rem;
                border: 1px solid black;
                background-color: white;
                border-radius: 0.2rem 0.2rem;
            }
            .obtn{
                color:red;
                border: 1px solid orangered;
            }
        }
    }
    .null{
        >p{
            width: 100%;
            height: 0.3rem;
            line-height: 0.3rem;
            text-align: center;
            padding: 0.1rem 0;
            img{
                display: inline-block;
                height: 0.2rem;
                vertical-align: middle;
            }
        }
        >img{
            width: 100%;
            padding-bottom: 55.8%;
        }
    }
    .module{
        width: 100%;
        height: 100%;
        background-color: #F2F2F2;
        padding-bottom: 0.2rem;
    }
</style>