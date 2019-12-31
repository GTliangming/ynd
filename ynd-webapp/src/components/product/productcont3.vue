<template>
    <div>
    <div class="cont3">
        <p class="alllike">————用户评价—————</p>

        <div class="yh">
            <div><img src="../../assets/publish/e1.png" ><p class="firstp">{{detail.user}}</p></div>
            <p>{{access}}</p>
            <p class="clock">{{detail.datetime}}</p>
        </div>


    </div>
    </div>
</template>

<script>
    export default {
        name: "productcont3",
        props:["detail","access"],
        data(){
            return{
                
            evaluate:{
                name:"大猫",
                content:"货非常好，一级棒",
                date:"2019-11-20",
            }
          }
        },
    }

</script>

<style scoped>
    .alllike{
        margin-left: 0.9rem;
        margin-top: 0.2rem;
        font-family: Corbel;
        display: inline-block;color: #C8C7CB;
    }
    .yh{
        margin-top: 0.3rem;
        margin-left: 0.2rem;
    }
    .yh p{
        margin-top: 0.05rem;
        font-size: 0.125rem;
    }
    .firstp{
        display: inline-block;
    }
    .yh img{
        width: 0.2rem;
        border-radius: 50px;
    }
    .cont3{
        border-top: 0.15rem solid #EFEFEF;
        width: 100%;
        margin-bottom: 1rem;
    }
   .clock{
       border-bottom: 0.014rem solid #EFEFEF;
       font-size: 0.05rem;
       color: #999999;
       display: inline-block;
       width: 3rem;
       height: 0.3rem;
   }
</style>