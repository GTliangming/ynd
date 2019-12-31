<template>
  <div class="body">
    <div class="top_item">
      <router-link :to="v.url+'?pro='+v.id" v-for="(v,i) in arra" :key="i" class="for">
        <div>
          <div :style="{backgroundImage: 'url('+ v.imgurl +')'}" class="forimg"></div>

          <p class="forp">{{v.title}}</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "topa",
  components: {},
  methods: {
    go(i) {
      this.$router.push("/top_aspx");
    }
  },
  data() {
    return {
      arra: [
        {
          title: "滴灌设备",
          imgurl: require("../../../assets/home/61.png"),id:"189",url:'/top_aspx'
        },
        {
          title: "保鲜设备",
          imgurl: require("../../../assets/home/62.png"),id:"190",url:'/top_aspx'
        },
        {
          title: "孵化设备",
          imgurl: require("../../../assets/home/63.png"),id:"191",url:'/top_aspx'
        },
        {
          title: "弥雾机",
          imgurl: require("../../../assets/home/64.png"),id:"192",url:'/top_aspx'
        },
        {
          title: "挖掘机",
          imgurl: require("../../../assets/home/65.png"),id:"193",url:'/top_aspx'
        },
        {
          title: "打捆机",
          imgurl: require("../../../assets/home/66.png"),id:"194",url:'/top_aspx'
        },
        {
          title: "花生摘果机",
          imgurl: require("../../../assets/home/67.png"),id:"195",url:'/top_aspx'
        },
        {
          title: "开沟机",
          imgurl: require("../../../assets/home/68.png"),id:"196",url:'/top_aspx'
        },
        {
          title: "除草机",
          imgurl: require("../../../assets/home/69.png"),id:"197",url:'/top_aspx'
        },
        {
          title: "查看更多",
          imgurl: require("../../../assets/home/gengduo.png"),id:"",url:'/advgoodsshow'
        }
      ]
    };
  }
};
</script>
<style scoped>
.body {
  width: 100%;
  border-right: 0.08rem solid white;
  border-left: 0.08rem solid white;
  box-sizing: border-box;
}
.top_item {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 0.1rem;
}
.for {
  width: 20%;
  font-size: 0.16rem;
  height: 0.65rem;
}
.forimg {
  width: 100%;
  height: 0.4rem;
  background-repeat: no-repeat;
  background-position: 0.16rem 0.04rem;
  background-size: 55% 90%;
}
.forp {
  font-size: 0.12rem;
  width: 100%;
  text-align: center;
  height: 0.2rem;
  /* line-height: .2rem; */
}
</style>