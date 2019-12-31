<template>
    <div>
        <div class="right">
            <div class="con" v-for="(v,i) in data" :key="i">
                <img :src="v.pic" alt="">
                <p>{{v.title}}</p>
                <span>{{v.time}}</span>
            </div>
        </div>    
    </div>
</template> 
<script>
     export default {
         props: ["data"]
    }
</script>

<style scoped>
  .right{
      width: 90%;
      position: relative;
      margin: 0 auto;
      display: flex;
      flex-direction: row;
       flex-wrap: wrap;
  }
  .con{
      width:49%;
      background: #f6f6f6;
      margin-left:0.02rem;
      margin-top: 0.1rem;
      border-bottom: 0.01rem solid #e4dfdf;
      border-radius: 0.1rem;
  }
  .con img{
      width: 1.3rem;
      height: 1rem;
      margin-top: 0.1rem;
      margin-left: 0.13rem;
  }
  .con p{
      width: 90%; 
      /* margin-left: 0.1rem; */
      margin-top: 0.12rem;
      text-align: center;
      text-indent: 0.15rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
   .con span{
      margin-left: 0.17rem;
      font-size: 0.12rem;
      color: #928f8e;
        font-weight: 700;
  }

</style>
