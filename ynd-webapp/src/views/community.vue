<template>
  <div>
    <div class="header">
      <router-link to="/publish">
        <i>
          <img src="../../static/index/icon_6.png" alt />
        </i>
      </router-link>

      <span class="money">评价中心</span>
    </div>
    <div class="box">
      <div class="no">
        <p @click="flag=true">待评价</p>
        <p>{{noAssess.num}}</p>
      </div>
      <div class="yes">
        <p @click="flag=false">已评价</p>
        <p>{{Assess.num}}</p>
      </div>
    </div>
    <div v-if="flag">
      <div class="goods_box" v-for="(item,index) in noAssess.goodsList" :key="index">
        <i>
          <img :src="item.pic"/>
        </i>
        <div class="goodsinfo">
          <p class="goods_title">{{item.title}}</p>
          <p class="goods_info">{{item.info}}</p>
          <p class="goods_price">{{item.price}}</p>
          <button>评价</button>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="goods_box" v-for="(item,index) in Assess.goodsList" :key="index">
        <i>
          <img :src="item.pic" alt />
        </i>
        <div class="goodsinfo">
          <p class="goods_title">{{item.title}}</p>
          <p class="goods_info">{{item.info}}</p>
          <p class="goods_price">￥{{item.price}}</p>
          
        </div>
      </div>
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
      flag: true,
      noAssess:{
         num: "2", //未评价的商品数量
         goodsList: [
          {
            //未评价的商品信息
            pic: require("../../static/index/goods_10.jpg"), //商品图片
            title: "冰糖心苹果 精品80果无疤无伤无次果冰糖心苹果", //商品标题
            info: "100斤精品80果无疤无伤无次果冰糖心苹果", //商品规格、
            price: "1000.00" //商品价格
          },
          {
            //未评价的商品信息
            pic: require("../../static/index/goods_10.jpg"), //商品图片
            title: "冰糖心苹果 精品80果无疤无伤无次果冰糖心苹果", //商品标题
            info: "100斤精品80果无疤无伤无次果冰糖心苹果", //商品规格、
            price: "1000.00" //商品价格
          }
        ],

      },
      Assess:{
         num: "3", //已评价的商品数量
         goodsList: [
         {
          //已评价的商品信息
          pic: require("../../static/index/goods_8.jpg"), //商品图片
          title: "冰糖心苹果 精品80果无疤无伤无次果冰糖心苹果", //商品标题
          info: "100斤精品80果无疤无伤无次果冰糖心苹果", //商品规格、
          price: "1000.00" //商品价格
        },
        {
          pic: require("../../static/index/goods_6.png"), //商品图片
          title: "冰糖心苹果 精品80果无疤无伤无次果冰糖心苹果", //商品标题
          info: "100斤精品80果无疤无伤无次果冰糖心苹果", //商品规格、
          price: "1000.00" //商品价格
        },
        { 
          pic: require("../../static/index/goods_10.jpg"), //商品图片
          title: "冰糖心苹果 精品80果无疤无伤无次果冰糖心苹果", //商品标题
          info: "100斤精品80果无疤无伤无次果冰糖心苹果", //商品规格、
          price: "1000.00" //商品价格
        },
        ],

      }
    };
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
}
.goods_box {
  display: flex;
  border-radius: 10%;
  margin: 0.2rem 0rem;
}
.goods_box i {
  width: 1.3rem;
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
.goods_info {
  color: gray;
  width: 2.2rem;
  font-size: 0.14rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 0.05rem;
}
.goods_price {
  font-size: 0.14rem;
  color: brown;
  margin-top: 0.05rem;
}
.goods_box button {
  border: 0.01rem orange solid;
  border-radius: 1rem;
  background-color: white;
  padding: 0.01rem 0.2rem;
  margin-top: 0.1rem;
}
</style>
