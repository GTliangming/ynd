<template>
  <div class="con_box">
    <router-link to="/cateHotSale">
          <div class="con" style="border-right:0.01rem solid gainsboro">
      <p class="con_title">热门好货</p>
      <div class="con_big">
        <div class="con_small">
          <i class="con_img">
            <img src="../../../../static/index/goods_1.png" />
          </i>
          <br />
          <span class="con_price">￥10</span>
          <s class="price">￥15</s>
        </div>
        <div class="con_small">
          <i class="con_img">
            <img src="../../../../static/index/goods_2.png" />
          </i>
          <span class="con_price">￥15</span>
          <s class="price">￥15</s>
        </div>
      </div>
    </div>
    </router-link>

    <router-link to="/listnew">
      <div class="con">
        <p class="con_title">每日上新</p>
        <p class="con_ps">每日九点,折扣上新</p>
        <div class="con_big">
          <div class="con_small">
            <i class="con_img">
              <img src="../../../../static/index/goods_3.png" />
            </i>
          </div>
          <div class="con_small">
            <i class="con_img">
              <img src="../../../../static/index/goods_4.png" />
            </i>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  methods: {}
};
</script>

<style scoped lang="scss">
.con_box {
  display: flex;
  width: 100%;
  justify-content: space-around;
  margin-top: 0.2rem;
  border-bottom: 0.01rem solid gainsboro;
  padding: 0.1rem;
  box-sizing: border-box;
}
.con_big {
  display: flex;
}
.con {
  width: 100%;
  padding: 0rem 0.1rem;
  box-sizing: border-box;
}
.con_img {
  width: 0.8rem;
  height: 0.8rem;
  display: inline-block;
}
.con_img img {
  width: 100%;
  height: 100%;
}
.con_title {
    font-size: 0.16rem;
    font-weight: 600;
}
.con_ps {
  margin: 0.05rem 0rem;
  font-size: 0.12rem;
  color: gray;
}
.con_price {
  color: brown;
  font-size: 0.14rem;
}
.price {
  font-size: 0.12rem;
  color: grey;
  margin-left: 0.1rem;
}
</style>
