<template>
<div>
  <footbar></footbar>
    <div class="box">
     
        <div class="goods" v-for="(item,index) in goods" :key="index">
            <i><img  :src="item.pic" alt=""></i>
            <p class="goods_title">{{item.title}}</p>
            <span class="goods_price">￥{{item.price}}</span>
            <span class="ps1">自营</span><span class="ps2">特价</span>
        </div>
    </div>
</div>
  
 
</template>

<script>
  import footbar from "../components/common/footerbar/footbar";
export default {
  data() {
    return {
      goods:[
          {
            title:"冰糖心苹果 精品80果无疤无伤无次果",
            pic:require("../../static/index/good_4.jpg"),
            price:"10-15",
            url:"/home"
          },
          {
            title:"冰糖心苹果 精品80果无疤无伤无次果",
            pic:require("../../static/index/good_4.jpg"),
            price:"10-15",
            url:"/info"
          
          },
          {
            title:"冰糖心苹果 精品80果无疤无伤无次果",
            pic:require("../../static/index/good_4.jpg"),
            price:"10-15",
            url:"/info"
          
          },
          {
            title:"冰糖心苹果 精品80果无疤无伤无次果",
            pic:require("../../static/index/good_4.jpg"),
            price:"10-15",
            url:"/info"
          
          }
        ]
    };
  },
  methods: {
  },
  components:{
    footbar,
  }
};
</script>

<style scoped lang="scss">
.box{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap
}
.goods{
  width: 48%;
  padding: 0.1rem;
  box-sizing: border-box
}
.goods i{
      display: inline-block;
    width: 90%;
    height: 1.5rem;

}
.goods img{
  width: 100%;
  height: 100%
}
.ps1{
  background-color: orange;
  padding: 0.01rem 0.05rem;
  margin-left: 0.1rem;
  display: inline-block;
  border-radius: 10%;
}
.ps2{
  background-color: brown;
  color: white;
  padding: 0.01rem 0.05rem;
  display: inline-block;
  margin-left: 0.05rem;
  border-radius: 10%

}
</style>
