webpackJsonp([6],{"./app/containers/ProductsPage/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return r}),t.d(n,"f",function(){return u}),t.d(n,"g",function(){return s}),t.d(n,"h",function(){return a}),t.d(n,"c",function(){return i}),t.d(n,"e",function(){return c}),t.d(n,"b",function(){return d}),t.d(n,"d",function(){return o});var r="EASTSPRING/TOGGLE_FILTER",u="EASTSPRING/SET_TOGGLE",s="EASTSPRING/SET_RANGE_TOGGLE",a="EASTSPRING/SET_DOMINANT",i="EASTSPRING/CLEAR_FILTER",c="EASTSPRING/DISABLE_OPTIONS",d="EASTSPRING/TOGGLE_GROUP",o="EASTSPRING/REGISTER_MOBILE_FILTER_WRAPPER"},"./app/containers/ProductsPage/reducer.js":function(e,n,t){"use strict";function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,n=arguments[1];switch(n.type){case s.c:return a;case s.a:return e.set("isOpen",!e.get("isOpen"));case s.d:return e.set("filterWrapper",n.wrapper);case s.f:var t=[n.key,n.value];return e.set("inited",!0).setIn(t,!e.getIn(t));case s.g:var r=e.get(n.key),i=r.indexOf(n.value);return i>-1?e.set(r.delete(i)):e.set(r.push(n.value));case s.h:if(e.get(n.key)===n.value)return e.set(n.key,null);var c=e;return"type"===n.key&&"股票型"!==n.value&&(c=e.set("inited",!0).set("return",new u.Map)),c.set("inited",!0).set(n.key,n.value);case s.e:return e.set("disabled",n.options.reduce(function(e,n){return e.setIn(n,!0)},new u.Map));case s.b:var d=["openedGoup",n.name];return e.setIn(d,!e.getIn(d));default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var u=t("./node_modules/immutable/dist/immutable.js"),s=(t.n(u),t("./app/containers/ProductsPage/constants.js")),a=t.i(u.fromJS)({currency:{},type:null,interest:{},return:{},risk:null,channel:null,isOpen:!0,inited:!1,disabled:{},filterWrapper:null,openedGoup:{}});n.default=r}});