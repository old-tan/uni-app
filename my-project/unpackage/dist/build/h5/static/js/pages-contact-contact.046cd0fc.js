(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contact-contact"],{1483:function(n,t,a){"use strict";a.r(t);var i=a("70c2"),c=a("fba0");for(var e in c)"default"!==e&&function(n){a.d(t,n,(function(){return c[n]}))}(e);a("92da");var r,o=a("f0c5"),u=Object(o["a"])(c["default"],i["b"],i["c"],!1,null,"258a2cd0",null,!1,i["a"],r);t["default"]=u.exports},"70c2":function(n,t,a){"use strict";var i,c=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("v-uni-view",{staticClass:"contact"},[a("v-uni-image",{staticClass:"img",attrs:{src:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1697874191,347359651&fm=26&gp=0.jpg"}}),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{on:{click:function(t){arguments[0]=t=n.$handleEvent(t),n.phone.apply(void 0,arguments)}}},[n._v("联系电话：18510345312")]),a("v-uni-view",[n._v("地址：北京市海淀区光华创业园")])],1),a("v-uni-map",{staticClass:"map",attrs:{name:"",latitude:n.latitude,scale:n.scale,longitude:n.longitude,markers:n.covers}})],1)},e=[];a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return e})),a.d(t,"a",(function(){return i}))},9219:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={data:function(){return{latitude:40.04423,longitude:116.332596,scale:15,covers:[{latitude:40.04423,longitude:116.332596,iconPath:"../../static/mark.png",width:50,height:50}]}},methods:{phone:function(){uni.makePhoneCall({phoneNumber:"18510345312"})}}};t.default=i},"92da":function(n,t,a){"use strict";var i=a("ef9c"),c=a.n(i);c.a},ef9c:function(n,t,a){var i=a("f2a4");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var c=a("4f06").default;c("c11200ac",i,!0,{sourceMap:!1,shadowMode:!1})},f2a4:function(n,t,a){var i=a("24fb");t=i(!1),t.push([n.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.contact .img[data-v-258a2cd0]{width:%?750?%;height:%?320?%}.contact .info[data-v-258a2cd0]{padding:%?15?%;font-size:%?30?%}.contact .info uni-view[data-v-258a2cd0]{margin:%?10?% 0}.contact .map[data-v-258a2cd0]{width:%?750?%;height:%?750?%}',""]),n.exports=t},fba0:function(n,t,a){"use strict";a.r(t);var i=a("9219"),c=a.n(i);for(var e in i)"default"!==e&&function(n){a.d(t,n,(function(){return i[n]}))}(e);t["default"]=c.a}}]);