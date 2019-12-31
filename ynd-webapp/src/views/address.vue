<template>
  <div>
    <div class="header">
      <router-link to="/payorder2">
        <i >
          <img src="../../static/index/icon_6.png" alt />
        </i>
      </router-link>
      
      <span class="money">地址</span>
      <router-link to="/addAdr">
        <span class="add">添加新地址</span>
      </router-link>
    </div>
  
    <p class="error" v-show="flag">{{msg}}</p>
 
    <div class="list">
      <div class="con" v-for="(item,index) in address" :key="index">
        <i @click="del(item.addr_id)">
          <img src="../../static/index/删 除.png" alt />
        </i>
        <span class="msg">
          <span class="name">{{item.name}}</span>
          <span class="phone">{{item.phone}}</span>
          <p class="address">{{item.address}}</p>
        </span>
        <a :href="'#/editAds/'+item.addr_id">
          <span class="ps">编辑</span>
        </a>
      </div>
    </div>
    <footbar></footbar>
  </div>
</template>

<script>
import footbar from "../components/common/footerbar/footbar";
// import addressApi from "../api/goodsList";
export default {
  name: "classify",
  components: {
    footbar
  },
  data() {
    return {
        msg:"",
        address:"",
        flag:false,
     
    };
  },
  methods: {
    getaddress(){
        fetch("http://39.98.112.201/user/get_address/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token":sessionStorage.getItem('token')
         
        },
      
      })
       .then(resp => resp.json())
        .then(data => {
          console.log(data);
          if(data.status==200){
            this.address=data.data
              
          }
          
          
          else{
            this.msg="亲，请先登录哦";
              this.flag=true;
          }
          
          
        });
    },
     del(x){
        fetch("http://39.98.112.201/user/delete_address/", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "token":sessionStorage.getItem('token')
         
        },
       body: JSON.stringify({
          addr_id:x
        })
      
      })
       .then(resp => resp.json())
        .then(data => {
          console.log(data);
         this.getaddress()
        //  console.log(this.addr_id)
          
        });

    },
    
    
  },
  mounted() {
    this.getaddress();
  },
 
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 0.5rem;
  background-color: #f8f8f8;
  display: flex;
}
.header i {
  width: 0.5rem;
  height: 0.4rem;
  display: inline-block;
  position: relative;
  top: 0.05rem;
}
.header img {
  width: 100%;
  height: 100%;
}
.phone {
  margin-left: 0.1rem;
}
.money {
  width: 70%;
  text-align: center;
  line-height: 0.5rem;
  display: inline-block;
}
.add {
  width: 0.7rem;
  position: absolute;
  right: 0.1rem;
  top: 0.17rem;
  font-size: 0.14rem;
  color: gray;
}
.con i {
      width: 0.25rem;
    height: 0.25rem;
    display: inline-block;
    position: relative;
    top: 0.2rem;
    margin-right: 0.2rem;
}
.con {
  padding: 0.1rem;
  display: flex;
}
.con img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.msg {
  margin-left: 0.2rem;
  border-right: 0.01rem gainsboro solid;
  padding-right: 0.5rem;
}
.address {
  margin-top: 0.1rem;
  width: 1.8rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.ps {
  text-align: center;
  display: inline-block;
  margin-top: 0.1rem;
  margin-left: 0.2rem;
}
.list {
  margin-top: 0.5rem;
}
.error{
     margin-top: 3rem;
    margin-left: 1.3rem;
    color: brown;

}
</style>
