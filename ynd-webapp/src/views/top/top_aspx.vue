<template>
<div>
    
    <div class="position" >
    <indexsearch></indexsearch>  
    <TopNav></TopNav> 
    </div>
    <!-- <div class="top_aspx_a"> -->
    <!-- <Toptou></Toptou>  -->
    <!-- <div id="top_aspx_ti"> -->
    <!-- <Topdzong></Topdzong> -->
     
    
    <!-- 下边商品展示页面 -->
    <div class="content" v-if="data">
   <topzonghe :data="data"></topzonghe>
   <div @click="dianji()" class="dianji">点击加载更多</div>
   </div>
    <!-- </div> -->
   <comonfooter></comonfooter>
    <!-- </div> -->
</div>
</template>
<script>
// import Topdzong from "../../components/common/top/topdzong";
import topzonghe from '../../views/top/topzonghe'
// views/top/topzonghe'
// import Toptou from "../../components/common/top/toptou";
import indexsearch from '../../components/index/backSearch';
import comonfooter from '../../components/common/footerbar/footbar'
import TopNav from '../../components/common/ComboBox/ComboBox'
export default{
    name:"top_aspx",
    components:{
        //   Topdzong,
        //   Toptou,
          indexsearch,
          comonfooter,
          topzonghe,
          TopNav
       },
        data(){
           return{
            cource:"综合",
            data:[],
            flag:"",
            data2:[]
		}                     
     },
     methods:{
         dianji(){
              this.getdata();
         },
         getrouter(){
            this.flag=this.$route.query.pro;
             console.log(this.flag);
         },
        getdata(){
            this.$axios.get(this.HOST+'/product/get_products/?start=1&end=40&s_c_id='+this.flag)
        .then((response)=>{
            //将response获得的数据进行处理
           // var data=response.data;
           // this.categoryInfo=data.data;
           console.log(response.data.data); 
         this.data2=response.data.data;
         this.data=this.data.concat(this.data2);
         console.log(this.data);
            //data可以是多种数据类型，通过全局变量tableData将数据传出。
        })
        .catch(function (error) {
            console.log(error);
        })
        }
    },
    created(){
        this.getrouter();
       this. getdata();
       
    }
        
}

</script>
<style scoped>
.position{
    width: 100%;
    height: .2rem;
    position: fixed;
    top: 0;
    left:0;
    z-index: 9999;
}
.content{
    width: 100%;
    margin-top: 1rem;
    margin-bottom: .76rem;
}
/* .top_aspx_a{
     position: relative;
    
 }
 #top_aspx_ti{
     position: relative;
     top:-1rem;
     z-index: 3
 } */
</style>