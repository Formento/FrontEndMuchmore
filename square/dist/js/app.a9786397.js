(function(e){function t(t){for(var s,a,o=t[0],u=t[1],d=t[2],i=0,f=[];i<o.length;i++)a=o[i],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&f.push(r[a][0]),r[a]=0;for(s in u)Object.prototype.hasOwnProperty.call(u,s)&&(e[s]=u[s]);l&&l(t);while(f.length)f.shift()();return c.push.apply(c,d||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],s=!0,a=1;a<n.length;a++){var o=n[a];0!==r[o]&&(s=!1)}s&&(c.splice(t--,1),e=u(u.s=n[0]))}return e}var s={},a={app:0},r={app:0},c=[];function o(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-e024ba30":"9c533299"}[e]+".js"}function u(t){if(s[t])return s[t].exports;var n=s[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n={"chunk-e024ba30":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var s="css/"+({}[e]||e)+"."+{"chunk-e024ba30":"9f8dae0e"}[e]+".css",r=u.p+s,c=document.getElementsByTagName("link"),o=0;o<c.length;o++){var d=c[o],i=d.getAttribute("data-href")||d.getAttribute("href");if("stylesheet"===d.rel&&(i===s||i===r))return t()}var f=document.getElementsByTagName("style");for(o=0;o<f.length;o++){d=f[o],i=d.getAttribute("data-href");if(i===s||i===r)return t()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=t,l.onerror=function(t){var s=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=s,delete a[e],l.parentNode.removeChild(l),n(c)},l.href=r;var j=document.getElementsByTagName("head")[0];j.appendChild(l)})).then((function(){a[e]=0})));var s=r[e];if(0!==s)if(s)t.push(s[2]);else{var c=new Promise((function(t,n){s=r[e]=[t,n]}));t.push(s[2]=c);var d,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=o(e);var f=new Error;d=function(t){i.onerror=i.onload=null,clearTimeout(l);var n=r[e];if(0!==n){if(n){var s=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;f.message="Loading chunk "+e+" failed.\n("+s+": "+a+")",f.name="ChunkLoadError",f.type=s,f.request=a,n[1](f)}r[e]=void 0}};var l=setTimeout((function(){d({type:"timeout",target:i})}),12e4);i.onerror=i.onload=d,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=s,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)u.d(n,s,function(t){return e[t]}.bind(null,s));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],i=d.push.bind(d);d.push=t,d=d.slice();for(var f=0;f<d.length;f++)t(d[f]);var l=i;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var s=n("85ec"),a=n.n(s);a.a},"38bc":function(e,t,n){},4678:function(e,t,n){var s={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return n(t)}function r(e){if(!n.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}a.keys=function(){return Object.keys(s)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var s=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],c=(n("034f"),n("2877")),o={},u=Object(c["a"])(o,a,r,!1,null,null,null),d=u.exports,i=(n("d3b7"),n("8c4f")),f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"custom-background"},[n("Navbar"),n("section",{staticClass:"home"},[e._m(0),n("div",{staticClass:"home-watermark-square"}),n("div",{staticClass:"home-countdown"},[n("div",{staticClass:"home-countdown-day"},[n("strong",[e._v(e._s(e.countdown.days))]),n("br"),e._v("days ")]),n("div",{staticClass:"home-countdown-hours"},[n("strong",[e._v(e._s(e.countdown.hours))]),n("br"),e._v("hours ")]),n("div",{staticClass:"home-countdown-minutes"},[n("strong",[e._v(e._s(e.countdown.minutes))]),n("br"),e._v("minutes ")]),n("div",{staticClass:"home-countdown-seconds"},[n("strong",[e._v(e._s(e.countdown.seconds))]),n("br"),e._v("seconds ")])])])],1)},l=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-text"},[n("p",[e._v(" WE ARE "),n("strong",[e._v("SQUARE")]),e._v(" "),n("br"),e._v(" AND WE ARE "),n("strong",[e._v("COMING SOON")])])])}],j=n("c1df"),b=n.n(j),h=n("d178"),m={name:"Home",components:{Navbar:h["a"]},data:function(){return{countdown:{days:0,hours:0,minutes:0,seconds:0}}},mounted:function(){this.loadtime(),setInterval(this.loadtime,1e3)},methods:{loadtime:function(){var e=b()("2020-06-06 00:00:00"),t=b()(),n=b.a.duration(e.diff(t));this.countdown.days=e.diff(t,"days"),this.countdown.hours=n.get("hours"),this.countdown.minutes=n.get("minutes"),this.countdown.seconds=n.get("seconds")}}},v=m,p=(n("7b93"),Object(c["a"])(v,f,l,!1,null,"36fb1e5c",null)),y=p.exports;s["a"].use(i["a"]);var g=[{path:"/",name:"Home",component:y},{path:"/contact",name:"Contact",component:function(){return n.e("chunk-e024ba30").then(n.bind(null,"4fe8"))}}],A=new i["a"]({routes:g,mode:"history"}),w=A;s["a"].config.productionTip=!1,new s["a"]({router:w,render:function(e){return e(d)}}).$mount("#app")},"7b93":function(e,t,n){"use strict";var s=n("d812"),a=n.n(s);a.a},"85ec":function(e,t,n){},"8f00":function(e,t,n){"use strict";var s=n("38bc"),a=n.n(s);a.a},cf05:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHMAAABgCAMAAAAZ373hAAAAn1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8Kd3m4AAAANHRSTlMA8JBQcMCAQA/0JviwH6BgOBcFZ4cTpTDRSxwL/Ovh2cW3VAblnFjLeEbd1I0sA4NdqG59+sbP2QAAAylJREFUaN7tmul2ojAUgEGKCohsBQRcwVp3bZv3f7YhNykXOp1z5jRxpku+H4XcYj5ySUJyVFMopEBuxJ1y/j+nLhXnb5y6JpWeciqncirnD3Te6zXRv3MiyqmcfyROfXvYDeX+zo9v5iy2C0I5HG2NE1z2LLTld5LgWBnqFDFnDkbGA1N4ehOZZRAZ4ZwwhLiQM5yQFiVMAKRNJN+5IRTHgkNCIxHpspPufICcVlpwXZI5TW3A9KNy4C3hbF7IdkJt93Ba+pjZDUQucO7JbyflceuHPDCn5R4vmLSwku0sCccalVQbQMHWGBnUJcmJrEjDok5uCn74zznld1DJdlZHp5FaadvZczYxhM+ynEhwt3rVrlq53dLBQwtrTUvQmcNNCTrPtLG74wzGKfahmAaAEV+bJPiI52JOYz+Ao0soBR8rV02zFzg5RXBDtPUh68pCztQixPTcMPTgY82c8GT40RTOJufazybfFyN6ZNtfEWewJm2e3pn79jbv3YgeizgHOkFY9nh2ET2vG9q57ir2/syfWpVn2tt32X7KZ0YfE+JEwu9s+/IID25xCTRO/HKAys1raFhj/mp/5pcdXSlrkzA/2UU3NDz5dgWdLMQVhZ3a8Vdegynn93Jm45pm1Ln9V54z3k13/TaRDOcBPlLw0oAg08Rt9rwNE1EnSiIstpidbuIcNVWhE1mEN3DmU8IYtJzWZDLZEyDjzoXJeRB33uOCAJ0mTMVzWP1ypyev31Yzej2tfZq3nZQtrPLlOz1YAPVZi9CJKThy53LM6Ik7YbVxcqGPVh1nvLFgHwFORBd2+tAEvvrwGieyrqQ7E+4qYd/yu9MZaLKdgQPtNM0lofhvnQcaYc6ewchEnX3SIXl1TnW92fFK7rfhuut0AuxDJjzN4XvOwqR80Lkhb+ij07Wg5Y3T0jlz3Ch9xLkEjwtsoV0hjpVnQim5E9GFnCnkM2aFIRuN6GTZnQVyneMme80+f4lOnt2VXOfOqHGbF4xBOcf0r8/yAJFCOxltMi2E45dbDynnD3MavZrB9/9ORzmVUzmVs+P8rL/lYfyA30kR8u2dilvwC3Ek0M/GyiF1AAAAAElFTkSuQmCC"},d178:function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("nav",{staticClass:"nav"},[s("img",{staticClass:"logo-square",attrs:{alt:"Square logomarca",src:n("cf05")}}),s("div",[s("router-link",{attrs:{to:"/"}},[e._v("Home")]),s("router-link",{attrs:{to:"/contact"}},[e._v("Contact Us")])],1)])},a=[],r={name:"Navbar"},c=r,o=(n("8f00"),n("2877")),u=Object(o["a"])(c,s,a,!1,null,"34dae644",null);t["a"]=u.exports},d812:function(e,t,n){}});
//# sourceMappingURL=app.a9786397.js.map