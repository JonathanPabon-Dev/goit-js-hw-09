!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("ejkSG"),a=document.querySelector(".form"),i=document.querySelector('input[name="delay"]'),l=document.querySelector('input[name="step"]'),c=document.querySelector('input[name="amount"]');function d(n,t){Math.random()>.3?e(u).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t,"ms")):e(u).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t,"ms"))}a.addEventListener("submit",(function(e){e.preventDefault();var n=parseInt(i.value),t=parseInt(l.value),o=parseInt(c.value);if(o>0){var r=null;setTimeout((function(){var e=1;d(e,n),r=setInterval((function(){n+=t,console.log(e),++e>o?clearInterval(r):d(e,n)}),t)}),n)}}))}();
//# sourceMappingURL=03-promises.d237df88.js.map
