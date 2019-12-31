<template>
  
    <div class="app">
      <p class="title">
         <span>---为你推荐---</span>
    </p>
    </div>
 
</template>

<script>

export default {
  data() {
    return {
      
    };
  },
  methods: {
  },
  components:{
     
  }
};
</script>

<style scoped lang="scss">
.title{
    height: 0.5rem;
    // background-color: #F2F2F2;
    text-align: center;
    line-height: 0.5rem
}
.title span{
  font-size: 0.16rem;
  font-weight: 600
}
.title i{
    width: 0.3rem;
    height: 0.3rem;
    display: inline-block;
}
.title img{
       width: 100%;
    height: 100%;
    position: relative;
    top: 0.05rem;
    left: -0.08rem;
}
</style>
