<template>
    <div class="cateInformationDetail">
        <cate-informationDetail></cate-informationDetail>
    </div>
</template>

<script>

    import InformationDetail from "../../components/cateInformationDetail/InformationDetail";
    export default {
        name: "CateInformation",
        components:{
            'cate-informationDetail' :InformationDetail
        },
        // methods:{
        //
        // }
    }
</script>

<style scoped>
.cateInformationDetail{
    width: 100%;
}
</style>