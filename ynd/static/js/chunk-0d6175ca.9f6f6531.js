(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d6175ca"],{6983:function(t,a,n){},"7f7d":function(t,a,n){"use strict";n.r(a);var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"all"},[n("p",[t._v("农副加工")]),n("ul",{staticClass:"information-list"},t._l(t.data,(function(a,s){return n("li",{key:s},[n("router-link",{staticClass:"router",attrs:{to:{path:"/cateInformationDetail",query:{value:a.id}}}},[n("p",[t._v(t._s(a.title))]),t._l(a.pic,(function(t,a){return n("div",{key:a,staticClass:"imgurl"},[n("img",{attrs:{src:t,alt:""}})])})),n("p",{staticClass:"read"},[t._v(t._s(a.category)+"."+t._s(a.time)+" "),n("span",[t._v(t._s(a.num)+"人阅读")])])],2)],1)})),0),n("span",{staticClass:"loading",on:{click:t.loading}},[t._v("查看更多")])])},i=[],e=(n("99af"),{name:"miaoMu",data:function(){return{sid:"",id:"1",data:[],num:0,start:0,end:0}},methods:{getInfo:function(){var t=this;this.$axios.get(this.HOST+"news/get_news/?start="+this.start+"&end="+this.end+"&category_id=4").then((function(a){console.log(a.data.data),t.data=a.data.data})).catch((function(t){console.log(t)}))},loading:function(){var t=this;this.num=this.num+19,this.start+=this.num,this.end=this.start+19,this.$axios.get(this.HOST+"news/get_news/?start="+this.start+"&end="+this.end+"&category_id=4").then((function(a){console.log(a.data),t.data=t.data.concat(a.data.data),console.log(t.data)})).catch((function(t){console.log(t)}))}},created:function(){this.getInfo()}}),o=e,c=(n("897f"),n("2877")),r=Object(c["a"])(o,s,i,!1,null,"764dc777",null);a["default"]=r.exports},"897f":function(t,a,n){"use strict";var s=n("6983"),i=n.n(s);i.a}}]);
//# sourceMappingURL=chunk-0d6175ca.9f6f6531.js.map