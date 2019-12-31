<template>
    <div class="ordertop">

        <img src="../../assets/order/back2.png" @click="back">	<h3>确 认 订 单</h3>
    </div>
</template>

<script>
    export default {
        name: "ordertop",
        methods:{
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>
    .ordertop img{
        display: inline-block;
        width: 0.22rem;
        margin-left: 0.2rem;
        margin-top: 0.2rem;
    }
    .ordertop h3{
        display: inline-block;
        margin-left: 1rem;
    }
</style>