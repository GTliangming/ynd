<template>
  
    <div>

        <!-- 顶部双循环 -->
        <div class="topp_con">  
      <div class="topp_cona" >
        <a :href="'#/goodsInfo/'+data[8].id">
            <div class="toppve"><img :src="data[8].small_pic" /></div><br>
         <div class="toppne">
             <p class="nep3">{{data[8].title}}</p>
             
             <p  class="nep1">{{data[8].price}}元</p>
             
           <p  class="nep2">已售{{data[8].price}}万元</p>
             <!-- {{v.title}}<br><br><span style="color:red">{{v.price}}</span><br>
           <span style="color:green">{{v.tity}}</span> -->
           </div> 
        </a>
        
       </div> 
       <div class="topp_cona" >
         <a :href="'#/goodsInfo/'+data[9].id">
        <div class="toppve"><img :src="data[9].small_pic" /></div><br>
         <div class="toppne">
             <p class="nep3">{{data[9].title}}</p>
             
             <p  class="nep1">{{data[9].price}}元</p>
             
           <p  class="nep2">已售{{data[9].price2}}万元</p>
             <!-- {{v.title}}<br><br><span style="color:red">{{v.price}}</span><br>
           <span style="color:green">{{v.tity}}</span> -->
           </div> 
           </a>
       </div> 
    </div>
<!-- 下部多循环 -->
        <div class="topc_item">  
        
      <a tag="div" :href="'#/goodsInfo/'+v.id" class="hen" v-for="(v,i) in data" :key="i">
        <div class="ve"><img :src="v.small_pic" /></div>
         <div class="ne">
              <p class="nep3">{{v.title}}</p>
             
             <p  class="nep1">{{v.price}}元</p>
             
           <p  class="nep2">已售{{v.price}}万元</p>
         </div> 
         </a>
       </div> 
    

     
         <!-- <Topp></Topp>
         <br>
        <Topi></Topi> -->
       
    </div>
</template>
<script>
// import Topi from "../../components/common/top/topi";
// import Topp from "../../components/common/top/topp";
export default{
    name:"topZonghe",
    props:["data"],
    // components:{       
    //      Topi,
    //      Topp 
    //    },
     data(){
        return{
          
        }
    }
}
</script>
<style scoped>
 .topp_con{
    width: 100%;
    display: flex;
    height: 2.5rem;
    background-color: rgb(255, 228, 196);
     margin-top: 0.1rem;
     margin-bottom: .1rem;
     border-radius: 0.2rem;
     justify-content: space-around;
}
.topp_cona{
    width: 47%;
    margin-top: .03rem;
    height: 2.4rem;
    background-color: white;
    border-radius: .1rem;  
}
.topp_cona img{
    width: 98%;
    height: 1.2rem;
    border: 0.1rem solid whitesmoke;
    border-radius: 0.14rem;
}
.toppve{
    width: 90%;
    height: 0.4rem;
   
}
.toppne{
    
     margin-top: .8rem;
     margin-left:0.1rem;
}
.topc_item{
      width:100%; 
      border-right: .09rem solid rgb(250, 249, 249);
      background-color: rgb(250, 249, 249);
      border-left: .09rem solid rgb(250, 249, 249);
      box-sizing: border-box;
      padding-top:.08rem ;
    }
    .hen{
      width:100%;
      display:flex; 
      flex-wrap: wrap;
      height: 1.1rem;
      border-radius: .09rem;
      /* border: 0.01rem solid whitesmoke; */
      margin-bottom: 0.15rem;
      background-color: white;
    }
     .ve{
      width: 1.2rem;
      height: 1.1rem;  
    }
    .ve img{ 
      width: 100%;
      height: 1.1rem;
      border-top-left-radius: .09rem;
      border-bottom-left-radius: .09rem;
    }
    .ne{
      font-size: 0.14rem;
      box-sizing: border-box;
      width:60%;
      height:1.1rem;
      border-right: .2rem solid white;
      border-left: .14rem solid white;
    }
    .nep1{
        width: 100%;
        height: .2rem;
        line-height: .2rem;
        font-size: .16rem;
        color: red;
        font-weight: 500;
    }
    .nep2{
        width: 100%;
        height: .2rem;
        line-height: .2rem;
        font-size: .14rem;
        color: rgb(153, 150, 150);
        margin-top: .02rem;
    }
    .nep3{
        width: 92%;
        height: .4rem;
        line-height: .2rem;
        font-size: .14rem;
        
        /* overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap; */
        margin-top: .1rem;
        margin-bottom: .1rem;
        

        overflow: hidden;
text-overflow: ellipsis;

display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
 

    }
</style>