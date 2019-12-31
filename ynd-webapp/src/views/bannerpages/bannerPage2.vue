<template>
    <div class="bannerPage2">
        <Pages2_top></Pages2_top>
        <Pages2_con></Pages2_con>
        <Pages2_footer></Pages2_footer>
    </div>
</template>

<script>
import Pages2_top from '../../components/bannerPages/pages2Top'
import Pages2_con from '../../components/bannerPages/pages2Con'
import Pages2_footer from '../../components/bannerPages/pages2Footer'

export default {
    name: "bannerPage2",
     components:{
         Pages2_top,
         Pages2_con,
         Pages2_footer,
     }
}
</script>

<style scoped>
    .bannerPage2{
        background-color: #80DDFF;
    }
</style>