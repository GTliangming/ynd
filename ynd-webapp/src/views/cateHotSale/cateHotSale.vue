<template>
    <div class="cateHotSale">
        <cate-HotSaleHeader></cate-HotSaleHeader>
        <cate-HotSaleContent></cate-HotSaleContent>
    </div>

</template>

<script>
    import HotSaleHeader from "../../components/cateHotSale/HotSaleHeader"
    import HotSaleContent from "../../components/cateHotSale/HotSaleContent"

    export default {
        name: "cateHotSale",
        components:{
            'cate-HotSaleHeader':HotSaleHeader,
            'cate-HotSaleContent':HotSaleContent
        }

    }
</script>

<style scoped>
    .cateHotSale{
        width: 100%
    }
</style>