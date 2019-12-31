<template>
    <div class="cont" v-if="address">
        <img src="../../assets/order/poisition.png" >
        <h4>收货地址</h4><br>
        <p class="username">{{address.user}}</p> <p class="userphone">{{address.phone}}</p>
        <p class="useraddress">{{address.addr}}</p>
    </div>
</template>

<script>
    export default {
        name: "ordercont",
        props:["address"],
        mounted(){
            
        }
    }
</script>

<style scoped>
    .cont{
        width: 3.6rem;
        height: 1.2rem;
        background-color: white;
        margin-left: 0.1rem;
        margin-top: 0.2rem;
        border-radius: 0.1rem;
    }
    .cont img{
        width: 0.2rem;
        display: inline-block;
        margin-left: 0.1rem;
        margin-top: 0.15rem;
    }
    .useraddress{
        color: #959595;
        margin-top: 0.1rem;
         width: 3rem;
       white-space:nowrap;
        overflow:hidden;
         text-overflow:ellipsis;
    }
    .cont h4{
        display: inline-block;
    }
    .cont p{
        margin-left: 0.15rem;
    }
    .username{
        margin-top: 0.15rem;
        display: inline-block;
    }
    .userphone{
        display: inline-block;
    }

</style>