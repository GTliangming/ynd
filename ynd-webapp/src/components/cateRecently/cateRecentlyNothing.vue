<template>
    <div class="nothing">
        <div class="lookfor">
            <div class="lookfor1">还没有相关信息哦</div>
            <div class="lookfor2">大家都在搜</div>
        </div>
        <div class="Jungle">
            <p>东方红柑橘</p>
            <p>苹果</p>
            <p>柑桔</p>
            <p>山东苹果</p>
            <p>山西苹果</p>
            <p>河南红薯</p>
            <p>落山县苹果</p>
            <p>湖南柑橘</p>
            <p>蜜薯</p>
            <p>陕西苹果</p>
        </div>
        
    </div>
</template>
<script>
import cateRecentlyGoods from "../../components/cateRecently/cateRecentlyGoods"
    export default {
    }
</script>
<style scoped>
    .nothing{
        text-align: center;
    }
    .lookfor1{
        margin: 1rem 0.7rem 0.2rem;
        height: 0.75rem;
        border-bottom: 0.01rem solid #ece9e9;
    }
    .lookfor2{
        margin: 0.4rem 0.9rem 0.2rem;
    }
    .Jungle{
        width: 2.75rem;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0 auto;
    }
    .Jungle p{
        border: 0.01rem solid #f8f7f7;
        margin-left: 0.2rem;
        margin-top: 0.1rem;
        height: 0.3rem;
        line-height: 0.3rem;
    }
</style>
