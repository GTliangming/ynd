<template>
  <div>
    <indexSearch></indexSearch>
    <footbar></footbar>
    <indexnav></indexnav>
  
    <router-view />
  </div>
</template>

<script>
  import indexSearch from "../components/index/search"
  import footbar from "../components/common/footerbar/footbar";
  import indexnav from '../components/index/nav';

  
  export default {
    name: "home",
    data(){
      return {
      }
    },
    components:{
      footbar,
      indexSearch,
      indexnav,
    },

  }
</script>

<style scoped lang="scss">

</style>
