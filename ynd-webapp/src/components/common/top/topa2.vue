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
          title: "土豆",
          imgurl: require("../../../assets/home/1.png"),id:"39",url:'/top_aspx'
        },
        {
          title: "白菜",
          imgurl: require("../../../assets/home/2.png"),id:"40",url:'/top_aspx'
        },
        {
          title: "西红柿",
          imgurl: require("../../../assets/home/3.png"),id:"41",url:'/top_aspx'
        },
        {
          title: "辣椒",
          imgurl: require("../../../assets/home/4.png"),id:"42",url:'/top_aspx'
        },
        {
          title: "生姜",
          imgurl: require("../../../assets/home/5.png"),id:"43",url:'/top_aspx'
        },
        {
          title: "大葱",
          imgurl: require("../../../assets/home/6.png"),id:"1",url:'/top_aspx'
        },
        {
          title: "大蒜",
          imgurl: require("../../../assets/home/7.png"),id:"44",url:'/top_aspx'
        },
        {
          title: "黄瓜",
          imgurl: require("../../../assets/home/8.png"),id:"45",url:'/top_aspx'
        },
        {
          title: "红薯",
          imgurl: require("../../../assets/home/9.png"),id:"46",url:'/top_aspx'
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