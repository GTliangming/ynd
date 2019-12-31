<template>
  
    <div class="box">
      <i class="logo_box">
        <img src="../../../static/index/logo.jpg" />
      </i>
     
      <router-link to="/search" style="height:0.5rem">
           <input type="text" class="search" />
      </router-link>

      <i class="logo_box2">
        <img src="../../../static/index/icon_3.png" @click="map"/>
      </i>
     
    </div>
 
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      
    };
  },
   methods: {
    map(){
      this.$router.push({path:'/imap'})
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  font-size: 0px;
  display: flex;
  justify-content: space-around;
  justify-items: center;
    border-bottom: 0.01rem solid gainsboro;
    margin-bottom: 0.1rem;
}
.logo_box {
  width: 0.6rem;
  height: 0.6rem;
}
.logo_box2 img {
  width: 100%;
  height: 100%;
}
.logo_box img {
  width: 100%;
  height: 100%;
}
.search {
  width: 2rem;
  height: 0.3rem;
  background-color: #eaebed;
  border-radius: 0.1rem;
  margin-top: 0.15rem;
  border: none;
  background-image: url(../../../static/index/icon_1.png);
  background-size: contain;
  background-repeat: no-repeat;
  outline: none;
  padding-left: 0.3rem;
}

.logo_box2 {
  width: 0.27rem;
  height: 0.27rem;
  margin-top: 0.15rem;
}

</style>
