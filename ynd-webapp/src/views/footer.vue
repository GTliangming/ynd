<template>
    <div class="payment-bar">
        <div class="all-checkbox">
            <input type="checkbox" 
            v-model="data.data.is_all_selected"
            @click="AllSelect"
            
            class="check goods-check"/>
            全选
        </div>
        <div class="shop-total">
            <strong>
                总价：
                <i id="AllTotal" class="total">{{data | totalCount}}</i>
            </strong>
            <!-- <span>减免：100</span> -->
        </div>
        <router-link :to="yy" >
            <div class="settlement">结算</div>
        </router-link>
        
    </div>
</template>
<script>

export default {
    name: 'myfooter',
    
    props:["data","yy"],
    methods:{
       AllSelect(){
           this.$emit("cAll")
       }
    //    allse(){
    //        this.$emit("allse")
    //    }
    },
    filters:{
        totalCount(msg){
            let total =0 
            if(msg.data.carts){
                 msg.data.carts.forEach(function(product,pid){
                     if(product.is_selected){
                       total += (product.goods_price * product.goods_num )
                     }
                 })
            
            }
            
            return total
        }
    }
    
}
</scripte>
<style scoped>

</style>