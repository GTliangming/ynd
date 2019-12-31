<template>
  <div>
      <cateNearbyHead></cateNearbyHead>
      <cateNearbyClass></cateNearbyClass>
      <cateNearbyRecommend :data="new_goods "></cateNearbyRecommend>
      <cateNearbyHigh :data="nearby_goods"></cateNearbyHigh>
  </div>
</template>

<script>
import cateNearbyHead  from "../../components/cateNearby/cateNearbyHead"
import cateNearbyClass  from "../../components/cateNearby/cateNearbyClass"
import cateNearbyRecommend  from "../../components/cateNearby/cateNearbyRecommend"
import cateNearbyHigh  from "../../components/cateNearby/cateNearbyHigh"
  export default {
    name: "home",
      data(){
        return{
            nearby_goods:[],
            new_goods:[],
            destLocal:'',
            longitude:'118.634621',
            latitude:'35.796181',
        }
      },
    components:{
        cateNearbyHead,
        cateNearbyClass,
        cateNearbyRecommend,
        cateNearbyHigh
    },
    methods:{
        getNearby(){
          this.$axios.get(this.HOST+'/product/nearby/',{latitude:this.latitude,longitudel:this.longitudel})
         .then((response)=>{
            console.log(response.data);
             this.new_goods=response.data.data.new_goods;
            this.nearby_goods=response.data.data.nearby_goods;
          })
        .catch(function (error) {
            console.log(error);
        });
        }
    },
    mounted(){
        var that=this;
       this.getNearby();
        that.destLocal = sessionStorage.getItem('1');
        that.longitude = sessionStorage.getItem('2');
        that.latitude = sessionStorage.getItem('3');
    },
  }
</script>
<style scoped>
</style>