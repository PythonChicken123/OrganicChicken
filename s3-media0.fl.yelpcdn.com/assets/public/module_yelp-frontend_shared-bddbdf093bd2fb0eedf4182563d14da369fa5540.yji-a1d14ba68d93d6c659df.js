(globalThis.__LOADABLE_LOADED_CHUNKS__ = globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [8883, 9106], {
        767120: e => {
            e.exports = {
                "opt-group": "opt-group__09f24__fLycM"
            }
        },
        908842: e => {
            e.exports = {
                option: "option__09f24__Jdmfd",
                "option-inner": "option-inner__09f24__UUS7o"
            }
        },
        505167: e => {
            e.exports = {
                toggle: "toggle__09f24__uy1X5"
            }
        },
        672415: e => {
            e.exports = {
                outerMenu: "outerMenu__09f24__yrHm_",
                innerMenu: "innerMenu__09f24__nAmrz"
            }
        },
        130797: e => {
            e.exports = {
                dropdown: "dropdown__09f24__O5tpC",
                "dropdown--padding": "dropdown--padding__09f24__jtekv"
            }
        },
        313753: e => {
            e.exports = {
                dropdown: "dropdown__09f24__flpLo",
                menu: "menu__09f24__fz4fD"
            }
        },
        948638: e => {
            e.exports = {
                "biz-footer-promo": "biz-footer-promo__09f24__puTpP",
                "biz-footer-language-dropdown-wrapper": "biz-footer-language-dropdown-wrapper__09f24__iXrF3"
            }
        },
        914164: e => {
            e.exports = {
                "mobile-list-item": "mobile-list-item__09f24__C10NC"
            }
        },
        334526: e => {
            e.exports = {
                "align-bottom": "align-bottom__09f24__ODzXo",
                burst: "burst__09f24__hYpI1"
            }
        },
        170914: e => {
            e.exports = {
                footer: "footer__09f24__XcQAV"
            }
        },
        925721: e => {
            e.exports = {
                cityscape: "cityscape__09f24__VJ0Yy"
            }
        },
        502554: e => {
            e.exports = {
                "align-bottom": "align-bottom__09f24__tFNkY",
                burst: "burst__09f24__aIxAB"
            }
        },
        225983: e => {
            e.exports = {
                "bg-color": "bg-color__09f24__yk8AT"
            }
        },
        858825: e => {
            e.exports = {
                menu: "menu__09f24__OjHTu"
            }
        },
        401902: e => {
            e.exports = {
                attributionText: "attributionText__09f24__ugQDO"
            }
        },
        597988: e => {
            e.exports = {}
        },
        137107: (e, t, n) => {
            "use strict";
            n.d(t, {
                Oy: () => o,
                TB: () => l
            });
            var r = n(227172);
            const o = ["cs_CZ", "da_DK", "de_AT", "de_CH", "de_DE", "en_AU", "en_BE", "en_CA", "en_CH", "en_GB", "en_HK", "en_IE", "en_MY", "en_NZ", "en_PH", "en_SG", "en_US", "es_AR", "es_CL", "es_ES", "es_MX", "fi_FI", "fil_PH", "fr_BE", "fr_CA", "fr_CH", "fr_FR", "it_CH", "it_IT", "ja_JP", "ms_MY", "nb_NO", "nl_BE", "nl_NL", "pl_PL", "pt_BR", "pt_PT", "sv_FI", "sv_SE", "tr_TR", "zh_HK", "zh_TW"].filter((e => new r.cH(e.split("_")[1]).isPublic)),
                l = e => {
                    let t = [];
                    return t = e.includes("_") ? e.split("_") : e.split("-"), 2 === t.length ? {
                        languageCode: t[0],
                        countryCode: t[1]
                    } : {
                        languageCode: t[0],
                        countryCode: t[2]
                    }
                }
        },
        299188: (e, t, n) => {
            const r = n(10350),
                {
                    stripTrailingSlash: o
                } = n(827934);
            e.exports = (e, t, n, l) => {
                const s = l || {},
                    a = r(o(e), t, n, s),
                    i = t.split("_")[1],
                    c = e => e.reduce(((e, t) => Array.isArray(t.eligibleCountries) && !t.eligibleCountries.includes(i) ? e : [...e, {
                        href: t.href,
                        text: t.text
                    }]), []);
                return {
                    DESKTOP: [{
                        title: n("About"),
                        links: c([a.ABOUT_YELP, a.CAREERS, a.PRESS, a.INVESTOR_RELATIONS, a.TRUST_AND_SAFETY, a.CONTENT_GUIDELINES, a.ACCESSIBILITY_STATEMENT, a.TERMS_OF_SERVICE, a.PRIVACY_POLICY, a.AD_CHOICES])
                    }, {
                        title: n("Discover"),
                        links: c([a.COST_GUIDES, a.COLLECTIONS, a.TALK, a.EVENTS, a.LOCAL_YELP, a.BLOG, a.SUPPORT, a.YELP_MOBILE, a.DEVELOPERS, a.RSS])
                    }, {
                        title: n("Yelp for Business"),
                        links: c([a.CLAIM_BIZ, a.ADVERTISE, a.RESTAURANT_OWNERS, a.TABLE_MANAGEMENT, a.SUCCESS_STORIES, a.BIZ_SUPPORT, a.BIZ_BLOG])
                    }],
                    MOBILE: [{
                        title: "",
                        links: c([a.ABOUT_YELP_MOBILE, a.BLOG_MOBILE, a.SUPPORT, a.TERMS_OF_SERVICE_MOBILE, a.PRIVACY_POLICY])
                    }]
                }
            }
        },
        875685: e => {
            e.exports = {
                getBizClaimURL: ({
                    bizClaimUtmCampaign: e
                }) => `https://biz.yelp.com?utm_source=footer&utm_medium=www&utm_content=claim_footer_link&utm_campaign=${e||"claim_business"}`,
                getBizSupportURL: ({
                    localeCode: e
                }) => ["en_US", "fr_FR", "de_DE", "en_GB", "en_CA", "fr_CA", "en_AU", "en_IE", "en_NZ", "en_SG", "de_AT", "pl_PL", "it_IT", "es_ES"].includes(e) ? `https://www.yelp-support.com/Yelp_for_Business?l=${e}` : `https://biz.yelp.com/support/common_questions?hl=${e}`
            }
        },
        10350: (e, t, n) => {
            const {
                getBizClaimURL: r,
                getBizSupportURL: o
            } = n(875685);
            e.exports = (e, t, n, l) => {
                const s = {
                    ABOUT_YELP: {
                        href: "/about",
                        text: n("About Yelp")
                    },
                    ABOUT_YELP_MOBILE: {
                        href: "/about",
                        text: n("About")
                    },
                    ACCESSIBILITY_STATEMENT: {
                        href: "https://www.yelp-support.com/article/Yelp-Accessibility-Statement",
                        text: n("Accessibility Statement"),
                        eligibleCountries: ["US"]
                    },
                    AD_CHOICES: {
                        href: "/static?p=tos#third-parties",
                        text: n("Ad Choices")
                    },
                    ADVERTISE: {
                        href: "/advertise",
                        text: n("Advertise on Yelp"),
                        eligibleCountries: ["AT", "CA", "CH", "DE", "ES", "FR", "GB", "IE", "IT", "US"]
                    },
                    BIZ_BLOG: {
                        href: "https://www.yelpblog.com/section/business",
                        text: n("Yelp Blog for Business"),
                        eligibleCountries: ["AT", "AU", "CA", "CH", "DE", "ES", "FR", "GB", "IE", "IT", "US"]
                    },
                    BIZ_SUPPORT: {
                        href: o,
                        text: n("Business Support")
                    },
                    BLOG: {
                        href: "https://officialblog.yelp.com/",
                        text: n("Yelp Blog")
                    },
                    BLOG_MOBILE: {
                        href: "https://officialblog.yelp.com/",
                        text: n("Blog")
                    },
                    CAREERS: {
                        href: "/careers/home",
                        text: n("Careers")
                    },
                    CLAIM_BIZ: {
                        href: r,
                        text: n("Claim your Business Page")
                    },
                    COLLECTIONS: {
                        href: "/collections",
                        text: n("Collections")
                    },
                    CONTENT_GUIDELINES: {
                        href: "/guidelines",
                        text: n("Content Guidelines")
                    },
                    COST_GUIDES: {
                        href: "/costs",
                        text: n("Yelp Project Cost Guides"),
                        eligibleCountries: ["US"]
                    },
                    DEVELOPERS: {
                        href: "/developers?country=US",
                        text: n("Developers")
                    },
                    EVENTS: {
                        href: "/events",
                        text: n("Events")
                    },
                    INVESTOR_RELATIONS: {
                        href: "http://yelp-ir.com/",
                        text: n("Investor Relations")
                    },
                    LOCAL_YELP: {
                        href: "/local_yelp",
                        text: n("The Local Yelp"),
                        eligibleCountries: ["US", "CA"]
                    },
                    PRESS: {
                        href: "/press",
                        text: n("Press")
                    },
                    PRIVACY_POLICY: {
                        href: "/tos/privacy_policy",
                        text: n("Privacy Policy")
                    },
                    RESTAURANT_OWNERS: {
                        href: "https://restaurants.yelp.com/",
                        text: n("Yelp for Restaurant Owners"),
                        eligibleCountries: ["CA", "US"]
                    },
                    RSS: {
                        href: "/rss",
                        text: n("RSS")
                    },
                    SUCCESS_STORIES: {
                        href: "https://biz.yelp.com/support/case_studies",
                        text: n("Business Success Stories"),
                        eligibleCountries: ["US", "CA", "DE", "IE", "FR", "GB", "ES"]
                    },
                    SUPPORT: {
                        href: "https://www.yelp-support.com/",
                        text: n("Support"),
                        eligibleCountries: ["US", "GB", "CA", "AU", "IE", "NZ", "SG", "DE", "AT", "FR", "PL", "IT", "ES"]
                    },
                    TABLE_MANAGEMENT: {
                        href: "https://restaurants.yelp.com/products/waitlist-table-management-software/",
                        text: n("Table Management"),
                        eligibleCountries: ["CA", "US"]
                    },
                    TALK: {
                        href: "/talk",
                        text: n("Talk")
                    },
                    TERMS_OF_SERVICE: {
                        href: "/static?p=tos",
                        text: n("Terms of Service")
                    },
                    TERMS_OF_SERVICE_MOBILE: {
                        href: "/static?p=tos",
                        text: n("Terms")
                    },
                    TRUST_AND_SAFETY: {
                        href: "https://trust.yelp.com",
                        text: n("Trust & Safety")
                    },
                    YELP_MOBILE: {
                        href: "/yelpmobile?source=footer",
                        text: n("Yelp Mobile")
                    }
                };
                return Object.entries(s).reduce(((n, [r, o]) => {
                    const s = o;
                    let a = s.href;
                    return "function" == typeof a ? a = a({
                        localeCode: t,
                        ...l
                    }) : a.startsWith("/") && (a = `${e}${a}`), { ...n,
                        [r]: { ...s,
                            href: a
                        }
                    }
                }), {})
            }
        },
        827934: e => {
            e.exports = {
                stripTrailingSlash: e => e ? e.replace(/\/$/, "") : ""
            }
        },
        563524: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => w
            });
            var r = n(87363),
                o = n.n(r),
                l = n(646242),
                s = n(897855),
                a = n.n(s),
                i = n(397222),
                c = n(928293),
                p = n.n(c),
                u = n(302013),
                d = n(959659),
                h = n(672415),
                g = n.n(h),
                f = n(992991),
                m = n(19266),
                _ = n(481040);
            const x = ({
                label: e,
                handleToggleClick: t,
                prefix: n,
                color: r,
                isOpen: o
            }) => (0, _.jsx)(d.W2, {
                display: "inline"
            }, n && (0, _.jsx)(d.W2, {
                display: "inline",
                marginRight: .5
            }, (0, _.jsx)(m.xv, {
                color: "black-regular",
                inline: !0
            }, n)), (0, _.jsx)(m.xv, {
                color: r,
                inline: !0
            }, (0, _.jsx)(m.rU, {
                handleClick: e => {
                    e.preventDefault(), t && t(e)
                },
                role: "button",
                color: "inherit",
                aria: {
                    "aria-expanded": o,
                    "aria-haspopup": "listbox",
                    role: "button"
                }
            }, (0, _.jsx)(d.W2, {
                display: "inline",
                marginRight: .5
            }, (0, _.jsx)(m.xv, {
                inline: !0,
                color: "inherit",
                weight: n ? "bold" : null
            }, e)), (0, _.jsx)(f.Z, {
                color: r
            }))));
            x.defaultProps = {
                color: "blue-dark",
                handleToggleClick: void 0,
                isOpen: !1,
                label: "",
                prefix: null
            };
            const b = x;

            function v() {
                return v = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, v.apply(this, arguments)
            }
            const y = ({
                children: e,
                color: t,
                forwardedRef: n,
                handleOptionSelected: r,
                handleToggleClick: l,
                id: s,
                isOpen: c,
                label: h,
                menuClassName: f,
                containerHeight: m,
                prefix: x,
                renderAbove: v,
                value: y
            }) => (0, _.jsx)(o().Fragment, null, (0, _.jsx)(b, {
                prefix: x,
                label: h,
                handleToggleClick: l,
                isOpen: c,
                color: t
            }), (0, _.jsx)(u.Z, { in: c,
                timeout: 200,
                classNames: p(),
                mountOnEnter: !0,
                unmountOnExit: !0
            }, (0, _.jsx)(d.W2, {
                className: g().outerMenu,
                dangerouslySetInlineStyle: v && m ? {
                    bottom: `${m}px`
                } : void 0
            }, (0, _.jsx)(i.ZP, {
                tagRef: n,
                className: a()(g().innerMenu, f)
            }, o().Children.map(e, (e => o().cloneElement(e, {
                selected: y,
                id: s,
                handleOptionSelected: r
            })))))));
            y.defaultProps = {
                containerHeight: 0,
                forwardedRef: void 0,
                handleOptionSelected: void 0,
                handleToggleClick: void 0,
                id: "",
                isOpen: !1,
                label: "",
                value: null
            };
            const C = o().forwardRef(((e, t) => (0, _.jsx)(y, v({}, e, {
                forwardedRef: t
            }))));
            var j = n(754231),
                O = n(606656);
            const S = e => {
                if (!o().useContext(l.default).v2_enabled) return (0, _.jsx)(O.Z, e);
                const {
                    initialOption: t,
                    children: n,
                    color: r,
                    prefix: s,
                    onChange: a,
                    menuClassName: i,
                    renderAbove: c,
                    noPadding: p
                } = e;
                return (0, _.jsx)(j.Z, {
                    initialOption: t,
                    onChange: a,
                    noPadding: p
                }, (0, _.jsx)(C, {
                    color: r,
                    menuClassName: i,
                    prefix: s,
                    renderAbove: c
                }, n))
            };
            S.defaultProps = {
                color: "blue-dark",
                menuClassName: null,
                onChange: null,
                prefix: null,
                renderAbove: !1,
                noPadding: !1
            };
            const w = S
        },
        606656: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => C
            });
            var r = n(87363),
                o = n.n(r),
                l = n(754231),
                s = n(387137),
                a = n(379082),
                i = n(983755),
                c = n(959659),
                p = n(19266),
                u = n(505167),
                d = n.n(u),
                h = n(481040);
            const g = ({
                label: e,
                handleToggleClick: t,
                prefix: n,
                isOpen: r
            }) => (0, h.jsx)(i.mN, {
                type: "link",
                className: d().toggle,
                onClick: t,
                aria: {
                    "aria-expanded": r,
                    "aria-haspopup": "listbox",
                    role: "button"
                }
            }, (0, h.jsx)(c.Qf, {
                display: "inline-block"
            }, n && (0, h.jsx)(c.Qf, {
                display: "inline",
                marginRight: "half"
            }, (0, h.jsx)(p.WX, {
                color: "inherit",
                inline: !0
            }, n)), (0, h.jsx)(p.WX, {
                color: "inherit",
                bold: Boolean(n),
                inline: !0
            }, e), (0, h.jsx)(a.Z, {
                color: "currentColor"
            })));
            g.defaultProps = {
                handleToggleClick: void 0,
                isOpen: !1,
                label: "",
                prefix: null
            };
            const f = g;
            var m = n(313753),
                _ = n.n(m);

            function x() {
                return x = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, x.apply(this, arguments)
            }
            const b = ({
                children: e,
                forwardedRef: t,
                handleOptionSelected: n,
                handleToggleClick: r,
                id: l,
                isOpen: a,
                label: i,
                prefix: c,
                value: p
            }) => (0, h.jsx)(o().Fragment, null, (0, h.jsx)(f, {
                prefix: c,
                label: i,
                handleToggleClick: r,
                isOpen: a
            }), a && (0, h.jsx)(s.Ul, {
                className: _().menu,
                role: "listbox",
                tagRef: t,
                "aria-activedescendant": p && l ? `${l}-${p}` : null
            }, o().Children.map(e, (e => o().cloneElement(e, {
                selected: p,
                id: l,
                handleOptionSelected: n
            })))));
            b.defaultProps = {
                containerHeight: 0,
                forwardedRef: void 0,
                handleOptionSelected: void 0,
                handleToggleClick: void 0,
                id: "",
                isOpen: !1,
                label: "",
                value: null
            };
            const v = o().forwardRef(((e, t) => (0, h.jsx)(b, x({}, e, {
                    forwardedRef: t
                })))),
                y = ({
                    initialOption: e,
                    children: t,
                    prefix: n,
                    onChange: r
                }) => (0, h.jsx)(l.Z, {
                    initialOption: e,
                    menuItemQuerySelector: "li a",
                    onChange: r
                }, (0, h.jsx)(v, {
                    prefix: n
                }, t));
            y.defaultProps = {
                onChange: null,
                prefix: null
            };
            const C = y
        },
        145622: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(87363),
                o = n.n(r),
                l = n(959659),
                s = n(767120),
                a = n.n(s),
                i = n(481040);
            const c = ({
                children: e,
                handleOptionSelected: t
            }) => (0, i.jsx)(l.Qf, {
                className: a()["opt-group"]
            }, o().Children.map(e, (e => o().cloneElement(e, {
                handleOptionSelected: t
            }))))
        },
        155979: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            n(87363);
            var r = n(959659),
                o = n(19266),
                l = n(387137),
                s = n(908842),
                a = n.n(s),
                i = n(481040);
            const c = ({
                label: e,
                value: t,
                handleOptionSelected: n,
                selected: s,
                id: c
            }) => (0, i.jsx)(l.Li, {
                className: a().option,
                role: "presentation"
            }, (0, i.jsx)(o.RI, {
                role: "option",
                handleClick: r => {
                    n && n(e, t), r.preventDefault()
                },
                aria: {
                    "aria-selected": s === t,
                    id: `${String(c)}-${t}`
                }
            }, (0, i.jsx)(r.Qf, {
                className: a()["option-inner"],
                paddingLeft: 2,
                paddingRight: 2,
                paddingTop: "half",
                paddingBottom: "half",
                overflow: "hidden",
                nowrap: !0,
                aria: {
                    role: "presentation"
                }
            }, e)));
            c.defaultProps = {
                handleOptionSelected: null,
                selected: "",
                id: ""
            };
            const p = c
        },
        146705: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => c
            });
            var r = n(87363),
                o = n.n(r),
                l = n(397222),
                s = n(646242),
                a = n(145622),
                i = n(481040);
            const c = e => {
                if (!(0, r.useContext)(s.default).v2_enabled) return (0, i.jsx)(a.Z, e);
                const {
                    children: t,
                    handleOptionSelected: n
                } = e;
                return (0, i.jsx)(l.xw, null, o().Children.map(t, (e => o().cloneElement(e, {
                    handleOptionSelected: n
                }))))
            }
        },
        631008: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => p
            });
            var r = n(87363),
                o = n(646242),
                l = n(397222),
                s = n(155979),
                a = n(481040);

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            const c = e => {
                if (!(0, r.useContext)(o.default).v2_enabled) return (0, a.jsx)(s.Z, e);
                const {
                    label: t,
                    value: n,
                    handleOptionSelected: c,
                    href: p,
                    subText: u,
                    icon: d,
                    selected: h
                } = e;
                return (0, a.jsx)(l.sN, i({
                    text: t,
                    subText: u,
                    icon: d,
                    isActive: h === n
                }, p ? {
                    type: "link",
                    href: p
                } : {
                    type: "button",
                    onClick: () => c && c(t, n)
                }))
            };
            c.displayName = "Option", c.defaultProps = {
                handleOptionSelected: null,
                subText: null,
                icon: null,
                selected: "",
                id: ""
            };
            const p = c
        },
        754231: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => f
            });
            var r = n(87363),
                o = n.n(r),
                l = n(939711),
                s = n(387137),
                a = n(681348),
                i = n(897855),
                c = n.n(i),
                p = n(130797),
                u = n.n(p),
                d = n(481040);

            function h(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            class g extends r.Component {
                constructor(...e) {
                    super(...e), h(this, "state", {
                        isOpen: !1,
                        label: "",
                        prevInitialOption: {
                            label: "",
                            value: ""
                        },
                        value: null
                    }), h(this, "menuRef", (0, r.createRef)()), h(this, "outerContainerRef", (0, r.createRef)()), h(this, "handleKeyPress", (e => {
                        " " === e.key && this.state.isOpen ? (this.setState({
                            isOpen: !1
                        }), e.preventDefault()) : "Escape" === e.key ? this.setState({
                            isOpen: !1
                        }) : "ArrowDown" === e.key ? (this.incrementFocusedItem(1), e.preventDefault()) : "ArrowUp" === e.key && (this.incrementFocusedItem(-1), e.preventDefault())
                    })), h(this, "handleTabKey", (e => {
                        if ("Tab" === e.key && this.menuRef.current) {
                            Array.prototype.slice.call(this.menuRef.current.querySelectorAll(this.props.menuItemQuerySelector)).map((e => e === document.activeElement)).indexOf(!0) >= 0 || document.activeElement === this.menuRef.current || this.setState({
                                isOpen: !1
                            })
                        }
                    })), h(this, "id", `dropdown-${(0,a.v4)()}`), h(this, "handleClickOutside", (() => {
                        this.state.isOpen && this.setState({
                            isOpen: !1
                        })
                    })), h(this, "handleOptionSelected", ((e, t) => {
                        this.setState({
                            label: e,
                            value: t,
                            isOpen: !1
                        })
                    })), h(this, "handleToggleClick", (() => {
                        this.setState((e => ({
                            isOpen: !e.isOpen
                        })))
                    }))
                }
                static getDerivedStateFromProps(e, t) {
                    const {
                        initialOption: n
                    } = e, r = t.prevInitialOption;
                    return r.value !== n.value || r.label !== n.label ? {
                        label: n.label,
                        value: n.value,
                        prevInitialOption: n
                    } : null
                }
                componentDidMount() {
                    document.addEventListener("keyup", this.handleTabKey)
                }
                componentDidUpdate(e, t) {
                    this.props.onChange && null != this.state.value && t.value !== this.state.value && this.props.onChange(this.state.value)
                }
                componentWillUnmount() {
                    document.removeEventListener("keyup", this.handleTabKey)
                }
                incrementFocusedItem(e) {
                    if (this.state.isOpen && this.menuRef.current) {
                        const t = this.menuRef.current.querySelectorAll(this.props.menuItemQuerySelector);
                        let n, r;
                        t.forEach(((e, t) => {
                            document.activeElement === e && (n = t)
                        })), r = void 0 === n ? e > 0 ? 0 : t.length - 1 : (n + t.length + e) % t.length, t[r].focus()
                    }
                }
                getOuterContainerHeight() {
                    return this.outerContainerRef.current ? this.outerContainerRef.current.offsetHeight : 0
                }
                render() {
                    return (0, d.jsx)(s.ZC, {
                        className: c()(u().dropdown, {
                            [u()["dropdown--padding"]]: !this.props.noPadding
                        }),
                        onKeyDown: this.handleKeyPress,
                        role: "presentation",
                        tagRef: this.outerContainerRef
                    }, (0, d.jsx)(l.Z, {
                        onClickAway: this.handleClickOutside
                    }, o().cloneElement(this.props.children, {
                        containerHeight: this.getOuterContainerHeight(),
                        handleOptionSelected: this.handleOptionSelected,
                        handleToggleClick: this.handleToggleClick,
                        id: this.id,
                        isOpen: this.state.isOpen,
                        label: this.state.label,
                        ref: this.menuRef,
                        value: this.state.value
                    })))
                }
            }
            h(g, "defaultProps", {
                menuItemQuerySelector: "button",
                onChange: null,
                noPadding: !1
            });
            const f = g
        },
        289495: (e, t, n) => {
            "use strict";
            n.d(t, {
                M7: () => te,
                jf: () => Ee,
                db: () => Ne,
                wZ: () => w,
                vp: () => ke,
                $_: () => G,
                X6: () => C
            });
            var r = n(87363),
                o = n.n(r),
                l = n(563524),
                s = n(631008),
                a = n(686835),
                i = n(959659),
                c = n(19266),
                p = n(263286),
                u = n(983755),
                d = n(387137),
                h = n(646242),
                g = n(985528),
                f = n.n(g),
                m = n(788737),
                _ = n.n(m),
                x = n(502554),
                b = n.n(x),
                v = n(481040);
            const y = ({
                localeCode: e,
                inline: t
            }) => {
                const n = (new Date).getFullYear();
                if ("en_US" === e) {
                    const e = (0, v.jsx)(d.Ei, {
                            src: _(),
                            alt: "Yelp logo",
                            className: b()["align-bottom"],
                            width: "38",
                            height: "19"
                        }),
                        r = (0, v.jsx)(d.Ei, {
                            src: f(),
                            alt: "Yelp burst",
                            className: b().burst,
                            width: "14",
                            height: "16"
                        });
                    return (0, v.jsx)(i.Qf, {
                        marginTop: 3,
                        display: t ? "inline" : null
                    }, (0, v.jsx)(c.WX, {
                        align: "center",
                        size: "small",
                        color: "mid",
                        inline: t
                    }, `Copyright © 2004–${n} Yelp Inc. Yelp,`, " ", e, ", ", " ", r, " ", "and related marks are registered trademarks of Yelp."))
                }
                return (0, v.jsx)(i.Qf, {
                    marginTop: 3,
                    display: t ? "inline" : null
                }, (0, v.jsx)(c.WX, {
                    align: "center",
                    size: "small",
                    color: "mid",
                    inline: t
                }, (0, p.ag)("Copyright © 2004–%{currentYear} Yelp", {
                    currentYear: n
                })))
            };
            y.defaultProps = {
                inline: !1
            };
            const C = y;
            var j = n(334526),
                O = n.n(j);
            const S = ({
                burstUrl: e,
                localeCode: t,
                logoUrl: n,
                inline: l
            }) => {
                if (!(0, r.useContext)(h.default).v2_enabled) return (0, v.jsx)(C, {
                    localeCode: t,
                    inline: l
                });
                const s = (new Date).getFullYear();
                let a = (0, p.ag)("Copyright © 2004–%{currentYear} Yelp", {
                    currentYear: s
                });
                if ("en_US" === t) {
                    const t = (0, v.jsx)(d.Ei, {
                            src: n || _(),
                            alt: "Yelp logo",
                            className: O()["align-bottom"],
                            width: "38",
                            height: "19"
                        }),
                        r = (0, v.jsx)(d.Ei, {
                            src: e || f(),
                            alt: "Yelp burst",
                            className: O().burst,
                            width: "14",
                            height: "16"
                        });
                    a = (0, v.jsx)(o().Fragment, null, `Copyright © 2004–${s} Yelp Inc. Yelp,`, " ", t, ", ", " ", r, " ", "and related marks are registered trademarks of Yelp.")
                }
                return (0, v.jsx)(i.W2, {
                    display: l ? "inline" : null
                }, (0, v.jsx)(c.xv, {
                    align: "left",
                    size: "small",
                    color: "black-extra-light",
                    inline: l
                }, a))
            };
            S.defaultProps = {
                burstUrl: null,
                inline: !1,
                logoUrl: null
            };
            const w = S;
            n(597988);
            var E = n(222734),
                T = n.n(E),
                L = n(341639),
                P = n.n(L),
                A = n(784695),
                k = n.n(A),
                R = n(882797),
                I = n.n(R);
            const N = new Date(2017, 12, 1),
                B = new Date(2018, 1, 31);
            var U = n(925721),
                D = n.n(U);
            const Y = ({
                localeCode: e
            }) => {
                const t = new Date,
                    {
                        imgSrc: n,
                        imgSrc2x: r
                    } = function(e, t) {
                        let n = T(),
                            r = P();
                        return function(e) {
                            return -1 !== ["AT", "BE", "CA", "CH", "CZ", "DE", "DK", "ES", "FI", "FR", "GB", "IE", "IT", "JP", "MX", "NL", "NO", "PL", "SE", "TR", "US"].indexOf(e.substring(3))
                        }(t) && N <= e && e <= B && (n = k(), r = I()), {
                            imgSrc: n,
                            imgSrc2x: r
                        }
                    }(t, e);
                return (0, v.jsx)(i.Qf, {
                    marginTop: 6,
                    marginBottom: 3,
                    textAlign: "center"
                }, (0, v.jsx)(d.Ei, {
                    src: n,
                    srcSet: `${r} 2x`,
                    className: D().cityscape,
                    alt: ""
                }))
            };
            var Z = n(225983),
                M = n.n(Z);
            const F = ({
                localeCode: e,
                attributionChildren: t,
                narrow: n,
                children: r
            }) => {
                const l = (0, v.jsx)(o().Fragment, null, r, (0, v.jsx)(Y, {
                    localeCode: e
                }), (0, v.jsx)(C, {
                    localeCode: e
                }), t);
                return (0, v.jsx)(i.Qf, {
                    borderTop: !0
                }, n ? (0, v.jsx)(i.Qf, {
                    className: M()["bg-color"],
                    paddingTop: 6,
                    paddingBottom: 6,
                    paddingLeft: 5,
                    paddingRight: 5
                }, l) : (0, v.jsx)(i.c8, {
                    className: M()["bg-color"],
                    verticalSpace: 6,
                    verticalSpaceSm: 3
                }, l))
            };
            F.defaultProps = {
                children: null,
                attributionChildren: null,
                narrow: !1
            };
            const z = F;
            var $ = n(170914),
                W = n.n($);
            const H = ({
                localeCode: e,
                attributionChildren: t,
                usePageContainer: n,
                verticalLegalese: l,
                children: s,
                tagRef: a,
                copyrightComponent: c
            }) => {
                const p = (0, r.useContext)(h.default),
                    u = c || (0, v.jsx)(w, {
                        localeCode: e
                    });
                if (!p.v2_enabled) return (0, v.jsx)(z, {
                    localeCode: e,
                    attributionChildren: t,
                    narrow: !n
                }, s);
                const d = l ? (0, v.jsx)(o().Fragment, null, s, (0, v.jsx)(i.W2, {
                    marginTop: 3,
                    "data-testid": "footer_vertical_legalese"
                }, u, t && (0, v.jsx)(i.W2, {
                    marginTop: 3
                }, t))) : (0, v.jsx)(o().Fragment, null, s, (0, v.jsx)(i.W2, {
                    marginTop: 6,
                    marginTopSm: 3
                }, u), t && (0, v.jsx)(i.W2, {
                    marginTop: 6,
                    marginTopSm: 3
                }, t));
                return (0, v.jsx)(i.W2, {
                    className: W().footer,
                    backgroundColor: "gray-extra-light",
                    tagRef: a
                }, n ? (0, v.jsx)(i.FE, null, d) : (0, v.jsx)(i.W2, {
                    paddingLeft: 5,
                    paddingRight: 5
                }, d))
            };
            H.defaultProps = {
                children: null,
                copyrightComponent: null,
                attributionChildren: null,
                usePageContainer: !0,
                verticalLegalese: !1,
                tagRef: null
            };
            const G = H;
            var K = n(539151),
                V = n.n(K),
                Q = n(835128),
                X = n.n(Q);
            var q = n(948638),
                J = n.n(q);
            const ee = ({
                    localeCode: e,
                    dropdownPrefix: t,
                    languageList: n,
                    defaultLanguage: r,
                    handleOptionChange: o,
                    handleOptionSelected: h,
                    inboundPhoneNumber: g,
                    bizUserId: f
                }) => {
                    const m = function(e = "en_US", t) {
                            return [{
                                id: "terms",
                                href: `https://www.yelp.com/static?p=tos&hl=${e}`,
                                text: (0, p.ag)("Terms of Service")
                            }, {
                                id: "privacy",
                                href: `https://www.yelp.com/tos/privacy_policy?hl=${e}`,
                                text: (0, p.ag)("Privacy Policy")
                            }, {
                                id: "ad-choices",
                                href: `https://www.yelp.com/static?p=tos#third-parties&hl=${e}`,
                                text: (0, p.ag)("Ad Choices")
                            }, {
                                id: "business-blog",
                                href: `https://www.yelpblog.com/section/business?hl=${e}`,
                                text: (0, p.ag)("Blog")
                            }, {
                                id: "guidelines",
                                href: `https://www.yelp.com/guidelines?hl=${e}`,
                                text: (0, p.ag)("Content Guidelines")
                            }, {
                                id: "webinars",
                                href: `https://www.yelpblog.com/category/business-owners/webinars?hl=${e}`,
                                text: (0, p.ag)("Webinars")
                            }, {
                                id: "business-support",
                                href: t ? `https://www.yelp-support.com/Yelp_for_Business?hl=${e}&bui=${t}` : `https://www.yelp-support.com/Yelp_for_Business?hl=${e}`,
                                text: (0, p.ag)("Support")
                            }]
                        }(e, f),
                        _ = function(e = "en_US") {
                            return {
                                id: "mobile-app",
                                href: `https://biz.yelp.com/support/mobile?hl=${e}`,
                                text: (0, p.ag)("Yelp for Business app")
                            }
                        }(e),
                        x = _.text,
                        b = _.href;
                    return (0, v.jsx)(G, {
                        localeCode: e
                    }, (0, v.jsx)(i.W2, {
                        borderBottom: !0
                    }, (0, v.jsx)(a.gg, {
                        layoutStack: "medium"
                    }, (0, v.jsx)(a.ey, null, (0, v.jsx)(a.gg, {
                        layoutWrap: "borderless",
                        gutter: 12
                    }, m.map((e => (0, v.jsx)(a.ey, {
                        key: e.id,
                        marginBottom: 1
                    }, (0, v.jsx)(c.rU, {
                        href: e.href
                    }, e.text))))), r && (0, v.jsx)(a.gg, {
                        verticalAlign: "middle",
                        layoutStack: "small"
                    }, (0, v.jsx)(a.ey, null, (0, v.jsx)(a.gg, {
                        verticalAlign: "middle"
                    }, (0, v.jsx)(a.ey, null, (0, v.jsx)(c.xv, null, t)), (0, v.jsx)(a.ey, {
                        fill: !0,
                        className: J()["biz-footer-language-dropdown-wrapper"]
                    }, (0, v.jsx)(l.Z, {
                        initialOption: r,
                        onChange: o
                    }, n.map((e => (0, v.jsx)(s.Z, {
                        handleOptionSelected: h,
                        key: e.value,
                        label: e.label,
                        value: e.value
                    }))))))), g ? (0, v.jsx)(a.ey, null, (0, v.jsx)(i.W2, {
                        displaySm: "none"
                    }, (0, v.jsx)(c.xv, null, (0, p.ag)("Need help?"), " ", g)), (0, v.jsx)(i.W2, {
                        display: "none",
                        displaySm: "block"
                    }, (0, v.jsx)(u.zx, {
                        tagType: "link",
                        href: `tel: ${g}`,
                        full: !0
                    }, (0, p.ag)("Need help?"), " ", g))) : null)), (0, v.jsx)(a.ey, {
                        className: J()["biz-footer-promo"]
                    }, (0, v.jsx)(a.gg, {
                        gutter: 12,
                        marginLeft: 4,
                        marginLeftMd: 0,
                        marginLeftSm: 0
                    }, (0, v.jsx)(a.ey, null, (0, v.jsx)(d.Ei, {
                        alt: "",
                        src: V(),
                        srcSet: `${X()} 2x`
                    })), (0, v.jsx)(a.ey, null, (0, v.jsx)(c.xv, null, (0, v.jsx)(i.W2, {
                        display: "inline",
                        dangerouslySetInnerHTML: {
                            __html: (0, p.ag)("<strong>Go mobile </strong> with the <a href=%{mobileAppLinkHref}> %{mobileAppLinkText} </a> for iOS and Android", {
                                mobileAppLinkHref: b,
                                mobileAppLinkText: x
                            })
                        }
                    }))))))))
                },
                te = ee;
            var ne = n(299188),
                re = n.n(ne),
                oe = n(647145),
                le = n(517521),
                se = n(401902),
                ae = n.n(se);
            const ie = e => {
                    switch (e) {
                        case "acxiom":
                            return (0, v.jsx)(c.xv, {
                                size: "small"
                            }, (0, v.jsx)(c.rU, {
                                size: "inherit",
                                rel: "nofollow",
                                target: "_blank",
                                href: "http://databyacxiom.com"
                            }, (0, p.ag)("Some Data By Acxiom")));
                        case "yellow_pages":
                            return (0, v.jsx)(c.xv, {
                                size: "small"
                            }, (0, p.ag)("Business Listings provided by Yellow Pages®"));
                        case "yellow_pages_tr":
                            return (0, v.jsx)(le.Z, {
                                className: ae().attributionText,
                                tag: "div"
                            }, (0, p.ag)('Some business data by <a target="_blank" rel="nofollow" href="http://www.yellow.com.tr" class="%{classes}">Yellow.com.tr</a>', {
                                classes: ""
                            }));
                        case "recaptcha":
                            return (0, v.jsx)(le.Z, {
                                className: ae().attributionText,
                                tag: "div"
                            }, (0, p.ag)("<a %{recaptcha_info}>This site is protected by reCAPTCHA -</a> <a %{google_pp}>See additional Privacy Policy</a> <a %{google_tos}>and Terms</a>", {
                                recaptcha_info: 'rel="nofollow" target="_blank" href="https://google.com/recaptcha/intro/v3.html"',
                                google_pp: 'rel="nofollow" target="_blank" href="https://policies.google.com/privacy"',
                                google_tos: 'rel="nofollow" target="_blank" href="https://policies.google.com/terms"'
                            }));
                        case "hcaptcha":
                            return (0, v.jsx)(le.Z, {
                                className: ae().attributionText,
                                tag: "div"
                            }, (0, p.ag)("<a %{hcaptcha_info}>This site is protected by hCaptcha - </a> <a %{hcaptcha_pp}>See additional Privacy Policy</a> <a %{hcaptcha_tos}>and Terms</a>", {
                                hcaptcha_info: 'rel="nofollow" target="_blank" href="https://hcaptcha.com/"',
                                hcaptcha_pp: 'rel="nofollow" target="_blank" href="https://hcaptcha.com/privacy"',
                                hcaptcha_tos: 'rel="nofollow" target="_blank" href="https://hcaptcha.com/terms"'
                            }));
                        default:
                            return null
                    }
                },
                ce = e => Array.isArray(e) ? e.map((e => (0, v.jsx)(i.W2, {
                    key: e
                }, ie(e)))) : ie(e);
            var pe = n(914164),
                ue = n.n(pe),
                de = n(146705),
                he = n(571117),
                ge = n.n(he),
                fe = n(137107);
            const me = {
                    cs: "cs_CZ",
                    da: "da_DK",
                    de: "de_DE",
                    en: "en_US",
                    es: "es_ES",
                    fi: "fi_FI",
                    fil: "fil_PH",
                    fr: "fr_FR",
                    it: "it_IT",
                    ja: "ja_JP",
                    ms: "ms_MY",
                    nb: "nb_NO",
                    nl: "nl_NL",
                    pl: "pl_PL",
                    pt: "pt_BR",
                    sv: "sv_SE",
                    tr: "tr_TR",
                    zh: "zh_HK"
                },
                _e = {
                    cs: (0, p.ag)("Czech"),
                    da: (0, p.ag)("Danish"),
                    de: (0, p.ag)("German"),
                    en: (0, p.ag)("English"),
                    es: (0, p.ag)("Spanish"),
                    fi: (0, p.ag)("Finnish"),
                    fil: (0, p.ag)("Filipino"),
                    fr: (0, p.ag)("French"),
                    it: (0, p.ag)("Italian"),
                    ja: (0, p.ag)("Japanese"),
                    ms: (0, p.ag)("Malay"),
                    nb: (0, p.ag)("Norwegian"),
                    nl: (0, p.ag)("Dutch"),
                    pl: (0, p.ag)("Polish"),
                    pt: (0, p.ag)("Portuguese"),
                    sv: (0, p.ag)("Swedish"),
                    tr: (0, p.ag)("Turkish"),
                    zh: (0, p.ag)("Chinese")
                },
                xe = {
                    cs: "čeština",
                    da: "dansk",
                    de: "Deutsch",
                    en: "English",
                    es: "español",
                    fi: "suomi",
                    fil: "Filipino",
                    fr: "français",
                    it: "italiano",
                    ja: "日本語",
                    ms: "Bahasa Malaysia",
                    nb: "norsk",
                    nl: "Nederlands",
                    pl: "polski",
                    pt: "português",
                    sv: "svenska",
                    tr: "Türkçe",
                    zh: "繁體中文"
                };
            class be extends Error {
                constructor(e) {
                    super(`Unsupported language code: ${e}`), this.name = this.constructor.name
                }
            }
            class ve {
                constructor(e) {
                    if (this.code = e.toLowerCase(), !(this.code in me)) throw new be(this.code)
                }
                get name() {
                    const e = _e[this.code];
                    return ge()(e, `Language code "${this.code}" does not have a corresponding name`), e
                }
                get nativeName() {
                    const e = xe[this.code];
                    return ge()(e, `Language code "${this.code}" does not have a corresponding native name`), e
                }
                get primaryLocale() {
                    const e = me[this.code];
                    return ge()(e, `Language code "${this.code}" does not have a corresponding primary locale`), e
                }
                get associatedLocales() {
                    return fe.Oy.filter((e => e.split("_")[0] === this.code))
                }
            }
            const ye = ["cs", "da", "de", "en", "es", "fi", "fil", "fr", "it", "ja", "ms", "nb", "nl", "pl", "pt", "sv", "tr", "zh"].map((e => new ve(e)));
            var Ce = n(227172),
                je = n(858825),
                Oe = n.n(je);

            function Se({
                label: e,
                dropdowns: t,
                leftPad: n
            }) {
                const r = !t.groups.every((e => e.length <= 1));
                return (0, v.jsx)(o().Fragment, null, (0, v.jsx)(c.xv, {
                    inline: !0,
                    size: "large",
                    weight: "bold"
                }, e), (0, v.jsx)(i.W2, {
                    paddingTop: n ? 0 : 1
                }, (0, v.jsx)(l.Z, {
                    initialOption: {
                        label: t.label,
                        value: ""
                    },
                    onChange: e => window.location.assign(e),
                    color: "black-extra-light",
                    renderAbove: !0,
                    menuClassName: Oe().menu,
                    noPadding: !n
                }, t.groups.map((e => function(e, t) {
                    if (ge()(e.length > 0, "Cannot render an empty group."), 1 === e.length && !t) {
                        const t = e[0];
                        return (0, v.jsx)(s.Z, {
                            value: t.href,
                            label: t.text,
                            key: t.href
                        })
                    }
                    return (0, v.jsx)(de.Z, {
                        key: e[0].href
                    }, e.map((e => (0, v.jsx)(s.Z, {
                        value: e.href,
                        label: e.text,
                        key: e.href
                    }))))
                }(e, r))))))
            }
            Se.defaultProps = {
                leftPad: !0
            };
            const we = ({
                localeCode: e,
                locationCookieCountryCode: t,
                copyrightComponent: n,
                currentUrl: l,
                baseUrl: s = "",
                attributionSource: u,
                responsive: g = !1,
                footerLinks: f,
                hideLanguageCountryDropdowns: m,
                urlOptions: _,
                renderAppPitchBanner: x
            }) => {
                const [{
                    DESKTOP: b,
                    MOBILE: y
                }, C] = o().useState(re()(s, e, p.ag, _)), [j, O] = (0, r.useState)("narrow"), S = (0, r.useRef)(null);
                (0, r.useEffect)((() => {
                    f && Object.keys(f).length && f.DESKTOP && f.MOBILE && C(f)
                }), [f]), (0, r.useEffect)((() => {
                    if (!g || !S.current || void 0 === window.ResizeObserver) return () => {};
                    const e = new ResizeObserver((e => {
                        if (e.length > 0) {
                            const t = e[0].contentRect.width;
                            let n = "normal";
                            n = t > 1e3 ? "normal" : t > 600 ? "narrow" : "extraNarrow", n !== j && O(n)
                        }
                    }));
                    return S.current && e.observe(S.current), () => e.disconnect()
                }), [g, S, j]);
                const w = function(e, t) {
                        const [n, r] = e.split("_");
                        let o = new Ce.cH(r);
                        if (t) try {
                            o = new Ce.cH((0, Ce.aJ)(t))
                        } catch (e) {
                            if (!(e instanceof Ce.oh)) throw e
                        }
                        const l = Ce.w8.sort(((e, t) => e.name.toString().localeCompare(t.name.toString(), n))),
                            s = {
                                label: o.name,
                                groups: [l.map((e => ({
                                    text: e.name,
                                    href: `/${e.cityAlias}`
                                })))]
                            };
                        return s
                    }(e, t),
                    E = function(e, t) {
                        const [n] = e.split("_"), r = ye.sort(((e, t) => e.nativeName.localeCompare(t.nativeName, n)));
                        return {
                            label: new ve(n).name,
                            groups: r.map((e => e.associatedLocales.sort(((e, t) => {
                                const r = new Ce.cH(e.split("_")[1]).nativeName(e),
                                    o = new Ce.cH(t.split("_")[1]).nativeName(t);
                                return r.localeCompare(o, n)
                            })).map((n => {
                                const r = new URL(t);
                                return r.searchParams.set("hl", n), {
                                    text: `${e.nativeName.charAt(0).toUpperCase()}${e.nativeName.slice(1)} (${new Ce.cH(n.split("_")[1]).nativeName(n)})`,
                                    href: r.toString()
                                }
                            }))))
                        }
                    }(e, l),
                    T = x(),
                    L = b.map(((e, t) => (0, v.jsx)(a.ey, {
                        display: "block",
                        displaySm: "none",
                        key: t
                    }, (0, v.jsx)(i.W2, {
                        marginBottom: 2
                    }, (0, v.jsx)(c.xv, {
                        inline: !0,
                        size: "large",
                        weight: "bold"
                    }, e.title)), (0, v.jsx)(oe.aV, {
                        useLegacyMargin: !0,
                        type: "block",
                        spacing: 1
                    }, e.links.map((e => (0, v.jsx)(c.rU, {
                        href: e.href,
                        key: e.href,
                        color: "black-extra-light",
                        weightOverride: "normal"
                    }, e.text)))), (!g || "normal" === j) && !m && T && t === b.length - 1 && (0, v.jsx)(o().Fragment, null, (0, v.jsx)(i.W2, {
                        marginBottom: 2,
                        marginTop: 2
                    }, (0, v.jsx)(Se, {
                        label: (0, p.ag)("Languages"),
                        dropdowns: E,
                        leftPad: !1
                    })), (0, v.jsx)(i.W2, null, (0, v.jsx)(Se, {
                        label: (0, p.ag)("Countries"),
                        dropdowns: w,
                        leftPad: !1
                    })))))),
                    P = (0, v.jsx)(i.W2, {
                        display: "none",
                        displaySm: "block",
                        paddingTop: m ? 0 : 4
                    }, y.map((e => (0, v.jsx)(d.Ul, {
                        key: e.links[0].href
                    }, e.links.map(((t, n) => {
                        const r = n === e.links.length - 1;
                        return (0, v.jsx)(d.Li, {
                            className: ue()["mobile-list-item"],
                            key: t.href
                        }, (0, v.jsx)(c.xv, {
                            bulletAfter: !r,
                            inline: !0
                        }, (0, v.jsx)(i.W2, {
                            display: "inline-block",
                            paddingRight: r ? 0 : .5
                        }, (0, v.jsx)(c.rU, {
                            href: t.href,
                            weightOverride: "normal"
                        }, t.text))))
                    }))))));
                return (0, v.jsx)(h.default.Provider, {
                    value: h.themes.v2
                }, (0, v.jsx)(G, {
                    copyrightComponent: n,
                    localeCode: e,
                    attributionChildren: ce(u),
                    usePageContainer: !g,
                    verticalLegalese: g && "extraNarrow" === j,
                    tagRef: S
                }, (0, v.jsx)(a.gg, {
                    layoutEqual: !0,
                    layoutStack: "small",
                    gutter: "auto"
                }, L, (!g || "normal" === j) && !m && (0, v.jsx)(a.ey, {
                    "data-testid": "consumer_footer_normal",
                    key: b.length
                }, T || (0, v.jsx)(o().Fragment, null, (0, v.jsx)(i.W2, {
                    marginBottom: 2
                }, (0, v.jsx)(Se, {
                    label: (0, p.ag)("Languages"),
                    dropdowns: E,
                    leftPad: !1
                })), (0, v.jsx)(i.W2, null, (0, v.jsx)(Se, {
                    label: (0, p.ag)("Countries"),
                    dropdowns: w,
                    leftPad: !1
                }))))), g && "normal" !== j && !m && (0, v.jsx)(a.gg, {
                    gutter: "auto",
                    layoutEqual: !0,
                    layoutStack: "small",
                    paddingTop: 1,
                    "data-testid": "consumer_footer_narrow"
                }, (0, v.jsx)(a.ey, null, (0, v.jsx)(Se, {
                    label: (0, p.ag)("Languages"),
                    dropdowns: E,
                    leftPad: !1
                })), (0, v.jsx)(a.ey, {
                    layoutStackGutterWidth: 2
                }, (0, v.jsx)(Se, {
                    label: (0, p.ag)("Countries"),
                    dropdowns: w,
                    leftPad: !1
                })), (0, v.jsx)(a.ey, null)), P))
            };
            we.defaultProps = {
                copyrightComponent: null,
                footerLinks: void 0,
                hideLanguageCountryDropdowns: !1,
                urlOptions: {},
                renderAppPitchBanner: () => null
            };
            const Ee = we;
            var Te = n(785645),
                Le = n(744635);
            const Pe = Te.ZP `
    query GetConsumerFooterCopyrightData {
        webConsumerFooter {
            copyright {
                burstLogo
                defaultLogo
            }
        }
    }
`,
                Ae = ({
                    localeCode: e,
                    inline: t
                }) => {
                    const {
                        error: n,
                        data: r
                    } = (0, Le.aM)(Pe);
                    return (0, v.jsx)(w, {
                        burstUrl: r && !n ? r.webConsumerFooter.copyright.burstLogo : null,
                        logoUrl: r && !n ? r.webConsumerFooter.copyright.defaultLogo : null,
                        localeCode: e,
                        inline: t
                    })
                };
            Ae.defaultProps = {
                inline: !1
            };
            const ke = Ae,
                Re = Te.ZP `
    query GetConsumerFooterData($baseUrl: String, $urlOptions: WebConsumerFooterUrlOptions) {
        webConsumerFooter(baseUrl: $baseUrl, urlOptions: $urlOptions) {
            desktopColumns {
                title
                links {
                    href
                    text
                }
            }
            mobileColumns {
                title
                links {
                    href
                    text
                }
            }
        }
    }
`,
                Ie = ({
                    localeCode: e,
                    locationCookieCountryCode: t,
                    currentUrl: n,
                    baseUrl: r = "",
                    attributionSource: o,
                    hideLanguageCountryDropdowns: l,
                    responsive: s,
                    urlOptions: a,
                    renderAppPitchBanner: i
                }) => {
                    const {
                        loading: c,
                        error: p,
                        data: u
                    } = (0, Le.aM)(Re, {
                        variables: {
                            baseUrl: r,
                            urlOptions: a
                        }
                    });
                    return (0, v.jsx)(Ee, {
                        attributionSource: o,
                        baseUrl: r,
                        copyrightComponent: (0, v.jsx)(ke, {
                            localeCode: e
                        }),
                        currentUrl: n,
                        footerLinks: !c && !p && u && u.webConsumerFooter ? {
                            DESKTOP: u.webConsumerFooter.desktopColumns,
                            MOBILE: u.webConsumerFooter.mobileColumns
                        } : void 0,
                        hideLanguageCountryDropdowns: l,
                        localeCode: e,
                        locationCookieCountryCode: t,
                        responsive: s,
                        renderAppPitchBanner: i
                    })
                };
            Ie.defaultProps = {
                hideLanguageCountryDropdowns: !1,
                responsive: !1,
                urlOptions: {},
                renderAppPitchBanner: () => null
            };
            const Ne = Ie
        },
        681348: (e, t, n) => {
            var r = n(122908),
                o = n(403741),
                l = o;
            l.v1 = r, l.v4 = o, e.exports = l
        },
        122908: (e, t, n) => {
            var r, o, l = n(453166),
                s = n(222624),
                a = 0,
                i = 0;
            e.exports = function(e, t, n) {
                var c = t && n || 0,
                    p = t || [],
                    u = (e = e || {}).node || r,
                    d = void 0 !== e.clockseq ? e.clockseq : o;
                if (null == u || null == d) {
                    var h = l();
                    null == u && (u = r = [1 | h[0], h[1], h[2], h[3], h[4], h[5]]), null == d && (d = o = 16383 & (h[6] << 8 | h[7]))
                }
                var g = void 0 !== e.msecs ? e.msecs : (new Date).getTime(),
                    f = void 0 !== e.nsecs ? e.nsecs : i + 1,
                    m = g - a + (f - i) / 1e4;
                if (m < 0 && void 0 === e.clockseq && (d = d + 1 & 16383), (m < 0 || g > a) && void 0 === e.nsecs && (f = 0), f >= 1e4) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
                a = g, i = f, o = d;
                var _ = (1e4 * (268435455 & (g += 122192928e5)) + f) % 4294967296;
                p[c++] = _ >>> 24 & 255, p[c++] = _ >>> 16 & 255, p[c++] = _ >>> 8 & 255, p[c++] = 255 & _;
                var x = g / 4294967296 * 1e4 & 268435455;
                p[c++] = x >>> 8 & 255, p[c++] = 255 & x, p[c++] = x >>> 24 & 15 | 16, p[c++] = x >>> 16 & 255, p[c++] = d >>> 8 | 128, p[c++] = 255 & d;
                for (var b = 0; b < 6; ++b) p[c + b] = u[b];
                return t || s(p)
            }
        },
        939711: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var r = n(87363),
                o = n.n(r);

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(e) {
                var t = e.as,
                    n = void 0 === t ? "div" : t,
                    a = e.onClickAway,
                    i = e.mouseEvent,
                    c = void 0 === i ? "click" : i,
                    p = e.touchEvent,
                    u = void 0 === p ? "touchend" : p,
                    d = function(e, t) {
                        if (null == e) return {};
                        var n, r, o = function(e, t) {
                            if (null == e) return {};
                            var n, r, o = {},
                                l = Object.keys(e);
                            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                            return o
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var l = Object.getOwnPropertySymbols(e);
                            for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }(e, ["as", "onClickAway", "mouseEvent", "touchEvent"]),
                    h = (0, r.useRef)(null);
                return (0, r.useEffect)((function() {
                    var e = function(e) {
                        h.current && h.current.contains(e.target) || a(e)
                    };
                    return document.addEventListener(c, e), document.addEventListener(u, e),
                        function() {
                            document.removeEventListener(c, e), document.removeEventListener(u, e)
                        }
                }), [c, a, u]), o().createElement(n, function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? s(Object(n), !0).forEach((function(t) {
                            l(e, t, n[t])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                        }))
                    }
                    return e
                }({
                    ref: h
                }, d))
            }
        },
        370478: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            n(87363);
            var r = n(692082),
                o = n(481040);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            const s = function(e) {
                return (0, o.jsx)(r.Z, l({
                    svg: '<svg width="14" height="14" class="icon_svg"><path d="M2 4.793a.999.999 0 011.707-.707L7 7.379l3.293-3.293A.999.999 0 1111.707 5.5L7 10.207 2.293 5.5A.997.997 0 012 4.793z"/></svg>',
                    name: "14x14_chevron_down"
                }, e))
            }
        },
        519657: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(87363),
                o = n(646242),
                l = n(796466),
                s = n(747085),
                a = n(481040);
            const i = function(e) {
                return r.useContext(o.default).v2_enabled ? (0, a.jsx)(s.Z, e) : (0, a.jsx)(l.Z, e)
            }
        },
        11712: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            n(87363);
            var r = n(692082),
                o = n(481040);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            const s = function(e) {
                return (0, o.jsx)(r.Z, l({
                    svg: '<svg width="16" height="16" class="icon_svg"><path d="M8 10.25a.746.746 0 01-.525-.215l-3.055-3a.75.75 0 011.05-1.07L8 8.449l2.53-2.484a.75.75 0 011.05 1.07l-3.055 3A.746.746 0 018 10.25z"/></svg>',
                    name: "16x16_chevron_down_v2",
                    v2: !0
                }, e))
            }
        },
        747085: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            n(87363);
            var r = n(692082),
                o = n(481040);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            const s = function(e) {
                return (0, o.jsx)(r.Z, l({
                    svg: '<svg width="24" height="24" class="icon_svg"><path d="M12 15.25a1 1 0 01-.7-.29l-4.58-4.5A1.011 1.011 0 018.12 9L12 12.85 15.88 9a1 1 0 111.4 1.42L12.7 15a1 1 0 01-.7.25z"/></svg>',
                    name: "24x24_chevron_down_v2",
                    v2: !0
                }, e))
            }
        },
        992991: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => i
            });
            var r = n(87363),
                o = n(646242),
                l = n(370478),
                s = n(11712),
                a = n(481040);
            const i = function(e) {
                return r.useContext(o.default).v2_enabled ? (0, a.jsx)(s.Z, e) : (0, a.jsx)(l.Z, e)
            }
        },
        379082: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => s
            });
            n(87363);
            var r = n(692082),
                o = n(481040);

            function l() {
                return l = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, l.apply(this, arguments)
            }
            const s = function(e) {
                return (0, o.jsx)(r.Z, l({
                    svg: '<svg width="14" height="14" class="icon_svg"><path d="M7 9L3.5 5h7L7 9z"/></svg>',
                    name: "14x14_triangle_down"
                }, e))
            }
        },
        985528: (e, t, n) => {
            e.exports = n.p + "burst_red.yji-cabcef1daea2c8a77f6a861e8d96fa06.svg"
        },
        788737: (e, t, n) => {
            e.exports = n.p + "default.yji-7ef71bf77a3395dd1b44f31e354a2dbd.svg"
        },
        539151: (e, t, n) => {
            e.exports = n.p + "biz_phone_small.yji-cc01cc02062183a4bef6e886eed85d2d.png"
        },
        835128: (e, t, n) => {
            e.exports = n.p + "biz_phone_small@2x.yji-22975be1f7e866314ab156b68052d6e7.png"
        },
        784695: (e, t, n) => {
            e.exports = n.p + "660x140_footer_winter_skyline.yji-5fde2a4b99cb2138be25635ba50ec60d.png"
        },
        882797: (e, t, n) => {
            e.exports = n.p + "660x140_footer_winter_skyline@2x.yji-f36eb1f4e838988b8872bb68d5239082.png"
        },
        222734: (e, t, n) => {
            e.exports = n.p + "footer_cityscape.yji-573fa19c843556eac5a998fc6d1f80f8.png"
        },
        341639: (e, t, n) => {
            e.exports = n.p + "footer_cityscape@2x.yji-ce4d102c522c4bc11b2f11fa1b41efac.png"
        }
    }
]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/module_yelp-frontend_shared-bddbdf093bd2fb0eedf4182563d14da369fa5540.yji-a1d14ba68d93d6c659df.js.map