!function(){function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={};Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var r="Expected a function",o=/^\s+|\s+$/g,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,l=parseInt,c="object"==typeof n&&n&&n.Object===Object&&n,s="object"==typeof self&&self&&self.Object===Object&&self,d=c||s||Function("return this")(),m=Object.prototype.toString,v=Math.max,p=Math.min,g=function(){return d.Date.now()};function b(e,t,n){var i,o,u,a,f,l,c=0,s=!1,d=!1,m=!0;if("function"!=typeof e)throw new TypeError(r);function b(t){var n=i,r=o;return i=o=void 0,c=t,a=e.apply(r,n)}function S(e){return c=e,f=setTimeout(O,t),s?b(e):a}function j(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function O(){var e=g();if(j(e))return h(e);f=setTimeout(O,function(e){var n=t-(e-l);return d?p(n,u-(e-c)):n}(e))}function h(e){return f=void 0,m&&i?b(e):(i=o=void 0,a)}function w(){var e=g(),n=j(e);if(i=arguments,o=this,l=e,n){if(void 0===f)return S(l);if(d)return f=setTimeout(O,t),b(l)}return void 0===f&&(f=setTimeout(O,t)),a}return t=I(t)||0,y(n)&&(s=!!n.leading,u=(d="maxWait"in n)?v(I(n.maxWait)||0,t):u,m="trailing"in n?!!n.trailing:m),w.cancel=function(){void 0!==f&&clearTimeout(f),c=0,i=l=o=f=void 0},w.flush=function(){return void 0===f?a:h(g())},w}function y(t){var n=void 0===t?"undefined":e(i)(t);return!!t&&("object"==n||"function"==n)}function I(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(i)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==m.call(t)}(t))return NaN;if(y(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=y(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(o,"");var r=a.test(t);return r||f.test(t)?l(t.slice(2),r?2:8):u.test(t)?NaN:+t}t=function(e,t,n){var i=!0,o=!0;if("function"!=typeof e)throw new TypeError(r);return y(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),b(e,t,{leading:i,maxWait:t,trailing:o})};var S=document.querySelector(".feedback-form");document.querySelector('input[name="email"]'),document.querySelector('textarea[name="message"]'),document.querySelector('button[type="submit"]');function j(){var e={email:emailInput.value,message:messageInput.value};localStorage.setItem("feedback-form-state",JSON.stringify(e))}emailInput.addEventListener("input",e(t)(j,500)),messageInput.addEventListener("input",j);var O=localStorage.getItem("feedback-form-state");if(O){var h=JSON.parse(O);emailInput.value=h.email,messageInput.value=h.message}S.addEventListener("submit",(function(e){e.preventDefault();var t={email:emailInput.value,message:messageInput.value};console.log(t),emailInput.value="",messageInput.value="",localStorage.removeItem("feedback-form-state")}))}();
//# sourceMappingURL=03-feedback.c996056c.js.map
