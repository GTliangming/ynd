<template>
    <div class="pages4_footer">
        <div class="foot_explain">
            <p class="title">活动说明:</p>
            <div v-for="list in footExplain" class="exp">
                <p class="list1"><img :src="list.pic"/>{{list.title}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pages4_footer",
    data(){
        return{
            footExplain:[
                { "pic":require("../../assets/bannerPages_imgs/2.png"), "title":"本此活动时间：2019年11月12日到11月27日24:00" },
                { "pic":require("../../assets/bannerPages_imgs/shuzi.png"), "title":"本此活动解释权归平台所有" }
            ]
        }
    }
}
</script>

<style scoped>
    .foot_explain{
        height: 0.7rem;
        width: 3.4rem;
        background-color: #ffffff;
        font-size: 0.14rem;
        margin: 0.2rem auto 0.2rem;
        padding: 0.1rem 0 0.1rem 0.1rem;
        border-radius: 0.1rem;
    }
    .exp{
        /*margin-top: -0.2rem;*/
        padding: 0.02rem 0;
    }
    .pages3_footer{
        padding-bottom: 0.02rem;
    }
</style>