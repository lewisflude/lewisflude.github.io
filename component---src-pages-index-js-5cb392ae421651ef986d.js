(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    141: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(149);
      function o(e) {
        return Math.floor(Math.random() * Math.floor(e)) + 1;
      }
      var l = function(e) {
        var t = e.project;
        return r.a.createElement(
          "div",
          {
            className: "item-outer",
            style: { flexGrow: o(1), flexShrink: o(1) }
          },
          r.a.createElement(
            "div",
            {
              className: "item",
              style: { left: o(1), top: o(1), flexGrow: o(1), flexShrink: o(1) }
            },
            r.a.createElement(
              "a",
              {
                className: "item-client",
                href: t.url,
                style: { transform: "scaleY(" + o(1) + ")" }
              },
              t.client
            ),
            r.a.createElement(
              "p",
              {
                className: "item-title",
                style: { transform: "scaleY(" + o(1) + ")" }
              },
              t.title
            ),
            r.a.createElement("p", { className: "item-tagline" }, t.tagline)
          )
        );
      };
      l.propTypes = { project: Object };
      var c = l,
        s = n(12),
        u = n.n(s),
        d = (n(162),
        (function(e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          return (
            u()(t, e),
            (t.prototype.render = function() {
              return r.a.createElement(
                "div",
                { className: "cube-wrapper" },
                r.a.createElement(
                  "div",
                  { className: "cube" },
                  r.a.createElement("div", {
                    className: "cube__face cube__face--front"
                  }),
                  r.a.createElement("div", {
                    className: "cube__face cube__face--right"
                  }),
                  r.a.createElement("div", {
                    className: "cube__face cube__face--back"
                  }),
                  r.a.createElement("div", {
                    className: "cube__face cube__face--left"
                  }),
                  r.a.createElement("div", {
                    className: "cube__face cube__face--top"
                  }),
                  r.a.createElement("div", {
                    className: "cube__face cube__face--bottom"
                  })
                )
              );
            }),
            t
          );
        })(r.a.Component)),
        p = n(164);
      t.default = function() {
        return r.a.createElement(
          i.a,
          null,
          r.a.createElement(
            "div",
            { className: "cube-blend-layer" },
            (function() {
              for (var e = [], t = 0; t < 3; t++)
                e.push(r.a.createElement(d, null));
              return e;
            })()
          ),
          r.a.createElement(
            "div",
            { className: "item-wrapper" },
            (function() {
              for (var e = [], t = 0; t < p.length; t++)
                e.push(
                  r.a.createElement(c, { project: p[t], projectCount: t })
                );
              return e;
            })()
          )
        );
      };
    },
    143: function(e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, "graphql", function() {
          return h;
        }),
        n.d(t, "StaticQueryContext", function() {
          return f;
        }),
        n.d(t, "StaticQuery", function() {
          return m;
        });
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        l = n(142),
        c = n.n(l);
      n.d(t, "Link", function() {
        return c.a;
      }),
        n.d(t, "withPrefix", function() {
          return l.withPrefix;
        }),
        n.d(t, "navigate", function() {
          return l.navigate;
        }),
        n.d(t, "push", function() {
          return l.push;
        }),
        n.d(t, "replace", function() {
          return l.replace;
        }),
        n.d(t, "navigateTo", function() {
          return l.navigateTo;
        });
      var s = n(34);
      n.d(t, "waitForRouteChange", function() {
        return s.c;
      });
      var u = n(144),
        d = n.n(u);
      n.d(t, "PageRenderer", function() {
        return d.a;
      });
      var p = n(35);
      n.d(t, "parsePath", function() {
        return p.a;
      });
      var f = r.a.createContext({}),
        m = function(e) {
          return r.a.createElement(f.Consumer, null, function(t) {
            return e.data || (t[e.query] && t[e.query].data)
              ? (e.render || e.children)(e.data ? e.data.data : t[e.query].data)
              : r.a.createElement("div", null, "Loading (StaticQuery)");
          });
        };
      function h() {
        throw new Error(
          "It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby."
        );
      }
      m.propTypes = {
        data: o.a.object,
        query: o.a.string.isRequired,
        render: o.a.func,
        children: o.a.func
      };
    },
    144: function(e, t, n) {
      var a;
      e.exports = ((a = n(146)) && a.default) || a;
    },
    145: function(e) {
      e.exports = {
        data: {
          site: {
            siteMetadata: {
              title:
                "Lewis Flude is a front-end developer, designer and startup founder based in London"
            }
          }
        }
      };
    },
    146: function(e, t, n) {
      "use strict";
      n.r(t);
      var a = n(0),
        r = n.n(a),
        i = n(8),
        o = n.n(i),
        l = n(37),
        c = n(1),
        s = function(e) {
          var t = e.location,
            n = c.default.getResourcesForPathname(t.pathname);
          return r.a.createElement(l.a, { location: t, pageResources: n });
        };
      (s.propTypes = {
        location: o.a.shape({ pathname: o.a.string.isRequired }).isRequired
      }),
        (t.default = s);
    },
    147: function(e, t, n) {},
    149: function(e, t, n) {
      "use strict";
      var a = n(145),
        r = n(0),
        i = n.n(r),
        o = n(8),
        l = n.n(o),
        c = n(150),
        s = n.n(c),
        u = n(143),
        d = function(e) {
          var t = e.siteTitle;
          return i.a.createElement(
            "div",
            { className: "header" },
            i.a.createElement(
              "h1",
              { className: "title" },
              i.a.createElement(u.Link, { to: "/" }, t)
            ),
            i.a.createElement(
              "div",
              { className: "social-media-links" },
              i.a.createElement(
                "a",
                { href: "https://twitter.com/lewisflude" },
                "Twitter"
              ),
              i.a.createElement(
                "a",
                { href: "https://facebook.com/lewisflude" },
                "Facebook"
              ),
              i.a.createElement(
                "a",
                { href: "https://github.com/lewisflude" },
                "GitHub"
              )
            )
          );
        };
      d.propTypes = { siteTitle: String };
      var p = d,
        f = (n(147),
        function(e) {
          var t = e.children;
          return i.a.createElement(u.StaticQuery, {
            query: "755544856",
            render: function(e) {
              return i.a.createElement(
                "div",
                { id: "wrapper" },
                i.a.createElement(
                  s.a,
                  {
                    title: "Lewis Flude",
                    meta: [
                      {
                        name: "description",
                        content:
                          "Lewis Flude is a front-end developer, designer and startup founder based in London"
                      },
                      {
                        name: "keywords",
                        content:
                          "developer, designer, startup, founder, london, techstars, blockchain, crypto, ethereum, bitcoin, systems, user, experience, javascript, ruby, css, html"
                      },
                      {
                        name: "viewport",
                        content: "initial-scale=1, viewport-fit=cover"
                      }
                    ]
                  },
                  i.a.createElement("html", { lang: "en" })
                ),
                i.a.createElement(p, { siteTitle: e.site.siteMetadata.title }),
                t
              );
            },
            data: a
          });
        });
      (f.propTypes = { children: l.a.node.isRequired }), (t.a = f);
    },
    162: function(e, t, n) {},
    164: function(e) {
      e.exports = [
        {
          client: "Unmade",
          title: "Senior Front-end Engineer",
          tagline:
            "The global fashion software company that powers Fashion Driven by Demand",
          url: "https://unmade.com"
        },
        {
          client: "Pillar Project",
          title: "Front-end Developer",
          tagline:
            "The world's most friendly crypto wallet and personal data locker",
          url: "https://pillarproject.io"
        },
        {
          client: "Cookies",
          title: "Front-end Developer & Designer",
          tagline: "A fantastic Ruby-on-Rails agency",
          url: "https://cookieshq.co.uk"
        },
        {
          client: "Neos",
          title: "Front-end Developer & Designer",
          tagline: "Insurance meets internet-of-things",
          url: "https://neos.co.uk"
        },
        {
          client: "Hiroes",
          title: "Full-stack Developer & Designer",
          tagline: "The best way to find people to help run your next event",
          url: "https://hiroes.co"
        },
        {
          client: "Propoly",
          title: "Front-end Developer",
          tagline: "A clean, easy to use lettings site",
          url: "https://propoly.com"
        },
        {
          client: "New Future London",
          title: "Front-end Developer & Designer",
          tagline: "A streetware brand",
          url: "https://newfuturelondon.com"
        },
        {
          client: "Boy London",
          title: "Front-end Developer & Designer",
          tagline: "An iconic fashion brand founded in the 70s in London",
          url: "https://www.leavetheboyalone.com/"
        },
        {
          client: "Zzish",
          title: "Front-end Developer",
          tagline: "A digital platform for teachers and their students",
          url: "https://zzish.com"
        },
        {
          client: "Makeshift",
          title: "Full-stack Developer & Designer",
          tagline: "A one-of-a-kind product agency that tried wild new ideas",
          url: "https://makeshift.io/"
        },
        {
          client: "Magnific",
          title: "Founder",
          tagline:
            "A content agency, a network of 700+ writers and 10+ magazines",
          url: "https://magnific.com/"
        },
        {
          client: "Enthuse.me",
          title: "Front-end Developer & Designer",
          tagline: "The simplest way to show the world your expertise",
          url: "https://enthuse.me"
        }
      ];
    }
  }
]);
//# sourceMappingURL=component---src-pages-index-js-5cb392ae421651ef986d.js.map
