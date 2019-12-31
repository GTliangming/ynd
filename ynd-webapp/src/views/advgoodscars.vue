<template>
  <div>
    
   <div v-if="showbushow">
    <div class="shopping" v-if="showbushow">
   <jx-cart-header v-if="showbushow"></jx-cart-header>
   
  
    <div v-if="showbushow">
    <jx-cart-shop @del="del" @Allxuan="Yxuan"  @ceshi="ceshi" :data="data" :sid="sid" :key="sid"  v-for="(data,sid) in msg.data.carts" class="white"></jx-cart-shop>
    </div>
  
   
   <jx-cart-footer  @cAll="checkAll" :data="msg" class="didi" v-if="showbushow" :yy="yy"></jx-cart-footer>
   </div>
   </div>
  
  <footerbar></footerbar>
  <router-link to = "/advlogin">
  <div class="bushow" v-if="this.bushow"><p>您尚未登陆</p><p>请登录</p></div>
  </router-link>
  </div>
</template>

<script>
// {

//         headers: {

//             'token': 'Bearer ',

//             "Cookie" : 'sessionId=' + sessionId + '; recId=' + recId

//         }


//import shopApi from '../shopapi/carapi'
import myheader from './head'
import myfooter from './footer'
import myshop from './shop'
import footerbar from '../components/common/footerbar/footbar'
export default {
  name: 'advgoodsscars',
  data () {
    return {
      msg:"",
      carts_id:"",
      shopSelectYesNo: true,
      token:"",
      pic:"",
      yy:"/payorder2",
      name:"",
      phone:"",
      showbushow:0,
      bushow:1
     
    }
  },
  components:{
    'jx-cart-header':myheader,
    'jx-cart-footer':myfooter,
    'jx-cart-shop':myshop,
    footerbar
  },
  props:["data","sid"],
  methods:{
    pan(){
       if(this.msg.data.carts.length==0){
         console.log(this.msg.data.carts.length);
         this.yy="";
       }
    },
    gettoken(){
      if(sessionStorage.getItem('token')){
         this.token= sessionStorage.getItem('token');
         this.pic = sessionStorage.getItem('pic');
         this.name= sessionStorage.getItem('name');
         this.phone = sessionStorage.getItem('phone');
      }
         
    },
    del(sid){
          
          this.carts_id=this.msg.data.carts[sid].carts_id;
         
        //   this.$axios.delete(this.HOST+'cart/delete_from_carts/',{"cart_id":this.carts_id},{headers: {'token':'YjE4NTViYmQwY2FmNDYxMzgxMmJkOTMwNjQwMjg3MjE='}})
        // .then((response)=>{
        //     //将response获得的数据进行处理
        //    // var data=response.data;
        //    // this.categoryInfo=data.data;
        //    console.log(response.data); 
        // //  this.msg=response.data;
        // //  console.log(this.msg);
        //     //data可以是多种数据类型，通过全局变量tableData将数据传出。
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
          fetch(this.HOST+"cart/delete_from_carts/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "token": this.token
         
        },
       body: JSON.stringify({
         "cart_id":this.carts_id
        })
      
      })
       .then(resp => resp.json())
        .then(data => {
          console.log(data);
        //  this._initgetaddress()
          
        });
      this.msg.data.carts.splice(sid,1);
    },
    getdata(){
    if(this.token){
           this.showbushow=1;
           this.bushow = 0;
         this.$axios.get(this.HOST+'cart/get_carts/',{headers: {'token':this.token}})
        .then((response)=>{
            //将response获得的数据进行处理
           // var data=response.data;
           // this.categoryInfo=data.data;
           console.log(response.data); 
         this.msg=response.data;
         console.log(this.msg);
            //data可以是多种数据类型，通过全局变量tableData将数据传出。
        })
        .catch(function (error) {
            console.log(error);
        })
    }else{
      this.showbushow=0;
      this.bushow = 1;
    }
    },
    //价格计算
    // _initfilters(){
    //       let total =0 
    //         if(this.msg.data.carts){
    //              this.msg.data.carts.forEach(function(product,pid){
    //                  if(product.is_selected){
    //                    total += (product.goods_price * product.goods_num )
    //                  }
    //              })
            
    //         }
            
    //       return total;
    // },
    //暂时先注掉
    //商品操控商店是否被选中
    // Yxuan(sid){
    //   let igeclect = this.msg.data.carts.every(function(product,sid,arr){
    //     return product.is_selected == true
    //   })
    //   this.msg.data.is_all_selected = igeclect;

    //   // let waiT =this.msg.shops.every(function(shop,sid,arr){
    //   //   return shop.checked == true
    //   // })
    //   // this.msg.checked = waiT
    //   },
      
     //注销到此处位置
      //console.log(sid)
                // let checked = this.msg.shops[sid].products.every((product, ppid, nArr) => {
                //     return product.checked == true
                // })

                // this.msg.shops[sid].checked = checked;

                // let schecked = this.msg.shops.every((shop,ssid,nArr)=>{
                //     console.log(shop.checked)
                //     return shop.checked == true
                // })


                // this.msg.checked = schecked
             
      //    })
      //       //shop[sid].checked =shopSelectYesNo
      //  })
       
      //  let BigShop = 0;
      //  this
    
    Yxuan(sid){

      let igeclect = this.msg.data.carts.every(function(product,sid,arr){
        return product.is_selected == true
      })
      if(!this.msg){
        igeclect=0;
      }
      this.msg.data.is_all_selected = igeclect;
    },
    //  Yxuan2(pid){
    //   let igeclect = this.msg.data.carts.every(function(product,sid,arr){
    //     return product.is_selected == true
    //   })
    //   this.msg.data.is_all_selected = igeclect;
    // },
    ceshi(sid){
      let yesorno = this.msg.data.carts[sid].carts_id;
      // if(yesorno){
        //  this.$axios.put(this.HOST+'cart/select/',{"cart_id":1},{headers: {'token':'YjE4NTViYmQwY2FmNDYxMzgxMmJkOTMwNjQwMjg3MjE='}})
        // .then((response)=>{
        //     //将response获得的数据进行处理
        //    // var data=response.data;
        //    // this.categoryInfo=data.data;
        // //   console.log(response.data.data); 
        //  this.msg=response.data;
        //  console.log(this.msg);
        //     //data可以是多种数据类型，通过全局变量tableData将数据传出。
        // })
        // .catch(function (error) {
        //     console.log(error);
        // })
        fetch(this.HOST+"cart/select/", {
        method: "put",
        headers: {
          "Content-Type": "application/json",
          "token": this.token
         
        },
       body: JSON.stringify({
         "cart_id":yesorno
        })
      
      })
       .then(resp => resp.json())
        .then(data => {
          console.log(data);
         this._initgetaddress()
          
        });
      // }else{
      //    this.$axios.put(this.HOST+'cart/select/',{"cart_id":0},{headers: {'token':'YjE4NTViYmQwY2FmNDYxMzgxMmJkOTMwNjQwMjg3MjE='}})
      //   .then((response)=>{
      //       //将response获得的数据进行处理
      //      // var data=response.data;
      //      // this.categoryInfo=data.data;
      //   //   console.log(response.data.data); 
      //   //  this.msg=response.data;
      //   //  console.log(this.msg);
      //       //data可以是多种数据类型，通过全局变量tableData将数据传出。
      //   })
      //   .catch(function (error) {
      //       console.log(error);
      //   })
      // }
      
      // console.log(sid);
      // let checked = this.msg.data.is_all_selected;
      // console.log(checked);
      // this.msg.data.carts.forEach(function(product,pid){
      //   console.log(pid);
      //   product.is_checked = checked;
      // })
      
     },
    //主导此处位置
    //  _initPageData(){
    //   let sss= shopApi
    //   this.msg =sss
    //   // let data = await shopApi.getShopInfo()
      
    //   //   this.msg = data
    //   //  console.log(data)
    //   console.log(sss)
    // },
    //暂时先注掉
    // allse(){
          
    // },
    checkAll(){
      if(this.msg.data.is_all_selected){
          
            // shop.products.forEach(function(product,pid){
            //   product.checked=seclected;
            // })
            
         this.$axios.put(this.HOST+'cart/all_select/',{"is_all_selected":1},{headers: {'token':this.token}})
        .then((response)=>{
            //将response获得的数据进行处理
           // var data=response.data;
           // this.categoryInfo=data.data;
          console.log(response.data.msg); 
        //  this.msg=response.data;
        //  console.log(this.msg);
            //data可以是多种数据类型，通过全局变量tableData将数据传出。
            if(response.data.msg=="请求成功"){
                  this.msg.data.carts.forEach(function(shop,sid){
                        shop.is_selected=0;
                        })
            }
           
        })
        .catch(function (error) {
            console.log(error);
        })
      //  this.msg.data.carts.forEach(function(shop,sid){
      //       shop.is_selected=0;
      //       })

          
      }
      else{
        // this.msg.data.carts.forEach(function(shop,sid){
        //     shop.is_selected=1;

        //  })
          // let selected=this.msg.data.is_all_selected;
        this.$axios.put(this.HOST+'cart/all_select/',{"is_all_selected":0},{headers: {'token':this.token}})
        .then((response)=>{
            //将response获得的数据进行处理
           // var data=response.data;
           // this.categoryInfo=data.data;
           console.log(response.data.msg); 
        //  this.msg=response.data;
        //  console.log(this.msg);
            //data可以是多种数据类型，通过全局变量tableData将数据传出。
             if(response.data.msg=="请求成功"){
                  this.msg.data.carts.forEach(function(shop,sid){
                        shop.is_selected=1;
                        })
            }
        })
        .catch(function (error) {
            console.log(error);
        })  
          
      }   
      
      

    },
    AddNum(sid,flag){
      console.log(sid,flag);
      if(flag){

        let yy=this.msg.data.carts[sid].goods_num+10;
        this.msg.data.carts[sid].goods_num=yy;

        this.carts_id= this.msg.data.carts[sid].carts_id;
        
         this.$axios.put(this.HOST+'cart/change_num/',{"cart_id":this.carts_id,"code":"+"},{headers: {'token':this.token}})
        .then((response)=>{
            //将response获得的数据进行处理
           // var data=response.data;
           // this.categoryInfo=data.data;
        //   console.log(response.data.data); 
        //  this.msg=response.data;
        //  console.log(this.msg);
            //data可以是多种数据类型，通过全局变量tableData将数据传出。
        })
        .catch(function (error) {
            console.log(error);
        })
      }else{
        if(this.msg.data.carts[sid].goods_num>10){

          let  tt=this.msg.data.carts[sid].goods_num - 10;
         this.msg.data.carts[sid].goods_num=tt;

         this.carts_id= this.msg.data.carts[sid].carts_id;    
        
         this.$axios.put(this.HOST+'cart/change_num/',{"cart_id":this.carts_id,"code":"-"},{headers: {'token':this.token}})
        .then((response)=>{
            //将response获得的数据进行处理
           // var data=response.data;
           // this.categoryInfo=data.data;
        //   console.log(response.data.data); 
        //  this.msg=response.data;
        //  console.log(this.msg);
            //data可以是多种数据类型，通过全局变量tableData将数据传出。
        })
        .catch(function (error) {
            console.log(error);
        })
        }else{
          this.msg.data.carts[sid].goods_num;
        }
        
      }
      
    }
  },
  // watch:{
  //     msg:{
  //       handler:function(n,o){
  //           let total=this._initfilters();
  //           console.log(total);
  //           if(total>8000 && this.shopSelectYesNo== true){
  //                console.log("满8000减100");
  //                this.shopSelectYesNo = false

  //           }
  //       },
  //       deep:true
  //     }
  // },
  created(){
     this.gettoken();
    
    //  this._initfilters();
  },
  mounted(){
    this.getdata();
    this.$event.$on("add",this.AddNum);
    this.Yxuan(pid);
    this.pan();
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bushow{
  position:fixed;
  top:2.4rem;
  left:0;
  width: 3.75rem;
  height:.3rem;
  font-size: .2rem;
  line-height: .3rem;
  table-layout: center;
  color: red;
}
.bushow p{
  text-align: center;
}
.didi{
  margin-bottom: .58rem;
}
.shopping{
   margin-bottom: .48rem;
}
</style>