<template>
    <div class="question">
        <div class="top">
            <div class="box">
                <img src="../../../assets/my/left_go.png" @click="back"/>
                <p>相关规章制度</p>
            </div>
        </div>
        <ex></ex>
    </div>
</template>

<script>
import ex from './explain'
export default {
    name: "question",
    components:{
        ex
    },
    methods:{
        back(){
            this.$router.push({path:'/advhome'})
        }
    }
}
</script>

<style scoped>
    .top{
        background-color: #F2F2F2;
        display: flex;
        justify-content: space-between;
        height: 0.3rem;
        padding: 0.06rem 0.14rem;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .box{
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        line-height: 0.3rem;
    }
    .box p{
        padding-left: 1.1rem;
    }
</style>