if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let c={};const t=e=>r(e,o),n={module:{uri:o},exports:c,require:t};s[o]=Promise.all(i.map((e=>n[e]||t(e)))).then((e=>(d(...e),c)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"App.css",revision:"81051bcc2cf1bedf378224b0a93e2877"},{url:"App.jsx",revision:"b269034c11d96a4898889b82fee5d801"},{url:"App.test.js",revision:"83ca979af0e840672a4aa673b0c7be01"},{url:"BookCard.jsx",revision:"ff03d0a50fb42971d9893d1db60be2fd"},{url:"index.css",revision:"7386d27f653921d6b5c3b54e0cd9d67d"},{url:"index.js",revision:"7c496931b019d86df72fe7ef6f4db4d1"},{url:"logo.svg",revision:"06e733283fa43d1dd57738cfc409adbd"},{url:"reportWebVitals.js",revision:"b528fd380de9b503eb5c84973639cca4"},{url:"setupTests.js",revision:"72158175c4ba432ede32a7c2ca4143e0"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
import {precacheAndRoute as workbox_precaching_precacheAndRoute} from 'E:/Github_repositories/PAD_PR3_Grupo7/googlebooksclientpwa/node_modules/workbox-precaching/precacheAndRoute.mjs';/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox_precaching_precacheAndRoute([
  {
    "url": "App.css",
    "revision": "81051bcc2cf1bedf378224b0a93e2877"
  },
  {
    "url": "App.jsx",
    "revision": "b269034c11d96a4898889b82fee5d801"
  },
  {
    "url": "App.test.js",
    "revision": "83ca979af0e840672a4aa673b0c7be01"
  },
  {
    "url": "BookCard.jsx",
    "revision": "ff03d0a50fb42971d9893d1db60be2fd"
  },
  {
    "url": "index.css",
    "revision": "7386d27f653921d6b5c3b54e0cd9d67d"
  },
  {
    "url": "index.js",
    "revision": "7c496931b019d86df72fe7ef6f4db4d1"
  },
  {
    "url": "logo.svg",
    "revision": "06e733283fa43d1dd57738cfc409adbd"
  },
  {
    "url": "reportWebVitals.js",
    "revision": "b528fd380de9b503eb5c84973639cca4"
  },
  {
    "url": "setupTests.js",
    "revision": "72158175c4ba432ede32a7c2ca4143e0"
  }
], {
  "ignoreURLParametersMatching": [/^utm_/, /^fbclid$/]
});








