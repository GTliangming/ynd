<template>
  <van-goods-action>
    <van-goods-action-icon icon="chat-o" text="客服" @click="onClickIcon" />
    <van-goods-action-icon icon="cart-o" text="购物车" @click="onClickIcon" />

      <van-goods-action-button  type="warning" text="加入购物车" @click="onClickButton(detail.num,detail.id)" />
   <router-link :to="'/payorder/'+detail.id" v-if="detail.id">
        <van-goods-action-button type="danger" text="立即购买" />
    </router-link>
    
  </van-goods-action>
</template>

<script>
import Vue from "vue";
import { GoodsAction, GoodsActionIcon, GoodsActionButton } from "vant";

Vue.use(GoodsAction);
Vue.use(GoodsActionIcon);
Vue.use(GoodsActionButton);
export default {
  name: "productpay",
 
  props:["detail"],
  methods: {
    onClickIcon() {
      Toast("点击图标");
    },
    onClickButton(num,id) {
      // Toast('点击按钮');     
      this.$emit("on",num,id)
    },
    // onClickBtn(){
    //   this.$router.push({ path: "/payorder" },{query:""});
    // }
   
  }
};
</script>

<style scoped>
</style>