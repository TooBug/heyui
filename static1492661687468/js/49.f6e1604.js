webpackJsonp([49],{485:function(s,t,n){var e=n(0)(n(538),n(616),null,null);e.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/message/message.vue",e.esModule&&Object.keys(e.esModule).some(function(s){return"default"!==s&&"__esModule"!==s})&&console.error("named exports are not supported in *.vue files."),e.options.functional&&console.error("[vue-loader] message.vue: functional components are not supported with templates, they should use render functions."),s.exports=e.exports},538:function(s,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{}},methods:{config:function(){this.$Message.config({timeout:1e3})},info:function(){this.$Message("这是一个普通的提醒")},message:function(s){var t={info:"消息",success:"成功",warn:"警告",error:"错误"}[s],n={type:s,text:"这是一个"+t+"的消息"};this.$Message(n)},message2:function(s){var t={info:"消息",success:"成功",warn:"警告",error:"错误",loading:"加载中"}[s];this.$Message[s]("这是一个"+t+"的消息")},message3:function(){this.$Message("这是一个不会自动关闭的消息",0)},message5:function(){this.$Message.loading("正在加载中")}}}},616:function(s,t,n){s.exports={render:function(){var s=this,t=s.$createElement,n=s._self._c||t;return n("div",{staticClass:"doc"},[n("h2",[s._v("Message 提示")]),s._v(" "),n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){s.info()}}},[s._v("提示")])]),s._v(" "),n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){s.config()}}},[s._v("设置全局的timeout时间为1秒")])]),s._v(" "),n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){s.message("info")}}},[s._v("消息")]),s._v(" "),n("button",{staticClass:"h-btn",on:{click:function(t){s.message("success")}}},[s._v("成功")]),s._v(" "),n("button",{staticClass:"h-btn",on:{click:function(t){s.message("warn")}}},[s._v("警告")]),s._v(" "),n("button",{staticClass:"h-btn",on:{click:function(t){s.message("error")}}},[s._v("错误")])]),s._v(" "),n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){s.message2("info")}}},[s._v("消息")]),s._v(" "),n("button",{staticClass:"h-btn",on:{click:function(t){s.message2("success")}}},[s._v("成功")]),s._v(" "),n("button",{staticClass:"h-btn",on:{click:function(t){s.message2("warn")}}},[s._v("警告")]),s._v(" "),n("button",{staticClass:"h-btn",on:{click:function(t){s.message2("error")}}},[s._v("错误")])]),s._v(" "),n("h3",[s._v("不自动关闭")]),s._v(" "),n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){s.message3("info")}}},[s._v("不自动关闭")])]),s._v(" "),n("h3",[s._v("loading")]),s._v(" "),n("p",[n("button",{staticClass:"h-btn",on:{click:function(t){s.message5("loading")}}},[s._v("显示加载中")])])])},staticRenderFns:[]},s.exports.render._withStripped=!0}});