(function(){"use strict";var e={1977:function(e,t,r){var o=r(6369),n=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{attrs:{id:"app"}},[t("NavBar"),e.isLoggedIn?t("BreadCrumb"):e._e(),t("router-view")],1)},a=[],s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",[t("div",{staticClass:"p-1"},[t("img",{attrs:{src:"https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png",alt:"Lightweight UI components for Vue.js based on Bulma"}}),t("b-menu",[t("b-menu-list",{attrs:{label:"Menu"}},[t("b-menu-item",{attrs:{icon:"information-outline",label:"Info"}}),t("b-menu-item",{attrs:{icon:"settings"},scopedSlots:e._u([{key:"label",fn:function(r){return[e._v(" Administrator "),t("b-icon",{staticClass:"is-pulled-right",attrs:{icon:r.expanded?"menu-down":"menu-up"}})]}}])},[t("b-menu-item",{attrs:{icon:"account",label:"Users"}}),t("b-menu-item",{attrs:{icon:"cellphone-link"},scopedSlots:e._u([{key:"label",fn:function(){return[e._v(" Devices "),t("b-dropdown",{staticClass:"is-pulled-right",attrs:{"aria-role":"list",position:"is-bottom-left"},scopedSlots:e._u([{key:"trigger",fn:function(){return[t("b-icon",{attrs:{icon:"dots-vertical"}})]},proxy:!0}])},[t("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Action")]),t("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Another action")]),t("b-dropdown-item",{attrs:{"aria-role":"listitem"}},[e._v("Something else")])],1)]},proxy:!0}])}),t("b-menu-item",{attrs:{icon:"cash-multiple",label:"Payments",disabled:""}})],1),t("b-menu-item",{attrs:{icon:"account",label:"My Account"}},[t("b-menu-item",{attrs:{label:"Account data"}}),t("b-menu-item",{attrs:{label:"Addresses"}})],1)],1),t("b-menu-list",[t("b-menu-item",{attrs:{label:"Expo",icon:"link",tag:"router-link",target:"_blank",to:"/expo"}})],1),t("b-menu-list",{attrs:{label:"Actions"}},[t("b-menu-item",{attrs:{label:"Logout"}})],1)],1)],1)])},l=[],i=r(452),c=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let u=class extends i.w3{data(){return{open:!0,overlay:!1,fullheight:!0,fullwidth:!1,right:!1}}};u=c([i.wA],u);var f=u,d=f,m=r(1001),p=(0,m.Z)(d,s,l,!1,null,null,null),b=p.exports,v=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",[t("b-navbar",{scopedSlots:e._u([{key:"brand",fn:function(){return[t("b-navbar-item",{attrs:{tag:"router-link",to:{path:"/"}}},[t("img",{attrs:{src:"https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png",alt:"Lightweight UI components for Vue.js based on Bulma"}})])]},proxy:!0},{key:"start",fn:function(){return[t("b-navbar-item",{attrs:{href:`${e.base_url}home`}},[e._v(" Home ")]),t("b-navbar-item",{attrs:{href:`${e.base_url}home/profile`}},[e._v(" Profile ")]),t("b-navbar-item",{attrs:{href:`${e.base_url}home/client`}},[e._v(" Clients ")]),t("b-navbar-dropdown",{attrs:{label:"Info"}},[t("b-navbar-item",{attrs:{href:"#"}},[e._v(" About ")]),t("b-navbar-item",{attrs:{href:"#"}},[e._v(" Contact ")])],1)]},proxy:!0},{key:"end",fn:function(){return[t("b-navbar-item",{attrs:{tag:"div"}},[t("div",{staticClass:"buttons"},[t("b-button",{directives:[{name:"show",rawName:"v-show",value:!e.isLoggedIn,expression:"!isLoggedIn"}],attrs:{label:"Login",type:"is-primary",size:"is-default"},on:{click:function(t){e.closeLoginModal=!0}}}),t("b-button",{directives:[{name:"show",rawName:"v-show",value:e.isLoggedIn,expression:"isLoggedIn"}],attrs:{label:"Logout",type:"is-primary",size:"is-default"},on:{click:e.logout}})],1)])]},proxy:!0}])}),t("LoginModal",{attrs:{email:"test@test.com",password:"123456",canCancel:!1,close:e.closeLoginModal},on:{close:function(t){e.closeLoginModal=!1}}})],1)},h=[],g=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",[t("b-modal",{attrs:{"has-modal-card":"","trap-focus":"","destroy-on-hide":!1,"can-cancel":!1,"aria-role":"dialog","aria-label":"Example Modal","close-button-aria-label":"Close","aria-modal":""},model:{value:e.isComponentModalActive,callback:function(t){e.isComponentModalActive=t},expression:"isComponentModalActive"}},[t("form",{attrs:{action:""}},[t("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[t("header",{staticClass:"modal-card-head"},[t("p",{staticClass:"modal-card-title"},[e._v("Login")]),t("button",{staticClass:"delete",attrs:{type:"button"},on:{click:function(t){return e.$emit("close")}}})]),t("section",{staticClass:"modal-card-body"},[t("b-field",{attrs:{label:"Email"}},[t("b-input",{attrs:{type:"email",value:e.email,placeholder:"Your email",required:""}})],1),t("b-field",{attrs:{label:"Password"}},[t("b-input",{attrs:{type:"password",value:e.password,"password-reveal":"",placeholder:"Your password",required:""}})],1),t("b-checkbox",[e._v("Remember me")])],1),t("footer",{staticClass:"modal-card-foot"},[t("b-button",{attrs:{label:"Close"},on:{click:function(t){return e.$emit("close")}}}),t("b-button",{attrs:{label:"Login",type:"is-primary"},on:{click:e.login}})],1)])])])],1)},y=[],_=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};const w=i.w3.extend({props:{email:String,password:String,canCancel:Boolean,close:Boolean}});let C=class extends w{data(){return{}}get isComponentModalActive(){return this.close}login(){this.$store.commit("loggedIn",!0),this.$emit("close")}};C=_([i.wA],C);var x=C,P=x,O=(0,m.Z)(P,g,y,!1,null,null,null),j=O.exports,k=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let R=class extends i.w3{data(){return{closeLoginModal:!1,base_url:"/greenvalley/"}}get isLoggedIn(){return this.$store.state.loggedIn}logout(){this.$store.commit("loggedIn",!1),this.closeLoginModal=!1}};R=k([(0,i.wA)({components:{LoginModal:j}})],R);var A=R,L=A,I=(0,m.Z)(L,v,h,!1,null,null,null),Z=I.exports,M=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("section",[t("b-breadcrumb",{attrs:{separator:"has-arrow-separator",size:"is-small"}},e._l(e.breadCrumbs,(function(r){return t("b-breadcrumb-item",{key:r.text,attrs:{href:r.to}},[e._v(e._s(r.text)+" ")])})),1)],1)},$=[],S=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let B=class extends i.w3{data(){return{}}get breadCrumbs(){return"function"===typeof this.$route.meta.breadCrumb?this.$route.meta.breadCrumb.call(this,this.$route):this.$route.meta.breadCrumb}};B=S([(0,i.wA)({components:{}})],B);var D=B,H=D,N=(0,m.Z)(H,M,$,!1,null,null,null),E=N.exports,z=function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)},U=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"card"},[t("header",{staticClass:"card-header"},[t("p",{staticClass:"card-header-title"},[e._v(" Component ")]),t("button",{staticClass:"card-header-icon",attrs:{"aria-label":"more options"}},[t("span",{staticClass:"icon"},[t("i",{staticClass:"fas fa-angle-down",attrs:{"aria-hidden":"true"}})])])]),t("div",{staticClass:"card-content"},[t("div",{staticClass:"content"},[e._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris. "),t("a",{attrs:{href:"#"}},[e._v("@bulmaio")]),e._v(". "),t("a",{attrs:{href:"#"}},[e._v("#css")]),e._v(" "),t("a",{attrs:{href:"#"}},[e._v("#responsive")]),t("br"),t("time",{attrs:{datetime:"2016-1-1"}},[e._v("11:09 PM - 1 Jan 2016")])])]),t("footer",{staticClass:"card-footer"},[t("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[e._v("Save")]),t("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[e._v("Edit")]),t("a",{staticClass:"card-footer-item",attrs:{href:"#"}},[e._v("Delete")])])])}],q=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let F=class extends i.w3{data(){return{}}};F=q([(0,i.wA)({components:{}})],F);var T=F,V=T,Y=(0,m.Z)(V,z,U,!1,null,null,null),J=Y.exports,G=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let K=class extends i.w3{data(){return{open:!0,overlay:!1,fullheight:!0,fullwidth:!1,right:!1}}get isLoggedIn(){return this.$store.state.loggedIn}};K=G([(0,i.wA)({components:{MenuBar:b,NavBar:Z,BreadCrumb:E}})],K);var Q=K,W=Q,X=(0,m.Z)(W,n,a,!1,null,null,null),ee=X.exports,te=r(5431);(0,te.z)("/greenvalley/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var re=r(2631),oe=function(){var e=this;e._self._c,e._self._setupProxy;return e._m(0)},ne=[function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[t("div",{staticClass:"container"},[t("p",[e._v(" olá meu mundo ")])])])}],ae=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let se=class extends i.w3{data(){return{}}};se=ae([(0,i.wA)({components:{MenuBar:b}})],se);var le=se,ie=le,ce=(0,m.Z)(ie,oe,ne,!1,null,null,null),ue=ce.exports,fe=function(){var e=this,t=e._self._c;e._self._setupProxy;return t("div",{staticClass:"home"},[t("div",{staticClass:"container"},e._l(e.clients,(function(e){return t("ClientCard",{key:e,staticStyle:{"margin-bottom":"10px"}})})),1)])},de=[],me=function(e,t,r,o){var n,a=arguments.length,s=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)s=Reflect.decorate(e,t,r,o);else for(var l=e.length-1;l>=0;l--)(n=e[l])&&(s=(a<3?n(s):a>3?n(t,r,s):n(t,r))||s);return a>3&&s&&Object.defineProperty(t,r,s),s};let pe=class extends i.w3{data(){return{clients:[1,2,3,4]}}};pe=me([(0,i.wA)({components:{ClientCard:J}})],pe);var be=pe,ve=be,he=(0,m.Z)(ve,fe,de,!1,null,null,null),ge=he.exports;o.ZP.use(re.Z);const ye="/greenvalley/";console.log("baseUrl = "+ye);const _e=[{path:"/",name:"Home",component:ue,meta:{breadCrumb:[{text:"Home",to:ye}]}},{path:"/home",name:"Home",component:ue,meta:{breadCrumb:[{text:"Home",to:ye+"home"}]}},{path:"/home/profile",name:"Profile",component:ue,meta:{breadCrumb(e){return[{text:"Home",to:ye+"home"},{text:"Profile",to:ye+"home/profile"}]}}},{path:"/home/client",name:"Client",component:ge,meta:{breadCrumb(e){e.params.clientId;return[{text:"Home",to:ye+"home"},{text:"Client",to:ye+"home/client"}]}}},{path:"/home/client/:clientId",name:"Client",component:ue,meta:{breadCrumb(e){const t=e.params.clientId;return[{text:"Home",to:ye+"home"},{text:"Client",to:ye+"home/client"},{text:t,to:ye+"home/client/"+t}]}}}],we=new re.Z({mode:"history",base:ye,routes:_e});var Ce=we,xe=r(3822),Pe=r(2415);o.ZP.use(xe.ZP);var Oe=new xe.ZP.Store({plugins:[(0,Pe.Z)()],state:{loggedIn:!1},getters:{},mutations:{loggedIn(e,t){e.loggedIn=t}},actions:{},modules:{}}),je=r(5643);r(387);o.ZP.use(je.ZP),o.ZP.config.productionTip=!1,new o.ZP({router:Ce,store:Oe,render:e=>e(ee)}).$mount("#app")}},t={};function r(o){var n=t[o];if(void 0!==n)return n.exports;var a=t[o]={exports:{}};return e[o](a,a.exports,r),a.exports}r.m=e,function(){var e=[];r.O=function(t,o,n,a){if(!o){var s=1/0;for(u=0;u<e.length;u++){o=e[u][0],n=e[u][1],a=e[u][2];for(var l=!0,i=0;i<o.length;i++)(!1&a||s>=a)&&Object.keys(r.O).every((function(e){return r.O[e](o[i])}))?o.splice(i--,1):(l=!1,a<s&&(s=a));if(l){e.splice(u--,1);var c=n();void 0!==c&&(t=c)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[o,n,a]}}(),function(){r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,{a:t}),t}}(),function(){r.d=function(e,t){for(var o in t)r.o(t,o)&&!r.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};r.O.j=function(t){return 0===e[t]};var t=function(t,o){var n,a,s=o[0],l=o[1],i=o[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(n in l)r.o(l,n)&&(r.m[n]=l[n]);if(i)var u=i(r)}for(t&&t(o);c<s.length;c++)a=s[c],r.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return r.O(u)},o=self["webpackChunkvue_ts"]=self["webpackChunkvue_ts"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(1977)}));o=r.O(o)})();
//# sourceMappingURL=app.e7a9c0df.js.map