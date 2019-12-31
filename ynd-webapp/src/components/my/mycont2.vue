<template>
    <div class="cont2">
        <p  style="font-size: 0.15rem;margin-left: 0.4rem;margin-bottom: 0.2rem;padding-top: 0.2rem">帮助中心</p>
        <div>
            <img src="../../assets/my/my_cjwt.png" @click="que">
            <p>常见问题</p>
        </div>
        <div @click="tellUs">
            <img src="../../assets/my/my_kf.png">
            <p >客服电话</p>
        </div>
        <div>
            <img src="../../assets/my/my_yjfk.png" @click="touch">
            <p>意见反馈</p>
        </div>
    </div>
</template>

<script>
    import { Dialog } from 'vant';
    export default {
        name: "mycont2",
        methods: {

            tellUs() {
                Dialog.confirm({
                    title: '400-820-8838'
                }).then(() => {
                    //登录之后进行
                    this.$router.push({path: '/denlu'})
                }).catch(() => {
                    // on cancel
                });
            },
            // issue(){
            //     Dialog.alert({
            //         title: '规则',
            //         message: 'issue'
            //     }).then(() => {
            //         // on close
            //     });
            // }
            touch(){
                this.$router.push({path:'/mess'})
            },
            que(){
                this.$router.push({path:'/quest'})
            }
        }
    }

</script>

<style scoped>
    .cont2{
        margin-top: 0.2rem;
        width: 100%;
        height: 1.4rem;
        background-color: white;
    }
    .cont2 div{
        text-align: center;
        margin-left: 0.4rem;
        display: inline-block;
    }
    .cont2 img{
        width: 0.3rem;
    }
    .cont2 p{
        font-size: 0.1rem;
        margin-top: 0.1rem;
    }
</style>