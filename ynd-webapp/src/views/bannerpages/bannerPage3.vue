<template>
    <div class="bannerPage2">
        <Pages3_top></Pages3_top>
        <Pages3_con></Pages3_con>
        <Pages3_footer></Pages3_footer>
    </div>
</template>

<script>
import Pages3_top from '../../components/bannerPages/pages3Top'
import Pages3_con from '../../components/bannerPages/pages3Con'
import Pages3_footer from '../../components/bannerPages/pages3Footer'
export default {
    name: "bannerPage3",
    components:{
        Pages3_top,
        Pages3_con,
        Pages3_footer,
    }
}
</script>

<style scoped>
    .bannerPage2{
        background-color: #318E01;
    }
</style>