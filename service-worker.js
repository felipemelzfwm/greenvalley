if(!self.define){let e,s={};const n=(n,r)=>(n=new URL(n+".js",r).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(r,l)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let o={};const t=e=>n(e,i),c={module:{uri:i},exports:o,require:t};s[i]=Promise.all(r.map((e=>c[e]||t(e)))).then((e=>(l(...e),o)))}}define(["./workbox-79ffe3e0"],(function(e){"use strict";e.setCacheNameDetails({prefix:"vue-ts"}),self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"/greenvalley/css/app.93ed177d.css",revision:null},{url:"/greenvalley/css/chunk-vendors.1d78d75b.css",revision:null},{url:"/greenvalley/index.html",revision:"7601cba7dffb569dda65a3b23ac315a1"},{url:"/greenvalley/js/app.6723dc66.js",revision:null},{url:"/greenvalley/js/chunk-vendors.6b390175.js",revision:null},{url:"/greenvalley/manifest.json",revision:"f405237b16efddea870ebe37198fcf9a"},{url:"/greenvalley/robots.txt",revision:"b6216d61c03e6ce0c9aea6ca7808f7ca"}],{})}));
//# sourceMappingURL=service-worker.js.map