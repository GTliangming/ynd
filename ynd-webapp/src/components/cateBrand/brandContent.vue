<template>
    <div>
        <div v-for="(m,sid) in shops" :key="sid"  :sid="sid">
          
            <div class="nav">
                <div><span>{{m.title}}</span></div>
            </div>
            <div class="product-ul">
                <ul>
                    <li  v-for="(val,sid) in m.products" :key="sid" :sid="sid">
                          <router-link :to="'goodsInfo/'+val.id">
                        <a href="">
                            <img :src="val.imgurl" alt="">
                            <p class="van-multi-ellipsis--l2">{{val.name}}</p>
                            <span>{{val.price}}元/斤</span>
                        </a>
                        </router-link>
                    </li>
                </ul>
            </div>
            
        </div>
        <div class="advert">
            <img src="http://39.107.139.165/cateBrandImg/advert.jpg" alt="">
        </div>
<!--        商品列表类-->
        <div class="product-list">
            <router-link :to="'goodsInfo/'+data.id" v-for="(data,sid) in list" :key="sid" :sid="sid">
            <ul >
                <li>
                    <div class="pic">
                        <img :src="data.imgurl" alt="">
                    </div>
                    <div>
                        <span class="van-multi-ellipsis--l3">{{data.name}}</span>
                        <p class="product-list-price">
                            <span>￥<span>{{data.price}}</span>元/斤</span>
                            <button>马上抢</button>
                        </p>
                    </div>
                </li>
            </ul>
            </router-link>>
        </div>
    </div>
</template>

<script>
    export default {
        name: "brandContent",
        data:function () {
            return{
                list:[],// 页面的数据模型
                shops:[]
            }
        },
        methods: {
            getInfo(){
                this.$axios.get(this.HOST+'product/brand_pavilion/')
                    .then((response)=>{
                        this.list=response.data.data.list;
                        this.shops=response.data.data.shops
                        console.log(response.data.data.shops);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
        },
        mounted () {
            this.getInfo()
        }
    }
</script>

<style scoped>
.nav{
    height: 0.37rem;
    width: 100%;
    background-color: #b7e583;
    text-align: center;
}
.nav>div:first-child{
    width: 1.7rem;
    height: 0.38rem;
    background-color: #a1e485;
    position: relative;
    top: -0.08rem;
    margin: auto;
    border-radius:0.1rem ;
    color:white;
    font-size: 0.20rem;
    border-top-width:1.4rem

}
.nav>div:first-child>span{
    display: inline-block;
    margin-top: 0.05rem;
}
.product-ul ul li{
    width: 30%;
    height: 1.58rem;
    background-color: #f6f6f6;
    margin:0.12rem 0rem;
    border-radius: 0.06rem;
}
.product-ul ul li a{
    display: inline-block;
    color: black;
}
.product-ul ul li a p{
    color: gray;
    font-size: 0.12rem;
    height: 0.32rem;
    overflow: hidden;
    text-overflow: ellipsis;
    padding:0rem 0.05rem;
    width: 1.01rem;
}
.product-ul ul li a span{
    color: red;
    font-size: 0.14rem;
    padding:0rem 0.05rem;
    font-weight: 600;
}
.product-ul ul li a s{
    color: gray;
    font-size: 0.14rem;
}
img{
    width: 1.01rem;
    height: 0.9rem;
}
.product-ul{
    background-color: #94c260;
    width: 100%;
    /*text-align: center;*/
}
.product-ul ul{
    width: 90%;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    }
.advert{
    width: 100%;
    background-color: #94c260;
    text-align: center;
}
    .advert img{
        width: 3.43rem;
        height: 1.90rem;
    }
.product-list{
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
    padding:0rem 0.3rem 0rem 0.1rem;
    font-size: 0.12rem;
    color: gray;
}
.product-list-price button{
    background-color: red;
    border-radius: 0.5rem;
    color: white;
    height: 0.3rem;
    border: none;
    display: inline-block;
    position: absolute;
    left:1.3rem;
}
</style>