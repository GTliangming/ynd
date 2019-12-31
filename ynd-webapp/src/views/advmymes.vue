<template>
<div>
  <div class="box">
    <div class="topuse">
      <router-link to="advhome" tag="div" class="back"></router-link>
      <!-- 定位的div -->
      

    </div>
    </div>
    <div class="posire">
    <div class="positionsqr">

      <div class="touxiang"><img :src="pic"></div>
      <div class="topusetext">
        <p class="topusetextp1">{{name}}</p>
        <p class="topusetextp2">{{phone}}</p>
        <div class="topusetextp3"><div></div>地址：</div>
        <div class="topusetextp4"><div></div>主营：</div>
      </div>
</div>
      </div>

      <!-- 中间部分 -->
       <!-- money管理栏目 -->
    <div class="mydingdan">
      <!-- 顶部打字部分 -->
      <!-- <div class="mydingdan-font1">
        <p class="mydingdan-font1p">money管理</p> 
      </div> -->
      <!-- 下册导航栏 -->
       <div class="mydingdanbottomborder">
         <!-- 边框栏目 -->
         <div class="mydingdanflexbox">
         <div :key="pid" v-for="(data,pid) in  dataimg" class="mydingdanforbox">
           <!-- 循环体 -->
           <div  class="mydingdanforboxpic2">{{data.img}}人</div>
           <p class="mydingdanforboxp">{{data.font}}</p>
         </div>
         </div>
       </div>
    </div>

  <router-link to="advhometo2" tag="div" ><h1 class="bianxie">编写我的名片</h1></router-link>
</div>  
</template>
<script>
export default {
    data(){
        return {
          pic2:"",
          dataimg:[
              {img:0,font:"历史浏览"},
              {img:3,font:"历史联系"},
               {img:0,font:"历史交易"},
              {img:3,font:"持续经营"}
          ],
          name:"",
          pic:"",
          phone:"",
          token:""
        }
    },
    methods: {
      gettoken(){
         this.token= sessionStorage.getItem('token');
         this.pic = sessionStorage.getItem('pic');
         this.name= sessionStorage.getItem('name');
         this.phone = sessionStorage.getItem('phone');
    },
    afterRead() {
      fetch('http://39.98.112.201/user/get_head_pic/', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          "token":this.token
        },
      }).then(resp=>resp.json()).then(data=>{
        console.log(data)
        this.pic2=data.data.head_pic;
      });

    },

  },
  created(){
     this.gettoken();
  },
  mounted() {
    this.afterRead();
  }
}
</script>
<style scoped>
.bianxie{
  position:fixed;
  bottom:0;
  right:0;
  width: 2rem;
  height:.35rem;
  text-align: center;
  line-height: .35rem;
  background-color: green;
  color: white;
  font-size: .2rem;
}
.mydingdan{
  margin-top: .2rem;
  width: 100%;
  
}
.mydingdan-font1{
  width: 100%;
  height: .4rem;

}
.mydingdanbottomborder{
  width: 100%;
  height: .7rem;
  box-sizing: border-box;
  border-left: .12rem solid white;
  border-right: .12rem solid white;
}
.mydingdanflexbox{
  width:100%;
  height:.7rem;
  display: flex;
  justify-content: space-between;
  
}
.mydingdanforbox{
  width:19%;
  height:.7rem; 
}

.mydingdanforboxpic2{
  width:100%;
  height:.2rem;
  line-height: .2rem;
  text-align: center;
  font-size: .16rem;
  margin-top: .2rem;
  
}
.mydingdanforboxp{
  width:100%;
  height:.2rem;
  text-align: center;
  line-height: .2rem;
  font-size: .12rem;
  color: grey;
  font-weight: 500;
  margin-bottom: .1rem;
}



.box{ 
  width: 100%;
  overflow: hidden; 
}
.topuse{
  box-sizing: border-box;
  width: 100%;
  height: 2rem;
  /* background-color: rgb(63, 236, 130); */
  position: relative;
  /* border-bottom-left-radius:40%;
  border-bottom-right-radius:40%; */
}
.topuse:after { width: 140%; height: 2rem; position: absolute; left: -20%; top: 0; z-index: -1; content: ''; border-radius: 0 0 50% 50%; background: linear-gradient( rgb(240, 99, 209), rgb(138, 54, 233)); }
.posire{
    position: relative;
    width: 100%;
    height: .1rem;
}
.positionsqr{
    position: absolute;
    top: -1.4rem;
    left: .25rem;
    width: 3.25rem;
    height:1.4rem;
    background-color: rgb(243, 243, 245);
    box-shadow:0 .02rem .1rem .02rem rgb(82, 81, 81);
    border-radius: .1rem;
}
.touxiang{
  position: absolute;
  top: .12rem;
  left:.12rem;
  text-align: center;
  line-height: .6rem;
  border-radius: 50%;
  background-color: rgb(191, 233, 39);
  width: .6rem;
  height:.6rem;
  font-size: .2rem;
  font-weight: 600;
  color:white;
  z-index: 5;
}
.touxiang img{
  width: .6rem;
  height:.6rem;
  border-radius: 50%;
}
.topusetext{
  width: 100%;
  height:100%;
  z-index: 1;
  flex-shrink: .14rem;
}
.topusetextp1{
  padding-top: .18rem;
  text-indent: .9rem;
  color: rgb(26, 21, 21);
  font-size: .2rem;
}
.topusetextp2{
  padding-top: .03rem;
  text-indent: .9rem;
  color: rgb(56, 48, 48);
  font-size: .16rem;
}
.topusetextp3{
  padding-top: .12rem;
  padding-left: .3rem;
  color: rgb(167, 159, 159);
  font-size: .14rem;
}
.topusetextp4{
  padding-top: .03rem;
  padding-left: .3rem;
  color: rgb(167, 159, 159);
  font-size: .14rem;
}
.back{
  position: absolute;
  top: .2rem;
  left:.15rem;
  z-index: 5;
  width: .2rem;
  height: .3rem;
  display: block;
  background-image: url("../assets/fanhui.png");
  background-repeat: no-repeat;
  background-size: contain; 
}
</style>