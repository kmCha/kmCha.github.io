webpackJsonp([4,6],{58:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);e["default"]={data:function(){return{msg:"分类!"}},computed:{categories:function(){return this.$store.state.categories}},methods:{inc:function(){this.$store.commit("inc")}},mixins:[i.loadingMixin]}},97:function(t,e,n){e=t.exports=n(2)(),e.push([t.id,".categories[data-v-42bc9a50]{text-align:center}",""])},107:function(t,e,n){var i=n(97);"string"==typeof i&&(i=[[t.id,i,""]]);n(4)(i,{});i.locals&&(t.exports=i.locals)},124:function(t,e,n){var i,o;n(107),i=n(58);var s=n(132);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-42bc9a50",t.exports=i},132:function(module,exports){module.exports={render:function(){with(this)return loading?_e():_h("div",{staticClass:"categories"},[_m(0)])},staticRenderFns:[function(){with(this)return _h("h1",["敬请期待..."])}]}}});