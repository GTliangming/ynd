<template>
  <div class="con_box">
    <router-link v-for="(item,index) in news" :key="index" :to="item.url" class="con">
      <div >
        <p>{{item.title}}</p>
        <i>
          <img :src="item.img" />
        </i>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {},
  data() {
    return {
      news: [
        {
          title: "附近好货",
          img: require("../../../../static/index/goods_5.png"),
          url: "/cateNearby"
        },
        {
          title: "优农严选",
          img: require("../../../../static/index/goods_6.png"),
          url: "/cateStrict"
        },
        {
          title: "最近浏览",
          img: require("../../../../static/index/goods_7.png"),
          url: "/cateRecently"
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.con_box {
  display: flex;
  justify-content: space-between;
  overflow: hidden;
}
.con p {
    font-size: 0.15rem;
    margin-top: 0.1rem;
    font-weight: 600;
}
.con i {
  width: 0.8rem;
  height: 0.8rem;
  display: inline-block;
  margin-top: 0.1rem;
}
.con {
  width: 33%;
  border-right: 0.01rem solid gainsboro;
  padding: 0rem 0.2rem;
  box-sizing: border-box;
  // text-align: center
}
.con img {
  width: 100%;
  height: 100%;
}
</style>
