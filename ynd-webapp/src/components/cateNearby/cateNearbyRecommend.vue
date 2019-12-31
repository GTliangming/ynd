<template>
    <div class="rec">
        <p>附近最新推荐</p>

            <div class="mend">
                <div v-for="(v,i) in data" :key="i" class="con">
                    <router-link :to="'goodsInfo/'+v.id">
                    <img :src="v.small_pic" alt="">
                    <p class="p">{{v.title}}</p>
                    <p class="money">{{v.price2}}<span>元/箱</span></p>
                    </router-link>
                </div>
            </div>

        
    </div>
</template>
<script>
    export default {
       props: ["data"],
    }
</script>

<style scoped>
  .mend{
      width: 92%;
      display: flex;
      overflow-x: auto;
      margin-left: 0.12rem;
  }
  .con{
      width: 30%;
      margin-top: 0.1rem;
      margin-left: 0.03rem;
      flex-shrink: 0;
  }
  .rec>p{
      margin-left: 0.2rem;
      margin-top: 0.25rem;
      font-weight:700;
  }
  .con img{
      width: 1rem;
      height: 1rem;
      display: block;
      margin: 0 auto;
      border-radius: 0.1rem;
  }
  .money{
      font-size: 0.2rem;
      color: #e95339;
      font-weight: 700;
  }
  .money span{
      font-size: 0.12rem;
  }
  .p{
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
  }
</style>
