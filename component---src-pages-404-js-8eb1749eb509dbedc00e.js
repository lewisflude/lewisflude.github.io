(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(149);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(8),u=a.n(i),c=a(142),o=a.n(c);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(34);a.d(t,"waitForRouteChange",function(){return s.c});var l=a(144),d=a.n(l);a.d(t,"PageRenderer",function(){return d.a});var f=a(35);a.d(t,"parsePath",function(){return f.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:u.a.object,query:u.a.string.isRequired,render:u.a.func,children:u.a.func}},144:function(e,t,a){var n;e.exports=(n=a(146))&&n.default||n},145:function(e){e.exports={data:{site:{siteMetadata:{title:"Lewis Flude"}}}}},146:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(8),u=a.n(i),c=a(37),o=a(1),s=function(e){var t=e.location,a=o.default.getResourcesForPathname(t.pathname);return r.a.createElement(c.a,{location:t,pageResources:a})};s.propTypes={location:u.a.shape({pathname:u.a.string.isRequired}).isRequired},t.default=s},147:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(145),r=a(0),i=a.n(r),u=a(8),c=a.n(u),o=a(150),s=a.n(o),l=a(143),d=function(e){var t=e.siteTitle;return i.a.createElement("div",{className:"header"},i.a.createElement("h1",{className:"title"},i.a.createElement(l.Link,{to:"/"},t)),i.a.createElement("div",{className:"social-media-links"},i.a.createElement("a",{href:"https://twitter.com/lewisflude"},"Twitter"),i.a.createElement("a",{href:"https://facebook.com/lewisflude"},"Facebook")))},f=(a(147),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement("div",{id:"wrapper"},i.a.createElement(s.a,{title:e.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},i.a.createElement("html",{lang:"en"})),i.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),t)},data:n})});f.propTypes={children:c.a.node.isRequired},t.a=f}}]);
//# sourceMappingURL=component---src-pages-404-js-8eb1749eb509dbedc00e.js.map