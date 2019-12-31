<template>
  <div>
    <div class="toptitle">
      <router-link to="advlogin" tag="div" class="back"></router-link>
      <p class="toptitle-p">登录</p>
    </div>
    <div class="body">
      <!-- 登录框全部内容 -->
      <div class="login">
        <div class="loginuse1">
          <!-- <label for="username">用户名:</label> -->
          <input type="text" v-model="phone" class="input1" placeholder="请输入手机号" />
        </div>

        <!-- <div class="loginuse2">
       
        <input type="text" v-model="pwd" class="input2" placeholder="请输入密码或者验证码"></div>-->

        <div class="loginuse2">
          <!-- <label for="pwd">密码:</label> -->
          <input type="password" v-model="code" class="input" placeholder="请输入验证码" />
        </div>

        <div class="positionyan" @click.prevent="loginyan">发送验证码</div>

        <p @click.prevent="login" class="logingoon">确定</p>
        <!-- <p class="xieyip2">去注册</p> -->
        <p class="xieyip">点击上述按钮，代表同意优农网用户协议</p>
      </div>

      <!-- 登录框下边的信息说明 -->
      <div>
        <h1>{{msg}}</h1>
      </div>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  data() {
    return {
      name: "",
      pwd: "",
      msg: "", //接收数据
      adds: "西安",
      phone: "",
      code: "",
      yanzheng: 1,
      getcode: 1
    };
  },
  methods: {
    login() {
      if (!this.phone) {
        Dialog({ message: "手机号不能为空" });
        }else if(!this.code){
        Dialog({ message: "验证码不能为空" });
        }
        else if (window.sessionStorage.getItem("name")) 
        {
        Dialog({ message: "请勿重复登陆" });
      } else if(this.yanzheng == 1){
          Dialog({ message: "请点击获取验证码" });
      }
      else {
        this.$axios
          .post(this.HOST + "user/verify_code/", {
            phone: this.phone,
            code: this.code
          })
          .then(result => {
            console.log(result.data);
            this.msg = result.data.msg;
            if (result.data.status == 200) {
              sessionStorage.setItem("token", result.data.data.token);
              sessionStorage.setItem("pic", result.data.data.pic);
              sessionStorage.setItem("name", result.data.data.name);
              sessionStorage.setItem("pic", result.data.data.phone);
              Dialog({ message: "登陆成功" });
              this.$router.push("/home");
            }else if(result.data.status == 204){
               Dialog({ message: result.data.msg });
            }
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    //获取验证码
    loginyan() {
      //需要处理异步请求的问题
      let regName = /^[1]{1}\d{10}$/; //name
      if (!this.phone) {
        Dialog({ message: "手机号不能为空" });
      } else if (regName.test(this.phone)) {
        if (this.getcode == 1) {
          this.$axios.post(this.HOST + "user/get_code/", { phone: this.phone })
            .then(response => {
              if (response.status == 200) {
                this.getcode = 0;
                this.yanzheng = 0;
                Dialog({ message: "发送成功" });
              }
              setTimeout(() => {
                this.getcode = 1;
                this.yanzheng = 2;
              }, 120000);
            })
            .catch(function(error) {
              console.log(error);
            });
        } else {
          Dialog({ message: "您已获取成功，2分钟内请勿重复获取" });
        }
      } else {
        Dialog({ message: "输入有误 请输入1开头的十一位手机号" });
      }

     
    }
 
  }
};
</script>
<style scoped>
.body {
  width: 100%;
  height: 6.07rem;
  border-right: 0.1rem solid white;
  border-left: 0.1rem solid white;
  box-sizing: border-box;
  background-color: white;
}
.login {
  width: 100%;
  height: 2.4rem;
  /* background-color: lightgrey; */
  box-sizing: border-box;
  position: relative;
}
.xieyip {
  width: 100%;
  height: 0.5rem;
  line-height: 0.5rem;
  text-align: center;
}
.xieyip2 {
  width: 100%;
  height: 0.5rem;
  color: white;
  background-color: rgb(245, 12, 12);
  font-size: 0.18rem;
  font-weight: normal;
  line-height: 0.5rem;
  text-align: center;
  margin-top: 0.1rem;
  border-radius: 0.1rem;
}
.positionyan {
  width: 1rem;
  height: 0.4rem;
  border: 0.01rem solid lightgrey;
  font-size: 0.16rem;
  line-height: 0.4rem;
  text-align: center;
  position: absolute;
  top: 0.27rem;
  right: 0.14rem;
  border-radius: 0.08rem;
}
.loginuse1 {
  width: 100%;
  height: 0.8rem;
  text-indent: 0.2rem;
  border-bottom: 0.01rem solid rgb(202, 199, 199);
}
.loginuse2 {
  width: 100%;
  height: 0.6rem;
  text-indent: 0.2rem;
  margin-top: 0.1rem;
  border-bottom: 0.01rem solid rgb(202, 199, 199);
}
.input {
  margin-top: 0.04rem;
  border: none;
  outline: none;
  height: 0.5rem;
  font-size: 0.18rem;
  font-weight: normal;
}
.input1 {
  margin-top: 0.24rem;
  border: none;
  outline: none;
  height: 0.5rem;
  font-size: 0.18rem;
  font-weight: normal;
}
.input2 {
  margin-top: 0.24rem;
  border: none;
  outline: none;
  height: 0.5rem;
  font-size: 0.18rem;
  font-weight: normal;
}
.logingoon {
  width: 100%;
  height: 0.5rem;
  background-color: rgb(245, 12, 12);
  color: white;
  text-align: center;
  line-height: 0.5rem;
  font-size: 0.2rem;
  font-weight: 500;
  border-radius: 0.1rem;
  margin-top: 0.3rem;
}
.p {
  width: 100%;
  color: red;
  font-weight: 600;
  /* text-align: center; */
  text-indent: 2.5rem;
  font-size: 0.2rem;
  padding-top: 5.5rem;
}
.toptitle {
  width: 100%;
  height: 0.6rem;
  position: relative;
  border-bottom: 0.01rem solid rgb(202, 199, 199);
}
.toptitle-p {
  z-index: 1;
  width: 100%;
  height: 0.6rem;
  text-align: center;
  font-weight: 600;
  font-size: 0.2rem;
  line-height: 0.6rem;
  color: rgb(11, 49, 14);
}
.back {
  position: absolute;
  top: 0.2rem;
  left: 0.15rem;
  z-index: 5;
  width: 0.2rem;
  height: 0.3rem;
  display: block;
  background-image: url("../assets/back2.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>