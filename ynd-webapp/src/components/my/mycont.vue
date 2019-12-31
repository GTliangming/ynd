<template>
  <div class="cont">
    <div class="call">
       <router-link to='/refund'>
      <div class="c1">
        
        <img src="../../assets/my/my_dz.png" />
        <p>退款/售后</p>
      </div>
       </router-link>
       <router-link to='/order'>
      <div class="c1">
        <img src="../../assets/my/my_sc.png" />
        <p>全部</p>
      </div>
       </router-link>
      <router-link to='/access'>
        <div class="c1">
          <img src="../../assets/my/my_pj.png" />
          <p>我的评价</p>
        </div>
      </router-link>
      <router-link to='/address'>
      <div class="c1">
        <img src="../../assets/my/my_gxzy.png" />
        <p>我的地址</p>
      </div>
      </router-link>
      <router-link to='/order/abligation'>
        <div class="c1">
        <img src="../../assets/my/my_jfsc.png" />
        <p>待付款</p>
      </div>
      </router-link>
      <router-link to='/order/pending'>
      <div class="c1">
        <img src="../../assets/my/my_yhj.png" />
        <p>待发货</p>
      </div>
       </router-link>
      <router-link to='/money'>
      <div class="c1">
        <img src="../../assets/my/my_wgjl.png" />
        <p>我的余额</p>
      </div>
      </router-link>
      <div class="c1">
        <img src="../../assets/my/my_gz.png" />
        <p>我的关注</p>
      </div>
      <router-link to='/order/awaitReceive'>
           <div class="c1">
        <img src="../../assets/my/my_cjjl.png" style="width: 0.35rem;" />
        <p>待收货</p>
      </div>
      </router-link>
     
    </div>
  </div>
</template>

<script>
export default {
  name: "mycont"
};
</script>

<style scoped>
.cont {
  justify-content: space-around;
  height: 3rem;
  width: 100%;
  background-color: white;
  margin-top: 0.18rem;
}

.cont img {
  width: 0.3rem;
}
.cont p {
  font-size: 0.1rem;
  margin-top: 0.1rem;
}
.call {
  margin-top: 0.1rem;
  display: flex;
  flex-wrap: wrap;
  width: 3.7rem;
  height: 3rem;
}
.c1 {
  width: 0.5rem;
  height: 0.6rem;
  text-align: center;
  margin-left: 0.35rem;
  margin-top: 0.15rem;
}
</style>