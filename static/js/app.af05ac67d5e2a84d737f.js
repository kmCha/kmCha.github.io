webpackJsonp([2,0],[function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var n=i(22),a=o(n),s=i(112),r=o(s),c=i(124),d=o(c),u=i(37),l=o(u),f=i(123);a["default"].use(d["default"]),a["default"].use(f);var p=new d["default"];p.map(l["default"]),p.redirect(u.redirect),p.start(r["default"],"body")},,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.loadingMixin={computed:{loading:function(){return this.$store.state.loading}}}},,,,,,function(t,e,i){var o,n;i(94),o=i(46),n=i(107),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,i){var o,n;i(97),o=i(47),n=i(110),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(){return c["default"].http.get("https://chamajiuxi.wilddogio.com/blog/posts.json",{params:{orderBy:'"date"',limitToLast:100}})}function a(){return c["default"].http.get("https://chamajiuxi.wilddogio.com/blog/categories.json")}function s(){return c["default"].http.get("https://chamajiuxi.wilddogio.com/blog/tags.json")}Object.defineProperty(e,"__esModule",{value:!0}),e.getArticles=n,e.getCategories=a,e.getTags=s;var r=i(22),c=o(r)},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.redirect=void 0;var n=i(119),a=o(n),s=i(120),r=o(s),c=i(116),d=o(c),u=i(118),l=o(u),f=i(121),p=o(f),v=i(114),g=o(v);e["default"]={"/articles":{component:a["default"]},"/categories":{component:r["default"]},"/achieves":{component:l["default"]},"/tags":{component:p["default"]},"/articles/:key":{component:g["default"]},"/categories/:key":{component:d["default"]}};e.redirect={"*":"/articles"}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(22),a=o(n),s=i(125),r=o(s),c=i(36);a["default"].use(r["default"]);var d={articles:"",categories:"",tags:"",loading:!0,windowWidth:0,windowHeight:0,headerFixed:!1,onPage:1},u={setArticles:function(t,e){t.articles=e},setCategories:function(t,e){t.categories=e},setTags:function(t,e){t.tags=e},startLoading:function(t){t.loading=!0},finishLoading:function(t){t.loading=!1},setWindowSize:function(t,e){t.windowHeight=e.height,t.windowWidth=e.width},fixHeader:function(t){t.headerFixed=!0},unfixHeader:function(t){t.headerFixed=!1},setPage:function(t,e){t.onPage=e}},l={getArticles:function(t){var e=t.commit;return(0,c.getArticles)().then(function(t){e("setArticles",t.json())})},getCategories:function(t){var e=t.commit;return(0,c.getCategories)().then(function(t){var i=t.json();for(var o in i)i[o].length||0===i[o].length||(i[o]=[i[o][0]]);e("setCategories",i)})},getTags:function(t){var e=t.commit;return(0,c.getTags)().then(function(t){var i=t.json();e("setTags",i)})}},f={count:function(t){return t.count},articlesLength:function(t){var e=0;for(var i in t.articles)i&&e++;return e}};e["default"]=new r["default"].Store({state:d,mutations:u,actions:l,getters:f})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"ScaleLoader",props:{loading:{type:Boolean,"default":!0},color:{type:String,"default":"#5dc596"},height:{type:String,"default":"35px"},width:{type:String,"default":"4px"},margin:{type:String,"default":"2px"},radius:{type:String,"default":"2px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.height,width:this.width,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-scaleStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.1s"},spinnerDelay2:{animationDelay:"0.2s"},spinnerDelay3:{animationDelay:"0.3s"},spinnerDelay4:{animationDelay:"0.4s"},spinnerDelay5:{animationDelay:"0.5s"}}}}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(52),a=o(n),s=i(35),r=o(s),c=i(117),d=o(c),u=i(38),l=o(u);e["default"]={components:{Navigator:r["default"],ImgHeader:d["default"]},replace:!1,store:l["default"],ready:function(){function t(){var t=window.innerWidth,o=t/e*i;document.documentElement.style.fontSize=o+"px"}var e=1527,i=16;if(t(),window.addEventListener("resize",function(e){t()}),l["default"].commit("setWindowSize",{height:window.innerHeight,width:window.innerWidth}),!l["default"].state.articles||!l["default"].state.categories||!l["default"].state.tags)return l["default"].commit("startLoading"),a["default"].all([l["default"].dispatch("getArticles"),l["default"].dispatch("getCategories"),l["default"].dispatch("getTags")]).then(function(){l["default"].commit("finishLoading")})["catch"](function(t){console.log("提示网络问题")})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{articleKey:""}},computed:{backgroundColor:function(){return"background-color: "+this.$store.state.tags[this.name].color+";"}},props:["name"]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),a=o(n),s=i(3);e["default"]={data:function(){return{articleKey:""}},computed:{article:function(){return this.$store.state.articles[this.articleKey]||{}}},methods:{inc:function(){this.$store.commit("inc")}},route:{data:function(t){var e=t.next,i=t.to;this.articleKey=i.params.key,e()}},attached:function(){var t=this,e=function i(){if(document.querySelectorAll("pre code").length){var e=document.querySelectorAll("pre code");e.forEach(function(t){window.hljs.highlightBlock(t)});var o=document.querySelectorAll("p img");o.forEach(function(t){t.classList.add("center")}),document.body.scrollTop=t.$store.state.windowHeight}else window.setTimeout(function(){i()},50)};e()},components:{Loader:a["default"]},mixins:[s.loadingMixin]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(113),a=o(n);e["default"]={data:function(){return{}},computed:{imgHTML:function(){return this.article.body.match(/<img[\w\W]*?>/)},contentHTML:function(){return this.article.body.match(/<p>(?!<)[\w\W]*?<\/p>/)}},methods:{},props:["article","key"],components:{ArticleTag:a["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{categoryKey:""}},computed:{articles:function i(){var t=this.$store.state.categories[this.categoryKey],i=this.$store.state.articles,e={};return t.forEach(function(t){e[t]=i[t]}),e}},methods:{inc:function(){this.$store.commit("inc")}},route:{data:function(t){var e=t.next,i=t.to;this.categoryKey=i.params.key,e()}}}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(35),a=o(n);e["default"]={data:function(){return{}},computed:{style:function(){return"height:"+this.$store.state.windowHeight+"px;"}},components:{Navigator:a["default"]}}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(122),a=o(n),s=i(3);e["default"]={data:function(){return{}},computed:{style:function(){return"height: "+this.$store.state.windowHeight+"px; width: "+this.$store.state.windowWidth+"px;"}},components:{ScaleLoader:a["default"]},mixins:[s.loadingMixin]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{}},computed:{headerFixed:function(){return this.$store.state.headerFixed}},attached:function(){var t=this;window.addEventListener("scroll",function(e){window.scrollTimer&&window.clearTimeout(window.scrollTimer),window.scrollTimer=window.setTimeout(function(){var e=t.$store.state,i=document.body.scrollTop;i<e.windowHeight-50&&e.headerFixed&&t.$store.commit("unfixHeader"),i>e.windowHeight-50&&!e.headerFixed&&t.$store.commit("fixHeader")},80)},!1)}}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),a=o(n),s=i(3);e["default"]={data:function(){return{msg:"归档!"}},computed:{count:function(){return this.$store.getters.count}},methods:{inc:function(){this.$store.commit("inc")}},components:{Loader:a["default"]},mixins:[s.loadingMixin]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(115),a=o(n),s=i(9),r=o(s),c=i(3);e["default"]={data:function(){return{numsPerPage:5,onPage:1}},watch:{onPage:function(){document.body.scrollTop=this.$store.state.windowHeight}},computed:{articles:function d(){var d=this.$store.state.articles,t={},e=0;for(var i in d)e<this.onPage*this.numsPerPage&&e>=(this.onPage-1)*this.numsPerPage&&(t[i]=d[i]),e++;return t},numOfPages:function(){return Math.ceil(this.$store.getters.articlesLength/this.numsPerPage)}},methods:{setPage:function(t){this.onPage=Number(t.target.innerHTML)},prePage:function(){this.onPage>1&&this.onPage--},nextPage:function(){this.onPage<this.numOfPages&&this.onPage++}},ready:function(){this.onPage=this.$store.state.onPage},beforeDestroy:function(){this.$store.commit("setPage",this.onPage)},components:{ArticleListItem:a["default"],Loader:r["default"]},mixins:[c.loadingMixin]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),a=o(n),s=i(3);e["default"]={data:function(){return{msg:"分类!"}},computed:{categories:function(){return this.$store.state.categories}},methods:{inc:function(){this.$store.commit("inc")}},components:{Loader:a["default"]},mixins:[s.loadingMixin]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(9),a=o(n),s=i(3);e["default"]={data:function(){return{msg:"标签!"}},computed:{count:function(){return this.$store.getters.count}},methods:{inc:function(){this.$store.commit("inc")}},components:{Loader:a["default"]},mixins:[s.loadingMixin]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=' <div class=v-spinner v-show=loading> <div class="v-scale v-scale1" v-bind:style=[spinnerStyle,spinnerDelay1]> </div><div class="v-scale v-scale2" v-bind:style=[spinnerStyle,spinnerDelay2]> </div><div class="v-scale v-scale3" v-bind:style=[spinnerStyle,spinnerDelay3]> </div><div class="v-scale v-scale4" v-bind:style=[spinnerStyle,spinnerDelay4]> </div><div class="v-scale v-scale5" v-bind:style=[spinnerStyle,spinnerDelay5]> </div> </div> '},function(t,e){t.exports=" <div id=app> <img-header></img-header> <navigator></navigator> <router-view></router-view> </div> "},function(t,e){t.exports=" <a v-link=\"{ path: '/tags/' + name }\" class=article-tag :style=backgroundColor> {{name}} </a> "},function(t,e){t.exports=' <loader></loader> <div class="article container" v-if=!loading> <div class=title><h1>{{ article.title }}</h1></div> <div class=body> {{{ article.body }}} </div> </div> '},function(t,e){t.exports=' <div class=article-list-item> <div class=article-list-title> <h2><a v-link="{ path: \'/articles/\' + key }">{{article.title}}</a></h2> </div> <div class=article-list-body> <div class=article-list-img> {{{imgHTML}}} </div> <div class=article-list-content> {{{contentHTML}}} </div> <div class=article-list-tags> <article-tag v-for="tag in article.tags" :name=tag></article-tag> </div> <div class=article-list-date> 发布于：<span>{{article.date.substr(0,10)}}</span> </div> </div> </div> '},function(t,e){t.exports=' <loader _v-10c14876=""></loader> <div class=achieves v-if=!loading _v-10c14876=""> <h1 _v-10c14876="">敬请期待...</h1> </div> '},function(t,e){t.exports=' <loader _v-285526cd=""></loader> <div class=tags v-if=!loading _v-285526cd=""> <h1 _v-285526cd="">敬请期待...</h1> </div> '},function(t,e){t.exports=' <loader _v-42bc9a50=""></loader> <div class=categories v-if=!loading _v-42bc9a50=""> <h1 _v-42bc9a50="">敬请期待...</h1> </div> '},function(t,e){t.exports=' <div class=loader :style=style v-if=loading _v-4c23d543=""> <scale-loader color=#0dc7e3 height=50px width=10px _v-4c23d543=""> </scale-loader></div> '},function(t,e){t.exports=' <loader _v-5cd864f1=""></loader> <div class="articles container" v-if=!loading _v-5cd864f1=""> <div class=page-title _v-5cd864f1=""> <h1 _v-5cd864f1="">第{{onPage}}页文章</h1> </div> <div v-for="article in articles" _v-5cd864f1=""> <article-list-item :article=article :key=$key _v-5cd864f1=""></article-list-item> </div> <div class=page-selector _v-5cd864f1=""> <div class=page-selector-wrapper _v-5cd864f1=""> <div class=page-selector-item @click=prePage _v-5cd864f1="">《</div> <div v-for="n in numOfPages" class="page-selector-item {{n===onPage-1 ? \'active\':\'\'}}" @click=setPage _v-5cd864f1="">{{n + 1}}</div> <div class=page-selector-item @click=nextPage _v-5cd864f1="">》</div> </div> </div> </div> '},function(t,e){t.exports=' <div class=category v-if=!$loadingRouteData _v-78c362a4=""> <div v-for="article in articles" _v-78c362a4=""> <a v-link="{ path: \'/articles/\' + $key }" _v-78c362a4="">{{article.date.substr(0,10)}} - {{article.title}}</a> </div> </div> '},function(t,e){t.exports=' <div class=navigator v-show=headerFixed transition=fade _v-ce75e352=""> <div class=link-wrapper _v-ce75e352=""> <a v-link="{ path: \'/articles\' }" _v-ce75e352="">文章</a> <a v-link="{ path: \'/categories\' }" _v-ce75e352="">分类</a> <a v-link="{ path: \'/achieves\' }" _v-ce75e352="">归档</a> <a v-link="{ path: \'/tags\' }" _v-ce75e352="">标签</a> </div> </div> '},function(t,e){t.exports=' <div class=img-header :style=style _v-e4a2d0a0=""> <div class=link-wrapper _v-e4a2d0a0=""> <a v-link="{ path: \'/articles\' }" _v-e4a2d0a0="">文章</a> <a v-link="{ path: \'/categories\' }" _v-e4a2d0a0="">分类</a> <a v-link="{ path: \'/achieves\' }" _v-e4a2d0a0="">归档</a> <a v-link="{ path: \'/tags\' }" _v-e4a2d0a0="">标签</a> </div> </div> '},function(t,e,i){var o,n;i(87),o=i(40),n=i(100),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(88),o=i(41),n=i(101),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(89),o=i(42),n=i(102),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(90),o=i(43),n=i(103),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(96),o=i(44),n=i(109),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(98),o=i(45),n=i(111),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(91),o=i(48),n=i(104),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(95),o=i(49),n=i(108),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(93),o=i(50),n=i(106),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(92),o=i(51),n=i(105),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(86),o=i(39),n=i(99),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}]);
//# sourceMappingURL=app.af05ac67d5e2a84d737f.js.map