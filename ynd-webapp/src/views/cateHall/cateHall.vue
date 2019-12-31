<template>
  <div>
      <cateHallHead></cateHallHead>
      <cateHallClass :data="arr"></cateHallClass>
      <div>
          <div class="findHead">
              <p>-&nbsp;发现喜欢&nbsp;-</p>
          </div>
        <!-- <div class="font">
            <div v-for="(v,i) in like" :key="i">
                <span>{{v.likeclass}}</span>
            </div>
        </div> -->
        <div class="c">
          <div class="left">
              <div @click="show1" class="whole" v-on:click="Goods" :style="color">水果</div>
              <div @click="show" class="whole" v-on:click="Bought" :style="color1">蔬菜</div>
              <div @click="show2" class="whole" v-on:click="Seen" :style="color2">养殖</div>
              <div @click="show3" class="whole" v-on:click="Carefor" :style="color3">粮副</div>
              <div @click="show4" class="whole" v-on:click="shop" :style="color4">苗木</div>
              <div @click="show5" class="whole" v-on:click="Chatted" :style="color5">黑树苗</div>
              <div @click="show6" class="whole" v-on:click="liangf" :style="color6">中药草</div>
              <div @click="show7" class="whole" v-on:click="guos" :style="color7">农机设备</div>
              <div @click="show8" class="whole" v-on:click="nongj" :style="color8">农资设备</div>
          </div>
          <div>
            <cateHallGoods :data="info"></cateHallGoods>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>
import cateHallClass from "../../components/cate_hall/cateHallClass"
import cateHallHead from "../../components/cate_hall/cateHallHead"
import cateHallFindLike from "../../components/cate_hall/cateHallFindLike"
import cateHallGoods from "../../components/cate_hall/cateHallGoods"
  export default {
    name: "home",
    components:{
      cateHallHead,
      cateHallClass,
      cateHallFindLike,
      cateHallGoods
    },
 
    mounted(){
      this.getcateHall();
    },
    data(){
            return{
              info:[],
              msg: 1,
              color: "color:white;background:#00b593",
              color1: "color:none",
              color2: "color:none",
              color3: "color:none",
              color4: "color:none",
              color5: "color:none",
              color6: "color:none",
              color7: "color:none",
              color8: "color:none",
              arr:[
                  {title:"水果",imgurl:require("../../../static/cateHall/3.jpg")},
                  {title:"蔬菜",imgurl:require("../../../static/cateHall/8.jpg")},
                  {title:"养殖",imgurl:require("../../../static/cateHall/7.jpg")},
                  {title:"粮副",imgurl:require("../../../static/cateHall/4.jpg")},
                  {title:"苗木",imgurl:require("../../../static/cateHall/9.jpg")},
                  {title:"黑树苗",imgurl:require("../../../static/cateHall/10.jpg")},
                  {title:"中药草",imgurl:require("../../../static/cateHall/5.jpg")},
                  {title:"农机设备",imgurl:require("../../../static/cateHall/6.jpg")},
                  {title:"农资设备",imgurl:require("../../../static/cateHall/11.jpg")},
                  {title:"全部",imgurl:require("../../../static/cateHall/3.png")}
                ],
                goods:[
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")},
                    {goodsImg:require("../../../static/cateHall/12.jpg"),goodsName:"丹桂苗雪桂红桂状元红苗圃直销",fh:"￥",money:"10.00",yx:"月销2件",chat:require("../../../static/cateHall/6.png")}
                ]
            }
        },
        methods: {
          // push:"/home/top_page",
          show(){
            this.msg=2;
            this.getcateHall();
            
          },
          show1(){
            this.msg=1;
            this.getcateHall();
          },
          show2(){
            this.msg=3;
            this.getcateHall();
          },
            show3(){
            this.msg=4;
            this.getcateHall();
          },
            show4(){
            this.msg=5;
            this.getcateHall();
          },
            show5(){
            this.msg=6;
            this.getcateHall();
          },
            show6(){
            this.msg=7;
            this.getcateHall();
          },
            show7(){
            this.msg=8;
            this.getcateHall();
          },
            show8(){
            this.msg=9;
            this.getcateHall();
          },
          getcateHall(){
              this.$axios.get(this.HOST+'/product/get_products/?start=0&end=30&f_c_id='+this.msg)
              .then((response)=>{
                //将response获得的数据进行处理
                  // var data=response.data;
                  // this.categoryInfo=data.data;
                //   console.log(response.data.data); 
                console.log(response.data);
                this.info=response.data.data;
                //  this.info=response.data.data;
                //  console.log(this.categoryInfo)
                //data可以是多种数据类型，通过全局变量tableData将数据传出。
            })
        .catch(function (error) {
            console.log(error);
        })
       },
          Goods() {
            this.color = "color:white;background:#00b593",
            this.color1 = "border:none";
            this.color2 = "border:none";
            this.color3 = "border:none";
            this.color4 = "border:none";
            this.color5 = "border:none";
            this.color6 = "border:none";
            this.color7 = "border:none";
            this.color8 = "border:none";
          },
          Bought() {
            this.color1 = "color:white;background:#00b593",
            this.color = "border:none";
            this.color2 = "border:none";
            this.color3 = "border:none";
            this.color4 = "border:none";
            this.color5 = "border:none";
            this.color6 = "border:none";
            this.color7 = "border:none";
            this.color8 = "border:none";
          },
          Seen() {
            this.color2 = "color:white;background:#00b593",
            this.color = "border:none";
            this.color1 = "border:none";
            this.color3 = "border:none";
            this.color4 = "border:none";
            this.color5 = "border:none";
            this.color6 = "border:none";
            this.color7 = "border:none";
            this.color8 = "border:none";
          },
          Carefor() {
            this.color3 = "color:white;background:#00b593",
            this.color1 = "border:none";
            this.color2 = "border:none";
            this.color = "border:none";
            this.color4 = "border:none";
            this.color5 = "border:none";
            this.color6 = "border:none";
            this.color7 = "border:none";
            this.color8 = "border:none";
          },
          shop() {
            this.color4 = "color:white;background:#00b593",
            this.color = "border:none";
            this.color2 = "border:none";
            this.color3 = "border:none";
            this.color1 = "border:none";
            this.color5 = "border:none";
            this.color6 = "border:none";
            this.color7 = "border:none";
            this.color8 = "border:none";
          },
          Chatted() {
            this.color5 = "color:white;background:#00b593",
            this.color = "border:none";
            this.color2 = "border:none";
            this.color3 = "border:none";
            this.color1 = "border:none";
            this.color4 = "border:none";
            this.color6 = "border:none";
            this.color7 = "border:none";
            this.color8 = "border:none";
          },
          liangf() {
            this.color6 = "color:white;background:#00b593",
            this.color1 = "border:none";
            this.color2 = "border:none";
            this.color = "border:none";
            this.color4 = "border:none";
            this.color5 = "border:none";
            this.color3 = "border:none";
            this.color7 = "border:none";
            this.color8 = "border:none";
          },
          guos() {
            this.color7 = "color:white;background:#00b593",
            this.color = "border:none";
            this.color2 = "border:none";
            this.color3 = "border:none";
            this.color1 = "border:none";
            this.color5 = "border:none";
            this.color6 = "border:none";
            this.color4 = "border:none";
            this.color8 = "border:none";
          },
          nongj() {
            this.color8 = "color:white;background:#00b593",
            this.color = "border:none";
            this.color2 = "border:none";
            this.color3 = "border:none";
            this.color1 = "border:none";
            this.color4 = "border:none";
            this.color6 = "border:none";
            this.color7 = "border:none";
            this.color5 = "border:none";
          }
        }
  }
</script>

<style scoped lang="scss">
.findHead{
        text-align: center;
        font-size: 0.18rem;
        padding: 0.1rem;
        
    }
    .left{
       width: 100%;
       display: flex;
       flex-direction: row;
       flex-wrap: wrap;
       
       
       }
    .left div{
        width: 30%;
       font-size: 0.16rem;
       height: 0.3rem;
       text-align: center;
       background: #ebe9e9;
    //    margin-left: 0.1rem;
    //    margin-top: 0.1rem;
       margin: 0.1rem 0.06rem 0.1rem;
       line-height: 0.3rem;
   }

//    .head {
//   height: 0.4rem;
//   width: 100%;
//   background: white;
//   position: fixed;
//   background-image: url(../../../static/cateRecently/1.png);
//   background-position: 0.1rem;
//   background-size: 0.25rem 0.25rem;
//   background-repeat: no-repeat;
//   text-align: center;
//   line-height: 0.4rem;
//   font-size: 0.18rem;
//   z-index: 3;
// }
// .c {
//   display: flex;
//   padding-top: 0.4rem;
// }
// .left {
//   width: 1rem;
//   height: auto;
//   background: #f6f6f6;
// }
// .left div {
//   text-align: center;
//   line-height: 0.6rem;
// }
// .back {
//   width: 0.5rem;
//   height: 0.3rem;
//   position: absolute;
//   top: 0.1rem;
// }
</style>
