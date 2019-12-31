import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { Swipe, SwipeItem } from 'vue-swipe' 
import { AddressEdit } from 'vant';
// import Vuex from 'vuex';
import { Area } from 'vant';
import Axios from 'axios';
import { DropdownMenu, DropdownItem } from 'vant';
import { Rate } from 'vant';
import {webstock} from  './libs/webstock'

Vue.prototype.$webstock = webstock;
Vue.prototype.$eventHub=new Vue(); //注意这里的写法

import VueAreaLinkage from 'vue-area-linkage'
Vue.use(VueAreaLinkage)

Vue.use(Rate);
Vue.use(DropdownMenu).use(DropdownItem);
Vue.prototype.HOST = 'http://39.98.112.201/'
Vue.prototype.$axios  = Axios

Vue.config.productionTip = false

import AMap from 'vue-amap';
Vue.use(AMap)
AMap.initAMapApiLoader({
  key: '3f276829106f11a9a909519eb9078680',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView',
    'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor',
    'AMap.CircleEditor', 'AMap.Geolocation']
})

Vue.use(Area);
let event=new Vue();
Vue.prototype.$event=event;
// Vue.use(Vuex);



Vue.use(AddressEdit);

Vue.component('swipe', Swipe)  // 加这里
Vue.component('swipe-item', SwipeItem) // 加这里
Vue.config.productionTip = false

new Vue({
  router,
 
   

  render: h => h(App)



}).$mount('#app')
export default Vue;

