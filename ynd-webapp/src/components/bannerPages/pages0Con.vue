<template>
    <div class="pages0_con">
        
        <div class="con2" v-for="(mid,i) in a" :key="i">
            <p class="title_top">- {{ mid.head_line }} -</p>
            <div class="box">
                <div class="con2_box" v-for="(sid,j) in mid.products" :key="j">
                    <a :href="'#/goodsInfo/'+sid.product.id">
                        <img :src="sid.product.small_pic"/>
                    <p>{{sid.product.title}}</p>
                    <span>￥{{sid.product.price}}<s>{{sid.product.price2}}</s></span>
                    </a>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "pages0_con",
    data(){
        return{
            a:[ ],
           
        }
    },
    methods: {
        _initPageData (){
            this.$axios(this.HOST+'banner/activate/?banner_id=1').then((response)=>{
            // this.$axios('http://39.98.112.201:8888/banner/activate/?banner_id=1').then((response)=>{
            this.a = response.data.data;
                console.log(response.data)
            }) .catch(function(error){
                console.log(error)
            })
            // bannerHomeApi.getLBTU0(data=>{
            //     console.log(data.data);
            //     this.a =data.data
            // })

        }
    },
    created(){
        this._initPageData()
    }
}
</script>

<style scoped>
    .con2_box{
        width: 1.1rem;
        display: flex;
        flex-direction: column;
        font-size: 0.14rem;
        background-color: #ffffff;
        margin-top: 0.2rem;
        border-radius: 0.08rem;
    }
    .con2_box img{
        
    width: 100%;
        height: 1rem;
        border-radius: 0.08rem;
    }
    .con2_box p{
        /*margin-left: 0.04rem;*/
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 0.12rem;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
         margin: auto 0.05rem;
        /*height: 0.384rem;*/
    }
    .con2_box span{
        font-weight: bold;
        color: darkred;
        margin-left: 0.03rem;
    }
    .con2_box s{
        color: #000;
        margin-left: 0.1rem;
        font-weight: 500;
    }
    .title_top{
        font-size: 0.17rem;
        font-weight: bold;
        color: #ffffff;
        width: 1.4rem;
        background-color: #426D19;
        border-radius: 0.1rem;
        margin : 0.22rem auto 0;
        text-align: center;
        padding: 0.05rem 0;
    }
    .box{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
</style>