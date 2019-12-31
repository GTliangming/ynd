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
          title: "叶面肥",
          imgurl: require("../../../assets/home/71.png"),id:"204",url:'/top_aspx'
        },
        {
          title: "冲施肥",
          imgurl: require("../../../assets/home/72.png"),id:"205",url:'/top_aspx'
        },
        {
          title: "生根剂",
          imgurl: require("../../../assets/home/73.png"),id:"206",url:'/top_aspx'
        },
        {
          title: "生物菌肥",
          imgurl: require("../../../assets/home/74.png"),id:"207",url:'/top_aspx'
        },
        {
          title: "有机肥",
          imgurl: require("../../../assets/home/75.png"),id:"208",url:'/top_aspx'
        },
        {
          title: "黄腐酸钾",
          imgurl: require("../../../assets/home/76.png"),id:"209",url:'/top_aspx'
        },
        {
          title: "土壤调理",
          imgurl: require("../../../assets/home/77.png"),id:"210",url:'/top_aspx'
        },
        {
          title: "尿素",
          imgurl: require("../../../assets/home/78.png"),id:"211",url:'/top_aspx'
        },
        {
          title: "氨基酸",
          imgurl: require("../../../assets/home/79.png"),id:"212",url:'/top_aspx'
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