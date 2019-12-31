<template>
    <div>
  <div class="toptitle">
      <router-link to="advlogin" tag="div" class="back"></router-link>
      <p class="toptitle-p">注册</p>
  </div>
    <div class="body">

        
            <!-- 登录框全部内容 -->
            <div class="login">


        <div class="loginuse1">
            <!-- <label for="username">用户名:</label> -->
        <input type="text" v-model="name" class="input1" @blur="confirm" placeholder="请输入用户名"></div>

        <!-- <div class="loginuse2">
       
        <input type="text" v-model="pwd" class="input2" placeholder="请输入密码或者验证码"></div> -->

        <div class="loginuse2">
        <!-- <label for="pwd">密码:</label> -->
        <input type="password" v-model="pwd" class="input" placeholder="请输入密码"  @blur="confirm2"></div>

        <div class="loginuse2">
        <!-- <label for="pwd">密码:</label> -->
        <input type="text" v-model="phone" class="input" placeholder="请输入手机号" ></div>

        <div class="loginuse2">
        <!-- <label for="pwd">密码:</label> -->
        <input type="password" v-model="code" class="input" placeholder="请输入手机验证码" @blur="confirm4"></div>

        <div class="positionyan2" @click.prevent="loginyan2">确认验证码</div>


        <div class="positionyan" @click.prevent="loginyan">发送验证码</div>
         <div class="yanzheng"><p class="yanzhengp"></p></div>
        <p   @click.prevent="login" class="logingoon">注 册</p>
        <p class="xieyip">点击上述按钮，代表同意优农网用户协议</p>

        </div>
        

        <!-- 登录框下边的信息说明 -->
       
        

    </div>
    </div>
</template>
<script>
import { Dialog } from 'vant';
export default {
    data(){
        return {
            jingdu:"",
            weidu:" ",
            diqu:" ",
            name:'',
            code:'',
            pwd:"",
            yanzheng:1,
            adds:'',
            phone:"",
            getcode:1,
            // home:"",
            zhuce:1
     }
    },
    mounted(){
        var that =this;
         var mapObj = new AMap.Map('container');
        mapObj.plugin('AMap.Geolocation', function () {
        var geolocation = new AMap.Geolocation({
            enableHighAccuracy: true,//是否使用高精度定位，默认:true
            timeout: 10000,          //超过10秒后停止定位，默认：无穷大
            maximumAge: 0,           //定位结果缓存0毫秒，默认：0
            convert: true,           //自动偏移坐标，偏移后的坐标为高德坐标，默认：true
            showButton: true,        //显示定位按钮，默认：true
            buttonPosition: 'LB',    //定位按钮停靠位置，默认：'LB'，左下角
            buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
            showMarker: true,        //定位成功后在定位到的位置显示点标记，默认：true
            showCircle: true,        //定位成功后用圆圈表示定位精度范围，默认：true
            panToLocation: true,     //定位成功后将定位到的位置作为地图中心点，默认：true
            zoomToAccuracy:true      //定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
            });
            mapObj.addControl(geolocation);
            geolocation.getCurrentPosition();
            // console.log(  geolocation)

            AMap.event.addListener(geolocation, 'complete', (data)=>{
            console.log(data.addressComponent.province+data.addressComponent.city+data.addressComponent.district);
            that.diqu=data.addressComponent.province+data.addressComponent.city+data.addressComponent.district;
            that.jingdu = data.position.lng;
            that.weidu = data.position.lat;
            // sessionStorage.setItem("1", data.formattedAddress);

            // sessionStorage.setItem("2", data.position.lng);

            // sessionStorage.setItem("3", data.position.lat);

            });//返回定位信息
            
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
        });
        //     let diqu = sessionStorage.getItem('3');
        //     sessionStorage.setItem('1',data.addressComponent.province+data.addressComponent.city+data.addressComponent.district);
        //    console.log(sessionStorage.getItem('1'),
        //      sessionStorage.getItem('1'),
        //       sessionStorage.getItem('1')) 

    },

    
    methods:{
        confirm(){
          
             let regName=/^.{1,20}$/;//name
            
             if(regName.test(this.name)){
                 console.log(true)
             }else {
                 Dialog({ message: '输入有误 请输入1到20个任意字符'})
             }
            
        },
        confirm2(){
             let regpwd=/^\w{1,20}$/;
               if(regpwd.test(this.pwd)){
                 console.log(true)
             }else {
                  Dialog({ message: '输入有误 请输入1到20个数字字母下划线'})
             }
        },
        // confirm3(){
          
        //      let regName=/^[1]{1}\d{10}$/;//name
            
        //      if(regName.test(this.phone)){
        //          console.log(true)
        //      }else {
        //          Dialog({ message: '输入有误 请输入1开头的十一位手机号'})
        //      }
            
        // },
        confirm4(){
             let regpwd=/^\d{5}$/;
               if(regpwd.test(this.code)){
                 console.log(true)
             }else {
                  Dialog({ message: '输入有误 请输入五位数字'})
             }
        },
       
        
        login(){
            // fetch('http://39.98.112.201:8888/user/login/', {
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json"
            //     },
            //     body: JSON.stringify({
            //         name: '李佳豪',
            //         pwd: '123456'
            //     })
            // }).then(resp=>resp.json()).then(data=>{
            //     console.log(data);
            //     this.msg = result.data.msg;
            //     // $('ret').innerHTML = "<h5>"+data.msg+"</h5><h6>"+data.token+"</h6>"
            // })
            // let s =sessionStorage.getItem('1');
            // let h =sessionStorage.getItem('2');
            // let y =sessionStorage.getItem('3');
            // console.log(s);
            // console.log(h);
            // console.log(y);
            if(!this.name){
                 Dialog({ message: '请先输入用户名'})
            }else if(!this.pwd){
                Dialog({ message: '请先输入密码'})
            }else if(!this.phone){
                Dialog({ message: '请先输入手机号'})
            }else if(this.zhuce==0){
                this.$axios.post(this.HOST+'user/register/',{
            "name":this.name,
            "pwd":this.pwd,
            "phone":this.phone,
             "adds":this.diqu,
            //  sessionStorage.getItem('1'),
            "longitude":this.jingdu,
            //sessionStorage.getItem('2'),
            "latitude":this.weidu
            //sessionStorage.getItem('3')
            })
            .then(result=>{
                console.log(result.data)
                if(result.data.status==200){
                    Dialog({ message: '注册成功'})
                    this.$router.push({path:"/advhome"});
                }else if(result.data.status==204){
                    
                     Dialog({ message: result.data.msg})
                }
                
            //      if(result.data.msg=="登录成功"){
                   
            // }
            })
            .catch(err=>{
                alert("登陆失败")
                console.log(err)
            })
            }else{
                Dialog({ message: '请先验证手机验证码'})
            }
            
           
        },
    
        loginyan(){
           
    //需要处理异步请求的问题
    //获取验证码
          let regName=/^[1]{1}\d{10}$/;//name
            
             if(regName.test(this.phone)){
                 console.log(true)
        //      }else {
        //          Dialog({ message: '输入有误 请输入1开头的十一位手机号'})
        //      }
                 if(this.getcode==1){
        
         this.$axios.post(this.HOST+'user/get_code/',{"phone":this.phone})
        .then((response)=>{
            //将response获得的数据进行处理
            var data=response.data;
          console.log(data);    //data可以是多种数据类型，通过全局变量tableData将数据传出。
          
          if(response.status==200){
              this.getcode=0;
              this.yanzheng=0;
               Dialog({ message: '发送成功'})
          }
          setTimeout(()=>{
                  this.getcode=1;
                  this.yanzheng=2;
          },120000)
        })
        .catch(function (error) {
            console.log(error);
        })
    }else{
 Dialog({ message: '您已获取成功，2分钟内请勿重复获取'})
    }
             }else {
                  Dialog({ message: '输入有误 请输入1开头的十一位手机号'})
             }
   


        

            // this.$axios.post(this.HOST+'user/login/',{name:this.name,pwd:this.pwd})
            // .then(result=>{
            //     console.log(result.data)
            //     this.msg = result.data.msg
            // })
            // .catch(err=>{
            //     console.log(err)
            // })
    },
    //注册验证验证码
    loginyan2(){
           if(!this.name){
                 Dialog({ message: '请先输入用户名'})
            }else if(!this.pwd){
                Dialog({ message: '请先输入密码'})
            }else if(!this.phone){
                Dialog({ message: '请先输入手机号'})
            }else if(this.yanzheng==0 ){
    this.$axios.post(this.HOST+'user/verify_phone/',{"phone":this.phone,"code":this.code})
            .then(result=>{
                console.log(result.data)
                if(result.data.status==200){
                   //alert("验证通过");
                   this.zhuce =0;
                    Dialog({ message: '验证成功'})
                   
                }else if(result.data.status==204){
                    Dialog({ message: '验证码错误'})
                }
                //this.msg = result.data.msg
            })
            .catch(err=>{
                alert("验证失败");
                console.log(err)
            })
            // if(this.msg=="验证成功"){
            //       this.$router.push({path:"/advhome"});
            // }
    }else if(this.yanzheng==1){
        Dialog({ message: '请先获取验证码'})
    }else if(this.yanzheng==2){
        
        Dialog({ message: '验证码已过期，请重新获取验证码'})
    }
    }
    // exports.login = (req,res)=>{
    // let username = req.body.username
    // let pwd = req.body.password
    // // 查询语句
    // let sql = 'select * from user where username = ?'
    // db.base(sql,username,(result)=>{
    //     if(!result.length){
    //         return res.json({ status: 1, msg: '登录失败' })
    //     }else{
    //         // [ RowDataPacket { password: '123', username: 'admin', id: 1 } ]
    //         if(result[0].password==pwd){
    //             return res.json({ status: 1, msg: '登录成功' })
    //         }
    //         return res.json({ status: 1, msg: '密码错误' })
    //     }
    // })

}
}
</script>
<style scoped>
.body{
  width: 100%;
  height: 6.07rem;
  border-right: .1rem solid white;
  border-left: .1rem solid white;
  box-sizing: border-box;
  background-color: white;
}
.login{
    width: 100%;
    height:2.4rem;
    /* background-color: lightgrey; */
    box-sizing: border-box;
   position: relative;
}
.xieyip{
    width: 100%;
    height: .5rem;
    line-height: .5rem;
    text-align: center;
}
.positionyan{
    width: 1rem;
    height: .4rem;
    border: .01rem solid lightgrey;
    font-size: .16rem;
    line-height: .4rem;
    text-align: center;
    position: absolute;
    top:1.67rem;
    right:.14rem; 
    border-radius: .08rem;
}
.positionyan2{
    width: 1rem;
    height: .4rem;
    border: .01rem solid lightgrey;
    font-size: .16rem;
    line-height: .4rem;
    text-align: center;
    position: absolute;
    top:2.41rem;
    right:.14rem; 
    border-radius: .08rem;
}
.loginuse1{
    width: 100%;
    height: .8rem;
    text-indent: .2rem;
   border-bottom: .01rem solid rgb(202, 199, 199);
}
.loginuse2{
    width: 100%;
    height: .6rem;
    text-indent: .2rem;
    margin-top: .1rem;
    border-bottom: .01rem solid rgb(202, 199, 199);
}
.input{
    margin-top: .04rem;
    border: none;
    outline: none;
    height: .5rem;
    font-size: .18rem;
    font-weight: normal;
}
.input1{
    margin-top: .24rem;
    border: none;
    outline: none;
    height: .5rem;
    font-size: .18rem;
    font-weight: normal;
}
.input2{
    margin-top: .24rem;
    border: none;
    outline: none;
    height: .5rem;
    font-size: .18rem;
    font-weight: normal;
}
.logingoon{
    width: 100%;
    height: .5rem;
    background-color: rgb(245, 18, 18);
    color: white;
    text-align: center;
    line-height: .5rem;
    font-size: .2rem;
    font-weight: 500;
    border-radius: .1rem;
    margin-top: .03rem;
}
.p{
  width: 100%;
  color:red;
  font-weight: 600;
  /* text-align: center; */
  text-indent: 2.5rem;
  font-size: .2rem;
  padding-top: 5.5rem;
}
.amap-demo{
    width: 0;
    height: 0;
}
.toptitle{
  width: 100%;
  height: .6rem;
  position: relative;
  border-bottom: .01rem solid rgb(202, 199, 199);
   
}
.toptitle-p{
 z-index: 1;
  width: 100%;
  height: .6rem;
  text-align: center;
  font-weight: 600;
  font-size: .2rem;
  line-height: .6rem;
  color: rgb(11, 49, 14);
}
.back{
  position: absolute;
  top: .2rem;
  left:.15rem;
  z-index: 5;
  width: .2rem;
  height: .3rem;
  display: block;
  background-image: url("../assets/back2.png");
  background-repeat: no-repeat;
  background-size: contain;  
}
.yanzheng{
    width: 100%;
    height:.4rem;
    /* background-color: aqua; */
}
.yanzhengp{
    width: 100%;
    height:.4rem;
    font-size: .2rem;
    line-height: .4rem;
    text-indent: .2rem;
    font-weight: normal;
}
</style>