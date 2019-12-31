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
          title: "葡萄苗",
          imgurl: require("../../../assets/home/41.png"),id:"144",url:'/top_aspx'
        },
        {
          title: "桃树苗",
          imgurl: require("../../../assets/home/42.png"),id:"145",url:'/top_aspx'
        },
        {
          title: "梨树苗",
          imgurl: require("../../../assets/home/43.png"),id:"146",url:'/top_aspx'
        },
        {
          title: "冬枣树苗",
          imgurl: require("../../../assets/home/44.png"),id:"147",url:'/top_aspx'
        },
        {
          title: "核桃苗",
          imgurl: require("../../../assets/home/45.png"),id:"148",url:'/top_aspx'
        },
        {
          title: "柑橘苗",
          imgurl: require("../../../assets/home/46.png"),id:"149",url:'/top_aspx'
        },
        {
          title: "苹果苗",
          imgurl: require("../../../assets/home/47.png"),id:"150",url:'/top_aspx'
        },
        {
          title: "李子树苗",
          imgurl: require("../../../assets/home/48.png"),id:"151",url:'/top_aspx'
        },
        {
          title: "脐橙苗",
          imgurl: require("../../../assets/home/49.png"),id:"152",url:'/top_aspx'
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