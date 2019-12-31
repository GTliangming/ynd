<template>
  <div class="body">
    <div class="top_item">
      <ruter-link :to="v.url+'?pro='+v.id" v-for="(v,i) in arra" :key="i" class="for">
        <div>
          <div :style="{backgroundImage: 'url('+ v.imgurl +')'}" class="forimg"></div>

          <p class="forp">{{v.title}}</p>
        </div>
      </ruter-link>
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
          title: "红薯苗",
          imgurl: require("../../../assets/home/81.png"),id:"223",url:'/top_aspx'
        },
        {
          title: "红薯种子",
          imgurl: require("../../../assets/home/82.png"),id:"224",url:'/top_aspx'
        },
        {
          title: "西瓜种子",
          imgurl: require("../../../assets/home/83.png"),id:"225",url:'/top_aspx'
        },
        {
          title: "西瓜苗",
          imgurl: require("../../../assets/home/84.png"),id:"226",url:'/top_aspx'
        },
        {
          title: "甜瓜种子",
          imgurl: require("../../../assets/home/85.png"),id:"227",url:'/top_aspx'
        },
        {
          title: "辣椒种子",
          imgurl: require("../../../assets/home/86.png"),id:"228",url:'/top_aspx'
        },
        {
          title: "辣椒苗",
          imgurl: require("../../../assets/home/87.png"),id:"229",url:'/top_aspx'
        },
        {
          title: "大葱种子",
          imgurl: require("../../../assets/home/88.png"),id:"230",url:'/top_aspx'
        },
        {
          title: "葱苗",
          imgurl: require("../../../assets/home/79.png"),id:"231",url:'/top_aspx'
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