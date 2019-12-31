<template>
    <div>
        <div class="header">
            <img src="../../assets/cateBrandImg/arrow-left.png" alt="" @click="fn">
            <span>产地行情</span>
        </div>
        <div class="Detailcontent">
            <p class="address">{{address}}</p>
            <div class="MarketQuotationsContent" v-for="(n,i) in data.data"  :key="i">
                <p class="product">{{n.product}}</p>
                <p class="price">{{n.price}}</p>
                <p class="time">{{n.time}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MQDetail",
        data () {
            return {
                sid: '',
                data: [],// 页面的数据模型
                address:"",
            }
        },
        methods: {
            getInfo(){
                let address=this.$route.params.id;
                this.address=address;
                this.$axios.get(this.HOST+'market/area_market?area='+address)
                    .then((response)=>{
                        this.data=response.data;
                        console.log(respons.data);

                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            fn(){
                this.$router.push('/cateMaretQuotations')
            }

        },
        mounted () {
            this. getInfo()
        }
    }
</script>

<style scoped>
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
        color: black;
        margin: auto;
    }
    .address{
        padding: 0.03rem 0.1rem;
        border-left: 0.02rem darkgreen solid;
        font-size: 0.18rem;
        margin: 0.06rem 0rem;
    }
    .MarketQuotationsContent{
        margin: 0.2rem 0;
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