<template>
    <div class="bannerPage1">
        <Pages1_top></Pages1_top>
        <Pages1_con></Pages1_con>
        <Pages1_footer></Pages1_footer>
    </div>
</template>

<script>
import Pages1_top from '../../components/bannerPages/pages1Top'
import Pages1_con from '../../components/bannerPages/pages1Con'
import Pages1_footer from '../../components/bannerPages/pages1Footer'
export default {
    name: "bannerPage1",
    components:{
        Pages1_top,
        Pages1_con,
        Pages1_footer,
    }
}
</script>

<style scoped>
    .bannerPage1{
        background-color: #8D3311;
    }
</style>