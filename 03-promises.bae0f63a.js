var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},n=e.parcelRequired7c6;null==n&&((n=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},e.parcelRequired7c6=n);var r=n("iQIUW");const i=document.querySelector("form"),l=document.querySelector("input[name='delay']"),u=document.querySelector("input[name='step']"),a=document.querySelector("input[name='amount']"),c={position:"center-center",backOverlay:!0,clickToClose:!0};function s(e,t){const o=Math.random()>.3;return new Promise(((n,i)=>{setTimeout((()=>{t<0?r.Notify.failure("Задайте позитивне значення",c):o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}i.addEventListener("submit",(function(e){e.preventDefault();let t=Number(l.value);const o=Number(u.value),n=Number(a.value);console.log(t);for(let e=1;e<=n;e+=1)s(e,t).then((({position:e,delay:t})=>{r.Notify.success(`Fulfilled promise ${e} in ${t}ms`,c)})).catch((({position:e,delay:t})=>{r.Notify.failure(`Rejected promise ${e} in ${t}ms`,c)})),t+=o;e.currentTarget.reset()}));
//# sourceMappingURL=03-promises.bae0f63a.js.map