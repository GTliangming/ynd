<template>
    <div class="informContent" >
    <div class="information-classify">
        <router-link  @click="fun(i)" v-for="(m,i) in data" :key="i" :to="m.url">
            <p :class="{active:i===isActive}" >
                <img :src="m.img" alt="">
            </p>
        </router-link>
    </div>
    <router-view></router-view>
</div>
</template>

<script>
    import all from './informationContent/all'
    import liangYou from './informationContent/liangYou'
    import nongZi from './informationContent/nongZi'
    import miaoMu from './informationContent/miaoMu'
    import nongFu from './informationContent/nongFu'
    import xuMu from './informationContent/xuMu'
    import shuiGuo from './informationContent/shuiGuo'
    export default {
        name: "informContent",
        data () {
            return {
                sid: '',
                isActive: 0,
                data:[
                    {   id:'1',
                        img:"http://39.107.139.165/cateInformation/粮油米面.gif",
                        url:"/cateInformation/liangyou",
                    },
                    {
                        id:'2',
                        img:"http://39.107.139.165/cateInformation/农资农机.gif",
                        url:"/cateInformation/nongZi"
                    },
                    {
                        id:'3',
                        img:"http://39.107.139.165/cateInformation/苗木花草.gif",
                        url:"/cateInformation/miaoMu"
                    },
                    {
                        id:'4',
                        img:"http://39.107.139.165/cateInformation/农副加工.gif",
                        url:"/cateInformation/nongFu"
                    },
                    {
                        id:'5',
                        img:"http://39.107.139.165/cateInformation/畜牧水产.gif",
                        url:"/cateInformation/xuMu"
                    },
                    {
                        id:'6',
                        img:"http://39.107.139.165/cateInformation/水果蔬菜.gif",
                        url:"/cateInformation/shuiGuo"
                    },

                ],
            }
        },
        methods: {
            fun (i) {
                this.isActive = i
            }
        },
        components:{
            'informationContent-all':all,
            'informationContent-laingYou':liangYou,
            'informationContent-nongZi':nongZi,
            'informationContent-miaoMu':miaoMu,
            'informationContent-nongFu':nongFu,
            'informationContent-xuMu':xuMu,
            'informationContent-shuiGuo':shuiGuo
        },
    }

</script>

<style scoped>
    .information-classify{
        width: 100%;
        /*height: 0.9rem;*/
        text-align: center;
        display: flex;
        overflow-x: auto;

    }
    .information-classify p{
        margin: auto;
        flex-shrink: 0;
        padding:0.1rem 0.1rem;
    }
    .information-classify p img{
        width: 1rem;
    }
</style>