<template>
<div class="body">
    <div class="topa_item">
      <a  tag="div" :href="'#/goodsInfo/'+v.id" v-for="(v,i) in data" :key="i" class="for">    
        <!-- <img :src="v.imgurl" />
        <br> -->
        
        <div :style="{backgroundImage: 'url('+ v.small_pic +')'}" class="forimg"></div>

        <p class="forp">{{v.title}}</p> 
        <p class="forp2">
         <!-- <span class="topb_ens">{{v.title}}</span> -->
         <!-- <span style="color:block;font-size:0.10rem"><br><br> -->
           <span  class="span1">￥{{v.price}}元</span>
           <span class="span2">成交{{v.price2}}万元</span>
         <!-- </span> -->
         </p>
      </a> 
    </div>
</div>    
</template>
<script>
export default{
       name:"topb",
       components:{
      
       },
       props:["data"],
       methods:{
           con(){
              console.log(this.data);
           }
       },
       mounted(){
           this.con();
       }
    // data(){
    //     return{
    //       // router:[
    //       //   "/top_aspx/topzonghe"
    //       // ],
    //       // 
    //     }   
    //   }
  }
</script>
<style scoped>
 /* .topb_item{
      width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      margin-left:0.1rem;
    }
    .topb_item img{
      width: 1.63rem;
      height: 1.7rem;
      margin: 0.01rem;
    }
    .topb_item span{
      font-size: 0.14rem;
      color: #666666;
      display:-webkit-box;
      line-height: 0.20rem;
    }
    .topb_item topb_ens{
       overflow: hidden;
       -webkit-line-clamp:2;
       -webkit-box-orient: vertical;
    }
    .topb_item>div{
      font-size: 0.16rem;
      width:42%;
      padding-left: 0.1rem;
      padding-right: 0.1rem;
      background-color: white;
    } */
.body{
  width: 100%;
  border-right:.04rem solid rgb(235, 230, 230);
  border-left:.04rem solid rgb(235, 230, 230);
  box-sizing: border-box;
  margin-bottom: .7rem;
}
 .topa_item{
      width:100%;
      display:flex; 
      justify-content: space-around;
      flex-wrap: wrap;
      background-color: rgb(235, 230, 230);
      padding-top: .06rem;
    }
    .for{
      width: 48%;
      font-size: 0.16rem;
      background-color: white;
      margin-bottom: .08rem;
      border-radius: .09rem;
    }
    .forimg{
      width: 100%;
      height: 1.8rem;
      background-repeat: no-repeat;
      background-position: 0 0;
      background-size: 100% 100%;
     
      border-top-left-radius: .09rem;
      border-top-right-radius: .09rem;
    }
    .forp{
      font-size: 0.14rem;
      width: 90%;
       margin-left: .06rem; 
      /* text-indent: .07rem; */
      text-align: left;
      height: .4rem;
      line-height: .2rem;
      margin-top: 0.1rem;
      margin-bottom: .15rem;
      /* line-height: .2rem; */
      font-weight: 500;
      overflow: hidden;
text-overflow: ellipsis;

display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
    }
    .forp2{
      font-size: 0.14rem;
      width: 100%;
      
      height: .2rem;
      /* line-height: .2rem; */
      text-indent: .06rem;
      margin-bottom: .1rem;
    }
    .span1{
      display: inline-block;
      color: red;
      text-align: left;
      font-size: .16rem;
    }
    .span2{
      display: inline-block;
      margin-left: .1rem;
      font-size: .12rem;
      color: grey;
    }
</style>