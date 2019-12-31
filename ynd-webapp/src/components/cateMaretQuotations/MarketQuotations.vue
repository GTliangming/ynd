<template>
    <div class="MarketQuotations">
        <div class="header">
            <img src="../../assets/cateBrandImg/arrow-left.png" alt="" @click="fn">
            <span>全国行情</span>
        </div>
        <div class="Detailcontent">
            <router-link class="MarketQuotationsContent" v-for="(n,i) in data.data" v-lazy="n" :key="i" :to="'MQDetail/'+n.address">
                <p class="address">{{n.address}}</p>
                <div class="product-list">
                    <div class="list" v-for="(m,k) in n.products" :key="k">
                        <p class="product">{{m.product}}</p>
                        <p class="price">{{m.price}}</p>
                        <p class="time">{{m.time}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import { Lazyload } from 'vant';

    // options 为可选参数，无则不传
    Vue.use(Lazyload);
    import yndApi from '../../Apis/yndApi'
    export default {
        name: "MarketQuotations",
        data () {
            return {
                sid: '',
                data: [], // 页面的数据模型
            }
        },
        methods: {
            _initMQData () {
                yndApi.getMQInfoByUserId(data => {
                    console.log(data)
                    this.data = data
                })
            },
            fn() {
                this.$router.push("./home")
            },
        },
        created () {
            this._initMQData()
        }
    }
</script>

<style scoped>
    .MarketQuotations{
        width: 100%;
    }
    .header{
        height: 0.47rem;
        width: 3.75rem;
        background-color: #9AC767;
        position:fixed;
        z-index: 998;
    }
    .header img{
        width: 0.4rem;
        height: 0.4rem;
    }
    .header span{
        color: white;
        font-size: 0.24rem;
        position: absolute;
        left: 1.5rem;
        margin: 0.07rem;
    }
    .Detailcontent{
        width: 90%;
        padding-top: 0.5rem;
        margin: auto;
    }
    .Detailcontent a{
        color: black;
    }
    .address{
        padding: 0.03rem 0.1rem;
        border-left: 0.02rem darkgreen solid;
        font-size: 0.18rem;
        margin: 0.06rem 0rem;
    }
    .product-list {
        margin: 0.2rem 0;
    }
    .list{
        display: flex;
        justify-content: space-between;
        padding: 0.05rem;
        background-color:#F5F5F5;
        /*margin: 0.2rem 0rem*/
        font-size: 0.14rem;
    }
    .product{
        width: 1rem;
    }
    .price{
        color: orangered;
        width: 0.8rem;
    }
    .time{
        color:#626262;
        font-size: 0.12rem;
    }

</style>