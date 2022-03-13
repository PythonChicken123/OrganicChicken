"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ = globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [6157], {
        170502: (e, i, l) => {
            l.d(i, {
                l: () => k
            });
            var s = l(87363),
                n = l(192719),
                o = l(481040),
                t = l(808416),
                p = l(284015);
            const a = "undefined" == typeof document;

            function r() {
                if (a) return null;
                const e = document.querySelector("#emotion-container");
                return e ? (0, t.Z)({
                    container: e
                }) : null
            }

            function d({
                children: e
            }) {
                const [i, l] = s.useState(r());
                return s.useLayoutEffect((() => {
                    a || i || (! function() {
                        const e = document.createElement("meta");
                        e.id = "emotion-container";
                        const i = document.querySelector("link[rel=stylesheet]"),
                            l = (null == i ? void 0 : i.parentNode) ? ? document.head;
                        l && l.insertBefore(e, i)
                    }(), l(r()))
                }), [i]), a ? e : i ? (0, o.jsx)(o.CacheProvider, {
                    value: i
                }, e) : null
            }
            var v = {
                    name: "6is1w4",
                    styles: ".hidden-non-responsive-inline,.hidden-non-responsive-inline-block,.hidden-non-responsive-block,.hidden-non-responsive-table-cell{display:none !important;}"
                },
                c = {
                    name: "1rvrqji",
                    styles: ".responsive &{.hidden-non-responsive-inline{display:inline !important;}.hidden-non-responsive-inline-block{display:inline-block !important;}.hidden-non-responsive-block{display:block !important;}.hidden-non-responsive-table-cell{display:table-cell !important;}}"
                },
                m = {
                    name: "5afvhn",
                    styles: ".responsive-visible-small-inline,.responsive-visible-small-inline-block,.responsive-visible-small-block,.responsive-visible-small-table-cell,.responsive-visible-medium-only-inline,.responsive-visible-medium-only-inline-block,.responsive-visible-medium-only-block,.responsive-visible-medium-only-table-cell,.responsive-visible-medium-inline,.responsive-visible-medium-inline-block,.responsive-visible-medium-block,.responsive-visible-medium-table-cell,.responsive-visible-desktop-small-inline,.responsive-visible-desktop-small-inline-block,.responsive-visible-desktop-small-block,.responsive-visible-desktop-small-table-cell,.responsive-visible-desktop-default-inline,.responsive-visible-desktop-default-inline-block,.responsive-visible-desktop-default-block,.responsive-visible-desktop-default-table-cell{display:none !important;}"
                };

            function b() {
                return (0, o.jsx)(o.Global, {
                    styles: (0, o.css)(v, ...["small", "medium", "desktop-small", "desktop-default"].map((e => (0, p.Kd)(e, (0, o.css)(".responsive-", e, "-display-inline-block{display:inline-block !important;}.responsive-", e, "-display-block{display:block !important;}.responsive-", e, "-display-inline{display:inline !important;}")))), c, m, ...["small", "medium", "desktop-small", "desktop-default"].map((e => (0, p.Kd)(e, (0, o.css)(".responsive-visible-", e, "-inline{display:inline !important;}.responsive-visible-", e, "-inline-block{display:inline-block !important;}.responsive-visible-", e, "-block{display:block !important;}.responsive-visible-", e, "-table-cell{display:table-cell !important;}.responsive-hidden-", e, "{display:none !important;}")))), ...["small", "medium", "desktop-small", "desktop-default"].map((e => (0, p.Kd)(e, (0, o.css)(".responsive-hidden-", e, "{display:none !important;}")))))
                })
            }
            const u = (0, o.css)("yelp-react-root &{", n.Z, "}");

            function k({
                requireCheetahCompatibility: e = !0,
                requireGlobalResponsiveClasses: i = !0,
                children: l
            }) {
                return (0, o.jsx)(d, null, (0, o.jsx)(o.Global, {
                    styles: e ? u : n.Z
                }), i && (0, o.jsx)(b, null), l)
            }
        }
    }
]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/module_yelp-frontend_lib-yelp-style-utils-5.3.0.yji-54343105747db83355b5.js.map