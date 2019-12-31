<template>
    <div>
        <newtop/>
        <newtitle/>
        <newcont/>

    </div>
</template>

<script>
    import newtop from "../components/listnew/newtop";
    import newcont from "../components/listnew/newcont";
    import newtitle from "../components/listnew/newtitle";
    export default {
        name: "new",
    components:{
        newtop,
        newcont,
        newtitle
    },
        methods: {
            afterRead(file) {
                fetch('http://39.98.112.201:8888/user/change_head_pic/', {
                    method: 'PUT',
                    headers: {
                        "Content-Type": "application/json",
                        "token":"YzI0N2M2NTRhYTM3NDlmMTg0Yzk2ZTBlYzk5YjBlNTI="
                    },
                    body: JSON.stringify({
                        pic_string:file.content,
                    })
                }).then(resp=>resp.json()).then(data=>{
                    console.log(data),
                        this.pic=data.data.pic_url;
                });
                console.log(file.content);
            },


        }
    }
</script>

<style scoped>

</style>