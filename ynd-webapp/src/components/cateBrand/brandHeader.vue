<template>
    <div class="cateBrand">
        <div class="header">
            <img src="../../assets/cateBrandImg/arrow-left.png" alt="" @click="go">
            <span>品牌馆</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: "brandHeader",
        methods:{
            go(){
                this.$router.push("./home")
            }
        }
    }
</script>

<style scoped>
.header{
    height: 0.47rem;
    width: 100%;
    background-color: #9AC767;
    /*position: relative;*/
    position:fixed;
    z-index: 999;
}
.header img{
    width: 0.4rem;
    height: 0.4rem;
}
.header span{
    color: white;
    font-size: 0.24rem;
    position: absolute;
    left: 1.5rem;
    margin: 0.07rem;
}
</style>