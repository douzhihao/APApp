(function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="./",i(i.s="5f71")})({"0b05":function(t,e,i){if("undefined"===typeof Promise||Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then((function(i){return e.resolve(t()).then((function(){return i}))}),(function(i){return e.resolve(t()).then((function(){throw i}))}))}),"undefined"!==typeof uni&&uni&&uni.requireGlobal){var n=uni.requireGlobal();ArrayBuffer=n.ArrayBuffer,Int8Array=n.Int8Array,Uint8Array=n.Uint8Array,Uint8ClampedArray=n.Uint8ClampedArray,Int16Array=n.Int16Array,Uint16Array=n.Uint16Array,Int32Array=n.Int32Array,Uint32Array=n.Uint32Array,Float32Array=n.Float32Array,Float64Array=n.Float64Array,BigInt64Array=n.BigInt64Array,BigUint64Array=n.BigUint64Array}window.__uniConfig={window:{navigationStyle:"custom",navigationBarTitleText:"ASIA-POTASH",enablePullDownRefresh:!1},darkmode:!1},uni.restoreGlobal&&uni.restoreGlobal(weex,plus,setTimeout,clearTimeout,setInterval,clearInterval),__definePage("pages/index/index",(function(){return Vue.extend(i("34c6").default)}))},"10ac":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={data:function(){return{wxsProps:{}}},components:{}}},"24fb":function(t,e,i){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var i=function(t,e){var i=t[1]||"",n=t[3];if(!n)return i;if(e&&"function"===typeof btoa){var r=function(t){var e=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(e);return"/*# ".concat(i," */")}(n),a=n.sources.map((function(t){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(t," */")}));return[i].concat(a).concat([r]).join("\n")}return[i].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(i,"}"):i})).join("")},e.i=function(t,i,n){"string"===typeof t&&(t=[[null,t,""]]);var r={};if(n)for(var a=0;a<this.length;a++){var o=this[a][0];null!=o&&(r[o]=!0)}for(var s=0;s<t.length;s++){var u=[].concat(t[s]);n&&r[u[0]]||(i&&(u[2]?u[2]="".concat(i," and ").concat(u[2]):u[2]=i),e.push(u))}},e}},"2cfc":function(t,e,i){var n=i("24fb"),r=i("b8d8"),a=i("e826");e=n(!1);var o=r(a);e.push([t.i,".content{display:flex;flex-direction:column;position:relative;width:100vw;height:100vh;overflow:hidden;background:linear-gradient(0deg,rgba(0,0,0,.9),rgba(0,0,0,.01))}uni-image{pointer-events:none!important}.contentBg{width:100vw;height:100vh;background:url("+o+") no-repeat;background-size:100% 100%;position:absolute;z-index:-1}.custom{width:100vw;height:100rpx;overflow:hidden;background-color:hsla(0,0%,100%,.8);display:flex;flex-direction:row;align-items:center;justify-content:space-between;padding-top:4vh}.customLeft{height:100%;display:flex;align-items:center}.customMid{height:100%;display:flex;align-items:center}.customRight{height:100%;display:flex;align-items:center}.customLeft>uni-image{width:62rpx;height:32rpx;margin-left:32rpx}.customMid>uni-image{width:176rpx;height:36rpx}.customRight>uni-image{width:40rpx;height:40rpx;margin-right:32rpx}.tipsPoint{width:20rpx;height:20rpx;background-color:#fff;border-radius:50%;margin-left:20rpx}.redPoint{width:20rpx;height:20rpx;background-color:red;border-radius:50%}.greenPoint{width:20rpx;height:20rpx;background-color:#17ba4d;border-radius:50%}.optinoPoint{width:20rpx;height:20rpx;border-radius:50%;margin-right:20rpx}.optionBtn{width:96vw;height:auto;overflow:hidden;background-color:#202020;border-radius:20rpx;margin:0 auto 16rpx}.optionBtn>uni-button{background-color:#202020;font-size:36rpx;font-family:PingFang SC;font-weight:400;color:#fff;margin-top:2rpx}.cannelBtn{width:96vw;height:auto;overflow:hidden;background-color:#202020;border-radius:20rpx;margin:0 auto 40rpx}.cannelBtn>uni-button{background-color:#202020;font-size:36rpx;font-family:PingFang SC;font-weight:500;color:#007aff;margin-bottom:10rpx}.main{width:100vw;height:90vh;overflow:hidden}.inputWav{width:100vw;height:20vh;position:absolute;bottom:0;left:0;color:#efefef;text-align:center}.inputBox{width:100vw;height:100vh}.inputTipsSlide{width:100vw;height:200rpx;position:absolute;top:-180rpx;text-align:center;font-size:31rpx;font-family:San Francisco Display;font-weight:700;color:#fff}.slideMain{display:flex;flex-direction:column;align-items:center;justify-content:center}.slideMain>uni-image{width:40rpx;height:72rpx;position:absolute;top:20rpx}.inputBtnDefault{width:180rpx;height:180rpx;background:linear-gradient(135deg,#b54fe6,#439cfd);border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center}.inputBtnRecording{width:180rpx;height:180rpx;background:#282828;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center}.inputIconBoxCannel{width:180rpx;height:180rpx;background:none;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center}.inputIconBox{width:180rpx;height:180rpx;background:#fb496f;border-radius:50%;margin:0 auto;display:flex;align-items:center;justify-content:center}.inputIcon{width:55rpx;height:75rpx}.inputTipsHold{width:100vw;height:46rpx;font-size:31rpx;font-family:San Francisco Display;font-weight:700;color:#efefef;line-height:74rpx;pointer-events:none}.inputTipsRelease{width:100vw;height:46rpx;font-size:25rpx;font-family:San Francisco Display;font-weight:400;color:#a0a0a8;line-height:74rpx}.chat{width:90vw;height:68vh;overflow:scroll;margin:20rpx auto 120rpx}.userPart{width:90vw;min-height:80rpx;height:auto;overflow:hidden}.userPart .userPartList{width:90vw;min-height:80rpx;margin-top:20rpx;display:flex;flex-direction:row;justify-content:flex-end}.userPartList .asring{width:178rpx;height:92rpx;overflow:hidden;padding:0 20rpx;background-color:#303030;font-size:15px;font-family:PingFang SC;font-weight:400;color:#fff;line-height:40rpx}.userPartList .asring>uni-image{display:block;width:100%}.userPartList .headimg{width:80rpx;height:80rpx;background-color:#6a6a6a;border-radius:50%}.userPartList .headimg>uni-image{width:70rpx;height:70rpx;margin-top:10rpx;margin-left:5rpx}.userPartList .triangle{border:10px solid transparent;border-left-color:#303030;width:0;height:0;margin-top:20rpx}.userPartList .text{width:400rpx;overflow:hidden;padding:25rpx;background-color:#303030;color:#fff;font-size:32rpx;font-family:PingFang SC;font-weight:400;color:#fff;line-height:40rpx}.robotPart{width:90vw;min-height:150rpx;height:auto;margin-top:20rpx;overflow:hidden}.robotPart .robotPartList{width:90vw;min-height:80rpx;margin-top:20rpx;display:flex;flex-direction:row;justify-content:flex-start}.robotPartList .headimg{width:80rpx;height:80rpx;background-color:#000;border-radius:50%}.robotPartList .headimg>uni-image{width:80rpx;height:80rpx;border-radius:50%}.robotPartList .triangle{border:10px solid transparent;border-right-color:#000;width:0;height:0;margin-top:20rpx}.robotPartList .thinking{width:178rpx;height:92rpx;overflow:hidden;padding:0 20rpx;background-color:#000;font-size:15px;font-family:PingFang SC;font-weight:400;color:#fff;line-height:40rpx}.robotPartList .thinking>uni-image{display:block;width:100%}.robotPartList .text{width:auto;max-width:400rpx;overflow:hidden;padding:26rpx;background-color:#000;font-size:15px;font-family:PingFang SC;font-weight:400;color:#fff;line-height:40rpx}.robotPartList .sort{width:96rpx;height:92rpx;overflow:hidden;background-color:#202020;font-size:15px;font-family:PingFang SC;font-weight:400;color:#fff;text-align:center;line-height:92rpx}.popupWSSMain{width:90vw;height:40vh;background-color:#fff;border-radius:20rpx;display:flex;flex-direction:column;align-items:center;justify-content:center}.popupWSSMain>uni-input{width:80vw;height:80rpx;margin:0 auto;border:1px solid #000;border-radius:10rpx;padding:5rpx;margin:20rpx}.popupWSSMain>uni-button{width:80vw;margin:10rpx}",""]),t.exports=e},"34c6":function(t,e,i){"use strict";i.r(e);var n=i("7348"),r=i("4fbc");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("3cfb");var o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);e["default"]=s.exports},"376f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return r})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t._$g(0,"i")?i("uni-view",{ref:"ani",class:t._$g(0,"c"),style:t._$g(0,"s"),attrs:{animation:t._$g(0,"a-animation"),_i:0},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._t("default",null,{_i:1})],2):t._e()},r=[]},"3cfb":function(t,e,i){"use strict";var n=i("81a4"),r=i.n(n);r.a},"4d12":function(t,e,i){var n=i("c0f7");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("7f7e").default;r("5af38f75",n,!0,{sourceMap:!1,shadowMode:!1})},"4fbc":function(t,e,i){"use strict";i.r(e);var n=i("10ac"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},"5b8f":function(t,e,i){"use strict";i.r(e);var n=i("de86"),r=i("ee40");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);i("dadd");var o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"3193bb52",null,!1,n["a"],void 0);e["default"]=s.exports},"5f71":function(t,e,i){"use strict";function n(){function t(t){var e=i("b343");e.__inject__&&e.__inject__(t)}"function"===typeof t&&t(),UniViewJSBridge.publishHandler("webviewReady")}i("0b05"),"undefined"!==typeof plus?n():document.addEventListener("plusready",n)},7348:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniPopup:i("5b8f").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("uni-view",{staticClass:t._$g(0,"sc"),attrs:{_i:0}},[i("uni-view",{staticClass:t._$g(1,"sc"),attrs:{_i:1}}),i("uni-view",{staticClass:t._$g(2,"sc"),attrs:{_i:2}},[i("uni-view",{staticClass:t._$g(3,"sc"),attrs:{_i:3},on:{click:function(e){return t.$handleViewEvent(e)}}},[i("v-uni-image",{attrs:{src:t._$g(4,"a-src"),mode:"widthFix",_i:4}}),i("uni-view",{staticClass:t._$g(5,"sc"),attrs:{_i:5}},[i("uni-view",{class:t._$g(6,"c"),attrs:{_i:6}})],1)],1),i("uni-view",{staticClass:t._$g(7,"sc"),attrs:{_i:7}},[i("v-uni-image",{attrs:{src:t._$g(8,"a-src"),mode:"widthFix",_i:8}})],1),i("uni-view",{staticClass:t._$g(9,"sc"),attrs:{_i:9},on:{click:function(e){return t.$handleViewEvent(e)}}},[i("uni-view",{staticClass:t._$g(10,"sc"),attrs:{_i:10}}),i("v-uni-image",{attrs:{src:t._$g(11,"a-src"),mode:"widthFix",_i:11}})],1)],1),i("uni-view",{staticClass:t._$g(12,"sc"),attrs:{_i:12}},[i("uni-view",{staticClass:t._$g(13,"sc"),attrs:{_i:13}},[i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(14,"v-show"),expression:"_$g(14,'v-show')"}],staticClass:t._$g(14,"sc"),attrs:{_i:14}},[i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(15,"v-show"),expression:"_$g(15,'v-show')"}],staticClass:t._$g(15,"sc"),attrs:{_i:15}},[i("uni-view",{staticClass:t._$g(16,"sc"),attrs:{_i:16}},[t._v(t._$g(16,"t0-0"))]),i("uni-view",{staticClass:t._$g(17,"sc"),attrs:{_i:17}}),i("uni-view",{staticClass:t._$g(18,"sc"),attrs:{_i:18}},[i("v-uni-image",{attrs:{src:t._$g(19,"a-src"),mode:"",_i:19}})],1)],1),i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(20,"v-show"),expression:"_$g(20,'v-show')"}],staticClass:t._$g(20,"sc"),attrs:{_i:20}},[i("uni-view",{staticClass:t._$g(21,"sc"),attrs:{_i:21}},[i("v-uni-image",{attrs:{src:t._$g(22,"a-src"),mode:"widthFix",_i:22}})],1),i("uni-view",{staticClass:t._$g(23,"sc"),attrs:{_i:23}}),i("uni-view",{staticClass:t._$g(24,"sc"),attrs:{_i:24}},[i("v-uni-image",{attrs:{src:t._$g(25,"a-src"),mode:"",_i:25}})],1)],1)],1),i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(26,"v-show"),expression:"_$g(26,'v-show')"}],staticClass:t._$g(26,"sc"),attrs:{_i:26}},[i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(27,"v-show"),expression:"_$g(27,'v-show')"}],staticClass:t._$g(27,"sc"),attrs:{_i:27}},[i("uni-view",{staticClass:t._$g(28,"sc"),attrs:{_i:28}},[i("v-uni-image",{attrs:{src:t._$g(29,"a-src"),mode:"",_i:29}})],1),i("uni-view",{staticClass:t._$g(30,"sc"),attrs:{_i:30}}),i("uni-view",{staticClass:t._$g(31,"sc"),attrs:{_i:31}},[i("v-uni-image",{attrs:{src:t._$g(32,"a-src"),mode:"widthFix",_i:32}})],1)],1),t._l(t._$g(33,"f"),(function(e,n,r,a){return i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g("33-"+a,"v-show"),expression:"_$g((\"33-\"+$30),'v-show')"}],key:e,staticClass:t._$g("33-"+a,"sc"),attrs:{_i:"33-"+a}},[i("uni-view",{staticClass:t._$g("34-"+a,"sc"),attrs:{_i:"34-"+a}},[i("v-uni-image",{attrs:{src:t._$g("35-"+a,"a-src"),mode:"",_i:"35-"+a}})],1),i("uni-view",{staticClass:t._$g("36-"+a,"sc"),attrs:{_i:"36-"+a}}),t._l(t._$g("37-"+a,"f"),(function(e,n,r,o){return i("uni-view",{key:e,class:t._$g("37-"+a+"-"+o,"c"),attrs:{_i:"37-"+a+"-"+o}},[t._v(t._$g("37-"+a+"-"+o,"t0-0"))])}))],2)}))],2)],1),i("uni-view",{staticClass:t._$g(38,"sc"),attrs:{_i:38}},[i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(39,"v-show"),expression:"_$g(39,'v-show')"}],staticClass:t._$g(39,"sc"),attrs:{_i:39}},[i("uni-view",{staticClass:t._$g(40,"sc"),attrs:{_i:40}},[t._v("Slide up Clear"),i("v-uni-image",{attrs:{src:t._$g(41,"a-src"),mode:"widthFix",_i:41}})],1)],1),i("uni-view",{staticClass:t._$g(42,"sc"),attrs:{_i:42}},[i("uni-view",{class:t._$g(43,"c"),attrs:{_i:43},on:{touchstart:function(e){return t.$handleViewEvent(e)},touchmove:function(e){return t.$handleViewEvent(e)},touchend:function(e){return t.$handleViewEvent(e)},longpress:function(e){return t.$handleViewEvent(e)}}},[i("uni-view",{class:t._$g(44,"c"),attrs:{_i:44}},[t._$g(45,"i")?i("v-uni-image",{staticClass:t._$g(45,"sc"),attrs:{src:t._$g(45,"a-src"),mode:"widthFix",_i:45}}):t._e(),t._$g(46,"i")?i("v-uni-image",{staticClass:t._$g(46,"sc"),attrs:{src:t._$g(46,"a-src"),mode:"widthFix",_i:46}}):t._e(),t._$g(47,"i")?i("v-uni-image",{staticClass:t._$g(47,"sc"),attrs:{src:t._$g(47,"a-src"),mode:"widthFix",_i:47}}):t._e()],1)],1),i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(48,"v-show"),expression:"_$g(48,'v-show')"}],staticClass:t._$g(48,"sc"),attrs:{_i:48}},[t._v("Hold to Talk")]),i("uni-view",{directives:[{name:"show",rawName:"v-show",value:t._$g(49,"v-show"),expression:"_$g(49,'v-show')"}],staticClass:t._$g(49,"sc"),attrs:{_i:49}},[t._v("Release and Send")])],1)],1)],1),i("uni-popup",{ref:"popup",attrs:{_i:50}},[i("uni-view",{staticClass:t._$g(51,"sc"),attrs:{_i:51}},[i("v-uni-button",{attrs:{type:"default","data-index":"7",_i:52},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Focus To Face")]),i("uni-view",{staticClass:t._$g(53,"sc"),staticStyle:{width:"100%",height:"1px","background-color":"#3a3a3a"},attrs:{_i:53}}),i("v-uni-button",{attrs:{type:"default","data-index":"8",_i:54},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Focus To Body")]),i("uni-view",{staticClass:t._$g(55,"sc"),staticStyle:{width:"100%",height:"1px","background-color":"#3a3a3a"},attrs:{_i:55}}),i("v-uni-button",{attrs:{type:"default","data-index":"9",_i:56},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Focus To Bust")]),i("uni-view",{staticClass:t._$g(57,"sc"),staticStyle:{width:"100%",height:"1px","background-color":"#3a3a3a"},attrs:{_i:57}}),i("v-uni-button",{attrs:{type:"default","data-index":"1",_i:58},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Play Video1")]),i("uni-view",{staticClass:t._$g(59,"sc"),staticStyle:{width:"100%",height:"1px","background-color":"#3a3a3a"},attrs:{_i:59}}),i("v-uni-button",{attrs:{type:"default","data-index":"2",_i:60},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Play Video2")]),i("uni-view",{staticClass:t._$g(61,"sc"),staticStyle:{width:"100%",height:"1px","background-color":"#3a3a3a"},attrs:{_i:61}}),i("v-uni-button",{attrs:{type:"default","data-index":"3",_i:62},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Play Background")]),i("uni-view",{staticClass:t._$g(63,"sc"),staticStyle:{width:"100%",height:"1px","background-color":"#3a3a3a"},attrs:{_i:63}}),i("v-uni-button",{attrs:{type:"default",_i:64},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Reset Background")])],1),i("uni-view",{staticClass:t._$g(65,"sc"),attrs:{_i:65}},[i("v-uni-button",{attrs:{type:"default",_i:66},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("Cancel")])],1)],1),i("uni-popup",{ref:"popupWSS",attrs:{_i:67}},[i("uni-view",{staticClass:t._$g(68,"sc"),attrs:{_i:68}},[i("v-uni-input",{attrs:{type:"text",name:"",id:"",value:t._$g(69,"a-value"),placeholder:"wss://**.**.***.**",_i:69},on:{input:function(e){return t.$handleViewEvent(e)}}}),i("v-uni-button",{attrs:{type:"warn",plain:"true",_i:70},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("disconnect")]),i("v-uni-button",{attrs:{type:"default",plain:"true",_i:71},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("cancel")]),i("v-uni-button",{attrs:{type:"primary",plain:"true",_i:72},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._v("connect")]),i("uni-view",{staticStyle:{"margin-top":"20rpx"},attrs:{_i:73}},[i("v-uni-text",{staticStyle:{"margin-right":"20rpx"},attrs:{_i:74}},[t._v("CN/EN")]),i("v-uni-switch",{attrs:{checked:t._$g(75,"a-checked"),_i:75},on:{change:function(e){return t.$handleViewEvent(e)}}})],1)],1)],1)],1)},a=[]},"7f7e":function(t,e,i){"use strict";function n(t,e){for(var i=[],n={},r=0;r<e.length;r++){var a=e[r],o=a[0],s=a[1],u=a[2],c=a[3],d={id:t+":"+r,css:s,media:u,sourceMap:c};n[o]?n[o].parts.push(d):i.push(n[o]={id:o,parts:[d]})}return i}i.r(e),i.d(e,"default",(function(){return p}));var r="undefined"!==typeof document;if("undefined"!==typeof DEBUG&&DEBUG&&!r)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var a={},o=r&&(document.head||document.getElementsByTagName("head")[0]),s=null,u=0,c=!1,d=function(){},l=null,f="undefined"!==typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function p(t,e,i,r){c=i,l=r||{};var o=n(t,e);return g(o),function(e){for(var i=[],r=0;r<o.length;r++){var s=o[r],u=a[s.id];u.refs--,i.push(u)}e?(o=n(t,e),g(o)):o=[];for(r=0;r<i.length;r++){u=i[r];if(0===u.refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete a[u.id]}}}}function g(t){for(var e=0;e<t.length;e++){var i=t[e],n=a[i.id];if(n){n.refs++;for(var r=0;r<n.parts.length;r++)n.parts[r](i.parts[r]);for(;r<i.parts.length;r++)n.parts.push(v(i.parts[r]));n.parts.length>i.parts.length&&(n.parts.length=i.parts.length)}else{var o=[];for(r=0;r<i.parts.length;r++)o.push(v(i.parts[r]));a[i.id]={id:i.id,refs:1,parts:o}}}}function h(){var t=document.createElement("style");return t.type="text/css",o.appendChild(t),t}function v(t){var e,i,n=document.querySelector('style[data-vue-ssr-id~="'+t.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(f){var r=u++;n=s||(s=h()),e=w.bind(null,n,r,!1),i=w.bind(null,n,r,!0)}else n=h(),e=x.bind(null,n),i=function(){n.parentNode.removeChild(n)};return e(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;e(t=n)}else i()}}var _=function(){var t=[];return function(e,i){return t[e]=i,t.filter(Boolean).join("\n")}}();function w(t,e,i,n){var r=i?"":S(n.css);if(t.styleSheet)t.styleSheet.cssText=_(e,r);else{var a=document.createTextNode(r),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(a,o[e]):t.appendChild(a)}}function x(t,e){var i=S(e.css),n=e.media,r=e.sourceMap;if(n&&t.setAttribute("media",n),l.ssrId&&t.setAttribute("data-vue-ssr-id",e.id),r&&(i+="\n/*# sourceURL="+r.sources[0]+" */",i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),t.styleSheet)t.styleSheet.cssText=i;else{while(t.firstChild)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(i))}}var m=/\b([+-]?\d+(\.\d+)?)[r|u]px\b/g,b=/var\(--status-bar-height\)/gi,y=/var\(--window-top\)/gi,$=/var\(--window-bottom\)/gi,C=/var\(--window-left\)/gi,k=/var\(--window-right\)/gi,P=!1;function S(t){if(!uni.canIUse("css.var")){!1===P&&(P=plus.navigator.getStatusbarHeight());var e={statusBarHeight:P,top:window.__WINDOW_TOP||0,bottom:window.__WINDOW_BOTTOM||0};t=t.replace(b,e.statusBarHeight+"px").replace(y,e.top+"px").replace($,e.bottom+"px").replace(C,"0px").replace(k,"0px")}return t.replace(/\{[\s\S]+?\}|@media.+?\{/g,(function(t){return t.replace(m,(function(t,e){return uni.upx2px(e)+"px"}))}))}},"81a4":function(t,e,i){var n=i("2cfc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("7f7e").default;r("e40181d8",n,!0,{sourceMap:!1,shadowMode:!1})},8957:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"uniPopup",props:["animation","type","isMaskClick","maskClick","backgroundColor","safeArea","maskBackgroundColor"],data:function(){return{wxsProps:{}}},components:{}}},ac1a:function(t,e,i){"use strict";i.r(e);var n=i("376f"),r=i("be10");for(var a in r)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(a);var o=i("f0c5"),s=Object(o["a"])(r["default"],n["b"],n["c"],!1,null,"acf5fb64",null,!1,n["a"],void 0);e["default"]=s.exports},b343:function(t,e,i){"use strict";i.r(e);var n=i("4d12"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},b8d8:function(t,e,i){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):0===t.indexOf("/")?t.substr(1):t)}},bd7e:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default={name:"uniTransition",props:["show","modeClass","duration","styles","customClass"],data:function(){return{wxsProps:{}}},components:{}}},be10:function(t,e,i){"use strict";i.r(e);var n=i("bd7e"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},c0f7:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,"",""]),t.exports=e},d612:function(t,e,i){var n=i("f273");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var r=i("7f7e").default;r("111d75c4",n,!0,{sourceMap:!1,shadowMode:!1})},dadd:function(t,e,i){"use strict";var n=i("d612"),r=i.n(n);r.a},de86:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var n={uniTransition:i("ac1a").default},r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t._$g(0,"i")?i("uni-view",{staticClass:t._$g(0,"sc"),class:t._$g(0,"c"),attrs:{_i:0}},[i("uni-view",{attrs:{_i:1},on:{touchstart:function(e){return t.$handleViewEvent(e)}}},[t._$g(2,"i")?i("uni-transition",{key:"1",attrs:{_i:2},on:{click:function(e){return t.$handleViewEvent(e)}}}):t._e(),i("uni-transition",{key:"2",attrs:{_i:3},on:{click:function(e){return t.$handleViewEvent(e)}}},[i("uni-view",{staticClass:t._$g(4,"sc"),class:t._$g(4,"c"),style:t._$g(4,"s"),attrs:{_i:4},on:{click:function(e){return t.$handleViewEvent(e)}}},[t._t("default",null,{_i:5})],2)],1)],1)],1):t._e()},a=[]},e826:function(t,e){t.exports="/static/contentbg.jpg"},ee40:function(t,e,i){"use strict";i.r(e);var n=i("8957"),r=i.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=r.a},f0c5:function(t,e,i){"use strict";function n(t,e,i,n,r,a,o,s,u,c){var d,l="function"===typeof t?t.options:t;if(u){l.components||(l.components={});var f=Object.prototype.hasOwnProperty;for(var p in u)f.call(u,p)&&!f.call(l.components,p)&&(l.components[p]=u[p])}if(c&&("function"===typeof c.beforeCreate&&(c.beforeCreate=[c.beforeCreate]),(c.beforeCreate||(c.beforeCreate=[])).unshift((function(){this[c.__module]=this})),(l.mixins||(l.mixins=[])).push(c)),e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(d=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=d):r&&(d=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),d)if(l.functional){l._injectStyles=d;var g=l.render;l.render=function(t,e){return d.call(e),g(t,e)}}else{var h=l.beforeCreate;l.beforeCreate=h?[].concat(h,d):[d]}return{exports:t,options:l}}i.d(e,"a",(function(){return n}))},f273:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";.uni-popup[data-v-3193bb52]{position:fixed;z-index:99}.uni-popup.top[data-v-3193bb52], .uni-popup.left[data-v-3193bb52], .uni-popup.right[data-v-3193bb52]{top:0}.uni-popup .uni-popup__wrapper[data-v-3193bb52]{display:block;position:relative}.uni-popup .uni-popup__wrapper.left[data-v-3193bb52], .uni-popup .uni-popup__wrapper.right[data-v-3193bb52]{padding-top:0;flex:1}.fixforpc-z-index[data-v-3193bb52]{z-index:999}.fixforpc-top[data-v-3193bb52]{top:0}',""]),t.exports=e}});