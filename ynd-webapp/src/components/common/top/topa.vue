<template>
<div class="body">


    <div class="top_item">
      <router-link :to="v.url+'?pro='+v.id"  v-for="(v,i) in arra" :key="i" class="for">
      <div >    
        
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
              title:"苹果",imgurl:require('../../../assets/home/pingguo.png'),id:"1",url:'/top_aspx'
            },
             {
              title:"西瓜",imgurl:require('../../../assets/home/xigua.png'),id:"2",url:'/top_aspx'
            },                           
             {
              title:"桔子",imgurl:require('../../../assets/home/juzi.png'),id:"3",url:'/top_aspx'
            },
             {
              title:"葡萄",imgurl:require('../../../assets/home/putao.png'),id:"4",url:'/top_aspx'
            },
             {
              title:"桃子",imgurl:require('../../../assets/home/taozi.png'),id:"5",url:'/top_aspx'
            },
             {
              title:"梨",imgurl:require('../../../assets/home/li.png'),id:"6",url:'/top_aspx'
            },
             {
              title:"甜瓜",imgurl:require('../../../assets/home/tiangua.png'),id:"7",url:'/top_aspx'
            },
             {
              title:"橙子",imgurl:require('../../../assets/home/chengzi.png'),id:"8",url:'/top_aspx'
            },
             {
              title:"红枣",imgurl:require('../../../assets/home/hongzao.png'),id:"9",url:'/top_aspx'
            },
             {
              title:"查看更多",imgurl:require('../../../assets/home/gengduo.png'),id:"10",url:'/advgoodsshow'
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