(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-bf23dcb4"],{"0f49":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cateHotSale"},[e("cate-HotSaleHeader"),e("cate-HotSaleContent")],1)},n=[],o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"MarketQuotations"},[e("div",{staticClass:"header"},[e("img",{attrs:{src:"http://39.107.139.165/hot/arrow_left.png",alt:""},on:{click:t.fn}}),e("span",[t._v("热门好货")])]),t._m(0)])},c=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"advert"},[e("img",{attrs:{src:"http://39.107.139.165/hot/remen.gif",alt:""}})])}],i={name:"HotSaleHeader",methods:{fn:function(){this.$router.push("./home")}}},r=i,l=(e("3eef"),e("2877")),f=Object(l["a"])(r,o,c,!1,null,"5845818e",null),u=f.exports,h=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"HotSale"},[t._m(0),e("div",{staticClass:"HotSale-content"},[e("img",{attrs:{src:"http://39.107.139.165/hot/recommend.gif",alt:""}}),e("div",{staticClass:"HotSale-content-product"},t._l(t.hotsale.data,(function(a,s){return e("router-link",{key:s,staticClass:"detail",attrs:{to:"goodsInfo/"+a.id,sid:s}},[e("div",[e("img",{attrs:{src:a.small_pic,alt:""}}),e("p",{staticClass:"title"},[t._v(t._s(a.title))]),e("p",{staticClass:"price"},[e("span",[t._v(t._s(a.price))]),e("span",[t._v("元/斤")]),t._v(" "),e("s",[t._v(t._s(a.price2)+"元/斤")])])])])})),1)])])},p=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"HotSale-classify"},[e("a",{attrs:{href:"#/home/top_page"}},[e("img",{attrs:{src:"http://39.107.139.165/hot/热门好货_03.gif",alt:""}}),e("p",[t._v("水果")])]),e("a",{attrs:{href:"#/home/top_page4"}},[e("img",{attrs:{src:"http://39.107.139.165/hot/热门好货_05.gif",alt:""}}),e("p",[t._v("农副加工")])]),e("a",{attrs:{href:"#/home/top_page3"}},[e("img",{attrs:{src:"http://39.107.139.165/hot/热门好货_07.gif",alt:""}}),e("p",[t._v("禽畜肉蛋")])]),e("a",{attrs:{href:"#/home/top_page8"}},[e("img",{attrs:{src:"http://39.107.139.165/hot/热门好货_09.gif",alt:""}}),e("p",[t._v("农资农机")])])])}],_={name:"HotSaleContent",data:function(){return{hotsale:[]}},methods:{getInfo:function(){var t=this;this.$axios.get(this.HOST+"product/hot_products/").then((function(a){t.hotsale=a.data,console.log(respons.data)})).catch((function(t){console.log(t)}))}},mounted:function(){this.getInfo()}},d=_,m=(e("19c7"),Object(l["a"])(d,h,p,!1,null,"31fbad21",null)),v=m.exports,g={name:"cateHotSale",components:{"cate-HotSaleHeader":u,"cate-HotSaleContent":v}},H=g,b=(e("7735"),Object(l["a"])(H,s,n,!1,null,"fa46feaa",null));a["default"]=b.exports},"16d9":function(t,a,e){},"19c7":function(t,a,e){"use strict";var s=e("2bb3"),n=e.n(s);n.a},"2bb3":function(t,a,e){},"3eef":function(t,a,e){"use strict";var s=e("16d9"),n=e.n(s);n.a},7735:function(t,a,e){"use strict";var s=e("ac4b"),n=e.n(s);n.a},ac4b:function(t,a,e){}}]);
//# sourceMappingURL=chunk-bf23dcb4.6f674dc1.js.map