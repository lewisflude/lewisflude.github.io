/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-c91cc8f0dd234462434b.js"
  },
  {
    "url": "app-16815cb9dc9ae90185d6.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-12ee6adcec918d6591ff.js"
  },
  {
    "url": "index.html",
    "revision": "b02d543c53aa432cf2357796bd99c898"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "b621fb886bd1f0e60b28f01a29e99b2b"
  },
  {
    "url": "component---src-pages-index-js.2b48c634d42daeb17712.css"
  },
  {
    "url": "google-fonts/s/cousine/v12/d6lIkaiiRdih4SpP_SQvzA.woff2",
    "revision": "9ea5649e7f6788bc5eb814ea946d8bae"
  },
  {
    "url": "component---src-pages-index-js-6b0facc9f4e444cefeab.js"
  },
  {
    "url": "0-907e281ab45204aef3bb.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js.964d1372b9443ed82f50.css"
  },
  {
    "url": "component---src-pages-404-js-b2e0852a2b51315c584b.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
