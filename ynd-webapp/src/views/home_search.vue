<template>
  <div>
   
    <div class="box">
      <i class="logo_box">
        <img src="../assets/icon_4.png" @click="back"/>
      </i>

      <div class="seachall">
           <input type="text" class="search" placeholder="请输入内容"  v-model="search"/>
            <router-link :to="{path:'/searchList',query:{value:this.search}}" class="router">
              <button @click="local">搜索</button>
            </router-link>
      </div>

      <i class="logo_box2">
        <img src="../assets/icon_3.png" />
      </i>
     
    </div>

    <div class="hot">
      <p class="title">热门搜索</p>
      <ul>
        <li v-for="(list,i) in products" :key="i">
          <router-link :to="{path:'/searchList',query:{value:list.name}}">
            <span>{{list.name}}</span>
          </router-link>

        </li>
      </ul>

    </div>
    <footbar></footbar>
  </div>
</template>

<script>
  
  import footbar from "../components/common/footerbar/footbar";
  export default {
    name: "",
    data () {
      return {
        search:'',
        products:[
          //假数据
          {name:"汉中邯橘"},
          {name:"洛川县苹果"},
          {name:"陕西苹果"},
          {name:"荔枝"},
          {name:"橙子"},
          {name:"猕猴桃"},
          {name:"大闸蟹"},
          {name:"猪"}
        ],
      }
    },
    methods:{
      back(){
        this.$router.push('./home')
      },
      local(){
        localStorage.setItem("1",this.search)
        this.search = localStorage.getItem("1")
      }

    },
    components:{
      footbar,
    },
  }
</script>

<style scoped lang="scss">
.search {
  width: 2.5rem;
  height: 0.26rem;
  background-color: #eaebed;
  border-radius: 0.1rem;
  margin-top: 0.15rem;
  background-image: url(../assets/icon_2.png);
  background-size: 0.22rem;
  background-repeat: no-repeat;
  background-position: 0.05rem;
  outline: none;
  padding-left: 0.3rem;
  border: 0.01rem solid green;
}
.seachall{
  position: relative;
}
.seachall button{
  position: absolute;
  right: 0.04rem;
  top: 0.16rem;
  border: none;
  border-radius: 0.05rem;
  height: 0.25rem;
  width: 0.5rem;
  color:black;
}
.box {
  width: 100%;
  display: flex;
  justify-content: space-around;
  justify-items: center;

}
.logo_box {
     width: 0.3rem;
    height: 0.2rem;
    margin-top: 0.2rem;

}
.logo_box2 img {
  width: 100%;
  height: 100%;
}
.logo_box img {
  width: 100%;
  height: 100%;
}
.logo_box2 {
  width: 0.27rem;
  height: 0.27rem;
  margin-top: 0.15rem;
}
.title{
  margin: 0.1rem 0.1rem;
  color: gray;
  font-size: 0.16rem
}
.hot{
  width: 90%;
  margin-top:0.5rem;
}
.hot span{
  border: 0.01rem solid rgb(155, 175, 155);
  padding: 0.01rem 0.05rem;
  background-color: rgb(133, 160, 133);
  margin: 0.1rem 0.1rem;
  display: inline-block;
  color: white;
  border-radius: 10%;
}
  .hot ul li{
    display: inline-block;
  }
</style>
