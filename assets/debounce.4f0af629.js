import{b_ as t,b$ as n,c0 as r}from"./index.1a584bcd.js";var i=/\s/;var e=/^\s+/;function o(t){return t?t.slice(0,function(t){for(var n=t.length;n--&&i.test(t.charAt(n)););return n}(t)+1).replace(e,""):t}var u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,c=parseInt;function v(r){if("number"==typeof r)return r;if(t(r))return NaN;if(n(r)){var i="function"==typeof r.valueOf?r.valueOf():r;r=n(i)?i+"":i}if("string"!=typeof r)return 0===r?r:+r;r=o(r);var e=a.test(r);return e||f.test(r)?c(r.slice(2),e?2:8):u.test(r)?NaN:+r}const s=function(){return r.Date.now()};var d=Math.max,l=Math.min;function m(t,r,i){var e,o,u,a,f,c,m=0,p=!1,h=!1,x=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function T(n){var r=e,i=o;return e=o=void 0,m=n,a=t.apply(i,r)}function y(t){return m=t,f=setTimeout(g,r),p?T(t):a}function b(t){var n=t-c;return void 0===c||n>=r||n<0||h&&t-m>=u}function g(){var t=s();if(b(t))return N(t);f=setTimeout(g,function(t){var n=r-(t-c);return h?l(n,u-(t-m)):n}(t))}function N(t){return f=void 0,x&&e?T(t):(e=o=void 0,a)}function $(){var t=s(),n=b(t);if(e=arguments,o=this,c=t,n){if(void 0===f)return y(c);if(h)return clearTimeout(f),f=setTimeout(g,r),T(c)}return void 0===f&&(f=setTimeout(g,r)),a}return r=v(r)||0,n(i)&&(p=!!i.leading,u=(h="maxWait"in i)?d(v(i.maxWait)||0,r):u,x="trailing"in i?!!i.trailing:x),$.cancel=function(){void 0!==f&&clearTimeout(f),m=0,e=c=o=f=void 0},$.flush=function(){return void 0===f?a:N(s())},$}export{m as d};
