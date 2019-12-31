<template>
  <div>
    <div class="head">
      <router-link to="/">
        <div class="back"></div>
      </router-link>
      <span>最近浏览</span>
    </div>
    <div class="c">
      <div class="left">
        <!-- <div @click="show1()" class="whole" v-on:click="Goods" :style="color">买过</div> -->
        <div @click="show2()" class="whole" v-on:click="Bought">看过</div>
      </div>
      <div>
        <!-- <div>
          <cateRecentlyNothing></cateRecentlyNothing>
        </div> -->
        <div>
          <cateRecentlyGoods :data="info"></cateRecentlyGoods>
        </div>
        <!-- <div v-show="msg===1">
          <cateRecentlyGoods :data="arr"></cateRecentlyGoods> -->
          <!-- <cateRecentlyNothing></cateRecetlyNothing> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import cateRecentlyGoods from "../../components/cateRecently/cateRecentlyGoods";
import cateRecentlyNothing from "../../components/cateRecently/cateRecentlyNothing";
export default {
  components: {
    cateRecentlyGoods,
    cateRecentlyNothing
  },
  data() {
    return {
      msg:1,
      info:[],
      color: "color:white;background:#00b593;border-bottom-left-radius:0.2rem;border-top-left-radius:0.2rem",
      color1: "border: 0.01rem solid #00b593;border-bottom-right-radius:0.2rem;border-top-right-radius:0.2rem",
    };
  },
  methods: {
    show1(){
      this.msg=1;
      this.getBuy();
    },
    show2(){
      this.msg=0;
      this.getBuy()
    },
    getBuy(){
        fetch("http://39.98.112.201/user/history/?category_id="+this.msg, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token":sessionStorage.getItem('token')
        },
      })
       .then(resp => resp.json())
       .then(data => {
          console.log(data);
          this.info=data.data;
        });
    },
    Goods() {
      this.color = "color:white;background:#00b593;border-bottom-left-radius:0.2rem;border-top-left-radius:0.2rem";
      this.color1 = "border: 0.01rem solid #00b593;border-bottom-right-radius:0.2rem;border-top-right-radius:0.2rem";
    },
    Bought() {
      this.color1 = "color:white;background:#00b593;border-bottom-right-radius:0.2rem;border-top-right-radius:0.2rem";
      this.color = "border: 0.01rem solid #00b593;border-bottom-left-radius:0.2rem;border-top-left-radius:0.2rem";
    },
  },
  mounted(){
    this.getBuy();
  },
};
</script>
<style scoped lang="scss">
.head {
  height: 0.4rem;
  width: 100%;
  background: white;
  position: fixed;
  background-image: url(../../../static/cateRecently/1.png);
  background-position: 0.1rem;
  background-size: 0.25rem 0.25rem;
  background-repeat: no-repeat;
  text-align: center;
  line-height: 0.4rem;
  font-size: 0.18rem;
  z-index: 3;
}
.c {
  padding-top: 0.4rem;
}
.left {
  width: 90%;
  height: auto;
  // background: #f6f6f6;
  margin: 0 auto;
  display: flex;
  border-radius: 0.2rem;
   
}
.left div {
  text-align: center;
  line-height: 0.3rem;
  width: 90%;
  background-color: green;
  color: white;
  font-size: 0.16rem;
  border-radius: 0.15rem;
  margin: 0rem auto
}
.back {
  width: 0.5rem;
  height: 0.3rem;
  position: absolute;
  top: 0.1rem;
}
</style>
