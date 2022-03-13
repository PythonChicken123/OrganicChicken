var OneTrustStub = function(e) {
    "use strict";
    var t, o, n, i, a, r, s, l, c, p, u, d, m, h, f, g, b, A, y, v, C, L, I, S, T, D, R, w, B, _, P, E, G, U, O, k, F, V, N, x, H, M, j, z, K, q, W, J, Y, Q, X, Z, $, ee = new function() {
        this.optanonCookieName = "OptanonConsent", this.optanonHtmlGroupData = [], this.optanonHostData = [], this.genVendorsData = [], this.IABCookieValue = "", this.oneTrustIABCookieName = "eupubconsent", this.oneTrustIsIABCrossConsentEnableParam = "isIABGlobal", this.isStubReady = !0, this.geolocationCookiesParam = "geolocation", this.EUCOUNTRIES = ["BE", "BG", "CZ", "DK", "DE", "EE", "IE", "GR", "ES", "FR", "IT", "CY", "LV", "LT", "LU", "HU", "MT", "NL", "AT", "PL", "PT", "RO", "SI", "SK", "FI", "SE", "GB", "HR", "LI", "NO", "IS"], this.stubFileName = "otSDKStub", this.DATAFILEATTRIBUTE = "data-domain-script", this.bannerScriptName = "otBannerSdk.js", this.mobileOnlineURL = [], this.isMigratedURL = !1, this.migratedCCTID = "[[OldCCTID]]", this.migratedDomainId = "[[NewDomainId]]", this.userLocation = {
            country: "",
            state: ""
        }
    };
    (o = t = t || {})[o.Unknown = 0] = "Unknown", o[o.BannerCloseButton = 1] = "BannerCloseButton", o[o.ConfirmChoiceButton = 2] = "ConfirmChoiceButton", o[o.AcceptAll = 3] = "AcceptAll", o[o.RejectAll = 4] = "RejectAll", o[o.BannerSaveSettings = 5] = "BannerSaveSettings", o[o.ContinueWithoutAcceptingButton = 6] = "ContinueWithoutAcceptingButton", (i = n = n || {})[i.Purpose = 1] = "Purpose", i[i.SpecialFeature = 2] = "SpecialFeature", (r = a = a || {}).Legal = "legal", r.UserFriendly = "user_friendly", (l = s = s || {}).Top = "top", l.Bottom = "bottom", (p = c = c || {})[p.Banner = 0] = "Banner", p[p.PrefCenterHome = 1] = "PrefCenterHome", p[p.VendorList = 2] = "VendorList", p[p.CookieList = 3] = "CookieList", (d = u = u || {})[d.RightArrow = 39] = "RightArrow", d[d.LeftArrow = 37] = "LeftArrow", (h = m = m || {}).AfterTitle = "AfterTitle", h.AfterDescription = "AfterDescription", h.AfterDPD = "AfterDPD", (g = f = f || {}).PlusMinus = "Plusminus", g.Caret = "Caret", g.NoAccordion = "NoAccordion", (A = b = b || {}).Consent = "Consent", A.LI = "LI", A.AddtlConsent = "AddtlConsent", (v = y = y || {}).Iab1Pub = "eupubconsent", v.Iab2Pub = "eupubconsent-v2", v.Iab1Eu = "euconsent", v.Iab2Eu = "euconsent-v2", (L = C = C || {})[L.Disabled = 0] = "Disabled", L[L.Consent = 1] = "Consent", L[L.LegInt = 2] = "LegInt", (S = I = I || {})[S["Banner - Allow All"] = 1] = "Banner - Allow All", S[S["Banner - Reject All"] = 2] = "Banner - Reject All", S[S["Banner - Close"] = 3] = "Banner - Close", S[S["Preference Center - Allow All"] = 4] = "Preference Center - Allow All", S[S["Preference Center - Reject All"] = 5] = "Preference Center - Reject All", S[S["Preference Center - Confirm"] = 6] = "Preference Center - Confirm", (D = T = T || {}).Active = "1", D.InActive = "0", (w = R = R || {}).Host = "Host", w.GenVendor = "GenVen", (_ = B = B || {})[_.Host = 1] = "Host", _[_.GenVen = 2] = "GenVen", _[_.HostAndGenVen = 3] = "HostAndGenVen", (E = P = P || {})[E.minDays = 1] = "minDays", E[E.maxDays = 30] = "maxDays", E[E.maxYear = 31536e3] = "maxYear", E[E.maxSecToDays = 86400] = "maxSecToDays", (U = G = G || {})[U.RTL = 0] = "RTL", U[U.LTR = 1] = "LTR", (k = O = O || {})[k.GoogleVendor = 1] = "GoogleVendor", k[k.GeneralVendor = 2] = "GeneralVendor", (V = F = F || {})[V.Days = 1] = "Days", V[V.Weeks = 7] = "Weeks", V[V.Months = 30] = "Months", V[V.Years = 365] = "Years", (x = N = N || {}).Checkbox = "Checkbox", x.Toggle = "Toggle", (M = H = H || {}).SlideIn = "Slide_In", M.FadeIn = "Fade_In", M.RemoveAnimation = "Remove_Animation", (z = j = j || {}).Link = "Link", z.Icon = "Icon", (q = K = K || {}).consent = "consent", q.set = "set", (J = W = W || {}).update = "update", J.default = "default", J.ads_data_redaction = "ads_data_redaction", (Q = Y = Y || {}).analytics_storage = "analytics_storage", Q.ad_storage = "ad_storage", Q.functionality_storage = "functionality_storage", Q.personalization_storage = "personalization_storage", Q.security_storage = "security_storage", Q.region = "region", Q.wait_for_update = "wait_for_update", (Z = X = X || {}).granted = "granted", Z.denied = "denied";
    var te = "geo",
        oe = "otpreview",
        ne = (($ = {})[F.Days] = "PCenterVendorListLifespanDay", $[F.Weeks] = "LfSpnWk", $[F.Months] = "PCenterVendorListLifespanMonth", $[F.Years] = "LfSpnYr", ie.prototype.camelize = function(e) {
            return e.split("-").map(function(e, t) {
                return 0 === t ? e : e[0].toUpperCase() + e.slice(1)
            }).join("")
        }, ie.prototype.strToObj = function(e) {
            for (var t = {}, o = e.split(";").map(function(e) {
                    return e.trim()
                }), n = 0, i = void 0; n < o.length; ++n)
                if (/:/.test(o[n])) {
                    if (!(i = o[n].split(/:(.+)/))[1]) return null;
                    t[this.camelize(i[0])] = i[1].trim()
                }
            return t
        }, ie);

    function ie() {
        var e = this;
        this.implementThePolyfill = function() {
            var i = e,
                a = Element.prototype.setAttribute;
            return Element.prototype.setAttribute = function(e, t) {
                if ("style" !== e.toLowerCase() && a.apply(this, [e, t]), "style" === e.toLowerCase()) {
                    this.removeAttribute("style");
                    var o = i.strToObj(t);
                    for (var n in o) this.style[n] = o[n]
                }
            }, !0
        }
    }

    function ae(e, t, o) {
        void 0 === o && (o = !1);

        function n(e) {
            if (!e) return null;
            var t = e.trim();
            return ";" !== t.charAt(t.length - 1) && (t += ";"), t.trim()
        }
        var a = n(e.getAttribute("style")),
            r = n(t),
            i = "";
        i = o && a ? function() {
            for (var e = a.split(";").concat(r.split(";")).filter(function(e) {
                    return 0 !== e.length
                }), t = "", o = "", n = e.length - 1; 0 <= n; n--) {
                var i = e[n].substring(0, e[n].indexOf(":")).trim();
                t.indexOf(i) < 0 && (t += i, o += e[n] + ";")
            }
            return o
        }() : r, e.setAttribute("style", i)
    }
    var re = (se.prototype.initConsentSDK = function() {
        this.initCustomEventPolyfill(), this.ensureHtmlGroupDataInitialised(), this.setStubScriptElement(), this.setOTDataLayer(), this.updateGtmMacros(), this.getParam(), this.fetchBannerSDKDependency(), this.captureNonce()
    }, se.prototype.captureNonce = function() {
        this.nonce = ee.stubScriptElement.nonce || ee.stubScriptElement.getAttribute("nonce") || null
    }, se.prototype.fetchBannerSDKDependency = function() {
        this.setDomainDataFileURL(), this.crossOrigin = ee.stubScriptElement.getAttribute("crossorigin") || null, this.otFetch(ee.bannerDataParentURL, this.getLocation.bind(this))
    }, se.prototype.getLocation = function(e) {
        var t = e && e.TenantFeatures;
        if (t && t.CookieV2CSP && this.nonce && (this.setAttributePolyfillIsActive = !0, (new ne).implementThePolyfill()), !e.RuleSet[0].Type) return this.iabTypeAdded = !1, window.__cmp = this.executeCmpApi, window.__tcfapi = this.executeTcfApi, this.intializeIabStub(), this.addBannerSDKScript(e);
        var o = window;
        if (o.OneTrust && o.OneTrust.geolocationResponse) {
            var n = o.OneTrust.geolocationResponse;
            this.setGeoLocation(n.countryCode, n.stateCode), this.addBannerSDKScript(e)
        } else {
            var i = this.readCookieParam(ee.optanonCookieName, ee.geolocationCookiesParam);
            if (i || e.SkipGeolocation) {
                var a = i.split(";")[0],
                    r = i.split(";")[1];
                this.setGeoLocation(a, r), this.addBannerSDKScript(e)
            } else this.getGeoLocation(e)
        }
    }, se.prototype.getGeolocationURL = function(e) {
        e.TenantFeatures;
        var t = "" + ee.stubScriptElement.getAttribute("src").split(ee.stubFileName)[0] + e.Version;
        if (new RegExp("^file://", "i").test(t) && e.MobileSDK) {
            var o = "/" + e.GeolocationUrl.replace(/^(http|https):\/\//, "").split("/").slice(1).join("/") + ".js";
            return ee.storageBaseURL + o
        }
        return e.GeolocationUrl
    }, se.prototype.geoLocationJsonCallback = function(e, t) {
        t && this.setGeoLocation(t.country, t.state), this.addBannerSDKScript(e)
    }, se.prototype.getGeoLocation = function(e) {
        var t = this.getGeolocationURL(e);
        this.otFetch(t, this.geoLocationJsonCallback.bind(this, e), !0)
    }, se.prototype.setOTDataLayer = function() {
        var e = "data-dLayer-ignore",
            t = ee.stubScriptElement.hasAttribute(e),
            o = ee.stubScriptElement.getAttribute(e),
            n = t && "true" === o || t && "" === o;
        this.otDataLayer = {
            ignore: n,
            name: ee.stubScriptElement.getAttribute("data-dLayer-name") || "dataLayer"
        }
    }, se.prototype.setGeoLocation = function(e, t) {
        void 0 === t && (t = ""), ee.userLocation = {
            country: e,
            state: t
        }
    }, se.prototype.otFetch = function(e, t, o) {
        if (void 0 === o && (o = !1), new RegExp("^file://", "i").test(e)) this.otFetchOfflineFile(e, t);
        else {
            ee.mobileOnlineURL.push(e);
            var n = new XMLHttpRequest;
            n.onload = function() {
                t(JSON.parse(this.responseText))
            }, n.onerror = function() {
                t()
            }, n.open("GET", e), o && n.setRequestHeader("accept", "application/json"), n.send()
        }
    }, se.prototype.otFetchOfflineFile = function(e, t) {
        var o = (e = e.replace(".json", ".js")).split("/"),
            n = o[o.length - 1].split(".js")[0];
        this.jsonp(e, function() {
            t(window[n])
        })
    }, se.prototype.jsonp = function(e, t) {
        var o = document.createElement("script");
        o.setAttribute("src", e), this.nonce && o.setAttribute("nonce", this.nonce), o.async = !0, o.type = "text/javascript", this.crossOrigin && o.setAttribute("crossorigin", this.crossOrigin), document.getElementsByTagName("head")[0].appendChild(o), new RegExp("^file://", "i").test(e) || ee.mobileOnlineURL.push(e), t && (o.onload = o.onerror = function() {
            t()
        })
    }, se.prototype.getRegionSet = function(e) {
        var t, o, n, i = ee.userLocation,
            a = e.RuleSet.filter(function(e) {
                return !0 === e.Default
            });
        if (!i.country && !i.state) return a && 0 < a.length ? a[0] : null;
        for (var r = i.state.toLowerCase(), s = i.country.toLowerCase(), l = 0; l < e.RuleSet.length; l++)
            if (!0 === e.RuleSet[l].Global) n = e.RuleSet[l];
            else {
                var c = e.RuleSet[l].States;
                if (c[s] && 0 <= c[s].indexOf(r)) {
                    o = e.RuleSet[l];
                    break
                }
                0 <= e.RuleSet[l].Countries.indexOf(s) && (t = e.RuleSet[l])
            }
        return o || t || n
    }, se.prototype.ensureHtmlGroupDataInitialised = function() {
        this.initializeIABData(), this.initializeGroupData(), this.initializeHostData(), this.initializeGenVenData()
    }, se.prototype.initializeGroupData = function() {
        var e = this.readCookieParam(ee.optanonCookieName, "groups");
        e && (ee.optanonHtmlGroupData = this.deserialiseStringToArray(e))
    }, se.prototype.initializeHostData = function() {
        var e = this.readCookieParam(ee.optanonCookieName, "hosts");
        e && (ee.optanonHostData = this.deserialiseStringToArray(e))
    }, se.prototype.initializeGenVenData = function() {
        var e = this.readCookieParam(ee.optanonCookieName, "genVendors");
        e && (ee.genVendorsData = this.deserialiseStringToArray(e))
    }, se.prototype.initializeIABData = function() {
        this.validateIABGDPRApplied(), this.validateIABGlobalScope()
    }, se.prototype.validateIABGlobalScope = function() {
        var e = this.readCookieParam(ee.optanonCookieName, ee.oneTrustIsIABCrossConsentEnableParam);
        e ? "true" === e ? (ee.hasIABGlobalScope = !0, ee.isStubReady = !1) : (ee.hasIABGlobalScope = !1, ee.IABCookieValue = this.getCookie(ee.oneTrustIABCookieName)) : ee.isStubReady = !1
    }, se.prototype.validateIABGDPRApplied = function() {
        var e = this.readCookieParam(ee.optanonCookieName, ee.geolocationCookiesParam).split(";")[0];
        e ? this.isBoolean(e) ? ee.oneTrustIABgdprAppliesGlobally = "true" === e : ee.oneTrustIABgdprAppliesGlobally = 0 <= ee.EUCOUNTRIES.indexOf(e) : ee.isStubReady = !1
    }, se.prototype.isBoolean = function(e) {
        return "true" === e || "false" === e
    }, se.prototype.readCookieParam = function(e, t) {
        var o, n, i, a, r = this.getCookie(e);
        if (r) {
            for (n = {}, i = r.split("&"), o = 0; o < i.length; o += 1) a = i[o].split("="), n[decodeURIComponent(a[0])] = decodeURIComponent(a[1]).replace(/\+/g, " ");
            return t && n[t] ? n[t] : t && !n[t] ? "" : n
        }
        return ""
    }, se.prototype.getCookie = function(e) {
        if (this.isAmp) {
            var t = JSON.parse(window.localStorage.getItem(this.domainId)) || {};
            if (t) return t[e] || null
        }
        var o, n, i = e + "=",
            a = document.cookie.split(";");
        for (o = 0; o < a.length; o += 1) {
            for (n = a[o];
                " " == n.charAt(0);) n = n.substring(1, n.length);
            if (0 == n.indexOf(i)) return n.substring(i.length, n.length)
        }
        return null
    }, se.prototype.updateGtmMacros = function() {
        var e, t = [];
        for (e = 0; e < ee.optanonHtmlGroupData.length; e++) this.endsWith(ee.optanonHtmlGroupData[e], ":1") && t.push(ee.optanonHtmlGroupData[e].replace(":1", ""));
        for (e = 0; e < ee.optanonHostData.length; e++) this.endsWith(ee.optanonHostData[e], ":1") && t.push(ee.optanonHostData[e].replace(":1", ""));
        for (e = 0; e < ee.genVendorsData.length; e++) this.endsWith(ee.genVendorsData[e], ":1") && t.push(ee.genVendorsData[e].replace(":1", ""));
        var o = "," + this.serialiseArrayToString(t) + ",";
        window.OnetrustActiveGroups = o, window.OptanonActiveGroups = o;
        var n = window;
        this.otDataLayer.ignore || void 0 === n[this.otDataLayer.name] ? this.otDataLayer.ignore || (n[this.otDataLayer.name] = [{
            event: "OneTrustLoaded",
            OnetrustActiveGroups: o
        }, {
            event: "OptanonLoaded",
            OptanonActiveGroups: o
        }]) : n[this.otDataLayer.name].constructor === Array && (n[this.otDataLayer.name].push({
            OnetrustActiveGroups: o
        }), n[this.otDataLayer.name].push({
            OptanonActiveGroups: o
        }));
        var i, a = new CustomEvent("consent.onetrust", {
            detail: t
        });
        !this.otDataLayer.ignore && t.length && (n[this.otDataLayer.name].constructor === Array && n[this.otDataLayer.name].push({
            event: "OneTrustGroupsUpdated",
            OnetrustActiveGroups: o
        }), i = new CustomEvent("OneTrustGroupsUpdated", {
            detail: t
        })), setTimeout(function() {
            window.dispatchEvent(a), i && window.dispatchEvent(i)
        })
    }, se.prototype.deserialiseStringToArray = function(e) {
        return e ? e.split(",") : []
    }, se.prototype.endsWith = function(e, t) {
        return -1 !== e.indexOf(t, e.length - t.length)
    }, se.prototype.serialiseArrayToString = function(e) {
        return e.toString()
    }, se.prototype.setStubScriptElement = function() {
        ee.stubScriptElement = document.querySelector("script[src*='" + ee.stubFileName + "']"), ee.stubScriptElement && ee.stubScriptElement.hasAttribute(ee.DATAFILEATTRIBUTE) ? this.domainId = ee.stubScriptElement.getAttribute(ee.DATAFILEATTRIBUTE).trim() : ee.stubScriptElement || (ee.stubScriptElement = document.querySelector("script[src*='" + ee.migratedCCTID + "']"), ee.stubScriptElement && (ee.isMigratedURL = !0, this.domainId = ee.migratedDomainId.trim()))
    }, se.prototype.setDomainDataFileURL = function() {
        var e = ee.stubScriptElement.getAttribute("src"),
            t = -1 < e.indexOf("/consent");
        e && (ee.isMigratedURL ? ee.storageBaseURL = e.split("/consent/" + ee.migratedCCTID)[0] : ee.storageBaseURL = t ? e.split("/consent")[0] : e.split("/scripttemplates/" + ee.stubFileName)[0]), this.storageBaseURL = ee.storageBaseURL, this.isPreview && -1 === this.domainId.indexOf("test") ? this.domainId = this.domainId + "-test" : this.isPreview = !1, ee.bannerBaseDataURL = ee.storageBaseURL && ee.storageBaseURL + "/consent/" + this.domainId, ee.bannerDataParentURL = ee.bannerBaseDataURL + "/" + this.domainId + ".json"
    }, se.prototype.initCustomEventPolyfill = function() {
        if ("function" == typeof window.CustomEvent) return !1;

        function e(e, t) {
            t = t || {
                bubbles: !1,
                cancelable: !1,
                detail: void 0
            };
            var o = document.createEvent("CustomEvent");
            return o.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), o
        }
        e.prototype = window.Event.prototype, window.CustomEvent = e
    }, se.prototype.removeTcf = function() {
        delete window.__tcfapi;
        var e = document.querySelectorAll("iframe[name='__tcfapiLocator']")[0];
        e && e.parentElement.removeChild(e)
    }, se.prototype.getParamForIE = function() {
        return {
            get: function(e) {
                var t = new RegExp("[?&]" + e + "=([^&#]*)").exec(window.location.search);
                return null === t ? null : decodeURI(t[1]) || ""
            }
        }
    }, se.prototype.getParam = function() {
        window.document.documentMode || !window.URLSearchParams ? this.urlParams = this.getParamForIE() : this.urlParams = new URLSearchParams(window.location.search);
        var e = "true" === this.urlParams.get("otreset"),
            t = "true" === this.urlParams.get("otpreview");
        this.geoFromUrl = (this.urlParams.get("otgeo") || "").toLowerCase();
        var o = this.readCookieParam(oe, "expiry"),
            n = this.readCookieParam(oe, te);
        this.isReset = e || o && new Date(o) < new Date, this.isPreview = !this.isReset && (t || o && new Date(o) > new Date), this.setGeoParam(this.geoFromUrl || n)
    }, se.prototype.setGeoParam = function(e) {
        if (e) {
            var t = window;
            t.OneTrust || (t.OneTrust = {});
            var o = e.split(",");
            t.OneTrust.geolocationResponse = {
                countryCode: o[0],
                stateCode: o[1]
            }
        }
    }, se);

    function se() {
        var c = this;
        this.iabType = null, this.iabTypeAdded = !0, this.crossOrigin = null, this.isAmp = !1, this.domainId = "", this.isReset = !1, this.isPreview = !1, this.geoFromUrl = "", this.nonce = "", this.setAttributePolyfillIsActive = !1, this.storageBaseURL = "", this.addBannerSDKScript = function(e) {
            var t = null;
            c.iabTypeAdded && ("IAB" !== (t = c.getRegionSet(e)).Type && "IAB2" !== t.Type || (c.iabType = t.Type, c.intializeIabStub()), "IAB2" !== t.Type && c.removeTcf());
            var o = ee.stubScriptElement.cloneNode(!0),
                n = "";
            n = e.UseSDKRefactor ? (ee.isMigratedURL && (o.src = ee.storageBaseURL + "/scripttemplates/new/scripttemplates/" + ee.stubFileName + ".js"), ee.storageBaseURL + "/scripttemplates/new/scripttemplates/" + e.Version + "/" + ee.bannerScriptName) : "5.11.0" === e.Version ? (ee.isMigratedURL && (o.src = ee.storageBaseURL + "/scripttemplates/old/scripttemplates/" + ee.stubFileName + ".js"), ee.storageBaseURL + "/scripttemplates/old/scripttemplates/5.11.0/" + ee.bannerScriptName) : (ee.isMigratedURL && (o.src = ee.storageBaseURL + "/scripttemplates/" + ee.stubFileName + ".js"), ee.storageBaseURL + "/scripttemplates/" + e.Version + "/" + ee.bannerScriptName);
            ["charset", "data-language", "data-document-language", "data-domain-script", "crossorigin"].forEach(function(e) {
                ee.stubScriptElement.getAttribute(e) && o.setAttribute(e, ee.stubScriptElement.getAttribute(e))
            }), c.isAmp = !!ee.stubScriptElement.getAttribute("amp"), window.otStubData = {
                bannerBaseDataURL: ee.bannerBaseDataURL,
                crossOrigin: c.crossOrigin,
                domainData: e,
                domainId: c.domainId,
                geoFromUrl: c.geoFromUrl,
                isAmp: c.isAmp,
                isPreview: c.isPreview,
                isReset: c.isReset,
                mobileOnlineURL: ee.mobileOnlineURL,
                nonce: c.nonce,
                otDataLayer: c.otDataLayer,
                regionRule: t,
                setAttributePolyfillIsActive: c.setAttributePolyfillIsActive,
                storageBaseURL: c.storageBaseURL,
                stubElement: o,
                urlParams: c.urlParams,
                userLocation: ee.userLocation
            }, c.jsonp(n, null)
        }, this.intializeIabStub = function() {
            var e = window;
            c.iabTypeAdded ? ("IAB" === c.iabType ? void 0 === e.__cmp && (window.__cmp = c.executeCmpApi) : void 0 === e.__tcfapi && (window.__tcfapi = c.executeTcfApi), c.addIabFrame()) : c.addBackwardIabFrame(), e.receiveOTMessage = c.receiveIabMessage, (e.attachEvent || window.addEventListener)("message", e.receiveOTMessage, !1)
        }, this.addIabFrame = function() {
            var e = window,
                t = "IAB" === c.iabType ? "__cmpLocator" : "__tcfapiLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5))
        }, this.addBackwardIabFrame = function() {
            var e = window,
                t = "__cmpLocator";
            !e.frames[t] && (e.document.body ? c.addLocator(t, "CMP") : setTimeout(c.addIabFrame, 5));
            var o = "__tcfapiLocator";
            !e.frames[o] && (e.document.body ? c.addLocator(o, "TCF") : setTimeout(c.addIabFrame, 5))
        }, this.addLocator = function(e, t) {
            var o = window,
                n = o.document.createElement("iframe");
            ae(n, "display: none;", !0), n.name = e, n.setAttribute("title", t + " Locator"), o.document.body.appendChild(n)
        }, this.receiveIabMessage = function(n) {
            var i = "string" == typeof n.data,
                e = {};
            try {
                e = i ? JSON.parse(n.data) : n.data
            } catch (e) {}
            if (e.__cmpCall && "IAB" === c.iabType) {
                var a = e.__cmpCall.callId,
                    r = e.__cmpCall.command,
                    t = e.__cmpCall.parameter;
                c.executeCmpApi(r, t, function(e, t) {
                    var o = {
                        __cmpReturn: {
                            returnValue: e,
                            success: t,
                            callId: a,
                            command: r
                        }
                    };
                    n.source.postMessage(i ? JSON.stringify(o) : o, n.origin)
                })
            } else e.__cmpCall && "IAB2" === c.iabType && console.log("Expecting IAB TCF v2.0 vendor iFrame call; Received IAB TCF v1.1");
            if (e.__tcfapiCall && "IAB2" === c.iabType) {
                var s = e.__tcfapiCall.callId,
                    l = e.__tcfapiCall.command,
                    o = (t = e.__tcfapiCall.parameter, e.__tcfapiCall.version);
                c.executeTcfApi(l, t, function(e, t) {
                    var o = {
                        __tcfapiReturn: {
                            returnValue: e,
                            success: t,
                            callId: s,
                            command: l
                        }
                    };
                    n && n.source && n.source.postMessage && n.source.postMessage(i ? JSON.stringify(o) : o, "*")
                }, o)
            } else e.__tcfapiCall && "IAB" === c.iabType && console.log("Expecting IAB TCF v1.1 vendor iFrame call; Received IAB TCF v2.0")
        }, this.executeCmpApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            c.iabType = "IAB";
            var o = e[0],
                n = e[1],
                i = e[2];
            if ("function" == typeof i && o)
                if (ee.isStubReady && ee.IABCookieValue) switch (o) {
                    case "ping":
                        c.getPingRequest(i, !0);
                        break;
                    case "getConsentData":
                        c.getConsentDataRequest(i);
                        break;
                    default:
                        c.addToQueue(o, n, i)
                } else c.addToQueue(o, n, i)
        }, this.executeTcfApi = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            if (c.iabType = "IAB2", !e.length) return window.__tcfapi.a || [];
            var o = e[0],
                n = e[1],
                i = e[2],
                a = e[3];
            "function" == typeof i && o && ("ping" === o ? c.getPingRequest(i) : c.addToQueue(o, n, i, a))
        }, this.addToQueue = function(e, t, o, n) {
            var i = window,
                a = "IAB" === c.iabType ? "__cmp" : "__tcfapi";
            i[a].a = i[a].a || [], i[a].a.push([e, t, o, n])
        }, this.getPingRequest = function(e, t) {
            if (void 0 === t && (t = !1), e) {
                var o = {},
                    n = !1;
                "IAB" === c.iabType ? (o = {
                    gdprAppliesGlobally: ee.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: t
                }, n = !0) : "IAB2" === c.iabType && (o = {
                    gdprApplies: ee.oneTrustIABgdprAppliesGlobally,
                    cmpLoaded: !1,
                    cmpStatus: "stub",
                    displayStatus: "stub",
                    apiVersion: "2.0",
                    cmpVersion: void 0,
                    cmpId: void 0,
                    gvlVersion: void 0,
                    tcfPolicyVersion: void 0
                }, n = !0), e(o, n)
            }
        }, this.getConsentDataRequest = function(e) {
            e && ee.IABCookieValue && e({
                gdprApplies: ee.oneTrustIABgdprAppliesGlobally,
                hasGlobalScope: ee.hasIABGlobalScope,
                consentData: ee.IABCookieValue
            }, !0)
        }, this.initConsentSDK()
    }
    var le = new re;
    return e.OtSDKStub = re, e.otSdkStub = le, e
}({});