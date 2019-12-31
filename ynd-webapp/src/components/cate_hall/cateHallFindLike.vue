<template>
    <div>
        <div class="findHead">
            <p>-&nbsp;发现喜欢&nbsp;-</p>
        </div>
        <div class="font">
            <div v-for="(v,i) in data" :key="i">
                <span>{{v.likeclass}}</span>
            </div>
        </div>
        
    </div>
</template>
<script>
    export default {
       props: ["data"],
        data(){
            return{
               
            }
        }
    }
</script>

<style scoped lang="scss">
    .findHead{
        text-align: center;
        font-size: 0.18rem;
        padding: 0.1rem;
        
    }
    .font{
       width: 100%;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       
       
       }
    .font div{
        width: 30%;
       font-size: 0.16rem;
       height: 0.3rem;
       text-align: center;
       background: #ebe9e9;
    //    margin-left: 0.1rem;
    //    margin-top: 0.1rem;
       margin: 0.1rem 0.06rem 0.1rem;
       line-height: 0.3rem;
   }
</style>