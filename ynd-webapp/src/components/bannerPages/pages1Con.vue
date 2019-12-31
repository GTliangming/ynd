<template>
    <div class="pages1_con">
        <div class="con2" v-for="(mid,i) in a" :key="i">
            <p class="title_top">{{ mid.head_line }}</p>
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
    name: "pages1_con.vue",
    data(){
        return{
            // pages0:[
            //     {
            //         'headline':'植物苗',
            //         "products":[
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.3225'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒12小盆苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //         ]
            //     },
            //     {
            //         'headline':'水果苗',
            //         "products":[
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.3225'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒12小盆苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //         ]
            //     },
            //     {
            //         'headline':'蔬菜苗',
            //         "products":[
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.3225'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒12小盆苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //         ]
            //     },
            //     {
            //         'headline':'更多苗',
            //         "products":[
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.3225'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒小盆栽种苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //             { pic:require('../../assets/bannerPages_imgs/pages0_3.jpg' ),
            //                 title:'观叶耐寒12小盆苗竹柏苗',
            //                 price1:'￥ 0.35',
            //                 price2:'0.35'
            //             },
            //         ]
            //     },
            // ]
            a:[ ]
        }
    },
    methods: {
        _initPageData (){
            this.$axios(this.HOST+'banner/activate/?banner_id=2').then((response)=>{
                // this.$axios('http://39.98.112.201:8888/banner/activate/?banner_id=2').then((response)=>{
                this.a = response.data.data;
                console.log(response.data)
            }) .catch(function(error){
                console.log(error)
            })

            // bannerHomeApi.getLBTU1(data=>{
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
    /*//chuan*/
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
        width: 1.5rem;
        background-image: url("../../assets/bannerPages_imgs/pages1-title.png");
        background-position: -0.04rem -0.23rem;
        background-repeat: no-repeat;
        background-size: 2.3rem 2.1rem;
        /*background-color: #ffffff;*/
        border-radius: 0.15rem;
        margin : 0.22rem auto 0;
        text-align: center;
        padding: 0.06rem 0;
    }
    .box{
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>