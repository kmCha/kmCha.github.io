webpackJsonp([6,7],{56:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(5);e["default"]={data:function(){return{msg:"归档!"}},computed:{count:function(){return this.$store.getters.count}},methods:{inc:function(){this.$store.commit("inc")}},mixins:[i.loadingMixin]}},98:function(t,e,n){e=t.exports=n(1)(),e.push([t.id,".achieves[data-v-10c14876]{text-align:center}",""])},112:function(t,e,n){var i=n(98);"string"==typeof i&&(i=[[t.id,i,""]]);n(3)(i,{});i.locals&&(t.exports=i.locals)},130:function(t,e,n){var i,o;n(112),i=n(56);var s=n(138);o=i=i||{},"object"!=typeof i["default"]&&"function"!=typeof i["default"]||(o=i=i["default"]),"function"==typeof o&&(o=o.options),o.render=s.render,o.staticRenderFns=s.staticRenderFns,o._scopeId="data-v-10c14876",t.exports=i},138:function(module,exports){module.exports={render:function(){with(this)return loading?_e():_h("div",{staticClass:"achieves container"},[_m(0)])},staticRenderFns:[function(){with(this)return _h("h1",["敬请期待..."])}]}}});