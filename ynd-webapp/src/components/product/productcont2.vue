<template>
  <div class="productcont2">
    <p class="specification">详情:</p>
    <div  v-if="detail  ">
      <p class="specificationlist">{{details.explain}}</p>
      <div class="wai" v-if="detail.pic[0]  ">
        <img :src="detail.pic[0]" class="detailsimg" />
      </div>
      <div class="wai" v-if="detail.pic[1]">
        <img :src="detail.pic[1]" class="detailsimg" />
      </div>
      <div class="wai" v-if="detail.pic[2]">
        <img :src="detail.pic[2]" class="detailsimg" />
      </div>
      <div class="wai" v-if="detail.pic[3]">
        <img :src="detail.pic[3]" class="detailsimg" />
      </div>
      <div class="wai" v-if="detail.pic[4]">
        <img :src="detail.pic[4]" class="detailsimg" />
      </div>
     <div class="wai" v-if="detail.pic[5]">
        <img :src="detail.pic[5]" class="detailsimg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "productcont2",
  props: ["detail"],

  data() {
    return {
      details: {
        explain:
          "【联系我时，请说是在一亩田上看到的】多仓发货，支持一件代发，价格美丽！",
        pic: require("../../assets/info_product/my_p1.jpg")
      }
    };
  }
};
</script>

<style scoped>
.productcont2 {
  border-top: 0.15rem solid #efefef;
  width: 100%;
  margin-top: 0.25rem;
}
.wai{
    width: 100%;
    height:3.3rem;
    border: solid .26rem white;
   
    box-sizing: border-box;
}
.specification {
  margin-left: 0.2rem;
  padding-top: 0.2rem;
}
.specificationlist {
  width: 3rem;
  margin-left: 0.2rem;
}
.specificationlist p {
  font-size: 0.13rem;
}
.specificationlist span {
  margin-left: 1.5rem;
}
.specificationlist li {
  list-style: none;
  margin-top: 0.1rem;
}
.detailsimg {
  width: 100%;
  height:100%;
}
</style>