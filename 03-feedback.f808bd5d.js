function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,m=Math.min,v=function(){return l.Date.now()};function g(e,t,n){var o,i,r,a,f,u,c=0,l=!1,s=!1,g=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function T(e){return c=e,f=setTimeout(E,t),l?y(e):a}function N(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=r}function E(){var e=v();if(N(e))return j(e);f=setTimeout(E,function(e){var n=t-(e-u);return s?m(n,r-(e-c)):n}(e))}function j(e){return f=void 0,g&&o?y(e):(o=i=void 0,a)}function h(){var e=v(),n=N(e);if(o=arguments,i=this,u=e,n){if(void 0===f)return T(u);if(s)return f=setTimeout(E,t),y(u)}return void 0===f&&(f=setTimeout(E,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,r=(s="maxWait"in n)?d(b(n.maxWait)||0,t):r,g="trailing"in n?!!n.trailing:g),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,o=u=i=f=void 0},h.flush=function(){return void 0===f?a:j(v())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=r.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):i.test(e)?NaN:+e}t=function(e,t,n){var o=!0,i=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(o="leading"in n?!!n.leading:o,i="trailing"in n?!!n.trailing:i),g(e,t,{leading:o,maxWait:t,trailing:i})};const y=document.querySelector(".feedback-form");const T=e(t)((function(){const e={};for(const t of y.elements)"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||(e[t.name]=t.value);localStorage.setItem("feedback-form-state",JSON.stringify(e)),console.log(e)}),500);y.addEventListener("submit",(function(e){e.preventDefault();const t={};for(const e of y.elements)"INPUT"!==e.tagName&&"TEXTAREA"!==e.tagName||(e.value=t[e.name]||"");localStorage.removeItem("feedback-form-state"),y.reset()})),y.addEventListener("input",T),function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(e)for(const t of y.elements)"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||(t.value=e[t.name]||"")}();
//# sourceMappingURL=03-feedback.f808bd5d.js.map
