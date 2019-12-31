<template>
  
    <div class="order">
      <ordertop />
      <ordercont :address="info"/>
      <ordercont1 :info="goods"/>
      <orderfooter :goods="goods" @create='sendOrder'/>
    </div>
  
</template>

<script>
import { Dialog } from 'vant';
import ordertop from "../components/ordercom/ordertop";
import ordercont from "../components/ordercom/ordercont";
import ordercont1 from "../components/ordercom/ordercont1";
import orderfooter from "../components/ordercom/orderfooter";
export default {
  name: "payorder",
  data(){
      return{
          info:"",
          goods:"",
          id:"",
          good_num:"",
          addr_id:""
      }
  },
  components: {
    ordertop,
    ordercont,
    ordercont1,
    orderfooter
  },
  methods: {
      msg2(){
      Dialog({ message: '请先登录' });
    },
    getinfo() {
      fetch("http://39.98.112.201/order/get_address/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token:sessionStorage.getItem('token')
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data.data);
          this.info=data.data;
          this.addr_id=data.data.id;
          console.log(data.data.id)
          console.log(this.addr_id)
         
        });
    },
    getGoods(){
      this.id=this.$route.params.id;
            fetch("http://39.98.112.201/product/product_detail/?good_id=" + this.id, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          token: sessionStorage.getItem('token')
        }
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data.data.product);
          this.goods=data.data.product;
          this.good_num=data.data.product.num.slice(0,-2);
         console.log(this.good_num)
        });
    },
            sendOrder() {
                fetch('http://39.98.112.201/order/create_order/', {
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "token":sessionStorage.getItem('token')
                    },
                    body: JSON.stringify({
                        addr_id:this.addr_id,
                        good_id:this.id,
                        good_num:this.good_num,
                    })
                }).then(resp=>resp.json()).then(data=>{
                  if(data.status==204){
                   this.msg2()
                      
                  }else{
                     console.log(data)
                    window.location.href = data.data.pay_url
                  }
                   

                });
                console.log("order")
            },
  },
  mounted(){
      this.getinfo();
      this.getGoods()
  }


}
</script>

<style scoped>
.order{
  font-size: 0.18rem;
    position: absolute;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    overflow-y: auto;
    background-color: #FAFAFA;
}
</style>