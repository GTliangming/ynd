<template>
  <div>
      <mytop/>
      <mycont/>
      <mycont2/>
      <footbar></footbar>
  </div>
</template>

<script>
    import footbar from "../components/common/footerbar/footbar";
    import mytop from "../components/my/mytop";
    import mycont from "../components/my/mycont";
    import mycont2 from "../components/my/mycont2";
    export default {
        name: "my",
        components:{
            footbar,
            mytop,
            mycont,
            mycont2
        }
    }
</script>

<style scoped>
  body{
      background-color: #EFEFEF;
  }
</style>
