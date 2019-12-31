<template>
    <div class="bigbox">
        <div class="header">
            <div><img @click="back" class="back" src="../../../static/order/back.png" alt=""></div>
            <span>采购订单</span>
            <div @click="search"><img class="search" src="../../../static/order/search.png" alt=""></div>
        </div>
        <div class="classifytitle">
            <p @click="acutmodule()" :class="{select:this.allordershow==1}">全 部</p>
            <p @click="ocutmodule()" :class="{select:this.allordershow==2}">待付款</p>
            <p @click="pcutmodule()" :class="{select:this.allordershow==3}">待发货</p>
            <p @click="wcutmodule()" :class="{select:this.allordershow==4}">待收货</p>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
    import allorder from '../../components/order/allorder'
    import obligation from '../../components/order/obligation'
    import pending from '../../components/order/pending'
    import awaitReceive from '../../components/order/awaitReceive'
    export default {
        name: "order",
        components:{
            allorder,
            obligation,
            pending,
            awaitReceive
        },
        data(){
            return {
                allordershow:1
            }
        },
        methods:{
            acutmodule(){
                this.$router.push("./allorder"),
                this.$router.push("./allorder"),
                this.allordershow=1
            },
            ocutmodule(){
                this.$router.push("./abligation"),
                this.allordershow=2
            },
            pcutmodule(){
                this.$router.push("./pending"),
                this.allordershow=3
            },
            wcutmodule(){
                this.$router.push("./awaitReceive"),
                this.allordershow=4
            },
            back(){
                this.$router.push({
                    path: '/advhome'
                })
            },
            search(){
                this.$router.replace("./search")
            }
        }
    }
</script>

<style scoped lang="scss">
.bigbox{
    width: 100%;
    margin-top: 0.52rem;
    .header{
        width: 100%;
        background-color:#F2F2F2;
        height: 0.5rem;
        display: flex;
        div{
            display: inline-block;
            flex: 1;
            height: 0.5rem;
            text-align: center;
            .back{
                width: 0.25rem;
                display:block;
                margin: 0.12rem auto;
            }
            .search{
                width: 0.3rem;
                display:block;
                margin: 0.1rem auto;
            }
        }
        span{
            display: inline-block;
            flex: 8;
            text-align: center;
            line-height: 0.5rem;
            font-size: 0.19rem;
        }
    }
    .classifytitle{
        display: flex;
        height: 0.4rem;
        justify-content: space-around;
        p{
            width: 15%;
            text-align: center;
            line-height: 0.3rem;
        }
        .select{
            color: orangered;
            border-bottom: 0.01rem solid orangered;
        }
    }
}
</style>