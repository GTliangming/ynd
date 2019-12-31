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
          title: "人参",
          imgurl: require("../../../assets/home/51.png"),id:"172",url:'/top_aspx'
        },
        {
          title: "三七",
          imgurl: require("../../../assets/home/52.png"),id:"173",url:'/top_aspx'
        },
        {
          title: "金银花",
          imgurl: require("../../../assets/home/53.png"),id:"174",url:'/top_aspx'
        },
        {
          title: "黄精",
          imgurl: require("../../../assets/home/54.png"),id:"175",url:'/top_aspx'
        },
        {
          title: "当归",
          imgurl: require("../../../assets/home/taozi.png"),id:"176",url:'/top_aspx'
        },
        {
          title: "茯苓",
          imgurl: require("../../../assets/home/li.png"),id:"177",url:'/top_aspx'
        },
        {
          title: "连翘",
          imgurl: require("../../../assets/home/tiangua.png"),id:"178",url:'/top_aspx'
        },
        {
          title: "桃胶",
          imgurl: require("../../../assets/home/chengzi.png"),id:"179",url:'/top_aspx'
        },
        {
          title: "瓜蒌",
          imgurl: require("../../../assets/home/hongzao.png"),id:"180",url:'/top_aspx'
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