<template>
<div>
  <div class="toptitle">
      <router-link to="advhome" tag="div" class="back"></router-link>
      <p class="toptitle-p">设置</p>
  </div>
  <div class="body">
    
      <p class="p" @click='tui()'>退出登录</p> 
    
    
  </div>
  </div>
</template>

<script>
import { Dialog } from 'vant';
export default {
 name:"advhometo1",
 methods:{
   tui(){
     let is =window.sessionStorage.getItem('name');
     console.log(is);
     if(is){
     window.sessionStorage.removeItem('token');
     window.sessionStorage.removeItem('pic');
      window.sessionStorage.removeItem('name');
     window.sessionStorage.removeItem('phone');
     Dialog({ message: '退出成功 '})
     this.$router.push("/advhome")
     }else{
        Dialog({ message: '您未登录 '})
     }
    
   }
   }
  }
 
</script>

<style scoped>
/* .body{
  width: 100%;
  border-right: .1rem solid white;
  border-left: .1rem solid white;
  box-sizing: border-box;
  
} */
.p{
  width: 100%;
  color:red;
  font-weight: 600;
  /* text-align: center; */
  text-indent: 2.5rem;
  font-size: .2rem;
  padding-top: 5.5rem;
}
.toptitle{
  width: 100%;
  height: .6rem;
  position: relative;
}
.toptitle-p{
 z-index: 1;
  width: 100%;
  height: .6rem;
  text-align: center;
  font-weight: 600;
  font-size: .2rem;
  line-height: .6rem;
  color: #53FB5E;
}
.back{
  position: absolute;
  top: .2rem;
  left:.15rem;
  z-index: 5;
  width: .2rem;
  height: .3rem;
  display: block;
  background-image: url("../assets/back2.png");
  background-repeat: no-repeat;
  background-size: contain;
   
}

</style>
