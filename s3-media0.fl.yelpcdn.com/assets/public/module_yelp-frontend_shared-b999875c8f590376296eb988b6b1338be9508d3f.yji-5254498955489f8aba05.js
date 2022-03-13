(globalThis.__LOADABLE_LOADED_CHUNKS__ = globalThis.__LOADABLE_LOADED_CHUNKS__ || []).push([
    [3794], {
        301386: e => {
            e.exports = {
                "autocomplete-container": "autocomplete-container__09f24__SjlZ9"
            }
        },
        468800: e => {
            e.exports = {
                "suggestion-list": "suggestion-list__09f24__TG714",
                "suggestion-list--validation-message": "suggestion-list--validation-message__09f24__Ly6MR",
                "suggestion-list-item": "suggestion-list-item__09f24__awJWR",
                "suggestion-list-item--active": "suggestion-list-item--active__09f24__FqqRf"
            }
        },
        320757: e => {
            e.exports = {
                "suggestion-list": "suggestion-list__09f24__UEIV7"
            }
        },
        698054: (e, t, s) => {
            "use strict";
            s.d(t, {
                cP: () => E,
                tM: () => O,
                ZP: () => M
            });
            var i = s(87363),
                n = s.n(i),
                o = s(959659),
                l = s(939711),
                r = s(640250),
                a = s.n(r),
                u = s(897855),
                g = s.n(u),
                h = s(387137),
                d = s(397222),
                c = s(646242),
                p = s(868063),
                S = s(19266),
                m = s(481040);
            const b = ({
                noResultsText: e
            }) => {
                const t = n().useContext(c.default);
                return (0, m.jsx)(o.W2, {
                    padding: t.v2_enabled ? 0 : 2
                }, (0, m.jsx)(S.xv, {
                    color: t.v2_enabled ? "black-extra-light" : "subtle"
                }, e))
            };
            var v = s(468800),
                x = s.n(v),
                y = s(320757),
                I = s.n(y);

            function f(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const L = ({
                children: e,
                containerClassName: t,
                maxHeight: s,
                onMouseLeave: i
            }) => (0, m.jsx)(o.W2, {
                className: t,
                onMouseLeave: i
            }, (0, m.jsx)(d.ZP, {
                dangerouslySetInlineStyle: {
                    maxHeight: s
                }
            }, e));
            class C extends i.PureComponent {
                constructor(...e) {
                    super(...e), f(this, "state", {
                        isTouchMoving: !1
                    }), f(this, "handleTouchEnd", ((e, t) => {
                        e.preventDefault(), this.state.isTouchMoving ? this.setState({
                            isTouchMoving: !1
                        }) : this.props.handleMouseDown(t)
                    })), f(this, "handleTouchMove", ((e, t) => {
                        e.preventDefault(), this.props.handleMouseMove(t), this.state.isTouchMoving || this.setState({
                            isTouchMoving: !0
                        })
                    })), f(this, "renderSuggestionListItems", (() => {
                        const e = this.context,
                            t = e.v2_enabled ? I() : x(),
                            s = e.v2_enabled ? d.sN : h.Li,
                            i = e => (0, m.jsx)(p.Z, {
                                suggestion: this.props.getSuggestionValue(e),
                                typedInputValue: this.props.typedInputValue
                            });
                        return this.props.suggestionList.map(((n, o) => {
                            const l = o === this.props.highlightedSuggestionIndex && this.props.getSuggestionSelectability(n),
                                r = {
                                    key: this.props.getSuggestionId(n),
                                    onMouseMove: () => this.props.handleMouseMove(o),
                                    onMouseDown: () => this.props.handleMouseDown(o),
                                    onTouchEnd: e => this.handleTouchEnd(e, o),
                                    onTouchMove: e => this.handleTouchMove(e, o)
                                };
                            return e.v2_enabled ? r.isHighlighted = l : r.className = g()(t["suggestion-list-item"], {
                                [t["suggestion-list-item--active"]]: l
                            }), (0, m.jsx)(s, r, this.props.renderSuggestion ? this.props.renderSuggestion(n, l, this.props.typedInputValue) : i(n))
                        }))
                    })), f(this, "renderNoResultsComponent", (() => {
                        const e = this.context;
                        let t = null;
                        const {
                            noResultsText: s,
                            suggestionList: i
                        } = this.props;
                        return i.length || ("string" == typeof s ? t = (0, m.jsx)(b, {
                            noResultsText: s
                        }) : n().isValidElement(s) && (t = s)), t && e.v2_enabled && (t = (0, m.jsx)(d.sN, {
                            key: "noResults",
                            isHighlighted: !1
                        }, t)), t
                    })), f(this, "renderBottomSectionComponent", (() => {
                        const e = this.context;
                        let t = null;
                        const {
                            bottomSection: s
                        } = this.props;
                        return n().isValidElement(s) && (t = s), t && e.v2_enabled && (t = (0, m.jsx)(d.xw, {
                            isBottomSection: !0
                        }, t)), t
                    }))
                }
                render() {
                    const {
                        handleMouseLeave: e,
                        hasValidationMessage: t,
                        loadingComponent: s,
                        maxHeight: i
                    } = this.props, n = this.context, l = n.v2_enabled ? I() : x(), r = g()(l["suggestion-list"], {
                        [l["suggestion-list--validation-message"]]: t
                    }), a = this.renderSuggestionListItems(), u = this.renderNoResultsComponent(), d = this.renderBottomSectionComponent();
                    return n.v2_enabled && s ? (0, m.jsx)(L, {
                        containerClassName: r,
                        maxHeight: i,
                        onMouseLeave: e
                    }, s, d) : a.length || u ? n.v2_enabled ? (0, m.jsx)(L, {
                        containerClassName: r,
                        maxHeight: i,
                        onMouseLeave: e
                    }, a, u, d) : (0, m.jsx)(o.W2, {
                        className: r
                    }, (0, m.jsx)(h.Ul, {
                        onMouseLeave: e
                    }, a), u, d) : null
                }
            }
            f(C, "defaultProps", {
                noResultsText: void 0,
                bottomSection: void 0,
                renderSuggestion: void 0,
                maxHeight: 430
            }), f(C, "contextType", c.default);
            const P = C;
            var T = s(301386),
                _ = s.n(T);

            function w(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            const O = {
                KEYDOWN: "KEYDOWN",
                MOUSEDOWN: "MOUSEDOWN"
            };
            class E extends Error {}
            class M extends i.Component {
                constructor(e) {
                    super(e), w(this, "debouncedGetSuggestions", a()((e => {
                        this.getSuggestions(e)
                    }), this.props.waitGetSuggestions)), w(this, "getSuggestions", (e => (this.setState({
                        showLoadingComponent: !0
                    }), this.props.getSuggestions(e).then((e => {
                        this.setState({
                            showLoadingComponent: !1
                        }), Array.isArray(e) ? this.setState({
                            showSuggestionList: !0,
                            suggestions: e
                        }) : (console.error(`Expected the getSuggestions prop to return an Array, instead received ${typeof e}. Returning an empty array to prevent any errors from occurring.`), this.setState({
                            showSuggestionList: !0,
                            suggestions: []
                        }))
                    })).catch((e => {
                        if (!(e instanceof E)) throw e
                    }))))), w(this, "getSuggestionValue", (e => this.props.getStringValueFromSuggestion ? this.props.getStringValueFromSuggestion(e) : "string" == typeof e ? e : (console.error(`Expected a string suggestion value, instead received ${typeof e}. Implement the getStringValueFromSuggestion prop to convert your suggestion to a string.`), ""))), w(this, "getSuggestionId", (e => this.props.getSuggestionId ? this.props.getSuggestionId(e) : this.getSuggestionValue(e))), w(this, "handleChange", (e => {
                        this.setState({
                            inputValue: e.currentTarget.value,
                            pendingSelection: null,
                            suggestListHighlightIndex: null,
                            typedInputValue: e.currentTarget.value
                        }), this.debouncedGetSuggestions(e.currentTarget.value), this.state.originalOnChange(e)
                    })), w(this, "handleFocus", (e => {
                        if ("function" == typeof this.props.children.props.onFocus && this.props.children.props.onFocus(e), this.props.shouldShowPreviousResultsOnFocus && e.currentTarget.value) this.setState((e => ({
                            pendingSelection: "number" == typeof e.suggestListHighlightIndex && e.suggestions.length ? e.suggestions[e.suggestListHighlightIndex] : null,
                            showSuggestionList: !0
                        })));
                        else {
                            const {
                                currentTarget: t
                            } = e;
                            t.select && t.select(), this.debouncedGetSuggestions("")
                        }
                    })), w(this, "handleKeydown", (e => {
                        "ArrowUp" === e.key ? (e.preventDefault(), this.selectPrevious()) : "ArrowDown" === e.key ? (e.preventDefault(), this.selectNext()) : this.props.shouldPersistDropdownOnBlur || "Escape" !== e.key && "Tab" !== e.key ? "Enter" === e.key && ((this.props.shouldDisableSubmitOnEnter || this.state.showSuggestionList) && e.preventDefault(), this.selectItem(void 0, O.KEYDOWN)) : this.hide()
                    })), w(this, "handleClickOutside", (() => {
                        this.props.shouldPersistDropdownOnBlur || this.hide()
                    })), w(this, "handleMouseDown", (e => {
                        this.selectItem(e, O.MOUSEDOWN)
                    })), w(this, "handleMouseLeave", (() => {
                        this.setState({
                            pendingSelection: null,
                            suggestListHighlightIndex: null
                        })
                    })), w(this, "handleMouseMove", (e => {
                        this.setState((t => {
                            const s = t.suggestions[e];
                            return this.props.getSuggestionSelectability(s) ? {
                                pendingSelection: s,
                                suggestListHighlightIndex: e
                            } : {
                                pendingSelection: null,
                                suggestListHighlightIndex: null
                            }
                        }))
                    })), w(this, "hide", (() => {
                        let e = {
                            pendingSelection: null,
                            showSuggestionList: !1
                        };
                        this.debouncedGetSuggestions.cancel(), this.props.shouldShowPreviousResultsOnFocus || (e = { ...e,
                            suggestListHighlightIndex: null
                        }), this.setState(e)
                    })), w(this, "selectPrevious", (() => {
                        if (!this.state.showSuggestionList) return void this.debouncedGetSuggestions(this.state.inputValue);
                        const e = this.selectableSuggestionIndices;
                        if (0 !== e.length)
                            if (null == this.state.suggestListHighlightIndex || null == this.state.suggestListHighlightIndex) {
                                const t = e[e.length - 1];
                                this.selectPendingItem(t)
                            } else {
                                const t = e.reverse().find((e => e < this.state.suggestListHighlightIndex));
                                null != t ? this.selectPendingItem(t) : this.selectPendingItem(e[0])
                            }
                    })), w(this, "selectNext", (() => {
                        if (!this.state.showSuggestionList) return void this.debouncedGetSuggestions(this.state.inputValue);
                        const e = this.selectableSuggestionIndices;
                        if (0 !== e.length)
                            if (null == this.state.suggestListHighlightIndex || null == this.state.suggestListHighlightIndex) this.selectPendingItem(e[0]);
                            else {
                                const t = e.find((e => e > this.state.suggestListHighlightIndex));
                                null != t ? this.selectPendingItem(t) : this.selectPendingItem(e[0])
                            }
                    })), w(this, "selectPendingItem", (e => {
                        this.setState((t => {
                            const s = t.suggestions[e];
                            return {
                                inputValue: this.getSuggestionValue(s),
                                pendingSelection: s,
                                suggestListHighlightIndex: e
                            }
                        }))
                    })), w(this, "selectItem", ((e, t) => {
                        let s = {},
                            i = this.state.pendingSelection;
                        if ("number" == typeof e && (i = this.state.suggestions[e]), i) {
                            if (!this.props.getSuggestionSelectability(i)) return;
                            s = { ...s,
                                inputValue: this.getSuggestionValue(i)
                            }, this.props.onSelect(i, t)
                        } else this.props.onSubmit(this.state.inputValue);
                        this.props.shouldClearValueOnSelect && (s = { ...s,
                            inputValue: "",
                            typedInputValue: ""
                        }), this.setState(s), this.props.shouldPersistDropdownOnSubmit && !i || this.hide()
                    })), w(this, "renderLoadingComponent", (() => {
                        const {
                            loadingComponent: e
                        } = this.props, {
                            showLoadingComponent: t
                        } = this.state;
                        return e && t ? e : null
                    }));
                    const t = this.props.children.props.onChange ? this.props.children.props.onChange : () => {};
                    this.state = {
                        inputValue: this.props.inputValue || this.props.children.props.value || "",
                        originalOnChange: t,
                        pendingSelection: null,
                        showSuggestionList: !1,
                        suggestListHighlightIndex: null,
                        showLoadingComponent: !1,
                        suggestions: [],
                        typedInputValue: ""
                    }
                }
                get selectableSuggestionIndices() {
                    return Array.from(Array(this.state.suggestions.length).keys()).filter((e => this.props.getSuggestionSelectability(this.state.suggestions[e])))
                }
                render() {
                    return (0, m.jsx)(o.W2, {
                        className: _()["autocomplete-container"]
                    }, (0, m.jsx)(l.Z, {
                        onClickAway: this.handleClickOutside
                    }, n().cloneElement(this.props.children, {
                        onFocus: this.handleFocus,
                        onKeyDown: this.handleKeydown,
                        onChange: this.handleChange,
                        value: this.state.inputValue,
                        autoComplete: "off"
                    }), this.state.showSuggestionList && (0, m.jsx)(P, {
                        getSuggestionValue: this.getSuggestionValue,
                        getSuggestionId: this.getSuggestionId,
                        handleMouseLeave: this.handleMouseLeave,
                        handleMouseMove: this.handleMouseMove,
                        handleMouseDown: this.handleMouseDown,
                        hasValidationMessage: Boolean(this.props.children.props.validationStateText) || !1,
                        highlightedSuggestionIndex: this.state.suggestListHighlightIndex,
                        noResultsText: this.props.noResultsText,
                        bottomSection: this.props.bottomSection,
                        loadingComponent: this.renderLoadingComponent(),
                        suggestionList: this.state.suggestions,
                        renderSuggestion: this.props.renderSuggestion,
                        getSuggestionSelectability: this.props.getSuggestionSelectability,
                        typedInputValue: this.state.typedInputValue,
                        maxHeight: this.props.suggestListMaxHeight
                    })))
                }
            }
            w(M, "defaultProps", {
                getStringValueFromSuggestion: null,
                getSuggestionId: null,
                noResultsText: void 0,
                bottomSection: void 0,
                renderSuggestion: null,
                getSuggestionSelectability: () => !0,
                shouldClearValueOnSelect: !1,
                shouldPersistDropdownOnBlur: !1,
                shouldPersistDropdownOnSubmit: !1,
                shouldShowPreviousResultsOnFocus: !1,
                shouldDisableSubmitOnEnter: !1,
                inputValue: null,
                onSubmit: () => {},
                waitGetSuggestions: 0,
                loadingComponent: null
            }), w(M, "getDerivedStateFromProps", ((e, t) => "string" == typeof e.inputValue && e.inputValue !== t.inputValue ? { ...t,
                inputValue: e.inputValue,
                typedInputValue: e.inputValue
            } : null))
        },
        868063: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => a
            });
            var i = s(87363),
                n = s.n(i),
                o = s(19266),
                l = s(646242),
                r = s(481040);
            const a = e => {
                const t = n().useContext(l.default).v2_enabled ? "normal" : "inherit",
                    s = e.suggestion.toLowerCase().indexOf(e.typedInputValue.toLowerCase());
                if (-1 === s) return (0, r.jsx)(o.xv, {
                    inline: !0,
                    color: t
                }, e.suggestion);
                const i = s + e.typedInputValue.length;
                return (0, r.jsx)(n().Fragment, null, s > 0 && (0, r.jsx)(o.xv, {
                    inline: !0,
                    color: t
                }, e.suggestion.substr(0, s)), (0, r.jsx)(o.xv, {
                    inline: !0,
                    bold: !0,
                    color: t
                }, e.suggestion.substr(s, e.typedInputValue.length)), i < e.suggestion.length && (0, r.jsx)(o.xv, {
                    inline: !0,
                    color: t
                }, e.suggestion.substr(i)))
            }
        },
        926959: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => l
            });
            var i = s(442287);

            function n(e, t, s) {
                return t in e ? Object.defineProperty(e, t, {
                    value: s,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = s, e
            }
            class o {
                constructor(e, t) {
                    n(this, "initPlacesAutocompleteService", (async e => {
                        this.autocompleteService = await o.fromAsyncLoadedLibrary(this.locale, e)
                    })), n(this, "getSuggestions", (e => new Promise((t => {
                        e.length > 0 && this.autocompleteService ? this.autocompleteService.getPlacePredictions({
                            input: e,
                            componentRestrictions: this.componentRestrictions,
                            types: ["address"]
                        }, ((e, s) => {
                            s === window.google.maps.places.PlacesServiceStatus.OK && t(e), t([])
                        })) : t([])
                    })))), n(this, "getValue", (e => e.description)), this.locale = e, this.componentRestrictions = t || {
                        country: e.split("_")[1]
                    }, this.autocompleteService = null
                }
                static async fromAsyncLoadedLibrary(e, t) {
                    return "object" == typeof window.google && "object" == typeof window.google.maps && "object" == typeof window.google.maps.places || await i.Z.asyncLoadGoogleLibrary(e, t), new window.google.maps.places.AutocompleteService
                }
            }
            const l = o
        },
        49263: (e, t, s) => {
            "use strict";
            s.d(t, {
                ZP: () => i
            });
            const i = s(698054).ZP
        },
        567931: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => i
            });
            const i = e => {
                switch (e) {
                    case "error":
                    case "warning":
                        return "orange-dark";
                    case "success":
                        return "green-regular";
                    default:
                        return "black-extra-light"
                }
            }
        },
        411514: (e, t, s) => {
            "use strict";
            s.d(t, {
                Z: () => b
            });
            var i = s(87363),
                n = s.n(i),
                o = s(897855),
                l = s.n(o),
                r = s(686835),
                a = s(959659),
                u = s(19266),
                g = s(646242),
                h = s(997477),
                d = s(460061),
                c = s(500564),
                p = s.n(c),
                S = s(481040);
            const m = ({
                children: e,
                helpText: t,
                validationStateType: s,
                validationStateText: o,
                noMargin: c,
                disabled: m
            }) => {
                const b = n().useContext(g.default),
                    {
                        isExpandedLayout: v
                    } = n().useContext(h.Z);
                b.v2_enabled;
                let x = null;
                if (o || t) {
                    const e = (0, d.Z)(s);
                    x = (0, S.jsx)(a.W2, {
                        className: l()({
                            [p()["additional-text"]]: !c,
                            [p()["additional-text--no-margin"]]: c,
                            [p()["additional-text--expanded"]]: v
                        })
                    }, (0, S.jsx)(u.xv, {
                        size: "small",
                        color: e
                    }, o || t))
                }
                return (0, S.jsx)(n().Fragment, null, (0, S.jsx)(r.gg, {
                    layoutEqual: !0,
                    gutter: 0,
                    className: l()(p()["inline-input-group"], {
                        [p()["inline-input-group--no-margin"]]: c,
                        [p()["is-disabled"]]: m,
                        [p()["validation-state"]]: s,
                        [p()[`validation-state--${String(s)}`]]: s,
                        [p()["expanded-field"]]: v
                    })
                }, i.Children.toArray(e).map(((e, t) => (0, S.jsx)(r.ey, {
                    className: p()["inline-input"],
                    "data-inline-input": "true",
                    key: `inline-input-${t.toString()}`
                }, (0, i.cloneElement)(e, {
                    helpText: "",
                    validationStateText: "",
                    noMargin: !0,
                    disabled: m
                }))))), x)
            };
            m.defaultProps = {
                helpText: "",
                validationStateType: null,
                validationStateText: "",
                noMargin: !1,
                disabled: !1
            };
            const b = m
        },
        329827: (e, t, s) => {
            "use strict";
            s.d(t, {
                Wn: () => g,
                dz: () => p
            });
            var i = s(87363),
                n = s(646242),
                o = s(959659),
                l = s(481040);
            const r = ({
                children: e,
                background: t,
                size: s,
                borderless: i,
                borderColor: n,
                borderRadius: r,
                borderStyle: a,
                dangerouslySetClassName: u
            }) => (0, l.jsx)(o.Qf, {
                bordered: !i,
                borderColor: n,
                borderRadius: r,
                backgroundColor: t,
                css: (0, l.css)("border-style:", a, ";"),
                className: u,
                padding: {
                    stacked: 0,
                    slim: 1,
                    normal: 2
                }[s]
            }, e);
            r.defaultProps = {
                background: "white",
                size: "normal",
                borderless: !1,
                borderColor: null,
                borderRadius: "regular",
                borderStyle: "solid",
                dangerouslySetClassName: null
            };
            const a = r,
                u = e => {
                    if (!i.useContext(n.default).v2_enabled) return (0, l.jsx)(a, e);
                    const {
                        children: t,
                        background: s,
                        borderless: r,
                        borderColor: u,
                        borderRadius: g,
                        borderStyle: h,
                        dangerouslySetClassName: d
                    } = e;
                    return (0, l.jsx)(o.W2, {
                        bordered: !r,
                        borderColor: u,
                        borderRadius: g,
                        backgroundColor: s,
                        css: (0, l.css)("border-style:", h, ";"),
                        className: d,
                        padding: 2
                    }, t)
                };
            u.defaultProps = {
                background: "white",
                size: "normal",
                borderless: !1,
                borderColor: null,
                borderRadius: "regular",
                borderStyle: "solid",
                dangerouslySetClassName: null
            };
            const g = u;
            var h = s(284015),
                d = s(437818);
            const c = ({
                    children: e
                }) => (0, l.jsx)(o.Qf, {
                    borderTop: !0,
                    css: (0, l.css)("padding:", (0, d.W0)(2.5, 1), "px ", (0, d.W0)(2, 1), "px ", (0, d.W0)(2, 1), "px;&:first-of-type{border-top:none;}")
                }, e),
                p = ({
                    children: e
                }) => i.useContext(n.default).v2_enabled ? (0, l.jsx)(o.W2, {
                    borderTop: !0,
                    css: (0, l.css)("padding:", (0, h.r$)(2), "px 0px;&:first-of-type{border-top:none;padding-top:0;}&:last-of-type{padding-bottom:0;}")
                }, e) : (0, l.jsx)(c, null, e)
        },
        329539: (e, t, s) => {
            "use strict";
            s.d(t, {
                bT: () => c,
                EM: () => p,
                cw: () => r,
                IO: () => l
            });
            var i = s(348166);
            const n = Math.PI / 180,
                o = {
                    enableHighAccuracy: !0,
                    maximumAge: 3e4,
                    timeout: 7e3
                },
                l = {
                    PERMISSION_DENIED: "1",
                    POSITION_UNAVAILABLE: "2",
                    TIMEOUT: "3",
                    POSITION_INACCURATE: "4"
                },
                r = {
                    1: "PERMISSION_DENIED",
                    2: "POSITION_UNAVAILABLE",
                    3: "TIMEOUT",
                    4: "POSITION_INACCURATE"
                },
                a = "granted",
                u = "prompt",
                g = "yelp_geolocation.geolocation::LAST_POSITION",
                h = "yelp_geolocation.geolocation::CAN_USE_LOCATION",
                d = {
                    1: "Yelp doesn't have permission to access your location.",
                    2: "Yelp is currently unable to retrieve your location.",
                    3: "Yelp could not retrieve your location in a timely fashion.",
                    4: "Yelp found your location, but it may be inaccurate.",
                    DEFAULT: "Something went wrong while retrieving your location."
                };
            class c {
                constructor(e) {
                    this.navigator = e, this.permissionState = u, this.lastPosition = null, this.checkPermissions()
                }
                getLastPosition() {
                    if (!this.lastPosition) {
                        const e = i.Xb.get(g);
                        this.lastPosition = e ? JSON.parse(e) : null
                    }
                    return this.lastPosition
                }
                setLastPosition(e) {
                    if (i.Xb.isEnabled()) {
                        const t = {
                            coords: {
                                accuracy: e.coords.accuracy,
                                altitude: e.coords.altitude,
                                altitudeAccuracy: e.coords.altitudeAccuracy,
                                heading: e.coords.heading,
                                latitude: e.coords.latitude,
                                longitude: e.coords.longitude,
                                speed: e.coords.speed
                            },
                            timestamp: e.timestamp
                        };
                        i.Xb.set(g, JSON.stringify(t))
                    }
                    this.lastPosition = e
                }
                checkPermissions() {
                    if ("permissions" in this.navigator) try {
                        this.navigator.permissions.query({
                            name: "geolocation"
                        }).then((e => {
                            this.permissionState = e.state, e.onchange = e => {
                                this.permissionState = e.state
                            }
                        }))
                    } catch (e) {
                        console.error(e)
                    }
                }
                simplifyCoords(e) {
                    return {
                        lat: e.latitude,
                        lng: e.longitude,
                        accuracy: e.accuracy
                    }
                }
                isAccurate(e) {
                    return e <= 600
                }
                getCurrentCoords(e, t, s) {
                    const i = { ...o,
                        ...s
                    };
                    if (this.haveCachedPosition(i.maximumAge)) {
                        const t = this.getLastPosition();
                        null != t && e(this.simplifyCoords(t.coords))
                    } else this.getCurrentCoordsDirect(e, t, i)
                }
                getErrorMessage(e) {
                    return null != e ? d[e] : d.DEFAULT
                }
                havePermission() {
                    return this.permissionState === a
                }
                haveCachedPosition(e) {
                    const t = this.getLastPosition();
                    return null != t && (new Date).getTime() - t.timestamp <= e
                }
                getCachedPosition(e) {
                    if (this.haveCachedPosition(e)) {
                        const e = this.getLastPosition();
                        if (null != e) return this.simplifyCoords(e.coords)
                    }
                    return null
                }
                coordDistance(e, t) {
                    const s = Math.sin,
                        i = Math.cos,
                        o = Math.min,
                        l = Math.acos,
                        r = (t.lng - e.lng) * n,
                        a = e.lat * n,
                        u = t.lat * n;
                    return 6371e3 * l(o(s(a) * s(u) + i(a) * i(u) * i(r), 1))
                }
                getCurrentCoordsDirect(e, t, s) {
                    let n = !1,
                        o = null;
                    if (s && s.timeout && s.timeout < 1 / 0) {
                        const e = 8e3 + s.timeout;
                        o = setTimeout((() => {
                            n = !0, null != t && t(l.TIMEOUT)
                        }), e)
                    }
                    this.navigator.geolocation.getCurrentPosition((t => {
                        i.Xb.isEnabled() && i.Xb.set(h, "true"), o && clearTimeout(o), this.setLastPosition(t), n || e(this.simplifyCoords(t.coords))
                    }), (e => {
                        o && clearTimeout(o);
                        const s = e.code.toString();
                        l.PERMISSION_DENIED === s && i.Xb.isEnabled() && i.Xb.set(h, "false"), !n && t && s in r && t(s)
                    }), s || void 0)
                }
            }
            class p {
                constructor(e, t, s) {
                    this.geolocation = e, this.options = { ...p.DEFAULT_POSITION_OPTIONS,
                        ...s
                    }, this.changeHandler = t, this.lastCoords = null, this.intervalId = null
                }
                enable() {
                    this.intervalId || (this.refresh(), this.intervalId = setInterval(this.refresh.bind(this), p.UPDATE_INTERVAL))
                }
                disable() {
                    this.intervalId && (clearInterval(this.intervalId), this.intervalId = null)
                }
                getLastCoords() {
                    return this.lastCoords
                }
                refresh() {
                    this.geolocation.getCurrentCoords(this.handlePositionUpdate.bind(this), null, this.options)
                }
                handlePositionUpdate(e) {
                    this.lastCoords = e, this.changeHandler(e)
                }
            }
            p.UPDATE_INTERVAL = 2e4, p.DEFAULT_POSITION_OPTIONS = {
                maximumAge: p.UPDATE_INTERVAL,
                timeout: 18e3,
                enableHighAccuracy: !1
            }
        }
    }
]);
//# sourceMappingURL=https://js-sourcemaps.yelpcorp.com/assets/public/module_yelp-frontend_shared-b999875c8f590376296eb988b6b1338be9508d3f.yji-5254498955489f8aba05.js.map