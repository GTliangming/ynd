<template>
    <div class="top_page_a">
     <Topa></Topa>
     <!-- <br> -->
      <Topb :data="data"></Topb>
    </div>
</template>
<script>
import Topa from "../../components/common/top/topa";
import Topb from "../../components/common/top/topb";
export default{
    name:"top_page",
    components:{
         Topa,
         Topb
       },
    //    props:["data"],
    data(){
        return {
            data:""
        }
    },
    methods:{
        getdata(){
            this.$axios.get(this.HOST+'/product/get_products/?start=1&end=40&f_c_id=1')
        .then((response)=>{
         this.data=response.data.data;
        })
        .catch(function (error) {
            console.log(error);
        })
        }
    },
    created(){
       this. getdata();
    }
}
</script>
<style scoped>

</style>