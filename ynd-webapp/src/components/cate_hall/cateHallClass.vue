<template>
    <div class="classApp">
       
        <div v-for="(v,i) in data" :key="i">
            <router-link :to="{path:'home/top_page', params: {id:i}}">  
                <img :src="v.imgurl" alt=""/>
                <br>
                <span>{{v.title}}</span>
            </router-link>  
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
<style scoped>
   .classApp{
       width: 100%;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       text-align: center;
       background: #f3f3f3;
       margin-top: 0.4rem;
       }
   .classApp img{
       width: 0.5rem;
       height: 0.5rem;
       margin-top: 0.1rem;
       border-radius: 50%;
   }
   .classApp span{
       font-size: 0.1rem;
   }
   .classApp>div{
       width: 20%;
       font-size: 0rem;
       border-radius: 50%;
   }
</style>