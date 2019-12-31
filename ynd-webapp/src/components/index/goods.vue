<template>
  <div>
      <div class="box">

          <a v-for="(item,index) in goods" :key="index"  class="goods" :href="'#/goodsInfo/'+item.id">
              <!-- <div class="goods" > -->
              <i><img  :src="item.small_pic" alt=""></i>
              <p class="goods_title">{{item.title}}</p>
              <span class="goods_price">￥{{item.price}}</span>
              <s class="old_price">￥{{item.price2}}</s><br>
              <span class="ps1">自营</span><span class="ps2">特价</span>
              <!-- </div> -->
          </a>
      </div>
              <span @click="loading" class="loading">查看更多></span>
  </div>

 
</template>

<script>
export default {
  data() {
    return {
      goods:[],
        num:0,
        start:30,

    };
  },
  methods: {
        _initgetaddress(){
        fetch("http://39.98.112.201/product/get_products/?start=29", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
       .then(resp => resp.json())
        .then(data => {
          console.log(data);
          if(data.status===200){
            this.goods=data.data
              
          }
          else{
            this.msg="亲，请先登录哦";
              this.flag=true;
          }
        });
    },
      loading(){
        this.num+=19;
        this.start+=this.num;
          fetch("http://39.98.112.201/product/get_products/?start="+this.start, {
              method: "GET",
              headers: {
                  "Content-Type": "application/json",
              },
          })
              .then(resp => resp.json())
              .then(data => {
                  console.log(data);
                  if(data.status===200){
                      this.goods=this.goods.concat(data.data)
                  }
                  else{
                      this.msg="亲，请先登录哦";
                      this.flag=true;
                  }
              });

      }
  },
  mounted(){
    this._initgetaddress();
  },
  components:{
    
  }
};
</script>

<style scoped lang="scss">
.box{
     width: 100%;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-around;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
     background-color: #EFEFEF
    // background-color: gainsboro
}
// .route{
//     width: 48%;
//   padding: 0.1rem;
//   box-sizing: border-box;
// }
.goods{
width: 48%;
    padding: 0.1rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin-top: 0.1rem;
    border: 0.01rem solid gainsboro;
    border-radius: 0.2rem;
    background-color: white
}
.goods i{
        display: inline-block;
    width: 100%;
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
    font-size: 0.12rem;
}
.ps2{
    background-color: brown;
    color: white;
    padding: 0.01rem 0.05rem;
    display: inline-block;
    margin-left: 0.05rem;
    border-radius: 10%;
    font-size: 0.12rem;

}
.old_price{
  font-size: 0.14rem;
  color: gray;
  margin-left: 0.1rem
}
.goods_title{
    width: 1.6rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 0.14rem;
}
.loading{
    display: block;
    text-align: center;
    margin: 0.2rem 0rem ;
}
</style>
