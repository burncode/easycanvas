<<<<<<< HEAD
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var a in n)("object"==typeof exports?exports:t)[a]=n[a]}}(this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return t[a].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){t.exports=n(94)},1:function(t,e){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){if("function"==typeof t){var n=t.call(e);return n}return t},execFuncs:function(t,e,a){if(t&&(n.isArray(a)||(a=[a])),"function"==typeof t)return t.apply(e,a);if(n.isArray(t)){var s=[];return t.forEach(function(t){s.push(t&&t.apply(e,a))}),s}},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,n,a,s,r){return!(t<n||t>a||e<s||e>r)},firstValuable:function(t,e,n){return"undefined"==typeof t?"undefined"==typeof e?n:e:t}};t.exports=n},2:function(t,e){"use strict";var n=3.141593;t.exports=function(t,e,a,s,r,o){var i=r?-r/180*n:0,c=t,u=e;return r&&(c=(t-a)*Math.cos(i)-(e-s)*Math.sin(i)+a,u=(t-a)*Math.sin(i)+(e-s)*Math.cos(i)+s),o?[c,u]:{x:c,y:u}}},94:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(1),r=(a(s),n(2)),o=a(r),i=void 0,c=function(t){var e=new i.class.sprite(t);e.style=t.style;var n=t.center||{x:t.style.tw/2,y:t.style.th/2},a={passByRotate:!1,speed:2e3};e.set=function(t){for(var e in t)a[e]=t[e]},t.background&&e.add(new i.class.sprite({content:{img:t.background},style:{tx:0,ty:0,tw:t.style.tw,th:t.style.th,locate:"lt"}}));var s=Math.max(t.style.tw,t.style.th)+100,r=function(t){return(0,o.default)(s,0,0,0,t)};return e.hooks={ticked:function(){if(!(Math.random()<.8)){var s=360*Math.random(),o=r(s),c=t.passBy[Math.floor(s)%t.passBy.length];if(c){var u=new i.class.sprite({content:{img:c},style:{tx:Easycanvas.transition.linear(n.x,n.x+o.x,a.speed),ty:Easycanvas.transition.linear(n.y,n.y+o.y,a.speed),rotate:s-90,tw:Easycanvas.transition.linear(1,2*c.width,a.speed),th:Easycanvas.transition.linear(1,2*c.height,a.speed)}});a.passByRotate&&(u.style.rx=n.x,u.style.ry=n.y,u.style.rotate=Easycanvas.transition.linear(0,360,a.speed)),e.add(u),setTimeout(function(){u.remove()},a.speed)}if(!(Math.random()>a.passInRate)){var l=new i.class.sprite({content:{img:t.passIn[0]},style:{tx:Easycanvas.transition.linear(n.x,n.x+o.x/10,a.speed),ty:Easycanvas.transition.linear(n.y,n.y+o.y/10,a.speed),rotate:s,tw:Easycanvas.transition.linear(10,4*n.x,a.speed),th:Easycanvas.transition.linear(10,4*n.x,a.speed),opacity:Easycanvas.transition.linear(5,.15,a.speed)}});e.add(l),setTimeout(function(){l.remove()},a.speed)}}}},e};window&&window.Easycanvas&&(i=window.Easycanvas,i.class.shuttle=c),t.exports=function(t){i=t,t.class.shuttle=c}}})});
=======
!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var a in n)("object"==typeof exports?exports:t)[a]=n[a]}}(this,function(){return function(t){function e(a){if(n[a])return n[a].exports;var s=n[a]={exports:{},id:a,loaded:!1};return t[a].call(s.exports,s,s.exports,e),s.loaded=!0,s.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}({0:function(t,e,n){t.exports=n(91)},1:function(t,e){"use strict";var n={isArray:Array.isArray||function(t){return"[object Array]"===Object.prototype.toString.call(t)},funcOrValue:function(t,e){if("function"==typeof t){var n=t.call(e);return n}return t},execFuncs:function(t,e,a){if(t&&(n.isArray(a)||(a=[a])),"function"==typeof t)return t.apply(e,a);if(n.isArray(t)){var s=[];return t.forEach(function(t){s.push(t&&t.apply(e,a))}),s}},blend:["source-over","source-in","source-out","source-atop","destination-over","destination-in","destination-out","destination-atop","lighter","copy","xor","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],pointInRect:function(t,e,n,a,s,r){return!(t<n||t>a||e<s||e>r)},firstValuable:function(t,e,n){return"undefined"==typeof t?"undefined"==typeof e?n:e:t}};t.exports=n},2:function(t,e){"use strict";var n=3.141593;t.exports=function(t,e,a,s,r,o){var i=r?-r/180*n:0,c=t,u=e;return r&&(c=(t-a)*Math.cos(i)-(e-s)*Math.sin(i)+a,u=(t-a)*Math.sin(i)+(e-s)*Math.cos(i)+s),o?[c,u]:{x:c,y:u}}},91:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var s=n(1),r=(a(s),n(2)),o=a(r),i=void 0,c=function(t){var e=new i.class.sprite(t);e.style=t.style;var n=t.center||{x:t.style.tw/2,y:t.style.th/2},a={passByRotate:!1,speed:2e3};e.set=function(t){for(var e in t)a[e]=t[e]},t.background&&e.add(new i.class.sprite({content:{img:t.background},style:{tx:0,ty:0,tw:t.style.tw,th:t.style.th,locate:"lt"}}));var s=Math.max(t.style.tw,t.style.th)+100,r=function(t){return(0,o.default)(s,0,0,0,t)};return e.hooks={ticked:function(){if(!(Math.random()<.8)){var s=360*Math.random(),o=r(s),c=t.passBy[Math.floor(s)%t.passBy.length];if(c){var u=new i.class.sprite({content:{img:c},style:{tx:Easycanvas.transition.linear(n.x,n.x+o.x,a.speed),ty:Easycanvas.transition.linear(n.y,n.y+o.y,a.speed),rotate:s-90,tw:Easycanvas.transition.linear(1,2*c.width,a.speed),th:Easycanvas.transition.linear(1,2*c.height,a.speed)}});a.passByRotate&&(u.style.rx=n.x,u.style.ry=n.y,u.style.rotate=Easycanvas.transition.linear(0,360,a.speed)),e.add(u),setTimeout(function(){u.remove()},a.speed)}if(!(Math.random()>a.passInRate)){var l=new i.class.sprite({content:{img:t.passIn[0]},style:{tx:Easycanvas.transition.linear(n.x,n.x+o.x/10,a.speed),ty:Easycanvas.transition.linear(n.y,n.y+o.y/10,a.speed),rotate:s,tw:Easycanvas.transition.linear(10,4*n.x,a.speed),th:Easycanvas.transition.linear(10,4*n.x,a.speed),opacity:Easycanvas.transition.linear(5,.15,a.speed)}});e.add(l),setTimeout(function(){l.remove()},a.speed)}}}},e};window&&window.Easycanvas&&(i=window.Easycanvas,i.class.shuttle=c),t.exports=function(t){i=t,t.class.shuttle=c}}})});
>>>>>>> 1a4fa5bcf63ef16aa4cd47591324d0e5665caa06
