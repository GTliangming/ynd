<template>
  <div>
      <cateStrictHead></cateStrictHead>
      <cateStrictGoods :data="info"></cateStrictGoods>
  </div>
</template>

<script>
import cateStrictHead from "../../components/cateStrict/cateStrictHead"
import cateStrictGoods from "../../components/cateStrict/cateStrictGoods"
  export default {
    name: "home",
    components:{
      cateStrictHead,
      cateStrictGoods
    },
    methods:{
        getStrict(){
          this.$axios.get(this.HOST+'//product/strict_selection/')
         .then((response)=>{
            console.log(response.data);
            this.info=response.data.data;
          })
        .catch(function (error) {
            console.log(error);
        })
       }
    },
    mounted(){
       this.getStrict();
    },
    data(){
            return{
                info:[],
                arr:[
                    {
                    title:"优选推荐",
                    buy:[
                        {
                            goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
                            goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
                            fh:"￥",
                            money:"10.00",
                            button:"立马抢"
                            },
                            {
                            goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
                            goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
                            fh:"￥",
                            money:"10.00",
                            button:"立马抢"
                            },
                            {
                            goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
                            goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
                            fh:"￥",
                            money:"10.00",
                            button:"立马抢"
                        }
                      ]
                  },
                  {
                    title:"更多精彩",
                    buy:[
                        {
                            goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
                            goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
                            fh:"￥",
                            money:"10.00",
                            button:"立马抢"
                            },
                            {
                            goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
                            goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
                            fh:"￥",
                            money:"10.00",
                            button:"立马抢"
                            },
                            {
                            goodsImg:require("../../../static/cateGatherCheap/14.jpg"),
                            goodsName:"宾川红提葡萄，果色鲜红，穿行紧密，口感糖分充足。",
                            fh:"￥",
                            money:"10.00",
                            button:"立马抢"
                        }
                      ]
                  }
                ]
            }
        }
  }
</script>

<style scoped lang="scss">
</style>
