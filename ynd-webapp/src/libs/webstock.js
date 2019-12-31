import VueObj from '../main'
export const webstock = new WebSocket("ws://10.35.167.47:8088");

/**
 * webstock连接成功
 */
webstock.onopen = function () {
    console.log("websocket open");
    /*  let obj = {"requestType": "login"}
      webstock.send(JSON.stringify(obj))*/
}
/**
 * webstock接收消息
 */
webstock.onmessage = function (message) {
    // console.log(JSON.parse(message.data));
    //这里注册了一个A事件
    // VueObj.$eventHub.$emit('A事件',JSON.parse(message.data))
    VueObj.$eventHub.$emit('A事件',[message.data,{sj:'商家不在线'}])
}
/**
 * webstock关闭
 */
webstock.onclose = function (event) {
    console.log("websocket close");
}
/**
 * webstock出错
 */
webstock.onerror = function (Event) {
    webstock.close(Event);
    console.log("websocket error");
}