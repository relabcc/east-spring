webpackJsonp([6],{"./app/containers/HomePage/constants.js":function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return a}),t.d(n,"c",function(){return r});var s="EASTSPRING/HOME_LOADED",a="EASTSPRING/ADD_SCENE",r="EASTSPRING/SCENE_LOADED"},"./app/containers/HomePage/reducer.js":function(e,n,t){"use strict";function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:c,n=arguments[1];switch(n.type){case r.a:return e.set("loaded",!0);case r.b:return e.setIn(["scenes",n.keyName],!0);case r.c:return e.setIn(["scenes",n.keyName],!1);default:return e}}Object.defineProperty(n,"__esModule",{value:!0});var a=t("./node_modules/immutable/dist/immutable.js"),r=(t.n(a),t("./app/containers/HomePage/constants.js")),c=t.i(a.fromJS)({loaded:!1,scenes:{}});n.default=s}});