<template>
    <div class="cont">
       
        <div class="contall" v-if="listnew">
            <div  v-for="(n,inde) in listnew" class="c1" :key="inde">
                 <a :href="'#/goodsInfo/'+n.id">
                <img :src="n.small_pic" >
                <p>{{n.title}}</p>
                <p class="price">￥{{n.price}}</p>
                 </a>
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: "newcont",
        data() {
            return {
                listnew:[]
            }
        },
        methods: {
            afterRead() {
                fetch('http://39.98.112.201/product/today_products/', {
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "token":"MTc0ZmUxOWQyMmQ1NDVmYmIxNDMzMTZiMjQ5NTQwOWI="
                    },

                }).then(resp=>resp.json()).then(data=>{
                    console.log(data.data)
                  this.listnew=data.data;
                });
            },


        },
        mounted() {
            this.afterRead()
        },

    }
</script>

<style scoped>
    .cont{
        width: 100%;
        background: linear-gradient(to bottom,  greenyellow ,green);
        border-radius: 0.2rem;
        display: flex;
        justify-content: space-around;
    }
    .c1{
        width: 1rem;
        height: 1.9rem;
        background-color: #F7F7F7;
        margin-top: 0.2rem;
        border-radius: 0.1rem;

    }
    .c1 p{
         margin-top: 0.1rem;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.15rem;
    }
    .c1 img{
        width: 1rem;
        border-radius: 0.1rem;
    }
    .contall{
        flex-wrap: wrap;
        display: flex;
        width: 3.7rem;
        justify-content: space-around;
        margin-bottom: 0.2rem;
    }
    .price{
        color: red;
    }
</style>