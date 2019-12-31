<template>
       <div class="bannerPage0">
           <Pages0_top></Pages0_top>
           <Pages0_con></Pages0_con>
           <Pages0_footer></Pages0_footer>
       </div>
</template>

<script>
import Pages0_top from '../../components/bannerPages/pages0Top'
import Pages0_con from '../../components/bannerPages/pages0Con'
import Pages0_footer from '../../components/bannerPages/pages0Footer'

export default {
    name: "bannerPage0",
    components:{
        Pages0_top,
        Pages0_con,
        Pages0_footer,
    }
}
</script>

<style scoped>
    .bannerPage0{
    background-color: #63914A;
}
</style>