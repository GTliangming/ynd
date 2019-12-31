<template>
<div class="margin">
        <div class="shop-group-item">
            <!-- <div class="shop-name">
                <input type="checkbox"
                       v-model="data.checked"
                      @change="shopCheched(sid)"
                      
                       class="check goods-check shopCheck">
                <h4>
                    <a href="#">{{data.shopName}}</a>
                </h4>
                <div class="coupons">
                    <span>领券</span>
                    <em>|</em>
                    <span>编辑</span>
                </div>
            </div> -->


            <!-- 商品列表  插入页面布局-->
            
            <jx-shop-product-list v-if="data" @Allxuan="Allxuan" @ceshi="ceshi" @del="del" :data="data" :sid="sid">

            </jx-shop-product-list>
            </div>


            <!-- <div class="shopPrice">
                本店总计：
                ￥<span class="shop-total-amount ShopTotal">16000</span>
            </div> -->


        </div>

</template>
<script>
import list from './product-list'
export default {
    name: 'shop',
    components:{
        'jx-shop-product-list':list
    },
    props:["data","sid"],
    methods:{
    //    shopCheched(sid){
    //        this.$emit("xuan",sid)
    //    },
       Allxuan(sid){
          this.$emit("Allxuan",sid)
           },
        ceshi(sid){
          this.$emit("ceshi",sid)
           },
       del(sid){
           this.$emit("del",sid)
       }
    }
}
</scripte>
<style scoped>

</style>
