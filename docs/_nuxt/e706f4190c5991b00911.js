(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{396:function(t,a,e){"use strict";e.r(a);e(34),e(104);var s={props:{projectData:{type:Object,default:{}}},mounted:function(){}},n=e(6),i={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/",{version:"published",starts_with:"projectpage/"}).then(function(t){return{pageData:t.data.stories.find(function(t){return"page"===t.name}),projects:t.data.stories.filter(function(t){return"page"!==t.name})}})},components:{ProjectIntro:Object(n.a)(s,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row projects"},[e("div",{staticClass:"col-sm-12 item"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12 col-lg-4"},[e("nuxt-link",{attrs:{to:t.projectData.full_slug}},[e("img",{staticClass:"img-fluid",attrs:{src:t.projectData.content.image}})])],1),t._v(" "),e("div",{staticClass:"col"},[e("h3",{staticClass:"name"},[t._v(t._s(t.projectData.content.projectName))]),t._v(" "),e("p",{staticClass:"description",staticStyle:{"font-size":"12px"}},[t._v(t._s(t.projectData.content.summary))])])])])])},[],!1,null,"629b3771",null).exports},mounted:function(){this.$storybridge.on(["input","published","change"],function(t){window.location.reload()})}},o=Object(n.a)(i,function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"editable",rawName:"v-editable",value:t.pageData.content,expression:"pageData.content"}]},[e("header",{staticClass:"d-flex masthead",style:{backgroundImage:"url("+t.pageData.content.image+")",backgroundSize:"cover"}},[e("div",{staticClass:"container my-auto text-center"},[e("h1",{staticClass:"text-light mb-1"},[t._v(t._s(t.pageData.content.heading))]),t._v(" "),e("h3",{staticClass:"mb-5"},[e("em",{staticClass:"text-white"},[t._v(t._s(t.pageData.content.description))])]),e("a",{staticClass:"btn btn-dark border-light btn-xl js-scroll-trigger",staticStyle:{"background-color":"transparent"},attrs:{role:"button",href:"#about"}},[t._v("Find Out More")]),t._v(" "),e("div",{staticClass:"overlay"})])]),t._v(" "),e("div",{staticClass:"projects-horizontal"},[e("div",{staticClass:"container"},t._l(t.projects,function(t){return e("ProjectIntro",{key:t.id,attrs:{projectData:t}})}),1)])])},[],!1,null,"0e35843d",null);a.default=o.exports}}]);