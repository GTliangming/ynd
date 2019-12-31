<template>
    <li class="li">
        <div class="shop-info">
                         <!-- 双向数据绑定暂时不写 -->
                        <!--  -->
                        <input type="checkbox" v-model="data.is_selected"
                               @change="Allxuan(sid)"
                               @click="ceshi(sid)"
                               class="check goods-check goodsCheck"/>
                        <div class="shop-info-img">
                            <a href="#">
                                <img :src="data.goods_pic"/>
                            </a>
                        </div>
                        <div class="shop-info-text">
                            <h4>{{data.goods_title}}
                            </h4>
                            <div class="shop-brief">
                                <!-- <span>重量:3.3kg | true</span>
                                <span>颜色:标配版</span>-->
                                <span @click="del(sid)" class="span">删除</span> 
                            </div>
                            <div class="shop-price">
                                <div class="shop-pices">
                                    ￥<b class="price">{{data.goods_price}}元/斤</b>
                                </div>
                                <div class="shop-arithmetic">
                                    <a class="minus" @click="operate(sid,0)">-</a>
                                    <span class="num">{{data.goods_num}}</span>
                                    <a class="plus" @click="operate(sid,1)">+</a>
                                </div>
                            </div>
                        </div>
                    </div>
    </li>
</template>
<script>

export default {
    name: 'productList',
    props:["data","sid"],
    methods:{
        operate(sid,flag){
            this.$event.$emit("add",sid,flag)
        },
        del(sid){
            this.$emit("del",sid)
        },
        Allxuan(sid){
            this.$emit("Allxuan",sid)
        },
         ceshi(sid){
            this.$emit("ceshi",sid)
        }
    }
    
}
</scripte>
<style scoped>
.li{
    margin-bottom: .1rem;
}
.minus{
    position: absolute;
    left: 0;
    top: 0;
}
.num{
    display: inline-block;
    position: absolute;
    left: 0.3rem;
    top: 0;
    text-align: center;
}
.plus{
    position: absolute;
    right: 0;
    top: 0;
}
.shop-brief{
    position: relative;
}
.span{
    display: inline-block;
    width: .4rem;
    height:.2rem;
    color:red;
    
    position: absolute;
    right: .2rem;
    bottom: .03rem;
    line-height: .2rem;
    text-align: center;
}
</style>