var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},o=e.parcelRequired7c6;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,o.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=o);var r=o("iQIUW");function i(e,t){Math.random()}const l=document.querySelector("form"),u=document.querySelector("input[name='delay']"),a=document.querySelector("input[name='step']"),c=document.querySelector("input[name='amount']"),s={position:"center-center",backOverlay:!0,clickToClose:!0};function i(e,t){const n=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{n?o({position:e,delay:t}):r({position:e,delay:t})}),t)}))}l.addEventListener("submit",(function(e){e.preventDefault();let t=Number(u.value);const n=Number(a.value),o=Number(c.value);console.log(t);for(let e=1;e<=o;e+=1)i(e,t).then((({position:e,delay:t})=>{r.Notify.success(`Fulfilled promise ${e} in ${t}ms`,s)})).catch((({position:e,delay:t})=>{r.Notify.failure(`Rejected promise ${e} in ${t}ms`,s)})),t+=n;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.b85ee390.js.map
