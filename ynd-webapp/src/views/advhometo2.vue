<template>
  <div>
    <div class="toptitle">
      <router-link to="advmymes" tag="div" class="back"></router-link>
      <p class="toptitle-p">完善名片信息</p>
    </div>
    <div class="body">
      <div class="xixi">
        <div class="xihead"><p class="xiheadp">姓名</p></div>
        <div class="xixihead2">
          <input type="text"  class="input"/>
        </div>
      </div>

      <div class="xixip">
        <div class="xihead3"><p class="xiheadp3">头像</p></div>
        <div class="xixihead2">
          <van-uploader :after-read="afterRead" style="width:6rem;" />
        </div>
      </div>

      <div class="xixi">
        <div class="xihead"><p class="xiheadp">身份</p></div>
        <div class="xixihead2">
           <input type="text"  class="input"/>
        </div>
      </div>

      <div class="xixi">
        <div class="xihead"><p class="xiheadp">主营</p></div>
        <div class="xixihead2">
           <input type="text"  class="input"/>
        </div>
      </div>

      <div class="xixi">
        <div class="xihead"><p class="xiheadp">所在地</p></div>
        <div class="xixihead2">
           <input type="text"  class="input"/>
        </div>
      </div>

      <div class="xixi">
        <div class="xihead"><p class="xiheadp">一句话简介</p></div>
        <div class="xixihead2">
           <input type="text"  class="input"/>
        </div>
      </div>

      <div class="xixit">
        <div class="xiheadt"><p class="xiheadpt">详细介绍</p></div>
        <div class="xixihead2t">
          <textarea   class="inputt"/>
        </div>
      </div>

      <!-- <p>注意点：所在地与头像 所在地需要一个地区选择的数据结构 省市县</p>
      <p>图片这一部分需要访问相册 或者是相机</p> -->
    </div>
    <div class="footerfixed">
      <p class="footerfixedp">保 存</p>
    </div>
  </div>
</template>

<script>import Vue from 'vue';
import { Uploader } from 'vant';

Vue.use(Uploader);
export default {
  data() {
    return {
      fileList: [
        // Uploader 根据文件后缀来判断是否为图片文件
        // 如果图片 URL 中不包含类型信息，可以添加 isImage 标记来声明

      ],
      pic:[]
    }
  },
  methods: {
    afterRead(file) {
      fetch('http://39.98.112.201:8888/user/change_head_pic/', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "token":"ZjU0NzRmODgyYTQxNDU4MmJiZjliYWVlM2U3ZjdiMzM="
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

};
</script>

<style scoped>

.toptitle {
  width: 100%;
  height: 0.6rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5;
}
.footerfixed{
  position: fixed;
  bottom: 0;
  left: 0;
  height: .6rem;
  z-index: 5;
  width: 100%;
  background-color: rgb(103, 190, 103);
}
.footerfixedp{
  width: 100%;
  height: .6rem;
  line-height: .6rem;
  text-align: center;
  color: white;
  font-size: .2rem;
  font-weight: 500;
}
.body{
  margin-top: .61rem;
}
.xixi {
  width: 100%;
  height: 0.5rem;
  border-top: 0.01rem lightgrey solid;
  display: flex;
  justify-content: space-between;
}
.xixip {
  width: 100%;
  height: 0.72rem;
  border-top: 0.01rem lightgrey solid;
  background-color: white;
  display: flex;
  justify-content: space-between;
}
.xihead {
  width: 25%;
  height: 0.5rem;
  
  
}
.xihead3 {
  width: 25%;
  height: 2.5rem;


}
.xiheadp{
  width: 100%;
  height: 0.5rem;
  background-color: rgb(231, 228, 228);
  line-height: .5rem;
  font-size: .16rem;
  font-weight: 500;
  text-align: center;
}
.xiheadp3{
  width: 100%;
  height: 2.5rem;
  background-color: rgb(231, 228, 228);
  line-height: .5rem;
  font-size: .16rem;
  font-weight: 500;
  text-align: center;
}
.xixihead2 {
  width: 75%;
  height: 2rem;
  overflow: hidden;
}
.input{
  width: 100%;
  height:.5rem;
  outline: none;
  border: none;
  text-indent: .1rem;
  line-height:.5rem ;
  font-size: .16rem;
  font-weight: 500;
}
.xixit {
  width: 100%;
  height: 1.5rem;
  border-top: 0.01rem lightgrey solid;
  display: flex;
  justify-content: space-between;
}
.xiheadt{
  width: 25%;
  height: 1.5rem;
  
  
}
.xiheadpt{
  width: 100%;
  height: 1.5rem;
  background-color: rgb(231, 228, 228);
  line-height: .5rem;
  font-size: .16rem;
  font-weight: 500;
  text-align: center;
}
.xixihead2t {
  width: 75%;
  height: 1.5rem;
}
.inputt{
  width: 100%;
  height: 1.5rem;
  outline: none;
  border: none;
  text-indent: .1rem;
  line-height:.26rem ;
  font-size: .16rem;
  font-weight: 500;
}
.toptitle-p {
  z-index: 1;
  width: 100%;
  height: 0.6rem;
  text-align: center;
  font-weight: 500;
  font-size: 0.2rem;
  line-height: 0.6rem;
  color: rgb(103, 190, 103);
}
.back {
  position: absolute;
  top: 0.2rem;
  left: 0.15rem;
  z-index: 5;
  width: 0.2rem;
  height: 0.3rem;
  display: block;
  background-image: url("../assets/fanhui.png");
  background-repeat: no-repeat;
  background-size: contain;
}
</style>
