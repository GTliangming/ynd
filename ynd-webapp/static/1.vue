<template>
    <div class="top_item">
      <div @click="go(i)" v-for="(v,i) in arra" :key="i">    
        <img :src="v.imgurl" />
        <br>
         <span>{{v.title}}</span> 
       </div> 
    </div>
</template>
<script>
export default{
       name:"topa",
       components:{

       },
       methods:{
          go(i){
            this.$router.push('/top_aspx/topzonghe')
          }
       },
    data(){
        return{
            goods:{
                shui:[

                    {
                        goodsList:{

                        },
                        hongshu:{
                            zonghe:[
                                {
                                    title:"",//标题
                                    price:"",//价格
                                    imgurl:"",//图片路径
                                    info:"",//详情
                                },
                               {
                                    title:"",//标题
                                    price:"",//价格
                                    imgurl:"",//图片路径
                                    info:"",//详情
                                }
                                //数量：n个
                            ],
                            huoyuan:[
                                {
                                    title:"",//标题
                                    price:"",//价格
                                    imgurl:"",//图片路径
                                    info:"",//详情
                                },
                               {
                                    title:"",//标题
                                    price:"",//价格
                                    imgurl:"",//图片路径
                                    info:"",//详情
                                }
                                //数量：n个
                            ]

                        },
                        shengjiang:{
                            goodsList:{
                            
                        },
                            zonghe:[
                                {

                                }
                            ],
                            huoyuan:[
                                {

                                }
                            ]

                        }    
                    }
                ],
                shucai:[

                ]
            }
        }   
      }
  }
</script>
<style scoped>
 .top_item{
      width:100%;
      display:flex; 
      flex-direction: row;
      flex-wrap: wrap;
      padding-left:0.1rem;
    }
    .top_item img{
      width: 0.45rem;
      height: 0.45rem;
      padding: 0.03rem;
    }
    .top_item span{
      font-size: 0.12rem;
      color: #666666;
      text-align: center;
      padding-left: 0.1rem;
    }
    .top_item>div{
      font-size: 0.16rem;
      width:20%;
      background-color:whitesmoke;
    }
</style>