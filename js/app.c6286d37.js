(function(t){function e(e){for(var n,s,o=e[0],c=e[1],u=e[2],d=0,f=[];d<o.length;d++)s=o[d],i[s]&&f.push(i[s][0]),i[s]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(n=!1)}n&&(r.splice(e--,1),t=s(s.s=a[0]))}return t}var n={},i={app:0},r=[];function s(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=n,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)s.d(a,n,function(e){return t[e]}.bind(null,n));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/oompa-list/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var n=a("c21b"),i=a.n(n);i.a},"0bd4":function(t,e,a){"use strict";var n=a("77ef"),i=a.n(n);i.a},2627:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA+lJREFUaAXdmMtLFlEYxrNIjW7QIiNrIaW0CCEoqCTIhdAyqkUrgyRCWrcqcBEVgrXtHwihVbSIChfiwoKKdiVRm4Q0g4QuECldnp98Ay+v883dGb8eeJg5M+e8l3Pe855L05r8WCsR28WdNW7Q85M4U+NPPVcddsmiS+KYuCD+jeA7/RsRj4k4Wyl6pH1CjDI46t+c2l4WW8VSsU/a7otRxqX590Gy+sXcI9IkIXE4rwp3xOY6FYn1l6KN+R0qMyf2iAfFeoY+1r+z4lexcKyTxNtiWM8ySa+Lh8S4TmCCD4jjYpisKX3vFAsFxj8QvcLv+jYkbhKzoE+NXole7ry+HcgisF6bsJ5/ocrt9Rqk+M6IXRX/iNaRaZXbxNwg5q1g3kdF8nuROClhjKjVNalySx4lZJtfTijGrxR6JXhRtE7cyqPMp0rCpuie9/YNOgfowA5fKUmZRcr2BMNbRMwn0X3X6c406hNOyFASzQXV2S057JmCDmSCd6eRzd4maMyTPJ81VabRa+sOq2BtuGF/xr2zMbONWaTKBuFqU+ubNAaMqbJ1gBW2CjyXUmtHVxIj2KfYLfFHlVlsqsAVKbUOXIwzAuPZq6w3FUmdCKkCjIAFczMSOMCu0WLWFkp+97q9bcvMCXNgZlmt8j543Ykc8Cst+bgqeN0b4wxhBMj5FhxGqoLX/TnOEBxIPWxxQnP89yEzFycrzAGOgVXB6/aTuq5d7/UnyL+/9U5qrQL3pDSwg+fxpEZwb2MbcoYtG81S+E0M7Pihd74lApdOQUOe44laFVvpjLPhYRrxzAUmjHWiL42AnHW5RGDzZvWfTiuTGzMrgNuDsvZEF5zutyrTqanQqtrTonWCzdVKg8zzRbR6M8/Bc04Q+3NuD1YKWyT4tWiNf6YyIZUJDNsj0QrkbNybSVp0I4z35xAyz97oZvF/t6rKlGidWFR5ML5p4hqEje959F1LLCGmYqf+z4vWCd65PeAAnhWEBhPWx3ygh0vew1mF+3bcVfpJjSJ2jMNiu5gULEikRZ8qA8Pts1An2qT0qWgVBO9McE5QZCrWjP3iNpFs1iH2iP0i2wO7wgbteRLzhA1G2++Uj4iFoEVSuO7zV45WYZZ3sk0wYQkb7wROF+aEZC316qie9uoji+EsUgMi88GiFCdQ2C3eFJPEc+AgocLehnkQtcLS4z7cKB8VQ5F3q9AlqawR3B5wGIEcAzlJsbeaFSdrXNAzCXDiibjZVGYtOiEyHxsCqUdiNXpF2ISFE9mtYfDfOsGcaKiRwFiMDrIaT9YNkkbDIMyJUw1jfc1QnAhWbNJ0VbcnufqNsKHnl4z/B96RsYrU0HLrAAAAAElFTkSuQmCC"},"2cae":function(t,e,a){"use strict";var n=a("8511"),i=a.n(n);i.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("img",{staticClass:"logo",attrs:{alt:"Oompa Loompa logo",src:a("cf05")}}),t._v("\n      Oompa Loompa's Crew\n    ")])],1),n("router-view")],1)},r=[],s=(a("034f"),a("2877")),o={},c=Object(s["a"])(o,i,r,!1,null,null,null);c.options.__file="App.vue";var u=c.exports,l=a("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"filterbox"},[n("div",{staticClass:"filter"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.filterText,expression:"filterText"}],attrs:{placeholder:"Search"},domProps:{value:t.filterText},on:{input:function(e){e.target.composing||(t.filterText=e.target.value)}}}),n("img",{attrs:{src:a("2627"),alt:"Search icon"}})])]),n("h1",[t._v("Find your Oompa Loompa")]),n("h2",[t._v("There are more than 100K")]),n("div",{staticClass:"oompa-list"},t._l(t.filteredList,function(t){return n("oompa-card",{key:t.id,attrs:{subject:t}})}))])},f=[],p=(a("6762"),a("2fdb"),a("28a5"),a("96cf"),a("3040")),m=a("8ded"),v=a.n(m),h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-link",{staticClass:"card",attrs:{to:{name:"details",params:{id:t.subject.id}}}},[a("img",{staticClass:"responsive",attrs:{src:t.subject.image,alt:t.imageAlternativeText}}),a("div",{staticClass:"full-name"},[t._v(t._s(t.fullName))]),"M"===t.subject.gender?a("div",{staticClass:"genre"},[t._v("Man")]):a("div",{staticClass:"genre"},[t._v("Woman")]),a("div",{staticClass:"profession"},[t._v(t._s(t.subject.profession))])])},b=[],g={props:{subject:Object},computed:{imageAlternativeText:function(){return this.subject.first_name+"'s image"},fullName:function(){return"".concat(this.subject.first_name," ").concat(this.subject.last_name)}}},x=g,w=(a("2cae"),Object(s["a"])(x,h,b,!1,null,null,null));w.options.__file="OompaCard.vue";var A=w.exports,y={data:function(){return{oompas:[],filterText:"",loadedPages:0,totalPages:1}},methods:{fetchPage:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(e){var a,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(a="page".concat(e),n=v.a.get(a),void 0!==n){t.next=10;break}return t.next=5,fetch("https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas?page=".concat(e));case 5:return i=t.sent,t.next=8,i.json();case 8:n=t.sent,v.a.set(a,n,(new Date).getTime+864e5);case 10:return this.oompas=this.oompas.concat(n.results),t.abrupt("return",n);case 12:case"end":return t.stop()}},t,this)}));return function(e){return t.apply(this,arguments)}}(),initialize:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.fetchPage(1);case 2:e=t.sent,this.loadedPages=1,this.totalPages=e.total;case 5:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}(),infiniteScroll:function(){var t=this;window.onscroll=function(){var e=window.innerHeight+document.documentElement.scrollTop>document.documentElement.offsetHeight-10;e&&t.loadedPages<t.totalPages&&(t.loadedPages+=1,t.fetchPage(t.loadedPages))}}},computed:{filteredList:function(){var t=this.oompas;if(/\w+/g.test(this.filterText)){var e=this.filterText.toLowerCase().split(" ");t=this.oompas.filter(function(t){var a=[t.first_name.toLowerCase(),t.last_name.toLowerCase(),t.profession.toLowerCase()];return e.every(function(t){return a.some(function(e){return e.includes(t)})})})}return t}},beforeMount:function(){this.initialize()},mounted:function(){this.infiniteScroll()},components:{OompaCard:A}},j=y,O=(a("bc44"),Object(s["a"])(j,d,f,!1,null,"6e141fc0",null));O.options.__file="Home.vue";var C=O.exports,P=function(){var t=this,e=t.$createElement,a=t._self._c||e;return void 0!==t.details?a("div",{staticClass:"about"},[a("img",{staticClass:"icon",attrs:{src:t.details.image,alt:"Oompa's icon"}}),a("div",{staticClass:"data"},[a("h1",[t._v(t._s(t.fullName))]),"M"===t.details.gender?a("h2",[t._v("Man")]):a("h2",[t._v("Woman")]),a("h3",{staticClass:"profession"},[t._v(t._s(t.details.profession))]),a("p",{domProps:{innerHTML:t._s(t.details.description)}})]),a("blockquote",{staticClass:"quote"},[t._v(t._s(t.details.quota))]),a("div",{staticClass:"fav"},[a("dl",[a("div",{staticClass:"btitle"},[t._v("Personal data")]),a("dt",[t._v("Email:")]),a("dd",[t._v(t._s(t.details.email))]),a("dt",[t._v("Age:")]),a("dd",[t._v(t._s(t.details.age))]),a("dt",[t._v("Country:")]),a("dd",[t._v(t._s(t.details.country))]),a("dt",[t._v("Height:")]),a("dd",[t._v(t._s(t.details.height)+" inch")])]),a("dl",[a("div",{staticClass:"btitle"},[t._v("Favorites")]),a("dt",[t._v("Color:")]),a("dd",[t._v(t._s(t.details.favorite.color))]),a("dt",[t._v("Food:")]),a("dd",[t._v(t._s(t.details.favorite.food))]),a("dt",[t._v("Song:")]),a("dd",[a("pre",[t._v(t._s(t.details.favorite.song))])]),a("dt",[t._v("Random String:")]),a("dd",{staticClass:"mono"},[t._v(t._s(t.details.favorite.random_string))])])])]):a("div",{staticClass:"no-data"},[a("h1",[t._v("We can't find who is oompa-loompa number "+t._s(t.$route.params.id))])])},F=[],X=(a("f751"),{data:function(){return{details:void 0}},methods:{retrieveData:function(){var t=Object(p["a"])(regeneratorRuntime.mark(function t(){var e,a,n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.$route.params.id,a="oompa".concat(e),n=v.a.get(a),void 0!==n){t.next=11;break}return t.next=6,fetch("https://2q2woep105.execute-api.eu-west-1.amazonaws.com/napptilus/oompa-loompas/".concat(e));case 6:return i=t.sent,t.next=9,i.json();case 9:n=t.sent,v.a.set(a,n,(new Date).getTime+864e5);case 11:this.details=Object.assign({},n);case 12:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()},computed:{fullName:function(){return"".concat(this.details.first_name," ").concat(this.details.last_name)}},beforeMount:function(){this.retrieveData()},beforeRouteUpdate:function(t,e,a){a(),this.retrieveData()}}),E=X,N=(a("0bd4"),Object(s["a"])(E,P,F,!1,null,"586036ba",null));N.options.__file="Details.vue";var k=N.exports;n["a"].use(l["a"]);var L=new l["a"]({routes:[{path:"/",name:"home",component:C},{path:"/:id",name:"details",component:k}]}),M=a("ee7c"),R=a.n(M);n["a"].config.productionTip=!1,new n["a"]({router:L,render:function(t){return t(u)}}).$mount("#app"),v.a.addPlugin(R.a)},"77ef":function(t,e,a){},8511:function(t,e,a){},bc44:function(t,e,a){"use strict";var n=a("d75e"),i=a.n(n);i.a},c21b:function(t,e,a){},cf05:function(t,e){t.exports="data:image/png;base64,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"},d75e:function(t,e,a){}});
//# sourceMappingURL=app.c6286d37.js.map