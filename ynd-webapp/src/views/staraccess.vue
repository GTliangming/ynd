<template>
  <div class="box">
    <i class="img">
      <img src="../../static/index/logo.jpg" alt />
    </i>
    <br />
    <van-rate v-model="value" />
    <br />
    <textarea class="text" v-model="content" placeholder="期待您的好评..."></textarea>
    <!-- <p class="ps">期待您的好评</p> -->
    <br />
    <button @click="msg" class="submit">提交</button>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      value: 3,
      id:"",
      content:"",
      flag:""
    };
  },
  methods: {
    msg() {
      Dialog({ message: "感谢您的评价" });
      this.$router.go(-1);
      this.id=this.$route.params.id;
     if(this.value>3){
       this.flag=1;
     }else{
       this.flag=0
     }
      fetch("http://39.98.112.201/order/comment/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token:sessionStorage.getItem('token')
        },
        body: JSON.stringify({
          order_id:this.id,
          content:this.content,
          good_comment:this.flag,
        })
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(this.id)
          console.log(data);
        });
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
  margin-top: 1rem;

  text-align: center;
}
/* .box p{
     
      margin-bottom: 0.1rem;
       font-size: 0.14rem;
    color: gray
  } */
.submit {
  width: 2.5rem;
  height: 0.4rem;
  margin-top: 0.1rem;
}
.img {
  width: 1.5rem;
  height: 1.3rem;
  display: inline-block;
}
.img img {
  width: 100%;
  height: 100%;
}
.text {
  width: 2rem;
  height: 0.5rem;
  border: 0.01rem solid gainsboro;
}
</style>
