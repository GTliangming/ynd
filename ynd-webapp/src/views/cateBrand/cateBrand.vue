<template>
    <div>
        <brandHeader></brandHeader>
        <brandAdvert></brandAdvert>
        <brandContent></brandContent>
    </div>
</template>

<script>
    import brandHeader from "../../components/cateBrand/brandHeader";
    import brandAdvert from "../../components/cateBrand/brandAdvert";
    import brandContent from "../../components/cateBrand/brandContent";
    export default {
        name: "cateBrand",
        components:{
            brandHeader,
            brandAdvert,
            brandContent

        }
    }
</script>

<style scoped>

</style>