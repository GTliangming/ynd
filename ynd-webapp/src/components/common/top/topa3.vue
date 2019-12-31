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
          title: "仔猪",
          imgurl: require("../../../assets/home/11.png"),id:"80",url:'/top_aspx'
        },
        {
          title: "母猪",
          imgurl: require("../../../assets/home/12.png"),id:"81",url:'/top_aspx'
        },
        {
          title: "生猪",
          imgurl: require("../../../assets/home/13.png"),id:"82",url:'/top_aspx'
        },
        {
          title: "牛",
          imgurl: require("../../../assets/home/14.png"),id:"83",url:'/top_aspx'
        },
        {
          title: "鸡",
          imgurl: require("../../../assets/home/15.png"),id:"84",url:'/top_aspx'
        },
        {
          title: "羊",
          imgurl: require("../../../assets/home/16.png"),id:"84",url:'/top_aspx'
        },
        {
          title: "毛驴",
          imgurl: require("../../../assets/home/17.png"),id:"85",url:'/top_aspx'
        },
        {
          title: "鸭子",
          imgurl: require("../../../assets/home/18.png"),id:"86",url:'/top_aspx'
        },
        {
          title: "鹅",
          imgurl: require("../../../assets/home/19.png"),id:"87",url:'/top_aspx'
        },
        {
          title: "查看更多",
          imgurl: require("../../../assets/home/gengduo.png")
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