<template>
    <div class="imap">
        <div class="top-box">
            <img src="./houtui-kong.png" @click="back">
            <p>地理位置信息</p>
            <div class="ok" @click="go">确定</div>
        </div>
        <div class="text">- 您所在的位置 -</div>
        <div id="container"></div>
        <div class="box">
            <div class="news1">{{destLocal}}</div>
            <div class="news2">{{destLng}}</div>
            <div class="news3">{{destLat}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: "imap",
    data() {
        return{
            local:"",
            jingdu:"",
            weidu:"",
            destLocal:"",
            destLng:"",
            destLat:""
        }
    },
    mounted(){
            var that = this;
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
                that.destLocal = data.formattedAddress;
                that.destLng =  "经度"+":"+data.position.lng;
                that.destLat = "纬度"+":"+data.position.lat;
                // sessionStorage.setItem('1',data.addressComponent.province+data.addressComponent.city+data.addressComponent.district);
                sessionStorage.setItem('1', data.addressComponent.district);
                sessionStorage.setItem('2', (parseFloat(data.position.lng)).toFixed(6));
                sessionStorage.setItem('3', (parseFloat(data.position.lat)).toFixed(6))
              });
            });
            that.local = sessionStorage.getItem('1');
            that.jingdu = sessionStorage.getItem('2');
            that.weidu = sessionStorage.getItem('3');
            console.log( "经度"+that.jingdu );
            console.log( "纬度"+that.weidu  );
            console.log( that.local );

    },
    methods:{
        go(){
            this.$router.push({path:"/"})
        },
        back(){
            this.$router.push({path:"/"})
        }
    }
}
</script>

<style scoped>
    p{
        border: 1px solid rebeccapurple;
        padding: 0.05rem 0.1rem;
        border-radius: 0.1rem;
        background-color: aliceblue;
        font-size: 0.13rem;
    }
    .top-box img{
        width: 0.3rem;
        right: 0.3rem;
    }
    .top-box{
        margin-top: 0.2rem;
        display: flex;
        justify-content: space-around;
        color: darkgreen;
        border-bottom: 1.5px solid aliceblue;
        padding-bottom: 0.15rem
    }
    .ok{        
        font-weight: bold;
        margin: auto 0;
        font-family: "黑体"
    }
    #container {
        margin-top: 0.3rem;
        width:100rem;
        height: 280px;
    }
    .text{
        font-size: 0.18rem;
        font-weight: bold;
        margin: 0.19rem 0 0 1.13rem;
        font-family: "黑体";
    }
    .news1{
        font-size: 0.15rem;
        font-weight: bold;
        margin: 0.15rem 0.12rem;
        text-indent: 0.2rem;
    }
    .box{
        margin: 0.15rem;
    }
    .news2{
        margin-left: 0.15rem;
        margin-bottom: 0.05rem;
        font-size: 0.14rem;
        color: darkgreen;
    }
    .news3{
        margin-left: 0.15rem;
        font-size: 0.14rem;
        color: darkgreen;
    }
    .amap-logo{
        display: none;
    }
    .amap-copyright {
        opacity:0;
    }
</style>