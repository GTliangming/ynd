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
          title: "玉米",
          imgurl: require("../../../assets/home/21.png"),id:"98",url:'/top_aspx'
        },
        {
          title: "花生",
          imgurl: require("../../../assets/home/22.png"),id:"99",url:'/top_aspx'
        },
        {
          title: "大米",
          imgurl: require("../../../assets/home/23.png"),id:"100",url:'/top_aspx'
        },
        {
          title: "小米",
          imgurl: require("../../../assets/home/24.png"),id:"101",url:'/top_aspx'
        },
        {
          title: "大豆",
          imgurl: require("../../../assets/home/25.png"),id:"102",url:'/top_aspx'
        },
        {
          title: "小麦",
          imgurl: require("../../../assets/home/26.png"),id:"103",url:'/top_aspx'
        },
        {
          title: "高粱",
          imgurl: require("../../../assets/home/27.png"),id:"104",url:'/top_aspx'
        },
        {
          title: "花椒",
          imgurl: require("../../../assets/home/28.png"),id:"105",url:'/top_aspx'
        },
        {
          title: "面粉",
          imgurl: require("../../../assets/home/29.png"),id:"106",url:'/top_aspx'
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