<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  body,ul,ol,dl,dd,p,h1,h2,h3,h4,h5,h6,input,textarea,hr,div,em,strong{
    margin:0;
    padding:0;
  }
  body{
    font-family: "微软雅黑";
  }
  ul,ol{
    list-style-type: none;
  }
  a{
    text-decoration: none;
  }
  img{
    border: none;
  }

  html{
    font-size: 26.67vw;
  }
  body{
    font-size: 0.16rem;
    overflow: auto;
    width: 100%;
    background-color: white
  }
  a{
    color: black
  }
    html,body{
    overflow-x:hidden;
    }

    @import './assets/carts.css';
    @import './assets/basic.css'
</style>
