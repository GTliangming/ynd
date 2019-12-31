<template>
    <div class="all">
        <p>全部</p>
        <ul class="information-list">
            <li v-for="(n,i) in data" :key="i">
                <router-link :to="{path:'/cateInformationDetail',query:{id:1,value:n.id}}" class="router">
                    <p>{{n.title}}</p>
                    <div v-for="(m,j) in n.pic " :key="j" class="imgurl">
                        <img :src="m" alt="">
                    </div>
                    <p class="read">{{n.category}}.{{n.time}} <span >{{n.num}}人阅读</span></p>
                </router-link>
            </li>
        </ul>
        <span @click="loading" class="loading">查看更多></span>
    </div>
</template>

<script>
    export default {
        name: "all",
        data () {
            return {
                sid: '',
                data: [],// 页面的数据模型
                num:0,
                start:0,
                end:0,
            }
        },
        methods: {
            getInfo(){
                // this.$axios.get(this.HOST+'news/get_news/?start=0&end=20')
                this.$axios.get(this.HOST+'news/get_news/?start='+this.start+'&end='+this.end)
                    .then((response)=>{
                        console.log(response.data);
                        this.data=response.data.data;
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
            loading(){
               this.num=this.num+19;
               this.start+=this.num;
               this.end=this.start+19;

                this.$axios.get(this.HOST+'news/get_news/?start='+this.start+'&end='+this.end)
                    .then((response)=>{
                        console.log(response.data);
                        this.data=this.data.concat(response.data.data);
                        console.log(this.data);
                    })
                    .catch(function (error) {
                        console.log(error);
                    })
            },
        },
        mounted () {
            this. getInfo();
        }
    }
</script>

<style scoped>
    .all>p{
        width: 90%;
        padding-left: 0.1rem;
        border-left: 0.02rem solid olivedrab;
        margin: auto;
        height: 0.4rem;

    }
    .information-list li{
        width: 90%;
        height: 1.85rem;
        margin: 0 auto;
        position: relative;
        border-bottom: 0.01rem solid gray;
        padding-top: 0.1rem;
        color: #000;
    }
    .information-list li img{
        width: 1.05rem;
        height: 0.88rem;
        float: left;
        padding-right: 0.07rem;
    }
    .information-list li span{
        color: gray;
        font-size: 0.12rem;
        display: inline-block;
        padding-top: 0.1rem;
        padding-left: 0.6rem;
    }
    .imgurl{
        margin-top: 0.22rem;
    }
    .read{
        margin: 0.2rem 0rem;
    }
    .router{
        color: black;
    }
    .loading{
        display: block;
        text-align: center;
        margin: 0.2rem 0rem ;
    }
</style>