<template>
  <div class="h">
    <div class="head">
        <router-link to="/">
            <div class="back"></div>
        </router-link>
      <img src="../../../static/cateGatherCheap/1.png" alt />
      <br />
      <input type="text" />
    </div>
    <div class="headImg">
      <img src="../../../static/cateGatherCheap/1.jpg" alt />
    </div>
  </div>
</template>
<script>
export default {};
</script>

<style scoped lang="scss">
.head {
  height: 0.8rem;
  width: 100%;
  background: #f82150;
  position: fixed;
  background-image: url(../../../static/cateGatherCheap/2.png);
  background-position: 0.1rem 0.1rem;
  background-size: 0.25rem 0.25rem;
  background-repeat: no-repeat;
  text-align: center;
  font-size: 0.18rem;
  z-index: 3;
}
.head input {
  width: 92%;
  height: 0.3rem;
  border: none;
  border-radius: 0.3rem;
  font-size: 0.16rem;
  background-image: url(../../../static/cateGatherCheap/3.png);
  background-size: 0.3rem 0.3rem;
  background-repeat: no-repeat;
}
.head img {
  margin-top: 0.05rem;
  width: 1rem;
  height: 0.35rem;
}
.headImg {
  width: 100%;
}
.headImg img {
  width: 100%;
  height: 100%;
  margin-top: 0.8rem;
}
.back{
    width: 0.5rem;
    height: 0.3rem;
    position: absolute;
    top: 0.1rem;
}
</style>
