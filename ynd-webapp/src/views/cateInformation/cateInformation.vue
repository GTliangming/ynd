<template>
    <div class="cateInformation">
        <cate-informationHeader></cate-informationHeader>
        <cate-informationCarousel></cate-informationCarousel>
        <cate-informationContent></cate-informationContent>
    </div>
</template>

<script>
    import informationHeader from "../../components/cateInformation/informationHeader";
    import informationCarousel from "../../components/cateInformation/informationCarousel";
    import informationContent from "../../components/cateInformation/informationContent";
    export default {
        name: "CateInformation",
        components:{
            'cate-informationHeader' :informationHeader,
            'cate-informationCarousel':informationCarousel,
           'cate-informationContent':informationContent

        }
    }
</script>

<style scoped>
    .cateInformation{
        width: 100%
    }
</style>