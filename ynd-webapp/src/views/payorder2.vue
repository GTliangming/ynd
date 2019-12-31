<template>
  <div class="order">
    <div>
      <ordertop />
      <div v-if="this.isno" class="showshow">
        <ordercont :address="info" v-if="this.isno" />
        <ordercont1 :info="goods" v-if="this.isno" />
        <orderfooter :goods="goods" @create="sendOrder" :total="total" v-if="this.isno" />
      </div>
    </div>
    <router-link to="/address">
      <div class="bushow" v-show="this.bushow">
        <p>您尚未添加地址</p>
        <p>请添加收货地址</p>
      </div>
    </router-link>
  </div>
</template>

<script>
import { Dialog } from "vant";
import ordertop from "../components/ordercom/ordertop";
import ordercont from "../components/ordercom/ordercont";
import ordercont1 from "../components/ordercom/ordercont2";
import orderfooter from "../components/ordercom/orderfooter2";
export default {
  name: "payorder",
  data() {
    return {
      info: "",
      goods: "",
      id: "",
      good_num: "",
      addr_id: "",
      total: "",
      isno: 0,
      bushow: 1
    };
  },
  components: {
    ordertop,
    ordercont,
    ordercont1,
    orderfooter
  },
  methods: {
    getGoods() {
      this.id = this.$route.params.id;
      fetch("http://39.98.112.201/cart/confirm_order/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token")
        }
      })
        .then(resp => resp.json())
        .then(data => {
          this.goods = data.data.product;
          console.log(data.data);

          this.info = data.data.address;

          if (this.info) {
            this.isno = 1;
            this.bushow = 0;
          } else {
            this.isno = 0;
            this.bushow = 1;
          }

          this.goods = data.data.products;
          this.total = data.data.total_price;
          this.addr_id = data.data.address.id;

          console.log(this.addr_id);
        });
    },
    sendOrder() {
      fetch("http://39.98.112.201/order/create_order/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem("token")
        },
        body: JSON.stringify({
          addr_id: this.addr_id
        })
      })
        .then(resp => resp.json())
        .then(data => {
          if (data.status == 204) {
          } else {
            console.log(data);
            window.location.href = data.data.pay_url;
          }
        });
    }
  },
  created() {
    this.getGoods();
  },
  mounted() {}
};
</script>

<style scoped>
.order {
  font-size: 0.18rem;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  overflow-y: auto;
  background-color: #fafafa;
}
.bushow {
  position: fixed;
  top: 2.4rem;
  left: 0;
  width: 3.75rem;
  height: 0.3rem;
  font-size: 0.2rem;
  line-height: 0.3rem;
  table-layout: center;
  color: red;
  z-index: 7;
}
.bushow p {
  text-align: center;
}
.showshow {
  z-index: 70;
}
</style>