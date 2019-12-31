<template>
  
    <div class="box">
        <router-link :to="item.url" v-for="(item,index) in nav" :key=index>
             <a  class="nav_a">
            <i class="nav_i">
                <img :src=item.img>
            </i>
            <p class="nav_p">{{item.title}}</p>
        </a>
        </router-link>
       
    </div>
 
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      nav:[
          {title:"聚便宜",img:require("../../../static/index/nav_1.png"),url:"/cateGatherCheap"},
          {title:"采购大厅",img:require("../../../static/index/nav_2.png"),url:"/catehall"},
          {title:"品牌馆",img:require("../../../static/index/nav_4.png"),url:"/cateBrand"},
          {title:"全国行情",img:require("../../../static/index/nav_3.png"),url:"/cateMaretQuotations"},
          {title:"资讯",img:require("../../../static/index/nav_5.png"),url:"/cateInformation"},

      ]
    };
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">

.box{
    width: 100%;
    display: flex;
    justify-content: space-around;
    margin-top: 0.1rem;
}
.nav_a{
    display: inline-block;
    text-align: center
}
.nav_i{
        display: inline-block;
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
}
.nav_i img{
    width: 100%;
    height: 100%;
}
.nav_p{
    font-size: 0.14rem
}
</style>
