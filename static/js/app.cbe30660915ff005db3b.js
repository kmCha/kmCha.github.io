webpackJsonp([2,0],[function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}var n=i(21),a=o(n),s=i(117),r=o(s),c=i(130),u=o(c),d=i(40),l=o(d),p=i(129);a["default"].use(u["default"]),a["default"].use(p);var f=new u["default"];f.map(l["default"]),f.redirect(d.redirect),f.start(r["default"],"body")},,,function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.loadingMixin={computed:{loading:function(){return this.$store.state.loading}}}},,,,,,,,,,,,,,,,,,,function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(24),a=o(n);e["default"]=function(t){return new a["default"](function(e,i){var o=0,n=function a(){return o>200?i("超时"):void(document.querySelector(t)?e():window.setTimeout(function(){a()},50))};n()})}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]=function(){var t=document.querySelector(".duoshuo-script");t&&(document.body.removeChild(t),delete window.$ds,delete window.DUOSHUO);var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=("https:"===document.location.protocol?"https:":"http:")+"//static.duoshuo.com/embed.unstable.js",e.charset="UTF-8",e.classList.add("duoshuo-script"),document.body.appendChild(e)}},,,,,,,,,,,,,,function(t,e,i){var o,n;i(99),o=i(44),n=i(113),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(100),o=i(49),n=i(114),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}function n(t,e){return s["default"].http.get(t,{params:e})}Object.defineProperty(e,"__esModule",{value:!0}),e.fetchData=n;var a=i(21),s=o(a)},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.redirect=void 0;var n=i(124),a=o(n),s=i(125),r=o(s),c=i(126),u=o(c),d=i(122),l=o(d),p=i(127),f=o(p),v=i(123),h=o(v);e["default"]={"/":{component:{template:""}},"/articles/page/:page":{component:a["default"]},"/categories":{component:r["default"]},"/achieves":{component:l["default"]},"/tags":{component:f["default"]},"/articles/:key":{component:h["default"]},"/categories/:key":{component:u["default"]}};e.redirect={"*":"/","/articles":"/articles/page/1"}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(21),a=o(n),s=i(131),r=o(s),c=i(39);a["default"].use(r["default"]);var u={articles:"",categories:"",tags:"",loading:!0,windowWidth:0,windowHeight:0,headerFixed:!1},d={setArticles:function(t,e){t.articles=e},setCategories:function(t,e){t.categories=e},setTags:function(t,e){t.tags=e},startLoading:function(t){t.loading=!0},finishLoading:function(t){t.loading=!1},setWindowSize:function(t,e){t.windowHeight=e.height,t.windowWidth=e.width},fixHeader:function(t){t.headerFixed=!0},unfixHeader:function(t){t.headerFixed=!1},setPage:function(t,e){t.onPage=e}},l={getArticles:function(t){var e=t.commit;return(0,c.fetchData)("https://chamajiuxi.wilddogio.com/blog/posts.json",{orderBy:'"date"',limitToLast:100}).then(function(t){e("setArticles",t.json())})},getCategories:function(t){var e=t.commit;return(0,c.fetchData)("https://chamajiuxi.wilddogio.com/blog/categories.json").then(function(t){var i=t.json();for(var o in i)i[o].length||0===i[o].length||(i[o]=[i[o][0]]);e("setCategories",i)})},getTags:function(t){var e=t.commit;return(0,c.fetchData)("https://chamajiuxi.wilddogio.com/blog/tags.json").then(function(t){var i=t.json();e("setTags",i)})}},p={count:function(t){return t.count},articlesLength:function(t){var e=0;for(var i in t.articles)i&&e++;return e}};e["default"]=new r["default"].Store({state:u,mutations:d,actions:l,getters:p})},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={name:"ScaleLoader",props:{loading:{type:Boolean,"default":!0},color:{type:String,"default":"#5dc596"},height:{type:String,"default":"35px"},width:{type:String,"default":"4px"},margin:{type:String,"default":"2px"},radius:{type:String,"default":"2px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.height,width:this.width,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-scaleStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.1s"},spinnerDelay2:{animationDelay:"0.2s"},spinnerDelay3:{animationDelay:"0.3s"},spinnerDelay4:{animationDelay:"0.4s"},spinnerDelay5:{animationDelay:"0.5s"}}}}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(24),a=o(n),s=i(121),r=o(s),c=i(38),u=o(c),d=i(120),l=o(d),p=i(41),f=o(p);e["default"]={components:{Navigator:u["default"],ImgHeader:l["default"],Loader:r["default"]},replace:!1,store:f["default"],ready:function(){function t(){var t=window.innerWidth,o=t/e*i;document.documentElement.style.fontSize=o+"px"}var e=1527,i=16;if(t(),window.addEventListener("resize",function(e){t()}),f["default"].commit("setWindowSize",{height:window.innerHeight,width:window.innerWidth}),!f["default"].state.articles||!f["default"].state.categories||!f["default"].state.tags)return f["default"].commit("startLoading"),a["default"].all([f["default"].dispatch("getArticles"),f["default"].dispatch("getCategories"),f["default"].dispatch("getTags")]).then(function(){f["default"].commit("finishLoading")})["catch"](function(t){console.log("提示网络问题")})}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={props:["date","category","key"]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(119),a=o(n),s=i(37),r=o(s);e["default"]={data:function(){return{}},computed:{imgHTML:function(){return this.article.body.match(/<img[\w\W]*?>/)},contentHTML:function(){return this.article.body.match(/<p>(?!<)[\w\W]*?<\/p>/)}},methods:{},props:["article","key"],components:{ArticleTag:a["default"],ArticleInfo:r["default"]}}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{articleKey:""}},computed:{backgroundColor:function(){return"background-color: "+this.$store.state.tags[this.name].color+";"}},props:["name"]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(38),a=o(n);e["default"]={data:function(){return{}},computed:{style:function(){return"height:"+this.$store.state.windowHeight+"px;"}},components:{Navigator:a["default"]}}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(128),a=o(n),s=i(3);e["default"]={data:function(){return{}},computed:{style:function(){return"height: "+this.$store.state.windowHeight+"px; width: "+this.$store.state.windowWidth+"px;"}},components:{ScaleLoader:a["default"]},mixins:[s.loadingMixin]}},function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e["default"]={data:function(){return{}},computed:{headerFixed:function(){return this.$store.state.headerFixed}},attached:function(){var t=this;window.addEventListener("scroll",function(e){window.scrollTimer&&window.clearTimeout(window.scrollTimer),window.scrollTimer=window.setTimeout(function(){var e=t.$store.state,i=document.body.scrollTop;i<e.windowHeight-50&&e.headerFixed&&t.$store.commit("unfixHeader"),i>e.windowHeight-50&&!e.headerFixed&&t.$store.commit("fixHeader")},80)},!1)}}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(3);e["default"]={data:function(){return{msg:"归档!"}},computed:{count:function(){return this.$store.getters.count}},methods:{inc:function(){this.$store.commit("inc")}},mixins:[o.loadingMixin]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(3),a=i(22),s=o(a),r=i(23),c=o(r),u=i(37),d=o(u);e["default"]={data:function(){return{articleKey:""}},computed:{article:function(){return this.$store.state.articles[this.articleKey]||{date:""}}},methods:{inc:function(){this.$store.commit("inc")}},route:{data:function(t){var e=t.next,i=t.to;this.articleKey=i.params.key,e()}},attached:function(){var t=this;(0,s["default"])(".body p").then(function(){var e=document.querySelectorAll("pre code");e.forEach(function(t){window.hljs.highlightBlock(t)});var i=document.querySelectorAll("p img");i.forEach(function(t){t.classList.add("center")}),document.body.scrollTop=t.$store.state.windowHeight,(0,c["default"])()})},components:{ArticleInfo:d["default"]},mixins:[n.loadingMixin]}},function(t,e,i){"use strict";function o(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(118),a=o(n),s=i(3),r=i(23),c=o(r),u=i(22),d=o(u);e["default"]={data:function(){return{numsPerPage:5,onPage:1}},watch:{onPage:function(){document.body.scrollTop=this.$store.state.windowHeight,(0,c["default"])()}},computed:{articles:function l(){var l=this.$store.state.articles,t={},e=0;for(var i in l)e<this.onPage*this.numsPerPage&&e>=(this.onPage-1)*this.numsPerPage&&(t[i]=l[i]),e++;return t},numOfPages:function(){return Math.ceil(this.$store.getters.articlesLength/this.numsPerPage)},prevPage:function(){return 1===Number(this.onPage)?1:Number(this.onPage)-1},nextPage:function(){return Number(this.onPage)===Number(this.numOfPages)?Number(this.onPage):Number(this.onPage)+1}},attached:function(){(0,d["default"])(".article-list-item").then(function(){(0,c["default"])()}),document.body.scrollTop=this.$store.state.windowHeight},route:{data:function(t){var e=t.next,i=t.abort,o=t.to;o.params.page>this.numOfPages?i():(this.onPage=o.params.page,e())}},components:{ArticleListItem:a["default"]},mixins:[s.loadingMixin]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(3);e["default"]={data:function(){return{msg:"分类!"}},computed:{categories:function(){return this.$store.state.categories}},methods:{inc:function(){this.$store.commit("inc")}},mixins:[o.loadingMixin]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(3);e["default"]={data:function(){return{categoryKey:""}},computed:{articles:function n(){var t=this.$store.state.categories[this.categoryKey],n=this.$store.state.articles,e={};return t.forEach(function(t){e[t]=n[t]}),e}},methods:{inc:function(){this.$store.commit("inc")}},route:{data:function(t){var e=t.next,i=t.to;this.categoryKey=i.params.key,e()}},mixins:[o.loadingMixin]}},function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i(3);e["default"]={data:function(){return{msg:"标签!"}},computed:{count:function(){return this.$store.getters.count}},methods:{inc:function(){this.$store.commit("inc")}},components:{},mixins:[o.loadingMixin]}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){t.exports=' <div class=v-spinner v-show=loading> <div class="v-scale v-scale1" v-bind:style=[spinnerStyle,spinnerDelay1]> </div><div class="v-scale v-scale2" v-bind:style=[spinnerStyle,spinnerDelay2]> </div><div class="v-scale v-scale3" v-bind:style=[spinnerStyle,spinnerDelay3]> </div><div class="v-scale v-scale4" v-bind:style=[spinnerStyle,spinnerDelay4]> </div><div class="v-scale v-scale5" v-bind:style=[spinnerStyle,spinnerDelay5]> </div> </div> '},function(t,e){t.exports=" <div id=app> <loader></loader> <img-header></img-header> <navigator></navigator> <router-view></router-view> </div> "},function(t,e){t.exports=' <div class=article-list-item> <div class=article-list-title> <h2><a v-link="{ path: \'/articles/\' + key }">{{article.title}}</a></h2> </div> <div class=article-list-body> <div class=article-list-img> {{{imgHTML}}} </div> <div class=article-list-content> {{{contentHTML}}} </div> <div class=article-list-tags> <article-tag v-for="tag in article.tags" :name=tag></article-tag> </div> <article-info :date=article.date.substr(0,10) :category=article.categories :key=key></article-info> </div> </div> '},function(t,e){t.exports=" <a v-link=\"{ path: '/tags/' + name }\" class=article-tag :style=backgroundColor> {{name}} </a> "},function(t,e){t.exports=' <div class="article container" v-if=!loading> <div class=title> <h1>{{ article.title }}</h1> <article-info :date=article.date.substr(0,10) :category=article.categories :key=articleKey></article-info> </div> <div class=body> {{{ article.body }}} </div> <div class=ds-thread data-thread-key={{articleKey}} data-title={{article.title}} data-url=http://kmhaoshuai.com/#!/articles/{{articleKey}}></div> </div> '},function(t,e){t.exports=' <div class=achieves v-if=!loading _v-10c14876=""> <h1 _v-10c14876="">敬请期待...</h1> </div> '},function(t,e){t.exports=' <div class=tags v-if=!loading _v-285526cd=""> <h1 _v-285526cd="">敬请期待...</h1> </div> '},function(t,e){t.exports=' <div class=categories v-if=!loading _v-42bc9a50=""> <h1 _v-42bc9a50="">敬请期待...</h1> </div> '},function(t,e){t.exports=' <div class=loader :style=style v-if=loading _v-4c23d543=""> <scale-loader color=#444 height=50px width=10px _v-4c23d543=""> </scale-loader></div> '},function(t,e){t.exports=' <div class="articles container" v-if=!loading _v-5cd864f1=""> <div class=page-title _v-5cd864f1=""> <h1 _v-5cd864f1="">第{{onPage}}页文章</h1> </div> <div v-for="article in articles" _v-5cd864f1=""> <article-list-item :article=article :key=$key _v-5cd864f1=""></article-list-item> </div> <div class=page-selector _v-5cd864f1=""> <div class=page-selector-wrapper _v-5cd864f1=""> <a class=page-selector-item v-link="{path: \'/articles/page/\' + prevPage}" _v-5cd864f1="">《</a> <a v-for="n in numOfPages" v-link="{path: \'/articles/page/\' + (n+1)}" class="page-selector-item {{n===onPage-1 ? \'active\':\'\'}}" _v-5cd864f1="">{{n + 1}}</a> <a class=page-selector-item v-link="{path: \'/articles/page/\' + nextPage}" _v-5cd864f1="">》</a> </div> </div> </div> '},function(t,e){t.exports=' <div class=article-info _v-ac36f378=""> <span _v-ac36f378=""><i class="iconfont icon-shijian5" _v-ac36f378=""></i>{{date}}</span> <span _v-ac36f378=""><i class="iconfont icon-liebiao3" _v-ac36f378=""></i>{{category}}</span> <i class="iconfont icon-pinglun" _v-ac36f378=""></i><span class=ds-thread-count data-thread-key={{key}} data-count-type=comments _v-ac36f378="">暂无评论</span> </div> '},function(t,e){t.exports=' <div class=navigator v-show=headerFixed transition=fade _v-ce75e352=""> <div class=link-wrapper _v-ce75e352=""> <a v-link="{ path: \'/articles\' }" _v-ce75e352="">文章</a> <a v-link="{ path: \'/categories\' }" _v-ce75e352="">分类</a> <a v-link="{ path: \'/achieves\' }" _v-ce75e352="">归档</a> <a v-link="{ path: \'/tags\' }" _v-ce75e352="">标签</a> </div> </div> '},function(t,e){t.exports=' <div class=img-header :style=style _v-e4a2d0a0=""> <div class=site-title _v-e4a2d0a0=""> “纠西的博客” </div> <div class=link-wrapper _v-e4a2d0a0=""> <a v-link="{ path: \'/articles\' }" _v-e4a2d0a0="">文章</a> <a v-link="{ path: \'/categories\' }" _v-e4a2d0a0="">分类</a> <a v-link="{ path: \'/achieves\' }" _v-e4a2d0a0="">归档</a> <a v-link="{ path: \'/tags\' }" _v-e4a2d0a0="">标签</a> </div> </div> '},function(t,e){t.exports=' <div class="category container" v-if=!$loading _v-e695f19c=""> <div v-for="article in articles" _v-e695f19c=""> <a v-link="{ path: \'/articles/\' + $key }" _v-e695f19c="">{{article.date.substr(0,10)}} - {{article.title}}</a> </div> </div> '},function(t,e,i){var o,n;i(90),o=i(43),n=i(104),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(91),o=i(45),n=i(105),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(92),o=i(46),n=i(106),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(101),o=i(47),n=i(115),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(97),o=i(48),n=i(111),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(94),o=i(50),n=i(108),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(93),o=i(51),n=i(107),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(98),o=i(52),n=i(112),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(96),o=i(53),n=i(110),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(102),o=i(54),n=i(116),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(95),o=i(55),n=i(109),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)},function(t,e,i){var o,n;i(89),o=i(42),n=i(103),t.exports=o||{},t.exports.__esModule&&(t.exports=t.exports["default"]),n&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=n)}]);
//# sourceMappingURL=app.cbe30660915ff005db3b.js.map