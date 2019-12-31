<template>
  <div class="product">
    <producttop :detail="detail" />
    <productcont2 :detail="detail" />
    <productcont3 :detail="detail" />
    <productpay :detail="detail" @on="sendNum" :access="access" />
  </div>
</template>

<script>
import { Dialog } from 'vant';
import producttop from "../components/product/producttop";
import productcont2 from "../components/product/productcont2";
import productcont3 from "../components/product/productcont3";
import productpay from "../components/product/productpay";
import goodApi from "../api/goodsList";
export default {
  name: "product",
  data() {
    return {
      data: [],
      info: [],
      id: "",
      detail: "",
      num: "",
      name:"",
      pic:"",
      token:"",
      phone:"",
      access:""
    };
  },
  components: {
    producttop,
    productcont2,
    productcont3,
    productpay
  },
  methods: {
    gettoken(){
         this.token= sessionStorage.getItem('token');
         this.pic = sessionStorage.getItem('pic');
         this.name= sessionStorage.getItem('name');
         this.phone = sessionStorage.getItem('phone');
    },
    _initgetaddress() {
      fetch(
        "http://39.98.112.201/product/product_detail/?good_id=" + this.id,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            token: this.token
          }
        }
      )
        .then(resp => resp.json())
        .then(data => {
          console.log("ssdfdf");
          console.log(data.data.evaluate);
          this.detail = data.data.product;
         
          console.log(this.access);
          if(data.data.evaluate.length==0){
            this.access="暂无评价";
           
          }else{
              this.access=data.data.evaluate;
          }
        });
    },
    msg1(){
      Dialog({ message: '添加成功' });
    },
    msg2(){
      Dialog({ message: '请先登录' });
    },

    sendNum(num,id) {
      this.num = num;
      this.id=id;
      console.log(this.num.slice(0, -2),this.id);
      fetch("http://39.98.112.201/product/add_to_cart/ ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token: this.token
        },
        body: JSON.stringify({
          goods_id:this.id,
          goods_num:this.num.slice(0, -2)
          
        })
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
          if(data.status==200){
            this.msg1()
          }
          else{
            this.msg2()
          }
        });
    }
  },
  created(){
     this.gettoken();
  },
  mounted() {
    this.id = this.$route.params.id;
    this._initgetaddress();
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0);
    });
  }
};
</script>

<style scoped>
body {
  background-color: white;
}
</style>