<template>
    <div class="messagesA">
        <div class="top">
            <div class="box">
                <img src="../../../assets/my/left_go.png" @click="back"/>
                <img src="../../../assets/my/kefu.png"/>
                <p>优农哆客服</p>
                <span>官方</span>
            </div>
            <img src="../../../assets/my/phone.png">
        </div>
        <div id="list">
        </div>
        <div class="bottom">
            <p>
                <textarea v-model="webstock_type" type="text"></textarea>
                <button type="text" @click="sendMsg">发送</button>
            </p>
        </div>
        <!--        <div >-->
        <!--            <img src="../../../assets/my/voice.png">-->
        <!--            <input type="text" placeholder="请输入文字">-->
        <!--            <img src="../../../assets/my/more.png">-->
        <!--        </div>-->
    </div>
</template>

<script>
    export default {
        name: "messagesA",
        data() {
            return {
                webstock_type:'',
                time:"",
                merchant:""//后端返回商家信息
            }
        },
        mounted() {
            this.keyupEnter()
        },
        // created() {
        //     //监听A事件，如果只想监听一次可以用  $this.$eventHub.$once
        //     this.$eventHub.$on('A事件', (res)=>{
        //         console.log('test.vue界面收到消息1---',res[0]);
        //         console.log('test.vue界面收到商家消息2---',res[1].sj);
        //         this.merchant=res[1].sj;
        //     } )
        // },
        // beforeDestroy(){
        //     //如果组件没有缓存，记得离开组件前解除A事件的监听，
        //     //不然重新加载该组件会出现重复监听的情况,缓存组件可以用 <keep-alive>
        //     this.$eventHub.$off('A事件')
        //     console.log(123);
        // },


    methods:{
            back(){
                this.$router.push({path:'/advhome'})
            },
            sendMsg:function () {
                if (this.webstock_type!=''){
                    //往服务端发送一个消息，服务端马上回复消息，从触发webstock的接收消息方法里面注册的A事件
                    this.$webstock.send(JSON.stringify(this.webstock_type))

                    var list = document.querySelector("#list")
                    var li = document.createElement("div")
                    li.innerText=this.webstock_type+"：我";
                    list.appendChild(li);
                    var li2 = document.createElement("div")
                    setTimeout(()=>{
                        li2.innerText="商家：商家不在线，请您先留言";
                    },500)
                    // li2.innerText=this.merchant;
                    list.appendChild(li2);
                    li.style.textAlign="right";
                    li2.style.textAlign="left";
                    li.style.height="30px";
                    li2.style.height="30px";
                    li.style.paddingRight="20px";
                    li2.style.paddingLeft="20px";
                    this.webstock_type='';
                }
            }
        }
    }
</script>

<style scoped>
    .top{
        background-color: #F2F2F2;
        display: flex;
        justify-content: space-between;
        height: 0.3rem;
        padding: 0.06rem 0.14rem;
    }
    .box{
        display: flex;
        justify-content: space-between;
        font-size: 0.14rem;
        line-height: 0.3rem;
    }
    .top img{
        width: 0.25rem;
        height: 0.25rem;
        margin: auto 0;
    }
    .box span{
        font-size: 0.12rem;
        border: 1px solid #787878;
        border-radius: 0.08rem;
        padding: 0 0.03rem;
        margin-left: 0.08rem;
    }
    .box p{
        margin-left: 0.08rem;
    }
    
    .bottom{
        width: 100%;
        position: fixed;
        bottom: 0;
        display: flex;
        justify-content: space-around;
        background-color: #F2F2F2;
        padding: 0.1rem 0;
    }
    .bottom>p{
        display: flex;
        width: 90%;
        margin: 0 auto;
    }
    .bottom button{
        width: 20%;
        height: 0.26rem;
    }
    textarea{
        width: 80%;
        outline: none;
        border: 1px solid #000000;
        padding-left: 0.1rem;
        max-height: 100px;
        height: 0.26rem;
        overflow: hidden;
        caret-color:skyblue;
        /*输入光标颜色*/
        overflow-y: scroll;
    }
    textarea::-webkit-scrollbar {
        display: none;
    }
</style>