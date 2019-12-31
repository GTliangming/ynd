<template>
    <div class="searchList">
            <div class="box">
                <i class="logo_box" >
                    <img src="../assets/icon_4.png" @click="back"/>
                </i>
                <!--   搜索框-->
                <div class="seachall">
                    <input type="text" class="search" placeholder="请输入内容"  v-model="searchString" @click="go"/>
                    <button>搜索</button>
                </div>

                <i class="logo_box2">
                    <img src="../assets/icon_3.png" />
                </i>
            </div>
        <!--        商品列表类-->
        <div class="product-list">
             <router-link :to="'goodsInfo/'+data.id" v-for="(data,sid) in list" :key="sid" :sid="sid">
            <ul >
                <li>
                   
                    <div class="pic">
                        <img :src="data.small_pic" alt="">
                    </div>

                    <div>
                        <span>{{data.title}}</span>
                        <p class="product-list-price">
                            <span>￥<span>{{data.price}}</span></span>
                            <s>{{data.costPrice}}</s>
                            <button>马上抢</button>
                        </p>
                    </div>
                   
                </li>
            </ul>
             </router-link>
            <span @click="loading" class="loading">查看更多</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: "searchList",
        data(){
            return{
                searchString: "",
                // 数据模型，实际环境你可以根据 Ajax 来获取
                list: [],
                num:0,
                start:0,
            }
        },
        methods:{
            getInfo() {
                let value=this.$route.query.value;
                fetch('http://39.98.112.201/product/search/?kw='+value+'start='+this.start, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },

                }).then(resp=>resp.json()).then(data=>{
                    console.log(data.data);
                    this.list=data.data;
                });

            },
            loading(){
                this.num+=20;
                this.start+=this.num;
                let value=this.$route.query.value;
                fetch('http://39.98.112.201/product/search/?kw='+value+'start='+this.start, {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                    },

                }).then(resp=>resp.json()).then(data=>{
                    console.log(data.data);
                    this.list=this.list.concat(data.data);
                });

            },

            back(){
                this.$router.push('/search')
            },
            go(){
                this.$router.push('/search')
            }
        },
        mounted () {
            this.getInfo()
        },

    }
</script>

<style scoped>
    .search {
        width: 2.5rem;
        height: 0.26rem;
        background-color: #eaebed;
        border-radius: 0.1rem;
        margin-top: 0.15rem;
        background-image: url(../assets/icon_2.png);
        background-size: contain;
        background-repeat: no-repeat;
        outline: none;
        padding-left: 0.3rem;
        border: 0.01rem solid green;
    }
    .seachall{
        position: relative;
    }
    .seachall button{
        position: absolute;
        right: 0.04rem;
        top: 0.16rem;
        border: none;
        border-radius: 0.05rem;
        height: 0.25rem;
        width: 0.5rem;
    }
    .box {
        width: 100%;
        display: flex;
        justify-content: space-around;
        justify-items: center;
        position: fixed;
        z-index: 999;
        background-color: white;
    }
    .logo_box {
        width: 0.3rem;
        height: 0.2rem;
        margin-top: 0.2rem;

    }
    .logo_box2 img {
        width: 100%;
        height: 100%;
    }
    .logo_box img {
        width: 100%;
        height: 100%;
    }
    .logo_box2 {
        width: 0.27rem;
        height: 0.27rem;
        margin-top: 0.15rem;
    }
    .product-list{
        padding-top: 0.5rem;
        width: 100%;
    }
    .product-list ul{
        width: 90%;
        height: 1.35rem;
        margin: auto;
        padding-top: 0.25rem;
    }
    .product-list ul li{
        display: flex;
    }
    .product-list ul li .pic{
        width: 1.3rem;
        height: 1.2rem;
        margin-right: 0.2rem;
    }
    .product-list ul li img{
        display: inline-block;
        width: 1.3rem;
        height: 1.2rem;
    }
    .product-list ul li>div>span{
        margin-bottom: 0.3rem;
        display: inline-block;
        overflow: hidden;
        height: 0.6rem;
    }
    .product-list-price{
        position: relative;
    }
    .product-list-price span{
        color: red;
        font-size: 0.18rem;
        font-weight: 600;
    }

    .product-list-price s{
        display: inline-block;
        padding:0rem 0.3rem 0rem 0.2rem;
        font-size: 0.12rem;
        color: gray;
    }
    .product-list-price button{
        background-color: red;
        border-radius: 0.1rem;
        color: white;
        /* width: 0.6rem; */
        height: 0.3rem;
        border: none;
        display: inline-block;
        position: absolute;
        left: 1.3rem;
        font-weight: 600;
    }
    .loading{
        display: block;
        margin: 0.2rem 0rem ;
        text-align: center;

    }
</style>