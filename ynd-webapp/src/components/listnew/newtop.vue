<template>
    <div class="top">
        <img src="../../assets/new/newtop.gif" class="t1" >
        
        <img src="../../assets/new/back.png" class="t2" @click="back">
    </div>
</template>

<script>
    export default {
        name: "newtop",
        methods:{
            back(){
                this.$router.go(-1)
            }
        }
    }
</script>

<style scoped>
    .top{
        width: 100%;
        height: 2rem;
        background: linear-gradient(to right,  greenyellow ,yellow);
        text-align: center;
        position: relative;
        border-radius: 0.15rem;
    }

    .t1{
        width: 3rem;
        position: absolute;
        top: -0.5rem;
        left: 0.3rem;
    }
    .t2{
        position: absolute;
        z-index: 999;
        left: 0.1rem;
        top: 0.1rem;
        opacity: 0.4;
    }
</style>