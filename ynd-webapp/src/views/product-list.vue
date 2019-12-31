<template>
    <ul class="ul"><div v-if="data">
        <jx-shop-product @Allxuan="Allxuan(sid)"  @ceshi="ceshi(sid)" @del="del(sid)"  :data="data" :sid="sid" ></jx-shop-product>
        </div>
    </ul>
</template>
<script>
import item from './product-item'
export default {
    name: 'list',
    components:{
        'jx-shop-product':item
    },
    props:["data","sid"],
    methods:{
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
.ul{
    background-color: white;
}
</style>