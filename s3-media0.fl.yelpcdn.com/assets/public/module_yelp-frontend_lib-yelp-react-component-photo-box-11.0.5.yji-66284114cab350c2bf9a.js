"use strict";
(globalThis.__LOADABLE_LOADED_CHUNKS__ = globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [7087], {
        444290: (e, t, i) => {
            i.d(t, {
                Z: () => B
            });
            var s = i(388012),
                o = i(87363),
                r = i.n(o),
                a = i(46867),
                l = i(748112),
                n = i(646242),
                c = i(959659),
                d = i(387137),
                g = i(28294),
                p = i(51719),
                u = i(541428),
                h = i(849338),
                x = i(804560),
                b = i(19266),
                m = i(263286),
                v = i(481040),
                k = i(151076),
                y = i(284015),
                f = i(286951);

            function j() {
                return j = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var s in i) Object.prototype.hasOwnProperty.call(i, s) && (e[s] = i[s])
                    }
                    return e
                }, j.apply(this, arguments)
            }
            var w = {
                    name: "1phd9a0",
                    styles: "object-fit:cover;"
                },
                Z = {
                    name: "1i3wmz1",
                    styles: "position:absolute;width:100%;height:100%;object-fit:cover;"
                },
                _ = {
                    name: "1k75hwm",
                    styles: "align-items:center;display:flex;height:100%;justify-content:center;width:100%;"
                },
                L = {
                    name: "17sye06",
                    styles: "border-radius:50%;width:24px;height:24px;padding:6px 4px 2px 4px;"
                },
                W = {
                    name: "1gomreu",
                    styles: "position:relative;display:inline-block;"
                },
                D = {
                    name: "is7bk7",
                    styles: "left:auto;"
                },
                T = {
                    name: "1i7xybx",
                    styles: "background-color:rgba(255,255,255,0);background-image:linear-gradient(180deg,rgba(0,0,0,0) 50%,rgba(0,0,0,0.8) 100%);"
                };

            function $(e) {
                const t = r().useContext(n.default),
                    {
                        src: i,
                        srcSet: o,
                        altText: $,
                        height: B,
                        width: R,
                        link: C,
                        linkTarget: J,
                        imgDisplay: O,
                        status: A,
                        progress: S,
                        actionLinksLeft: U,
                        actionLinksRight: z,
                        caption: E,
                        stretchToFill: N,
                        cropped: H,
                        draggable: I,
                        isVideo: P,
                        onClickHandler: F,
                        className: K,
                        shouldUseImgTagWithoutBackground: V
                    } = e;
                if (!t.v2_enabled) {
                    const {
                        css: t,
                        ...i
                    } = e;
                    return (0, v.jsx)(f.Z, j({}, i, {
                        shouldUseImgTagWithoutBackground: V
                    }))
                }
                const G = Boolean(A) || void 0 !== S || U || z || E || P;
                let q;
                q = $ || (E || "");
                const M = (0, v.css)("position:absolute;top:", (0, y.r$)(1), "px;left:", (0, y.r$)(1), "px;right:", (0, y.r$)(1), "px;"),
                    Q = i ? (0, v.jsx)(d.Ei, {
                        css: (0, s.Z)([(0, v.css)("border-radius:", 4, "px;vertical-align:middle;box-sizing:border-box;a:visited &{outline:none;}"), "error" === A && (0, v.css)("border:solid 2px ", k.J.core.uiRedDark.get(), ";.ltie9 &{margin:-2px;border:1px solid ", k.J.core.uiRedDark.get(), ";}"), "selected" === A && (0, v.css)("border:solid 2px ", k.J.core.uiBlueRegular.get(), ";.ltie9 &{margin:-2px;border:1px solid ", k.J.core.uiBlueRegular.get(), ";}"), H && w, V && !C && Z, O && (0, v.css)("display:", O, ";")], ""),
                        src: i,
                        srcSet: o,
                        alt: q,
                        height: B,
                        width: R,
                        loading: "number" == typeof R && "number" == typeof B ? "lazy" : "auto",
                        draggable: I
                    }) : (0, v.jsx)(c.W2, {
                        backgroundColor: "gray-extra-light",
                        css: _,
                        style: {
                            height: B,
                            width: R
                        }
                    }, (0, v.jsx)(g.Z, {
                        color: "gray-regular"
                    }));
                let X;
                if (A) {
                    const e = {
                        error: u.Z,
                        success: p.Z,
                        selected: h.Z
                    }[A];
                    X = (0, v.jsx)(c.W2, {
                        display: "inline-block",
                        css: (0, s.Z)([L, "error" === A && (0, v.css)("background-color:", k.J.core.uiRedDark.get(), ";"), "success" === A && (0, v.css)("background-color:", k.J.core.uiGreenRegular.get(), ";"), "selected" === A && (0, v.css)("background-color:", k.J.core.uiBlueRegular.get(), ";padding:4px 3px 2px 4px;")], "")
                    }, (0, v.jsx)(e, {
                        color: "white"
                    }))
                } else void 0 !== S && (X = (0, v.jsx)(l.ZP, {
                    value: S,
                    type: "media",
                    aria: {
                        "aria-label": (0, m.ag)("Status")
                    }
                }));
                return (0, v.jsx)(c.W2, {
                    className: K,
                    css: (0, s.Z)([i && N && !V && (0, v.css)("background-image:url(", i, ");"), G && W, N && !V && (0, v.css)("position:relative;width:100%;height:100%;background-position:center center;background-repeat:no-repeat;background-size:cover;border-radius:", 4, "px;> .photo-box-img{height:100%;}> a > img,> img{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;height:100%;filter:alpha(opacity = 0);opacity:0;}")], ""),
                    onClick: F
                }, C ? (0, v.jsx)(b.rU, {
                    target: J,
                    href: C
                }, Q) : Q, U && (0, v.jsx)(c.W2, {
                    css: M
                }, (0, v.jsx)(a.Z, {
                    type: "media",
                    links: U
                })), z && (0, v.jsx)(c.W2, {
                    css: (0, s.Z)([M, D], "")
                }, (0, v.jsx)(a.Z, {
                    type: "media-minimal",
                    links: z
                })), P && !z && (0, v.jsx)(c.W2, {
                    css: (0, v.css)("position:absolute;top:", (0, y.r$)(1), "px;right:", (0, y.r$)(1), "px;")
                }, (0, v.jsx)(x.Z, {
                    color: "white"
                })), X && (0, v.jsx)(c.W2, {
                    css: (0, v.css)("position:absolute;right:", (0, y.r$)(1), "px;bottom:", (0, y.r$)(1), "px;left:", (0, y.r$)(1), "px;text-align:right;")
                }, X), E && !X && (0, v.jsx)(c.W2, {
                    css: (0, s.Z)([T, (0, v.css)("background-color:transparent;border-radius:0 0 ", 4, "px ", 4, "px;bottom:0;position:absolute;left:0;overflow:hidden;padding:", (0, y.r$)(.5), "px ", (0, y.r$)(1), "px;right:0;top:0;transition:all 0.3s ease-in-out;vertical-align:bottom;pointer-events:none;")], ""),
                    aria: {
                        "aria-hidden": !0
                    }
                }, (0, v.jsx)(c.W2, {
                    css: (0, v.css)("padding:", (0, y.r$)(2), "px;bottom:0;left:0;position:absolute;overflow:hidden;right:0;")
                }, (0, v.jsx)(b.xv, {
                    size: "small",
                    color: "white",
                    bold: !0,
                    truncated: !0
                }, E))))
            }
            $.defaultProps = {
                srcSet: void 0,
                altText: void 0,
                height: void 0,
                width: void 0,
                link: void 0,
                linkTarget: "_self",
                imgDisplay: void 0,
                status: void 0,
                progress: void 0,
                actionLinksLeft: void 0,
                actionLinksRight: void 0,
                caption: void 0,
                stretchToFill: void 0,
                cropped: !1,
                draggable: !0,
                isVideo: void 0,
                onClickHandler: void 0,
                className: void 0,
                src: void 0,
                shouldUseImgTagWithoutBackground: !1
            };
            const B = $
        }
    }
]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/module_yelp-frontend_lib-yelp-react-component-photo-box-11.0.5.yji-66284114cab350c2bf9a.js.map