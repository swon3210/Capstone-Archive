(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{393:function(t,e,a){"use strict";a.r(e);var s={props:{headerData:{type:Object,default:{}}},mounted:function(){}},i=a(6),n=Object(i.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header",{staticClass:"d-flex masthead",style:{backgroundImage:"url("+t.headerData.image+")"}},[a("div",{staticClass:"container my-auto text-center"},[a("h1",{staticClass:"text-light mb-1"},[t._v(t._s(t.headerData.heading))]),t._v(" "),a("h3",{staticClass:"mb-5"},[a("em",{staticClass:"text-white"},[t._v(t._s(t.headerData.text))])]),a("nuxt-link",{staticClass:"btn btn-dark border-light btn-xl js-scroll-trigger",staticStyle:{"background-color":"transparent"},attrs:{role:"button",to:"/purposepage"}},[t._v("자세히 알아보기")]),t._v(" "),a("div",{staticClass:"overlay"})],1)])},[],!1,null,"d4507648",null).exports,o={props:{purposeData:{type:Object,default:{}}}},r=Object(i.a)(o,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content-section bg-light",attrs:{id:"about"}},[a("div",{staticClass:"container text-center"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-10 mx-auto"},[a("h2",[t._v(t._s(t.purposeData.heading))]),t._v(" "),a("p",{staticClass:"text-center lead mb-5",staticStyle:{"font-size":"15px"}},[a("span",[t._v(t._s(t.purposeData.text))])]),t._v(" "),a("nuxt-link",{staticClass:"btn btn-light text-light btn-xl js-scroll-trigger",staticStyle:{"background-color":"rgb(141,198,63)"},attrs:{role:"button",to:"intropage"}},[t._v("소개 페이지\n        ")])],1)])])])},[],!1,null,"3b1c53e7",null).exports,c={props:{introData:{type:Array,default:[]}},mounted:function(){}},l=Object(i.a)(c,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content-section text-white text-center",staticStyle:{"background-color":"rgb(141,198,63)"},attrs:{id:"services"}},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row"},t._l(t.introData,function(e){return a("div",{key:e._uid,staticClass:"col-md-6 col-lg-3 mb-5 mb-lg-0"},[a("span",{staticClass:"mx-auto service-icon rounded-circle mb-3"},[a("i",{class:"icon "+e.icon,staticStyle:{"font-size":"40px",color:"rgb(141,198,63)"}})]),t._v(" "),a("h4",[a("strong",[t._v(t._s(e.heading))])]),t._v(" "),a("p",{staticClass:"text-center mb-0 text-faded",staticStyle:{"font-size":"14px"}},[t._v(t._s(e.text)),a("br")])])}),0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-section-heading"},[e("h2",{staticClass:"mb-5"},[this._v("분야별 소개")])])}],!1,null,"6e3a0518",null).exports,u={props:{portfolioData:{type:Array,default:[]}}},d={asyncData:function(t){return t.app.$storyapi.get("cdn/stories/landing",{version:"published"}).then(function(t){return{pageData:t.data.story.content}})},components:{Header:n,PurposeSection:r,IntroSection:l,PortfolioSection:Object(i.a)(u,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"content-section",attrs:{id:"portfolio"}},[a("div",{staticClass:"container"},[t._m(0),t._v(" "),a("div",{staticClass:"row no-gutters"},t._l(t.portfolioData,function(e){return a("div",{key:e._uid,staticClass:"col-lg-6"},[a("nuxt-link",{staticClass:"portfolio-item",attrs:{to:"projectpage"}},[a("div",{staticClass:"caption"},[a("div",{staticClass:"caption-content"},[a("h2",[t._v(t._s(e.title)),a("br")]),t._v(" "),a("p",{staticClass:"mb-0",staticStyle:{"font-size":"12px"}},[t._v(t._s(e.text)),a("br")])])]),a("img",{staticClass:"img-fluid",attrs:{src:e.thumnail}})])],1)}),0)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"content-section-heading text-center"},[e("h3",{staticClass:"text-secondary mb-0"},[this._v("포트폴리오")]),this._v(" "),e("h2",{staticClass:"mb-5"},[this._v("프로젝트 소개")])])}],!1,null,"58937ed8",null).exports},mounted:function(){var t=this;this.$storybridge.on(["input","published","change"],function(e){"input"==e.action?e.story.id===t.story.id&&(t.story.content=e.story.content):window.location.reload()})}},p=Object(i.a)(d,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"editable",rawName:"v-editable",value:t.pageData,expression:"pageData"}]},[a("Header",{attrs:{headerData:t.pageData.header[0]}}),t._v(" "),a("purpose-section",{attrs:{purposeData:t.pageData.purpose[0]}}),t._v(" "),a("intro-section",{attrs:{introData:t.pageData.intro}}),t._v(" "),a("portfolio-section",{attrs:{portfolioData:t.pageData.portfolio}})],1)},[],!1,null,"f6ef9b26",null);e.default=p.exports}}]);