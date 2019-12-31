<template>
  <div>
    <publishtop/>
    <footbar></footbar>
  </div>
</template>

<script>
  import footbar from "../components/common/footerbar/footbar";
  import publishtop from "../components/publish/publishtop";
  export default {
    name: "publish",
    components:{
      footbar,
      publishtop,
    }
  }
</script>

<style scoped lang="scss">

</style>
