<template>
  <div>
    <div class="header">
      <router-link to="/advhome">
        <i>
          <img src="../../static/index/icon_6.png" alt />
        </i>
      </router-link>

      <span class="money">评价中心</span>
    </div>
    <div class="box">
      <div class="no" :class="yes?'a':'b'">
        <p @click="flag=true,yes=true,no=false">待评价</p>
        <p></p>
      </div>
      <div class="yes" :class="no?'a':'b'">
        <p @click="flag=false,yes=false,no=true">已评价</p>
        <p></p>
      </div>
    </div>

    <div v-if="flag">
      <div  class="goods_box" v-for="(item,index) in noAssess" :key="index">
        <i>
          <img :src="item.pic" />
        </i>
        <div class="goodsinfo">
          <p class="goods_title">{{item.name}}</p>
          <span class="goods_info">单价:{{item.price}}</span>
          <span class="goods_info2">x{{item.num}}</span>
          <br />

          <span class="goods_price">￥{{item.total_price}}</span>
          <br />
          <span class="time">下单时间:{{item.time}}</span>
          <router-link :to="'staraccess/'+item.order_id">
          <button>评价</button>
          </router-link>
        </div>
      </div>
     <p v-if="noAssess" v-show="show" class="ps">暂无待评价哦</p>
    
    </div>
    <div v-else>
      <div class="goods_box" v-for="(item,index) in Assess" :key="index">
        <i>
          <img :src="item.pic" />
        </i>
        <div class="goodsinfo2">
          <p class="goods_title">{{item.name}}</p>
          <span class="goods_info">单价:{{item.price}}</span>
          <span class="goods_info2">x{{item.num}}</span>
          <br />

          <span class="goods_price">￥{{item.total_price}}</span>
          <br />
          <span class="time">下单时间:{{item.time}}</span>
         
        </div>
      </div>
       <p v-if="Assess" v-show="play" class="ps">暂无评价哦</p>
    </div>

    <footbar></footbar>
  </div>
</template>

<script>
import footbar from "../components/common/footerbar/footbar";
export default {
  name: "community",
  components: {
    footbar
  },
  data() {
    return {
     
      noAssess: [],
      flag: true,
      yes: true,
      no: false,
     Assess:[],
     show:false,
     play:false
    };
  },
  methods: {
    go() {
      this.$router.push({ path: "/staraccess" });
    },
    getNoAcess() {
      fetch("http://39.98.112.201/order/get_orders/?start=0&end=20&order_status=3, ", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token:sessionStorage.getItem('token')
        }
      })
        .then(resp => resp.json())
        .then(data => {
          this.noAssess = data.data;
          if(data.status==400||this.noAssess ==""){
              this.show=true;
          }
          console.log(data)
        });
    },
        getAcess() {
      fetch("http://39.98.112.201/order/get_orders/?start=0&end=20&order_status=4, ", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token:sessionStorage.getItem('token')
        }
      })
        .then(resp => resp.json())
        .then(data => {
           if(data.status==400||data.length==0){
              this.play=true;
          }else{
              this.Assess = data.data;
          }
        });
    }
  },
  mounted() {
    this.getAcess();
    this.getNoAcess()
  },
  created(){
    this.getAcess();
    this.getNoAcess()
  }
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 0.5rem;
  background-color: #f8f8f8;
  display: flex;
}
.header i {
  width: 0.5rem;
  height: 0.4rem;
  display: inline-block;
  position: relative;
  top: 0.05rem;
}
.header img {
  width: 100%;
  height: 100%;
}
.money {
  width: 70%;
  text-align: center;
  display: inline-block;
  line-height: 0.5rem;
}
.box {
  display: flex;
  justify-content: space-around;
}
.box {
  text-align: center;
  margin-top: 0.6rem;
}
.goods_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  /* border-radius: 10%; */
  margin: 0.2rem 0rem;
  /* justify-content: space-around; */
  padding: 0.1rem 0.2rem;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-bottom: 0.01rem solid gainsboro;
}
.goods_box i {
  width: 1.8rem;
  height: 1.3rem;
  display: inline-block;
}
.goods_box img {
  width: 100%;
  height: 100%;
}
.goods_title {
  width: 2.2rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ps{
      margin-top: 2rem;
    margin-left: 1.5rem;
    color: green;
    font-weight: 600;
}
.goods_info {
  color: gray;
  width: 2.2rem;
  font-size: 0.14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.05rem;
  font-size: 0.15rem;
}

.goods_info2 {
  color: gray;
  width: 2.2rem;
  font-size: 0.14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.05rem;
  font-size: 0.12rem;
  margin-left: 0.2rem;
}
.goods_price {
  font-size: 0.14rem;
  color: brown;
  margin-top: 0.05rem;
  font-weight: 600;
}
.goods_box button {
  border: 0.01rem orange solid;
  border-radius: 1rem;
  background-color: white;
  padding: 0.01rem 0.2rem;
  margin-top: 0.1rem;
}
.a {
  border-bottom: 0.04rem solid green;
}
.b {
  border: none;
}
.time {
  font-size: 0.12rem;
}
.goodsinfo {
  margin-left: 0.2rem;
}
.goodsinfo2 {
  margin-left: 0.2rem;
  padding-top: 0.2rem;
  box-sizing: border-box
}
</style>
