webpackJsonp([62],{470:function(t,e,n){var r=n(0)(n(525),n(613),null,null);r.options.__file="/Users/alicia/Documents/develop/github/heyui/heyui/src/components/component/data/view/page.vue",r.esModule&&Object.keys(r.esModule).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r.options.functional&&console.error("[vue-loader] page.vue: functional components are not supported with templates, they should use render functions."),t.exports=r.exports},525:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{current1:1,current2:1,current3:1,current4:1,current5:1,current6:1,total:200}},methods:{currentChange:function(t){this.total=this.total+1,log(t)}}}},613:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"doc"},[n("h2",[t._v("Pagination 分页")]),t._v(" "),n("h3",[t._v("普通分页")]),t._v(" "),n("div",[n("Pagination",{attrs:{cur:t.current1,total:t.total},on:{change:t.currentChange}})],1),t._v(" "),n("h3",[t._v("迷你分页")]),t._v(" "),n("div",[n("Pagination",{attrs:{cur:t.current2,total:t.total,small:!0},on:{change:t.currentChange}})],1),t._v(" "),n("h3",[t._v("自定义分页")]),t._v(" "),n("div",[n("Pagination",{attrs:{cur:t.current3,total:t.total,layout:"total,sizes,pager,jumper"},on:{change:t.currentChange}})],1),t._v(" "),n("h3",[t._v("自定义分页2")]),t._v(" "),n("div",[n("Pagination",{attrs:{cur:t.current4,total:t.total,layout:"pager",small:!0,size:20},on:{change:t.currentChange}})],1),t._v(" "),n("h3",[t._v("排列")]),t._v(" "),n("div",[n("Pagination",{attrs:{cur:t.current5,align:"center",total:t.total},on:{change:t.currentChange}})],1),t._v(" "),n("div",[n("Pagination",{attrs:{cur:t.current6,align:"right",total:t.total},on:{change:t.currentChange}})],1)])},staticRenderFns:[]},t.exports.render._withStripped=!0}});