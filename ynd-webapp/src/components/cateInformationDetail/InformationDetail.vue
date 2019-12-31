<template>
    <div class="informationDetail">
        <div class="header">
            <router-link to='/cateInformation'>
                <img src="../../assets/cateBrandImg/arrow-left.png" alt="">
            </router-link>

            <span>资讯详情</span>
        </div>
        <div class="Detailcontent">
            <p class="title">{{detail.title}}</p>
            <p class="time">{{detail.time}} <span>行情资讯</span></p>
            <p class="author">作者:{{detail.author}}&nbsp;&nbsp;来源:{{detail.source}}&nbsp;&nbsp;阅读数:{{detail.num}}</p>
            <div class="guide">{{detail.guide}}</div>
            <div v-html="detail.content"></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "cateInformationDetail",
        data() {
            //全国行情
            return {
                data:[],
                detail:[],
            }
        },

            methods: {
                getInfo(){
                    let id=this.$route.query.id;
                    console.log(id);
                    let n=this.$route.query.value;
                    console.log(n);
                    // this.$axios.get(this.HOST+'news/get_news/?start=1&end=30&category_id='+id)
                    this.$axios.get(this.HOST+'news/news_detail/?news_id='+n)
                        .then((response)=>{
                            this.detail=response.data.data;
                            console.log(response.data);
                        })
                        .catch(function (error) {
                            console.log(error);
                        })

                },
            },
        mounted(){
            this.getInfo();
        }
    }
</script>

<style scoped>
    .informationDetail{
        width: 100%;
    }
    .header{
        height: 0.47rem;
        width: 3.75rem;
        background-color: #9AC767;
        position:fixed;
        z-index: 998;
    }
    .header img{
        width: 0.4rem;
        height: 0.4rem;
    }
    .header span{
        color: white;
        font-size: 0.24rem;
        position: absolute;
        left: 1.5rem;
        margin: 0.07rem;
    }
    .Detailcontent{
        width: 90%;
        padding-top: 0.5rem;
        color: black;
        margin:0rem auto;
        overflow: hidden;
    }
    .title{
        font-size: 0.22rem;
        color: #000;
        padding: 0.2rem 0rem;
    }
    .time{
        color: grey;
        font-size: 0.12rem;
    }
    .author{
        color: grey;
        font-size: 0.12rem;
    }
    .guide{
        background-color:#F5F5F5;
        color:#626262;
        margin: 0.2rem 0rem
    }
    .content .ql-align-center img{
        border: none;
        height: 2.5rem;
    }

</style>