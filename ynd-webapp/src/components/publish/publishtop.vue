<template>
    <div class="publishtop">
        <p class="topp">消息</p>
        <div class="all">
            <div v-for="(n,i) in message" @click="chg(i)"  :class="{active:i === isActive}" :key="i">
                <img :src=n.pic class="icon">
                <p>{{n.p}}</p>
            </div>
        </div>
        <publishcont  v-show="isActive===0"></publishcont>
        <publishcont2 v-show="isActive===1"></publishcont2>
        <publishcont3 v-show="isActive===2"></publishcont3>
    </div>
</template>

<script>
    import publishcont from "./publishcont";
    import publishcont2 from "./publishcont2";
    import publishcont3 from "./publishcont3";
    export default {
        name: "publishtop",
        data(){
            return{
                isActive : 0,
                message:[
                    {p:"促销活动",pic:require("../../assets/publish/cuxiao.png")},
                    {p:"官方消息",pic:require("../../assets/publish/guanfang.png")},
                    {p:"系统通知",pic:require("../../assets/publish/xiton.png")}
                ]


            }
        },
        methods:{
            chg(i){
                this.isActive=i;
            },

        },
        components:{
            publishcont,
            publishcont2,
            publishcont3
        }
    }
</script>

<style scoped>
    .top{
        width: 100%;
        height: 1.5rem;
    }
    .topp{
        font-size: 0.2rem;
        padding: 0.3rem 0.2rem;
    }
    .all{
        border-bottom: 0.13rem solid #F0F0F0;
        width: 100%;
        display: flex;
        justify-content: space-around;
        height: 1rem;
    }
    .all div{
        text-align: center;
    }
    .all p{
        margin-top: 0.1rem;
        font-size: 0.13rem;
    }
    .icon{
        width: 0.4rem;
        height: 0.4rem;
    }
</style>