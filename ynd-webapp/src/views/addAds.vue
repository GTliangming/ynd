<template>
  <div>
    <div class="header">
      <router-link to="/address">
        <i>
          <img src="../../static/index/icon_6.png" alt />
        </i>
      </router-link>

      <span class="money">添加新的收货地址</span>
    </div>

    <div>
      <van-address-edit
        style="margin-top:0.5rem"
        :area-list="areaList"
        show-search-result
        show-set-default      
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
         @delete="onDelete"
        @change-detail="onChangeDetail"
        
      />
    </div>
  </div>
</template>
    

<script>
import address from "../assets/area";

export default {
  data() {
    return {
      areaList: address,
      searchResult: [],

      name: "",
      tel: "",
      area: "",
      address: "",
      is_default: ""
    };
  },

  props: {},

  methods: {
      onDelete() {
      // Toast('delete');
    },
    onSave(a) {
      
      if (a.isDefault == true) {
        a.isDefault = 1;
      } else {
       a.isDefault = 0;
      }
      console.log(a);
        fetch("http://39.98.112.201/user/add_address/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token":sessionStorage.getItem('token')
         
        },
        body: JSON.stringify({
          
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
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    tiaozhuan() {
    
    }
  }
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
.save {
  position: absolute;
  top: 2.58rem;
  width: 3.5rem;
  height: 2r;
  height: 0.44rem;
  left: 0.1rem;
}
</style>
