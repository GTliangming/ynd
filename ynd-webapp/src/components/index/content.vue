<template>
  
    <div class="app">
     <contop></contop>
      <conbtn></conbtn>
    </div>
 
</template>

<script>
import contop from './content/content_top';
import conbtn from '../index/content/contentbottom'
export default {
  data() {
    return {
      
    };
  },
  methods: {
  },
  components:{
      contop,
      conbtn
  }
};
</script>

<style scoped lang="scss">
</style>
