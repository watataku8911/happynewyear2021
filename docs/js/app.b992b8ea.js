(function(t){function e(e){for(var n,i,c=e[0],o=e[1],u=e[2],d=0,p=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&p.push(s[i][0]),s[i]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n]);l&&l(e);while(p.length)p.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,c=1;c<a.length;c++){var o=a[c];0!==s[o]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=o;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("64a9"),s=a.n(n);s.a},"0a1d":function(t,e,a){},1349:function(t,e,a){},"13a0":function(t,e,a){"use strict";var n=a("75af"),s=a.n(n);s.a},"1a3a":function(t,e,a){"use strict";var n=a("0a1d"),s=a.n(n);s.a},"51da":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("f751"),a("097d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("section",{staticClass:"main-contents"},[a("Header"),a("div",{staticClass:"wrapper"},[a("div",{staticClass:"triangle-left"}),a("div",{staticClass:"triangle-right"}),a("main",[a("HelloWorld"),a("Footer"),a("nav",{staticClass:"n-area"},[a("ShareTwitter",{staticClass:"link-twitter"}),a("ShareFacebook",{staticClass:"link-facebook"})],1)],1)])],1)])},r=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("header")},c=[],o=(a("ee03"),a("2877")),u={},l=Object(o["a"])(u,i,c,!1,null,"53b54bd8",null),d=l.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("transition",{attrs:{name:"modal"}},[a("Modal",{directives:[{name:"show",rawName:"v-show",value:t.isModal,expression:"isModal"}],attrs:{title:"謹賀新年",detail:"新型コロナウイルス影響拡大を憂いお見舞い申し上げますとともに謹んで新年のご挨拶を申し上げます。\n      この災禍の一日も早い終息を心より願うばかりです。本年も変わらぬご交際のほど、どうかよろしくお願いいたします。",name:"令和３年 元日 Watataku"},on:{push:t.closeModal}})],1),a("ul",{staticClass:"arch"},[a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"あ",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"け",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"ま",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"し",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"て",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"お",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"め",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"で",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"と",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"う",route:10}})],1),a("li",{staticClass:"item",class:t.pStyle},[a("Round",{attrs:{msg:"!!",route:10}})],1)]),a("div",{staticClass:"ushi-area-pc"},[a("Ushi",{directives:[{name:"show",rawName:"v-show",value:t.ushi,expression:"ushi"}],ref:"Ushi",attrs:{x:0,y:0,scaleX:1,scaleY:1.1}})],1)],1)},h=[],f=(a("96cf"),a("3b8d")),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-opacity"},[a("div",{staticClass:"modal"},[a("h1",{staticClass:"title"},[t._v(t._s(this.title))]),a("div",{staticClass:"module--spacing--large"}),a("p",{staticClass:"detail"},[t._v("\n      "+t._s(this.detail)+"\n    ")]),a("div",{staticClass:"module--spacing--small"}),a("p",{staticStyle:{color:"red"}},[t._v("※スマートフォンなどの端末ではうまくアニメーションされない場合があります。ご了承ください。")]),a("p",{staticClass:"name"},[t._v(t._s(this.name))]),a("div",{staticClass:"close",on:{click:t.close}},[a("span"),a("span")])])])},v=[],g={props:["title","detail","name"],methods:{close:function(){this.$emit("push")}}},w=g,b=(a("b1de"),Object(o["a"])(w,m,v,!1,null,"38b156cc",null)),y=b.exports,x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"circle",style:{transform:" rotate("+(t.route+t.dRoute)+"deg)"},on:{click:function(e){return t.deg(12)}}},[a("p",[t._v(t._s(this.msg))])])},_=[],S={wait:function(t){return new Promise((function(e){window.setTimeout(e,t)}))}},k={name:"round",props:["msg","route"],data:function(){return{dRoute:0,duration:1e3,easing:"ease"}},methods:{tween:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:1e3,Object.assign(this.$data,e),this.$data.duration=a,t.next=5,S.wait(a);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),deg:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:1500,t.next=3,this.tween({dRoute:e,easing:"ease"},.1*a);case 3:return t.next=5,this.tween({dRoute:-e,easing:"ease-out"},.1*a);case 5:return t.next=7,this.tween({dRoute:0,easing:"ease"},.1*a);case 7:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}()}},R=k,C=(a("91ad"),Object(o["a"])(R,x,_,!1,null,"45c1f38d",null)),j=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("img",{staticClass:"ushi",style:{transform:"translate3d("+(t.x+t.dx)+"%, "+(t.y+t.dy)+"px, 0) scale("+t.scaleX*t.dScaleX+", "+t.scaleY*t.dScaleY+") rotate("+(t.rotate+t.dRotate)+"deg)",transition:"transform "+t.duration+"ms "+t.easing},attrs:{src:a("cbf3"),alt:"牛"},on:{click:function(e){return t.jump(100,3e3)}}})},$=[],M=(a("c5f6"),{name:"Ushi",props:{x:{type:Number,default:-50},y:{type:Number,default:0},scaleX:{type:Number,default:1},scaleY:{type:Number,default:1},rotate:{type:Number,default:0}},data:function(){return{dx:0,dy:0,dScaleX:1,dScaleY:1,dRotate:0,duration:1e3,easing:"ease"}},methods:{tween:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(e){var a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=n.length>1&&void 0!==n[1]?n[1]:1e3,Object.assign(this.$data,e),this.$data.duration=a,t.next=5,S.wait(a);case 5:case"end":return t.stop()}}),t,this)})));function e(e){return t.apply(this,arguments)}return e}(),jump:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:200,a=n.length>1&&void 0!==n[1]?n[1]:2500,t.next=4,this.tween({dScaleY:.8,easing:"ease"},.1*a);case 4:return t.next=6,this.tween({dy:-e,dScaleY:1.1,easing:"ease-out"},.35*a);case 6:return t.next=8,this.tween({dy:0,dScaleY:1.2,easing:"ease-in"},.35*a);case 8:return t.next=10,this.tween({dScaleY:.7,easing:"ease"},.1*a);case 10:return t.next=12,this.tween({dScaleY:1,easing:"ease"},.1*a);case 12:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),walk:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e,a,n=arguments;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=n.length>0&&void 0!==n[0]?n[0]:100,a=n.length>1&&void 0!==n[1]?n[1]:500,t.next=4,this.tween({dRotate:10,dScaleY:.8,easing:"ease"},.2*a);case 4:return t.next=6,this.tween({dx:this.dx+e,dy:.2*-e,dRotate:-5,dScaleY:1.1,easing:"cubic-bezier(.04,.67,.52,1)"},.7*a);case 6:return t.next=8,this.tween({dy:0,dRotate:0,dScaleY:1,easing:"ease"},.1*a);case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),Y=M,E=(a("8907"),Object(o["a"])(Y,O,$,!1,null,"7bc114a0",null)),T=E.exports,H={name:"HelloWorld",components:{Modal:y,Round:j,Ushi:T},data:function(){return{isModal:!1,ushi:!1,x:0,y:0,scaleX:1,scaleY:1,rotate:0,duration:1e3,easing:"ease",pStyle:""}},mounted:function(){var t=this;setTimeout((function(){t.isModal=!0}),1e3)},methods:{closeModal:function(t){var e=this;this.isModal=!1,this.ushi=!0,setTimeout((function(){e.play()}),1500)},play:function(){var t=Object(f["a"])(regeneratorRuntime.mark((function t(){var e;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e=this.$refs.Ushi,t.next=3,e.jump(50,3e3);case 3:return t.next=5,e.walk(-20,1e3);case 5:return t.next=7,e.walk(-50,1500);case 7:return t.next=9,e.walk(-30,2e3);case 9:return t.next=11,e.walk(-40,2500);case 11:return t.next=13,e.walk(20,500);case 13:return t.next=15,e.walk(30,2e3);case 15:return t.next=17,e.walk(40,2550);case 17:return t.next=19,e.jump(80,3200);case 19:this.pStyle="show";case 20:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}},P=H,z=(a("6259"),Object(o["a"])(P,p,h,!1,null,"4515b833",null)),N=z.exports,F=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},X=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("small",[a("a",{attrs:{href:"https://watataku-portfolio.web.app",target:"_blank"}},[t._v("\n      ©2021 Watataku.\n    ")])])])}],U=(a("1a3a"),{}),W=Object(o["a"])(U,F,X,!1,null,"c8574f12",null),B=W.exports,J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{staticClass:"share-link",attrs:{href:"https://twitter.com/share?text=Happy new year at 2021&url=https://watataku8911.github.io/happynewyear2021/ ",target:"_blank"}},[a("TwitterSvg")],1)])},V=[],q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",t._g({attrs:{height:"32",viewBox:"0 0 144.083 144",width:"32",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[a("path",{attrs:{d:"M72.041 11.166c-33.543 0-60.833 27.29-60.833 60.834 0 33.545 27.29 60.834 60.833 60.834 33.544 0 60.835-27.289 60.835-60.834-.001-33.544-27.292-60.834-60.835-60.834zm0 115.668c-30.235 0-54.833-24.598-54.833-54.834 0-30.235 24.598-54.834 54.833-54.834S126.876 41.765 126.876 72c-.001 30.236-24.6 54.834-54.835 54.834z"}}),a("path",{attrs:{d:"M99.208 52.18c1.398-.722 4.746-2.867 6.324-7.471 0 0-3.803 2.75-8.979 3.074l-.094.052a14.453 14.453 0 00-10.688-4.703c-8.008 0-14.499 6.492-14.499 14.5 0 1.215.151 2.395.434 3.523l-.07-.105s-15.53.89-30.171-15.127c0 0-6.473 11.001 4.61 19.414-2.427.404-6.713-1.78-6.713-1.78s.242 11.566 11.728 14.398c-1.86.486-5.339.646-6.471.162 0 0 1.698 8.816 13.428 10.354-2.993 1.699-8.574 6.875-21.194 5.904 0 0 9.062 7.441 25.887 6.391s29.04-12.377 33.974-24.348c4.934-11.971 3.561-18.787 3.561-18.787s4.123-2.164 6.957-7.34c-1.309.392-6.164 1.578-7.971 2.017a4.897 4.897 0 01-.053-.128z"}})])},A=[],D={},G=Object(o["a"])(D,q,A,!1,null,null,null),I=G.exports,K={components:{TwitterSvg:I}},L=K,Q=(a("ecb9"),Object(o["a"])(L,J,V,!1,null,"5378ebdc",null)),Z=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("a",{staticClass:"share-link",attrs:{href:"http://www.facebook.com/share.php?u=https://watataku8911.github.io/happynewyear2021/",target:"_blank"}},[a("FbSvg")],1)])},et=[],at=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("svg",t._g({attrs:{height:"32",viewBox:"0 0 144.083 144",width:"32",xmlns:"http://www.w3.org/2000/svg"}},t.$listeners),[a("path",{attrs:{d:"M72.041 11.166c-33.543 0-60.833 27.29-60.833 60.834 0 33.545 27.29 60.834 60.833 60.834 33.544 0 60.835-27.289 60.835-60.834-.001-33.544-27.292-60.834-60.835-60.834zm0 115.668c-30.235 0-54.833-24.598-54.833-54.834 0-30.235 24.598-54.834 54.833-54.834S126.876 41.765 126.876 72c-.001 30.236-24.6 54.834-54.835 54.834z"}}),a("path",{attrs:{d:"M90.792 36.304H77.596a.877.877 0 00-.09.004c-13.323.042-15.063 9.345-15.07 17.476a1.014 1.014 0 00-.028.235v5.708H53.29a1 1 0 00-1 1v14.077a1 1 0 001 1h9.118v30.891a1 1 0 001 1h13.307a1 1 0 001-1v-30.89h13.076a1 1 0 001-1V60.728a1 1 0 00-1-1H76.715v-7.567h14.076a1 1 0 001-1V37.304a.999.999 0 00-.999-1z"}})])},nt=[],st={},rt=Object(o["a"])(st,at,nt,!1,null,null,null),it=rt.exports,ct={components:{FbSvg:it}},ot=ct,ut=(a("13a0"),Object(o["a"])(ot,tt,et,!1,null,"551102ee",null)),lt=ut.exports,dt={name:"app",components:{Header:d,HelloWorld:N,Footer:B,ShareTwitter:Z,ShareFacebook:lt}},pt=dt,ht=(a("034f"),Object(o["a"])(pt,s,r,!1,null,null,null)),ft=ht.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(ft)}}).$mount("#app")},6259:function(t,e,a){"use strict";var n=a("1349"),s=a.n(n);s.a},"64a9":function(t,e,a){},"71b9":function(t,e,a){},"75af":function(t,e,a){},8521:function(t,e,a){},8907:function(t,e,a){"use strict";var n=a("51da"),s=a.n(n);s.a},"91ad":function(t,e,a){"use strict";var n=a("71b9"),s=a.n(n);s.a},a0ce:function(t,e,a){},b1de:function(t,e,a){"use strict";var n=a("f969"),s=a.n(n);s.a},cbf3:function(t,e,a){t.exports=a.p+"img/ushi.e42f6bdb.png"},ecb9:function(t,e,a){"use strict";var n=a("8521"),s=a.n(n);s.a},ee03:function(t,e,a){"use strict";var n=a("a0ce"),s=a.n(n);s.a},f969:function(t,e,a){}});
//# sourceMappingURL=app.b992b8ea.js.map