<template>
    <div class="bannerPage4">
        <Pages4_top></Pages4_top>
        <Pages4_con></Pages4_con>
        <Pages4_footer></Pages4_footer>
    </div>
</template>

<script>
import Pages4_top from '../../components/bannerPages/pages4Top'
import Pages4_con from '../../components/bannerPages/pages4Con'
import Pages4_footer from '../../components/bannerPages/pages4Footer'

export default {
    name: "bannerPage4",
    components:{
        Pages4_top,
        Pages4_con,
        Pages4_footer,
    }
}
</script>

<style scoped>
    .bannerPage4{
        background-color: #F3E5E2;
    }
</style>