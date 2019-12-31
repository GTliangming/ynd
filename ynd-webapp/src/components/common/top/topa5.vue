<template>
    <div class="body">
        <div class="top_item">
          <router-link :to="v.url+'?pro='+v.id" v-for="(v,i) in arra" :key="i" class="for">
            <div>    
            
            <div :style="{backgroundImage: 'url('+ v.imgurl +')'}" class="forimg"></div>
            
            <p class="forp">{{v.title}}</p> 
        </div> 
          </router-link>
        
        </div>
    </div>
</template>
<script>
export default{
       name:"topa",
       components:{

       },
       methods:{
          go(i){
            this.$router.push('/top_aspx')
          }
       },
    data(){
        return{
        
          arra:[
            {
              title:"女贞",imgurl:require('../../../assets/home/31.png'),id:"117",url:'/top_aspx'
            },
             {
              title:"丁香",imgurl:require('../../../assets/home/32.png'),id:"118",url:'/top_aspx'
            },                           
             {
              title:"碧桃",imgurl:require('../../../assets/home/33.png'),id:"119",url:'/top_aspx'
            },
             {
              title:"卫矛球",imgurl:require('../../../assets/home/37.png'),id:"120",url:'/top_aspx'
            },
             {
              title:"盆景",imgurl:require('../../../assets/home/35.png'),id:"121",url:'/top_aspx'
            },
             {
              title:"银杏树",imgurl:require('../../../assets/home/36.png'),id:"122",url:'/top_aspx'
            },
             {
              title:"槐树",imgurl:require('../../../assets/home/39.png'),id:"123",url:'/top_aspx'
            },
             {
              title:"杨树",imgurl:require('../../../assets/home/38.png'),id:"124",url:'/top_aspx'
            },
             {
              title:"桂花树",imgurl:require('../../../assets/home/34.png'),id:"125",url:'/top_aspx'
            },
             {
              title:"查看更多",imgurl:require('../../../assets/home/gengduo.png'),id:"",url:'/advgoodsshow'
            }
          ]
        }   
      }
  }
</script>
<style scoped>
    .body{
    width: 100%;
    border-right:.08rem solid white;
    border-left:.08rem solid white;
    box-sizing: border-box;
    }
    .top_item{
      width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      margin-top: .1rem;
    }
    .for{
      width: 20%;
      font-size: 0.16rem;
      height: .65rem;
     
    }
    .forimg{
      width: 100%;
      height: 0.4rem;
      background-repeat: no-repeat;
      background-position: 0.16rem 0.04rem;
      background-size: 55% 90%;
    }
    .forp{
      font-size: 0.12rem;
      width: 100%;
      text-align: center;
      height: .2rem;
      /* line-height: .2rem; */
      
    }
    
</style>