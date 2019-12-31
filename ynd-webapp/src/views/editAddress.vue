<template>
  <div>
    <div class="header">
      <router-link to="/address">
        <i>
          <img src="../../static/index/icon_6.png" alt />
        </i>
      </router-link>

      <span class="money">编辑地址</span>
     
    </div>
<div class="box">
      <!-- <input type="text" placeholder="请选择" @click="show"> -->
<van-address-edit style="margin-top:0.5rem"
        :area-list="areaList"
        show-search-result
        :search-result="searchResult"
        show-set-default  
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @change-detail="onChangeDetail"
      />
</div>

   
  </div>
</template>
    

<script>
import address from '../assets/area'

export default {
  data() {
    return {
      areaList:address,
      searchResult: [],
      flag:false,
      data:[],
      addr_id:"",
      txt:""
    }
    
  },
  props:{
       

    },

  methods: {
     onSave(a) {
       this.txt=a;
      if (a.isDefault == true) {
        a.isDefault = 1;
      } else {
       a.isDefault = 0;
      }
      console.log(a);
        fetch("http://39.98.112.201/user/change_address/", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "token":sessionStorage.getItem('token')
        },
        body: JSON.stringify({    
          addr_id:this.addr_id,   
          name:a.name,
          phone:a.tel,
          area:a.province + a.city + a.county,
          address:a.addressDetail,
          is_default: a.isDefault
        })
      })
        .then(resp => resp.json())
        .then(data => {
          console.log(data);
         
        });
      this.$router.push('/address')
        
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }];
      } else {
        this.searchResult = [];
      }
      
    },
    show(){
      this.flag=!this.flag;
    },

    select(){
      console.log(a)
    }

   
  },
  mounted(){
     this.addr_id=this.$route.params.id;
     
      
    }

}
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
.money {
  width: 70%;
  text-align: center;
  display: inline-block;
  line-height: 0.5rem;
}
.add {
  width: 0.4rem;
  position: absolute;
  right: 0rem;
  top: 0.17rem;
  font-size: 0.14rem;
  color: gray;
}
input {
  width: 100%;
  height: 0.4rem;
  border: none;
  border-bottom: 0.01rem solid gainsboro;
  padding-left: 0.2rem;
  outline: none;
  box-sizing: border-box;
}
.box{
  margin-top: 0.5rem
}
</style>
